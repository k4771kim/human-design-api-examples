/**
 * Human Design API — Transit Calculation Example
 * https://humandesignhub.app/human-design-api
 */

const API_BASE = "https://api.humandesignhub.app/v1";
const API_KEY = "your_api_key_here";

async function getCurrentTransit() {
  const now = new Date().toISOString().slice(0, 16) + "+00:00";
  const response = await fetch(`${API_BASE}/transit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify({ datetime: now }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

async function getPersonalTransit(birthDatetime) {
  const now = new Date().toISOString().slice(0, 16) + "+00:00";
  const response = await fetch(`${API_BASE}/transit-overlay`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify({
      birth_datetime: birthDatetime,
      transit_datetime: now,
    }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

console.log("=== Current Global Transit ===");
const transit = await getCurrentTransit();
console.log(`Transit Gates: ${transit.gates?.length ?? 0} active`);

console.log("\n=== Personal Transit Overlay ===");
const birth = "1990-01-01T12:34+09:00";
const overlay = await getPersonalTransit(birth);
console.log(`Electromagnetics: ${JSON.stringify(overlay.electromagnetics)}`);
console.log(`Channel Completions: ${JSON.stringify(overlay.channel_completions)}`);
