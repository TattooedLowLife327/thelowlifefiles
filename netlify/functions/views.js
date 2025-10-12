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
  let store;

  try {
    store = getStore("views");
  } catch (error) {
    // Missing blobs configuration (likely in local dev). Fall back to CountAPI.
    return fetchFallbackCount();
  }

  try {
    let count = await store.get("pageviews");
    count = count ? parseInt(count, 10) : 0;
    count += 1;
    await store.set("pageviews", count.toString());
    return respond(count);
  } catch (error) {
    // If blobs call fails for any reason, try fallback so UI still works.
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
    // swallow and return zero – frontend will pad it.
  }
  return respond(0);
}
