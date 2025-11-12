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
    const res = await fetch("https://api.countapi.xyz/hit/lowlifefiles/visits");
    if (!res.ok) throw new Error(`countapi responded ${res.status}`);
    const data = await res.json();
    if (typeof data.value === "number") {
      return respond(data.value);
    }
  } catch (error) {
    console.error("CountAPI request failed:", error.message);
  }
  return respond(0);
};
