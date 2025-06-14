import ast
import json

def find_secrets(code):
    tree = ast.parse(code)
    secrets = []

    for node in ast.walk(tree):
        if isinstance(node, ast.Assign):
            for target in node.targets:
                if isinstance(target, ast.Name):
                    # Use ast.Constant and check if it's a string
                    if isinstance(node.value, ast.Constant) and isinstance(node.value.value, str):
                        secrets.append({
                            "type": target.id,
                            "value": node.value.value
                        })

    return json.dumps(secrets, indent=2)

# Example usage
code = """
def handler():
    api_key = "sk-abcd1234efgh5678ijkl"
    private_key = "-----BEGIN PRIVATE KEY-----"
    mnemonic = "mouse banana grape orange tomato peach ..."
"""
print(find_secrets(code))
