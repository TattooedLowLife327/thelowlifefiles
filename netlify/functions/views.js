const respond = (views) => ({
  statusCode: 200,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({ views }),
});

exports.handler = async () => {
  // Try to use Netlify Blobs if available
  try {
    const { getStore } = await import("@netlify/blobs");
    const store = getStore("views");

    let count = await store.get("pageviews");
    count = count ? parseInt(count, 10) : 0;
    count += 1;
    await store.set("pageviews", count.toString());
    return respond(count);
  } catch (error) {
    console.log("Blobs not available, using fallback:", error.message);
    // If blobs aren't configured or fail, use fallback
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
