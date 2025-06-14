import os
import re
import requests
from pymilvus import (
    connections,
    Collection,
    utility,
    FieldSchema,
    CollectionSchema,
    DataType,
)
from huggingface_hub import InferenceClient
from langchain.embeddings import HuggingFaceEmbeddings

NOVITA_API_KEY = os.getenv("NOVITA_API_KEY")
NOVITA_API_URL = os.getenv("NOVITA_API_URL", "https://api.novitamin.ai/v1/generate")
NOVITA_MODEL_NAME = os.getenv("NOVITA_MODEL_NAME", "llama3")
ZILLIZ_CLOUD_URI = os.getenv(
    "ZILLIZ_CLOUD_URI", "https://zillizcloud-us-west1.vercel.app"
)

# Regex fallback
SECRET_PATTERNS = [
    ("API Key", r"(?i)api[_-]?key[\s:=\"]*([a-z0-9\-_]{16,})"),
    ("Private Key", r"(?i)private[_-]?key[\s:=\"]*([a-z0-9\-_]{32,})"),
    ("Mnemonic", r"(?i)mnemonic[\s:=\"]*([a-z\s]{12,})"),
]


def init_zilliz():
    connections.connect("default", uri=ZILLIZ_CLOUD_URI)
    if not utility.has_collection("secrets"):
        fields = [
            FieldSchema(name="id", dtype=DataType.INT64, is_primary=True, auto_id=True),
            FieldSchema(name="embedding", dtype=DataType.FLOAT_VECTOR, dim=768),
            FieldSchema(name="type", dtype=DataType.VARCHAR, max_length=100),
            FieldSchema(name="value", dtype=DataType.VARCHAR, max_length=1000),
        ]
        schema = CollectionSchema(fields, description="Detected Secrets")
        collection = Collection("secrets", schema)
        collection.create_index(
            "embedding",
            {"index_type": "IVF_FLAT", "metric_type": "L2", "params": {"nlist": 128}},
        )
        collection.load()
    else:
        collection = Collection("secrets")
        collection.load()
    return collection


def store_to_zilliz(collection, embedding, secret_type, secret_value):
    data = [[embedding], [secret_type], [secret_value]]
    collection.insert(data)


def call_novita_llm(code: str):
    prompt = f"Detect hardcoded secrets in this code. Return JSON list of secrets with type and value:\n\n{code}"
    payload = {
        "model": NOVITA_MODEL_NAME,
        "prompt": prompt,
        "max_tokens": 512,
    }
    headers = {"Authorization": f"Bearer {NOVITA_API_KEY}"}
    response = requests.post(NOVITA_API_URL, json=payload, headers=headers, timeout=15)
    response.raise_for_status()
    return response.json()


def fallback_regex(code: str):
    findings = []
    for name, pattern in SECRET_PATTERNS:
        for match in re.finditer(pattern, code):
            findings.append({"type": name, "value": match.group(1)})
    return findings


def detect_secrets(code: str):
    try:
        result = call_novita_llm(code)
        secrets = result.get("secrets", []) or result  # adapt if response is just list
    except Exception as e:
        print(f"[Novita LLM error]: {e}")
        secrets = fallback_regex(code)

    try:

        collection = init_zilliz()
        for secret in secrets:
            embedding = HuggingFaceEmbeddings(
                model_name="sentence-transformers/all-MiniLM-L6-v2"
            )

            store_to_zilliz(collection, embedding, secret["type"], secret["value"])
    except Exception as zilliz_err:
        print(f"[Zilliz storage error]: {zilliz_err}")

    return {"secrets": secrets}


if __name__ == "__main__":
    sample_code = """
    def handler():
        api_key = "sk-abcd1234efgh5678ijkl"
        private_key = "-----BEGIN PRIVATE KEY-----"
        mnemonic = "mouse banana grape orange tomato peach ..."
    """
    print(detect_secrets(sample_code))
