"""
Human Design API — Bodygraph Calculation Example
https://humandesignhub.app/human-design-api
"""
import requests

API_BASE = "https://api.humandesignhub.app/v1"
API_KEY = "your_api_key_here"  # Get your key at https://humandesignhub.app/developer

def calculate_bodygraph(birth_datetime: str, verbose: bool = False):
    """Calculate a Human Design bodygraph from birth data."""
    response = requests.post(
        f"{API_BASE}/bodygraph",
        headers={
            "Content-Type": "application/json",
            "X-API-Key": API_KEY,
        },
        json={
            "datetime": birth_datetime,
            "verbose": verbose,
        },
    )
    response.raise_for_status()
    return response.json()


def calculate_simple_bodygraph(birth_datetime: str):
    """Get a quick summary: Type, Strategy, Authority, Profile."""
    response = requests.post(
        f"{API_BASE}/simple-bodygraph",
        headers={
            "Content-Type": "application/json",
            "X-API-Key": API_KEY,
        },
        json={"datetime": birth_datetime},
    )
    response.raise_for_status()
    return response.json()


if __name__ == "__main__":
    # Example: January 1, 1990, 12:34 PM, UTC+9 (Seoul)
    birth = "1990-01-01T12:34+09:00"

    print("=== Simple Bodygraph ===")
    simple = calculate_simple_bodygraph(birth)
    print(f"Type: {simple.get('type')}")
    print(f"Strategy: {simple.get('strategy')}")
    print(f"Authority: {simple.get('authority')}")
    print(f"Profile: {simple.get('profile')}")

    print("\n=== Full Bodygraph ===")
    full = calculate_bodygraph(birth, verbose=False)
    print(f"Defined Centers: {full.get('defined_centers')}")
    print(f"Active Gates: {len(full.get('gates', []))} gates")
    print(f"Channels: {len(full.get('channels', []))} channels")
