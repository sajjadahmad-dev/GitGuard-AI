import os
import re
import json
import urllib.request
import urllib.error
from dotenv import load_dotenv

load_dotenv()

NOVITA_API_KEY = os.getenv("NOVITA_API_KEY")
NOVITA_API_URL = os.getenv(
    "NOVITA_API_URL", "https://api.novita.ai/v1/chat/completions"
)
NOVITA_MODEL_NAME = os.getenv("NOVITA_MODEL_NAME", "llama3.1")

SECRET_PATTERNS = [
    ("API Key", r"(?i)api[_-]?key[\s:=\"]*([a-z0-9\-_]{16,})"),
    ("Private Key", r"(?i)private[_-]?key[\s:=\"]*([a-z0-9\-_]{32,})"),
    ("Mnemonic", r"(?i)mnemonic[\s:=\"]*([a-z\s]{12,})"),
]


def detect_secrets(code: str):
    additional_patterns = [("Stripe API Key", r"sk_(?:test|live)_([a-zA-Z0-9]{24,})")]

    all_patterns = SECRET_PATTERNS + additional_patterns

    if NOVITA_API_KEY:
        payload = {
            "model": NOVITA_MODEL_NAME,
            "messages": [
                {
                    "role": "system",
                    "content": "You are a security expert that analyzes code for secrets and credentials. Return results in JSON format with a 'secrets' array containing objects with 'type' and 'value' properties.",
                },
                {
                    "role": "user",
                    "content": f"Analyze this code for secrets and credentials:\n\n{code}",
                },
            ],
            "max_tokens": 512,
            "temperature": 0.2,
            "response_format": {"type": "json_object"},
        }
        data = json.dumps(payload).encode("utf-8")
        headers = {
            "Authorization": f"Bearer {NOVITA_API_KEY}",
            "Content-Type": "application/json",
        }

        req = urllib.request.Request(
            NOVITA_API_URL, data=data, headers=headers, method="POST"
        )

        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                resp_data = resp.read().decode("utf-8")
                result = json.loads(resp_data)

                if "choices" in result and len(result["choices"]) > 0:
                    content = result["choices"][0]["message"]["content"]
                    json_block_match = re.search(
                        r"```(?:json)?\s*(.+?)\s*```", content, re.DOTALL
                    )
                    if json_block_match:
                        json_str = json_block_match.group(1).strip()
                        parsed_content = json.loads(json_str)
                        return parsed_content

                    try:
                        parsed_content = json.loads(content)
                        return parsed_content
                    except json.JSONDecodeError:
                        possible_json = re.search(r"(\{.*\})", content, re.DOTALL)
                        if possible_json:
                            json_str = possible_json.group(1).strip()
                            parsed_content = json.loads(json_str)
                            return parsed_content
                        raise

        except urllib.error.URLError as e:
            # Timeout or connection error fallback to regex
            return use_regex_patterns(code, all_patterns)
        except Exception:
            return use_regex_patterns(code, all_patterns)

        return result

    return use_regex_patterns(code, SECRET_PATTERNS)


def use_regex_patterns(code, patterns):
    findings = []
    for name, pattern in patterns:
        matches = list(re.finditer(pattern, code))
        for match in matches:
            value = match.group(1)
            preview = f"{value[:5]}...{value[-5:]}" if len(value) > 10 else value
            findings.append({"type": name, "value": value})
    return {"secrets": findings}
