#!/usr/bin/env bash
# Human Design API — cURL Examples
# https://humandesignhub.app/human-design-api
#
# Usage: API_KEY=your_key_here bash examples.sh

API_BASE="https://api.humandesignhub.app/v1"
API_KEY="${API_KEY:-your_api_key_here}"

echo "=== Simple Bodygraph ==="
curl -s -X POST "$API_BASE/simple-bodygraph" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $API_KEY" \
  -d '{"datetime": "1990-01-01T12:34+09:00"}' | python3 -m json.tool

echo ""
echo "=== Full Bodygraph ==="
curl -s -X POST "$API_BASE/bodygraph" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $API_KEY" \
  -d '{"datetime": "1990-01-01T12:34+09:00", "verbose": false}' | python3 -m json.tool

echo ""
echo "=== Current Transit ==="
NOW=$(date -u +"%Y-%m-%dT%H:%M+00:00")
curl -s -X POST "$API_BASE/transit" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $API_KEY" \
  -d "{\"datetime\": \"$NOW\"}" | python3 -m json.tool

echo ""
echo "=== Composite Chart ==="
curl -s -X POST "$API_BASE/composite" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $API_KEY" \
  -d '{
    "a": {"datetime": "1990-01-01T12:34+09:00"},
    "b": {"datetime": "1995-06-15T14:20+09:00"},
    "verbose": true
  }' | python3 -m json.tool
