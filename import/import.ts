import { type WeaviateClient, generateUuid5 } from 'weaviate-client';
import { getWeaviateClient } from './client';
import { getBase64, listFiles } from './util';
import { readFileSync } from 'fs';
import fs from 'fs';
import { parse } from 'csv-parse';


const sourceBase = 'public';
const sourceImages = sourceBase + '/image/'

const client: WeaviateClient = await getWeaviateClient();

export const importMediaFiles = async (collectionName: string) => {
    await insertImagesPlusCsv(collectionName);
}

const insertImagesPlusCsv = async (collectionName: string) => {
let counter = 0;
let idnum = '';
let title = '';
let overview = '';
const batchSize = 20;
let dataObject = [];
const imagesCollection = client.collections.get(collectionName);

const csvData = readFileSync(`${sourceBase}/merged_finale.csv`, 'utf-8');
const rows = csvData.split('\n').map(row => row.split(','));

const files = listFiles(sourceImages);
console.log(`Importing ${files.length} images.`);

for (const file of files) {
console.log(`Adding ${file.name}`);

const fileName = file.name.split('.')[0];

const csvRow = rows.find(row => row[0] === fileName);

idnum = csvRow[0];
overview = csvRow[3].toString();



const item = {
    name: file.name,
    extension: file.name.split('.')[1],
    overview: csvRow[3].toString(),
    title: csvRow[1].toString(),
    image: getBase64(file.path),
    media: 'image',
    };



dataObject.push(item);
}

await imagesCollection.data.insertMany(dataObject);
}

// const insertImages = async (collectionName: string) => {
//     let batcher: ObjectsBatcher = client.batch.objectsBatcher();
//     let counter = 0;
//     const batchSize = 20;

//     const files = listFiles(sourceImages);
//     console.log(`Importing ${files.length} images.`)

//     for (const file of files) {
//         console.log(`Adding ${file.name.split('.')[0]}`);
//         const item = {
//             name: file.name,
//             image: getBase64(file.path),
//             media: 'image'
//         };
        
//         console.log(`Adding [${item.media}]: ${item.name}`);
//         console.log(item.image.slice(0, 100));

//         batcher = batcher.withObject({
//             class: collectionName,
//             properties: item,
//             id: generateUuid5(file.name)
//         });

//         if (++counter == batchSize) {
//             console.log(`Flushing ${counter} items.`)

//             // flush the batch queue
//             await batcher.do();
      
//             // restart the batch queue
//             counter = 0;
//             batcher = client.batch.objectsBatcher();
//         }
//     }

//     if (counter > 0) {
//         console.log(`Flushing remaining ${counter} item(s).`)
//         await batcher.do();
//         // const res = await batcher.do();
//         // console.log(res);
//     }
// }
