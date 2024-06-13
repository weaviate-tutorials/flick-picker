import weaviate, { WeaviateClient } from "weaviate-client"
import { z } from 'zod'

const responseSchema = z.object({
  query: z.string(),
})



export default defineLazyEventHandler(async () => {
  const config = useRuntimeConfig()

  const client: WeaviateClient = await weaviate.connectToWeaviateCloud(config.host,{
      authCredentials: new weaviate.ApiKey(config.key),
      headers: {
        'X-PaLM-Api-Key': config.palm || '',
      }
    }
  )

const responseSchema = z.object({
  query: z.string(),
})


async function vectorSearch(searchTerm:string) {
  const myCollection = client.collections.get('MovieSearcher')

  const response = await myCollection.query.nearText(searchTerm,{
    limit: 8,
  })

  return response
}

  return defineEventHandler<{query: { query: string } }>(async (event) => {
  
    const result = await getValidatedQuery(event, body => responseSchema.safeParse(body))
    if (!result.success)
      throw result.error.issues
  
    const searchTerm = result.data.query
  
    return await vectorSearch(searchTerm)
  })
})
