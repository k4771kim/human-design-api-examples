/**
 * Human Design API — Composite (Compatibility) Chart Example
 * https://humandesignhub.app/human-design-api
 */

const API_BASE = "https://api.humandesignhub.app/v1";
const API_KEY = "your_api_key_here";

async function calculateComposite(personADatetime, personBDatetime) {
  const response = await fetch(`${API_BASE}/composite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify({
      a: { datetime: personADatetime },
      b: { datetime: personBDatetime },
      verbose: true,
    }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

const personA = "1990-01-01T12:34+09:00";
const personB = "1995-06-15T14:20+09:00";

console.log("=== Composite Chart ===");
const result = await calculateComposite(personA, personB);
console.log(`Shared Channels: ${JSON.stringify(result.shared_channels)}`);
console.log(`Electromagnetic Connections: ${JSON.stringify(result.electromagnetics)}`);
console.log(`Compromise Channels: ${JSON.stringify(result.compromise_channels)}`);
