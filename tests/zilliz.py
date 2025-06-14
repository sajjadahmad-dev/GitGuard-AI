import os
from sentence_transformers import SentenceTransformer

from pymilvus import MilvusClient, FieldSchema, CollectionSchema, DataType
from pymilvus.milvus_client import IndexParams

milvus_uri = os.getenv("ZILLIZ_CLUSTER")
token = os.getenv("ZILLIZ_TOKEN")

client = MilvusClient(uri=milvus_uri, token=token)
print(f"Connected to DB: {milvus_uri} successfully")
print(f"Collections: {client.list_collections()}")

COLLECTION_NAME = "patterns"


def calculate_vector(pattern):
    transformer = SentenceTransformer("all-MiniLM-L6-v2")
    vector = transformer.encode([pattern])[0]
    return vector.tolist()


# Create a collection if it doesn't exist
def create_collection():
    if not client.has_collection(COLLECTION_NAME):
        fields = [
            FieldSchema(name="id", dtype=DataType.INT64, is_primary=True, auto_id=True),
            FieldSchema(name="pattern", dtype=DataType.VARCHAR, max_length=255),
            FieldSchema(name="description", dtype=DataType.VARCHAR, max_length=255),
            FieldSchema(name="vector", dtype=DataType.FLOAT_VECTOR, dim=384),
        ]

        schema = CollectionSchema(
            fields=fields,
            description="Secret patterns",
        )

        client.create_collection(
            collection_name=COLLECTION_NAME,
            schema=schema,
        )
        index_params = client.prepare_index_params()
        index_params.add_index(
            field_name="vector",
            index_type=IndexType.IVF_FLAT,
            params=IndexParams(nlist=16384),
        )
        index_params.add_index(
            field_name="pattern",
            index_type=IndexType.SCALAR,
            params={}
        )
        client.create_index(COLLECTION_NAME, index_params)
        print("Collection created successfully.")


# Insert a secret pattern
def insert_pattern(pattern, description):
    print(f"Inserting pattern: {pattern} - {description}...")
    # Calculate vector for the pattern
    vector = calculate_vector(pattern)
    print("Vector:", vector)
    # Insert the pattern into Milvus
    data = [{"pattern": pattern, "description": description, "vector": vector}]
    client.insert(COLLECTION_NAME, data)
    print("Inserted pattern into Milvus.")
    # Flush the collection to ensure the data is written to disk
    client.flush(COLLECTION_NAME)


# Query secret patterns
def query_patterns(keyword):
    print(f"Querying patterns containing '{keyword}'...")
    # Calculate vector for the keyword
    vector = calculate_vector(keyword)
    print("Vector:", vector)
    client.load_collection(COLLECTION_NAME)
    # Search for similar patterns in Milvus
    results = client.search(
        collection_name=COLLECTION_NAME,
        data=[vector],
        output_fields=["pattern", "description"],
        limit=10,
    )
    return results


if __name__ == "__main__":
    create_collection()
    insert_pattern(r"(?i)api[_-]?key[\s:=\"]*([a-z0-9\-_]{16,})", "API Key pattern")
    results = query_patterns("api")
    print("Query results:", results)
