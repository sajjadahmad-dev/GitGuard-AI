from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from detector import detect_secrets

app = FastAPI()

class CodeSnippet(BaseModel):
    code: str

@app.post("/detect-secrets")
def detect_secrets_endpoint(snippet: CodeSnippet):
    results = detect_secrets(snippet.code)
    return {"secrets": results}