"""
Human Design API — Composite (Compatibility) Chart Example
https://humandesignhub.app/human-design-api
"""
import requests

API_BASE = "https://api.humandesignhub.app/v1"
API_KEY = "your_api_key_here"


def calculate_composite(person_a_datetime: str, person_b_datetime: str):
    """Calculate a composite chart showing compatibility between two people."""
    response = requests.post(
        f"{API_BASE}/composite",
        headers={
            "Content-Type": "application/json",
            "X-API-Key": API_KEY,
        },
        json={
            "a": {"datetime": person_a_datetime},
            "b": {"datetime": person_b_datetime},
            "verbose": True,
        },
    )
    response.raise_for_status()
    return response.json()


if __name__ == "__main__":
    person_a = "1990-01-01T12:34+09:00"
    person_b = "1995-06-15T14:20+09:00"

    print("=== Composite Chart ===")
    result = calculate_composite(person_a, person_b)
    print(f"Shared Channels: {result.get('shared_channels')}")
    print(f"Electromagnetic Connections: {result.get('electromagnetics')}")
    print(f"Compromise Channels: {result.get('compromise_channels')}")
