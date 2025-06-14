# GitGuard-AI

GitGuard-AI is a comprehensive toolkit for detecting and managing secrets in codebases, featuring IDE integration and a modern web landing page.

## Project Structure

```text
// Directory tree (3 levels)
├── docs/
├── landing_page/
│   ├── backend/
│   └── frontend/
├── trae-plugin/
│   ├── gitguard/
│   └── tests/
```

- **trae-plugin/**
  - **gitguard/**: Core logic for secret detection and MCP (Modular Command Platform) integration. [See trae-plugin/gitguard/README.md](trae-plugin/gitguard/README.md)
  - **tests/**: Integration and unit tests for API and plugin functionality. [See trae-plugin/tests/README.md](trae-plugin/tests/README.md)
- **landing_page/**
  - **frontend/**: Modern landing page for GitGuard-AI, built with [v0.dev](https://v0.dev). [See landing_page/frontend/README.md](landing_page/frontend/README.md) for deployment and customization details.
  - **backend/**: Backend logic for the landing page (API endpoints, detection logic).
- **docs/**: Project documentation and guides.

## Getting Started

See module-level README files for detailed setup and usage instructions.
For example, refer to [trae-plugin/README.md](trae-plugin/README.md) for the Trae IDE Plugin.

---

*This root README provides a high-level overview. Each major module includes its own README for detailed documentation.*

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.