import { ObjectsBatcher, type WeaviateClient, generateUuid5 } from 'weaviate-ts-client';
import { getWeaviateClient } from './client';
import { getBase64, listFiles } from './util';



const sourceBase = 'public';
const sourceImages = sourceBase + '/image/'

const client: WeaviateClient = getWeaviateClient();

export const importMediaFiles = async (collectionName: string) => {
    await insertImages(collectionName);
}

const insertImages = async (collectionName: string) => {
    let batcher: ObjectsBatcher = client.batch.objectsBatcher();
    let counter = 0;
    const batchSize = 20;

    const files = listFiles(sourceImages);
    console.log(`Importing ${files.length} images.`)

    for (const file of files) {
        const item = {
            name: file.name,
            image: getBase64(file.path),
            media: 'image'
        };
        
        console.log(`Adding [${item.media}]: ${item.name}`);
        console.log(item.image.slice(0, 100));

        batcher = batcher.withObject({
            class: collectionName,
            properties: item,
            id: generateUuid5(file.name)
        });

        if (++counter == batchSize) {
            console.log(`Flushing ${counter} items.`)

            // flush the batch queue
            await batcher.do();
      
            // restart the batch queue
            counter = 0;
            batcher = client.batch.objectsBatcher();
        }
    }

    if (counter > 0) {
        console.log(`Flushing remaining ${counter} item(s).`)
        await batcher.do();
        // const res = await batcher.do();
        // console.log(res);
    }
}
