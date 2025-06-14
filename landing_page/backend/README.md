# Backend (FastAPI)

This directory contains the FastAPI backend for the GitGuard AI Landing Page. It exposes an API endpoint for detecting secrets in code snippets using both regex and LLM-based detection (via Novita API).

## Features
- `/detect-secrets` POST endpoint for secret detection
- Supports both regex-based and LLM-based (Novita API) detection

## Requirements
- Python 3.8+
- [Poetry](https://python-poetry.org/) for dependency management
- (Optional) Novita API key for LLM-based detection

## Setup
1. Install Poetry (if not already installed):
   ```bash
   curl -sSL https://install.python-poetry.org | python3 -
   # or follow instructions at https://python-poetry.org/docs/#installation
   ```
2. Install dependencies:
   ```bash
   poetry install
   ```
3. Set environment variables for Novita API in a `.env` file:
   ```env
   NOVITA_API_KEY=your_novita_api_key
   NOVITA_API_URL=https://api.novita.ai/v1/chat/completions
   NOVITA_MODEL_NAME=llama3.1
   ```

## Usage
1. Start the FastAPI server using Poetry:
   ```bash
   uvicorn main:app --reload
   ```
2. Send a POST request to `/detect-secrets` with a JSON body:
   ```json
   { "code": "your code snippet here" }
   ```
3. The response will include any detected secrets.

## File Structure
- `main.py`: FastAPI app and endpoint definition
- `detector.py`: Secret detection logic (regex + Novita API integration)
- `pyproject.toml`: Poetry project configuration
