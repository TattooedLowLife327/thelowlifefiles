import { getStore } from "@netlify/blobs";
import { createHash } from "node:crypto";

const respond = (views) => ({
  statusCode: 200,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({ views }),
});

const getClientIp = (headers) =>
  headers["x-nf-client-connection-ip"] ||
  headers["client-ip"] ||
  headers["x-forwarded-for"] ||
  headers["remote-addr"] ||
  null;

const hashIp = (ip) => {
  const hash = createHash("sha256");
  hash.update(ip);
  return hash.digest("hex");
};

export async function handler(event) {
  try {
    const store = await getStore({
      name: "view-counter",
      local: process.env.NETLIFY_DEV === "true",
      siteID: process.env.NETLIFY_BLOBS_SITE_ID,
      token: process.env.NETLIFY_BLOBS_TOKEN,
    });

    const currentRaw = await store.get("count");
    const current = Number.isFinite(Number(currentRaw))
      ? Number(currentRaw)
      : Number.parseInt(currentRaw ?? "0", 10) || 0;

    const todayKey = `ips-${new Date().toISOString().slice(0, 10)}`;
    const dailyRaw = await store.get(todayKey);
    const seen = new Set((dailyRaw ?? "").split("\n").filter(Boolean));

    const ip = event ? getClientIp(event.headers ?? {}) : null;
    const hashedIp = ip ? hashIp(ip) : null;
    let increment = 1;

    if (hashedIp) {
      if (seen.has(hashedIp)) {
        increment = 0;
      } else {
        seen.add(hashedIp);
        await store.set(todayKey, Array.from(seen).join("\n"));
        const logEntry = JSON.stringify({
          ip,
          hashed: hashedIp,
          ts: new Date().toISOString(),
          path: event?.path,
          userAgent: event?.headers?.["user-agent"],
        });
        await store.append("audit-log", `${logEntry}\n`);
      }
    }

    const next = current + increment;

    await store.set("count", String(next));
    return respond(next);
  } catch (error) {
    console.error("View counter failed:", error);
    return respond(0);
  }
}
