import weaviate, { WeaviateClient } from "weaviate-client"

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)

const client: WeaviateClient = await weaviate.connectToWeaviateCloud(
    config.host,
    {
      authCredentials: new weaviate.ApiKey(config.key),
      headers: {
        'X-PaLM-Api-Key': config.palm || ''
      }
    }
  )
    const body = await readBody(event)
    const base64 = body.data.split(',')[1];

    const collection = client.collections.get('PhoneGallery')

    const response = await collection.query.nearImage(base64, {
      limit: 15,
      distance: 1.3
    })

    return response.objects
  })