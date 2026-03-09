# Human Design API Examples

[![Powered by Human Design Hub](https://img.shields.io/badge/Powered%20by-Human%20Design%20Hub-blue)](https://humandesignhub.app)
[![API Docs](https://img.shields.io/badge/API-Documentation-green)](https://humandesignhub.app/docs)

Code examples for the [Human Design Hub API](https://humandesignhub.app/human-design-api) — a Human Design API for developers. Calculate bodygraphs, transits, composites, and more using the Swiss Ephemeris engine.

## Quick Start

1. Get a free API key at [humandesignhub.app/developer](https://humandesignhub.app/developer)
2. Choose your language below
3. Replace `your_api_key_here` with your actual key

## API Base URL

```
https://api.humandesignhub.app/v1
```

## Authentication

Include your API key in the `X-API-Key` header:

```
X-API-Key: your_api_key_here
```

## Examples

### Python

```bash
cd python
pip install -r requirements.txt
python bodygraph.py
```

### JavaScript (Node.js)

```bash
cd javascript
npm install
node bodygraph.js
```

### cURL

```bash
cd curl
bash examples.sh
```

## Available Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/v1/simple-bodygraph` | POST | Quick bodygraph (Type, Strategy, Authority, Profile) |
| `/v1/bodygraph` | POST | Full bodygraph with Centers, Gates, Channels |
| `/v1/transit` | POST | Current transit chart |
| `/v1/transit-overlay` | POST | Personal transit overlay |
| `/v1/composite` | POST | Composite compatibility chart for two people |
| `/v1/circuits` | POST | Circuit analysis (Individual, Tribal, Collective) |
| `/v1/not-self-gates` | POST | Not-Self gate analysis |

## Free Tier

- 100 API credits per month
- No credit card required
- [Sign up here](https://humandesignhub.app/developer)

## Full Documentation

- [API Landing Page](https://humandesignhub.app/human-design-api)
- [API Documentation](https://humandesignhub.app/docs)
- [Developer Hub](https://humandesignhub.app/developer)

## License

MIT
