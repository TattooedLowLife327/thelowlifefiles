const { getStore } = require("@netlify/blobs");

const respond = (views) => ({
  statusCode: 200,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({ views }),
});

exports.handler = async () => {
  try {
    const store = await getStore({
      name: "view-counter",
      local: process.env.NETLIFY_DEV === "true",
      consistency: "strong",
    });

    const rawCount = await store.get("count");
    const currentCount = Number.parseInt(rawCount ?? "0", 10) || 0;
    const nextCount = currentCount + 1;

    await store.set("count", String(nextCount));
    return respond(nextCount);
  } catch (error) {
    console.error("Primary blob counter failed:", error.message);
    return fetchFallbackCount();
  }
};

async function fetchFallbackCount() {
  try {
    const res = await fetch("https://api.countapi.xyz/hit/lowlifefiles/visits");
    if (!res.ok) throw new Error(`Fallback service returned ${res.status}`);
    const data = await res.json();
    if (typeof data.value === "number") {
      return respond(data.value);
    }
  } catch (error) {
    console.log("Fallback count failed:", error.message);
  }
  // Always return a valid response even if everything fails
  return respond(0);
}
