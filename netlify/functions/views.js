const respond = (views) => ({
  statusCode: 200,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({ views }),
});

exports.handler = async () => {
  // Just use the fallback count API for now
  // Netlify Blobs requires additional setup
  return fetchFallbackCount();
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
