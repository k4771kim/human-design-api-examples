/**
 * Human Design API — Bodygraph Calculation Example
 * https://humandesignhub.app/human-design-api
 */

const API_BASE = "https://api.humandesignhub.app/v1";
const API_KEY = "your_api_key_here"; // Get your key at https://humandesignhub.app/developer

async function calculateBodygraph(birthDatetime, verbose = false) {
  const response = await fetch(`${API_BASE}/bodygraph`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify({
      datetime: birthDatetime,
      verbose,
    }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function calculateSimpleBodygraph(birthDatetime) {
  const response = await fetch(`${API_BASE}/simple-bodygraph`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify({ datetime: birthDatetime }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Example: January 1, 1990, 12:34 PM, UTC+9 (Seoul)
const birth = "1990-01-01T12:34+09:00";

console.log("=== Simple Bodygraph ===");
const simple = await calculateSimpleBodygraph(birth);
console.log(`Type: ${simple.type}`);
console.log(`Strategy: ${simple.strategy}`);
console.log(`Authority: ${simple.authority}`);
console.log(`Profile: ${simple.profile}`);

console.log("\n=== Full Bodygraph ===");
const full = await calculateBodygraph(birth);
console.log(`Defined Centers: ${full.defined_centers}`);
console.log(`Active Gates: ${full.gates?.length ?? 0} gates`);
console.log(`Channels: ${full.channels?.length ?? 0} channels`);
