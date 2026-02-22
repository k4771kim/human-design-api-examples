"""
Human Design API — Transit Calculation Example
https://humandesignhub.app/human-design-api
"""
import requests
from datetime import datetime, timezone

API_BASE = "https://api.humandesignhub.app/v1"
API_KEY = "your_api_key_here"


def get_current_transit():
    """Get the current global transit chart."""
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M+00:00")
    response = requests.post(
        f"{API_BASE}/transit",
        headers={
            "Content-Type": "application/json",
            "X-API-Key": API_KEY,
        },
        json={"datetime": now},
    )
    response.raise_for_status()
    return response.json()


def get_personal_transit(birth_datetime: str):
    """Get a personal transit overlay (birth chart + current transit)."""
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M+00:00")
    response = requests.post(
        f"{API_BASE}/transit-overlay",
        headers={
            "Content-Type": "application/json",
            "X-API-Key": API_KEY,
        },
        json={
            "birth_datetime": birth_datetime,
            "transit_datetime": now,
        },
    )
    response.raise_for_status()
    return response.json()


if __name__ == "__main__":
    print("=== Current Global Transit ===")
    transit = get_current_transit()
    print(f"Transit Gates: {len(transit.get('gates', []))} active")

    print("\n=== Personal Transit Overlay ===")
    birth = "1990-01-01T12:34+09:00"
    overlay = get_personal_transit(birth)
    print(f"Electromagnetics: {overlay.get('electromagnetics')}")
    print(f"Channel Completions: {overlay.get('channel_completions')}")
