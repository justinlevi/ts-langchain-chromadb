import { ChromaClient, DefaultEmbeddingFunction } from "chromadb";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Chroma } from "@langchain/community/vectorstores/chroma";

const url = "http://localhost:8000";
const query = "What is this about?";

// THIS WORKS
async function fetchDocumentsWithLangchain() {

  try {
    const vectorStore = new Chroma(
      new OpenAIEmbeddings(),
      {
        url,
        collectionName: "demo",
      }
    );

    // Perform a similarity search
    const response = await vectorStore.similaritySearch(query, 2);

    // Log and send the response
    console.log("Retrieved Documents:", response);
  } catch (error) {
    console.error("Error fetching Langchain vectors:", error);
  }
}

// THIS DOES NOT WORK NOW??
const fetchDocumentsWithChromaDBClient = async () => {
  const client = new ChromaClient({
    path: url,
  });

  const collections = await client.listCollections();
  console.log("🚀 ~ collections", collections);

  const ef = new DefaultEmbeddingFunction();

  const collection = await client.getCollection({
    name: "demo",
    embeddingFunction: ef,
  });

  console.log(JSON.stringify(collection, null, 2));

  const results = await collection.query({
    queryTexts: [query],
    nResults: 2,
    // where: {"metadata_field": "is_equal_to_this"}, // optional filter
    // whereDocument: {"$contains":"search_string"} // optional filter
  });

  console.log("🚀 ~ results", results);
};


async function run() {
  // This DOES NOT WORK NOW??
  fetchDocumentsWithChromaDBClient()

  // This works now
  fetchDocumentsWithLangchain()
}

run();
