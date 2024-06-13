import weaviate, { type WeaviateClient } from 'weaviate-client';
import { getWeaviateClient } from './client';

const client: WeaviateClient = await getWeaviateClient();

const collectionExists = async (name: string) => {
  return client.collections.exists(name);
}

export const createCollection = async (name: string) => {
  if(await collectionExists(name)) {
    console.log(`The collection [${name}] already exists. No need to create it.`);
    return;
  }
  
  console.log(`Creating collection [${name}].`);

  const newCollection = await client.collections.create({
    name: name,
    vectorizers: weaviate.configure.vectorizer.multi2VecPalm({
      projectId: 'semi-random-dev',
      location: 'us-central1',
      imageFields: ['image'],
    }),
    // remove when moving to repo
    generative: weaviate.configure.generative.openAI(),
    properties: [
      {
        name: 'name',
        dataType: 'text',
      },
      {
        name: 'image', 
        dataType: 'blob',
      },
    ]
  })
  
  console.log(JSON.stringify(newCollection, null, 2));
}

export const deleteCollection = async (name: string) => {
  console.log(`Deleting collection ${name}...`);
  await client.collections.delete(name);

  console.log(`Deleted collection ${name}.`);
}