import weaviate, { type WeaviateClient } from 'weaviate-client';
import 'dotenv/config'

let client: WeaviateClient;

export const getWeaviateClient = async () => {
  if (!client) {
    client = await weaviate.connectToWeaviateCloud(process.env.NUXT_WEAVIATE_HOST_URL || '',{
    authCredentials: new weaviate.ApiKey(process.env.NUXT_WEAVIATE_ADMIN_KEY || ''),
    headers: {
      'X-Palm-Api-Key': process.env.NUXT_GOOGLE_API_KEY || '',  // Replace with your inference API key
      'X-OpenAI-Api-Key': process.env.NUXT_OPENAI_API_KEY || '' // Replace with your OpenAI API key
    }
  }
)
  };
  
 return client;
}