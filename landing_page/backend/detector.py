import requests
import os
import re
from huggingface_hub import InferenceClient
from dotenv import load_dotenv

load_dotenv()

NOVITA_API_KEY = os.getenv("NOVITA_API_KEY")
NOVITA_API_URL = os.getenv(
    "NOVITA_API_URL", "https://api.novita.ai/v1/chat/completions"
)
NOVITA_MODEL_NAME = os.getenv("NOVITA_MODEL_NAME", "llama3.1")

# print(f"[ENV DEBUG] NOVITA_API_KEY is {'SET' if NOVITA_API_KEY else 'NOT SET'}")
# print(f"[ENV DEBUG] NOVITA_API_URL: {NOVITA_API_URL}")
# print(f"[ENV DEBUG] NOVITA_MODEL_NAME: {NOVITA_MODEL_NAME}")

# Fallback regex patterns (optional, for local detection)
SECRET_PATTERNS = [
    ("API Key", r"(?i)api[_-]?key[\s:=\"]*([a-z0-9\-_]{16,})"),
    ("Private Key", r"(?i)private[_-]?key[\s:=\"]*([a-z0-9\-_]{32,})"),
    ("Mnemonic", r"(?i)mnemonic[\s:=\"]*([a-z\s]{12,})"),
]


def detect_secrets(code: str):
    # print(f"\n[DEBUG] Starting secret detection on code snippet of length: #{len(code)}")

    # Add more regex patterns for better detection
    additional_patterns = [("Stripe API Key", r"sk_(?:test|live)_([a-zA-Z0-9]{24,})")]

    # Combine with existing patterns
    all_patterns = SECRET_PATTERNS + additional_patterns

    # Try API first if key is available
    if NOVITA_API_KEY:
        # print(f"[DEBUG] Using Novita API for secret detection with model: #{NOVITA_MODEL_NAME}")
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
        headers = {
            "Authorization": f"Bearer {NOVITA_API_KEY}",
            "Content-Type": "application/json",
        }
        try:
            # print(f"[DEBUG] Sending request to Novita API at: #{NOVITA_API_URL}")
            # print(f"[DEBUG] Sending request with timeout=30 seconds")
            response = requests.post(
                NOVITA_API_URL, json=payload, headers=headers, timeout=30
            )
            response.raise_for_status()
            result = response.json()
            # print("\n" + "*" * 50)
            # print(f"[DEBUG] NOVITA API RESPONSE RECEIVED: {result}")
            # print("*" * 50 + "\n")

            if "choices" in result and len(result["choices"]) > 0:
                try:
                    content = result["choices"][0]["message"]["content"]
                    # print(f"[DEBUG] Extracted content: {content}")

                    import json
                    import re

                    json_block_match = re.search(
                        r"```(?:json)?\s*(.+?)\s*```", content, re.DOTALL
                    )
                    if json_block_match:
                        json_str = json_block_match.group(1).strip()
                        print(f"[DEBUG] Extracted JSON from code block: {json_str}")
                        parsed_content = json.loads(json_str)
                        return parsed_content

                    try:
                        parsed_content = json.loads(content)
                        return parsed_content
                    except json.JSONDecodeError:
                        possible_json = re.search(r"(\{.*\})", content, re.DOTALL)
                        if possible_json:
                            json_str = possible_json.group(1).strip()
                            print(
                                f"[DEBUG] Attempting to parse possible JSON: {json_str}"
                            )
                            parsed_content = json.loads(json_str)
                            return parsed_content
                        raise

                except Exception as e:
                    # print(f"[DEBUG] Error parsing content: {str(e)}")
                    # print(f"[DEBUG] Falling back to regex pattern matching due to parsing error")
                    return use_regex_patterns(code, all_patterns)

            return result
        except requests.exceptions.Timeout:
            # print(f"[DEBUG] Novita API timed out. Falling back to regex pattern matching")
            return use_regex_patterns(code, all_patterns)
        except Exception as e:
            # print(f"[DEBUG] Error with Novita API: {str(e)}")
            # print(f"[DEBUG] Falling back to regex pattern matching due to API error")
            return use_regex_patterns(code, all_patterns)

    # print(f"[DEBUG] Using regex patterns for secret detection. Patterns #count: {len(SECRET_PATTERNS)}")
    return use_regex_patterns(code, SECRET_PATTERNS)


def use_regex_patterns(code, patterns):
    # print(f"[DEBUG] Using regex patterns for secret detection. Patterns #count: {len(patterns)}")
    findings = []
    for name, pattern in patterns:
        # print(f"[DEBUG] Checking for pattern type: {name}")
        matches = list(re.finditer(pattern, code))
        # print(f"[DEBUG] Found {len(matches)} matches for pattern: {name}")
        for match in matches:
            value = match.group(1)
            preview = f"{value[:5]}...{value[-5:]}" if len(value) > 10 else value
            # print(f"[DEBUG] Match found: {name} = {preview}")
            findings.append({"type": name, "value": value})
    # print(f"[DEBUG] Total findings: {len(findings)}")
    return {"secrets": findings}


if __name__ == "__main__":
    code = """
    def main():
        api_key = "sk-sfiewjsdifjsdlk"
        private_key = "your_private_key_here"
        mnemonic = "your_mnemonic_here"
    """
    results = detect_secrets(code)
    print(results)
