import { getStore } from "@netlify/blobs";

const respond = (views) => ({
  statusCode: 200,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({ views }),
});

export async function handler() {
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
    const next = current + 1;

    await store.set("count", String(next));
    return respond(next);
  } catch (error) {
    console.error("View counter failed:", error);
    return respond(0);
  }
}
