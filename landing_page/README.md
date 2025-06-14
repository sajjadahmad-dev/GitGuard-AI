# Landing Page

This directory contains the code for the GitGuard AI Landing Page, which provides a web interface and backend API for secret detection in code snippets.

## Directory Structure

```
landing_page/
├── backend/   # FastAPI backend for secret detection
│   ├── __init__.py
│   ├── detector.py
│   └── main.py
└── frontend/  # Next.js frontend (auto-synced with v0.dev)
    ├── README.md
    ├── app/
    ├── components/
    ├── ...
```

### frontend/
- Built with [Next.js](https://nextjs.org/) and [v0.dev](https://v0.dev).
- Automatically synced with v0.dev deployments.
- See [frontend/README.md](frontend/README.md) for deployment, build, and usage details.

### backend/
- Python FastAPI server exposing a `/detect-secrets` endpoint.
- Accepts code snippets and returns detected secrets using both regex and LLM-based detection (via Novita API).
- Main files:
  - `main.py`: FastAPI app and endpoint definition.
  - `detector.py`: Secret detection logic (regex + Novita API integration).
- See [backend/README.md](backend/README.md) for backend-specific setup and usage.

## How It Works

1. The frontend provides a user interface for submitting code snippets.
2. The backend receives code via the `/detect-secrets` API endpoint and analyzes it for secrets.
3. Detection uses both local regex patterns and, if configured, the Novita LLM API.
4. Results are returned to the frontend for display to the user.

## Requirements

- Frontend: See [frontend/README.md](frontend/README.md) for requirements and setup.
- Backend: See [backend/README.md](backend/README.md) for requirements and setup.

## Setup & Usage

- For frontend setup and deployment, refer to [frontend/README.md](frontend/README.md).
- For backend setup and deployment, refer to [backend/README.md](backend/README.md).

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.