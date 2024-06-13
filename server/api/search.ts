import weaviate, { WeaviateClient } from "weaviate-client"
import { z } from 'zod'

const responseSchema = z.object({
  query: z.string(),
})

export default defineEventHandler<{query: { query: string } }>(async (event) => {
  const config = useRuntimeConfig(event)

  const client: WeaviateClient = await weaviate.connectToWeaviateCloud(config.host,{
      authCredentials: new weaviate.ApiKey(config.key),
      headers: {
        'X-PaLM-Api-Key': config.palm || '',
        'X-OpenAI-Api-Key': config.openai
      }
    }
  )

  const result = await getValidatedQuery(event, body => responseSchema.safeParse(body))
  if (!result.success)
    throw result.error.issues

  const searchTerm = result.data.query
  const myCollection = client.collections.get('PhoneGallery')

  const response = await myCollection.query.nearText(searchTerm,{
    limit: 20,
  })

  console.log('all objects', response)
  return response.objects
})
