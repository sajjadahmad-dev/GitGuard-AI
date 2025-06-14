import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))
from gitguard.utils.regex_detector import detect_secrets
from fastmcp import FastMCP
import json

mcp = FastMCP("GitGuard")

@mcp.tool()
def detect(code: str) -> str:
    """Detects secrets in the given code."""
    results = detect_secrets(code)
    return json.dumps(results)
