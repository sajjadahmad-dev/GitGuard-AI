# Trae Plugin for GitGuard-AI

This directory contains the Trae IDE plugin for GitGuard-AI, providing advanced secret detection and management capabilities directly within your development environment.

## Features
- Secret detection using regex and optional LLM-based methods
- Modular Command Platform (MCP) integration
- Utilities for custom detection logic
- Integration and unit tests for plugin and API

## Directory Structure

```text
trae-plugin/
├── dockerfile
├── gitguard/
│   ├── __init__.py
│   ├── mcp/
│   │   ├── README.md
│   │   ├── __init__.py
│   │   ├── create_mcp.py
│   │   └── secret_detection_script.py
│   └── utils/
│       ├── __init__.py
│       ├── llm_detect.py
│       └── regex_detector.py
├── pyproject.toml
├── requirements.txt
├── tests/
│   ├── novita-hf.py
│   ├── test.py
│   └── zilliz.py
└── uv.lock
```

- **gitguard/**: Core logic for secret detection and MCP integration. See [gitguard/mcp/README.md](gitguard/mcp/README.md) for details on the MCP module.
- **utils/**: Utility modules for regex and LLM-based detection.
- **tests/**: Integration and unit tests for plugin and API.

## Requirements
- Python 3.12+
- See [requirements.txt](requirements.txt) or [pyproject.toml](pyproject.toml) for dependencies.

## Setup
Install dependencies:
```bash
pip install -r requirements.txt
```
Or with poetry:
```bash
poetry install
```

## Usage
Refer to [gitguard/mcp/README.md](gitguard/mcp/README.md) for instructions on running the MCP server and integrating with TraeAI IDE.
