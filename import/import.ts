import { type WeaviateClient, generateUuid5 } from 'weaviate-client';
import { getWeaviateClient } from './client';
import { getBase64, listFiles } from './util';
import { readFileSync } from 'fs';
import fs from 'fs';
import { parse } from 'csv-parse';


const sourceBase = 'public';
const sourceImages = sourceBase + '/images/'

const client: WeaviateClient = await getWeaviateClient();

export const importMediaFiles = async (collectionName: string) => {
    await insertImages(collectionName);
}

// const insertImagesPlusCsv = async (collectionName: string) => {
// let counter = 0;
// let idnum = '';
// let title = '';
// let overview = '';
// const batchSize = 20;
// let dataObject = [];
// const imagesCollection = client.collections.get(collectionName);

// // const csvData = readFileSync(`${sourceBase}/merged_finale.csv`, 'utf-8');
// // const rows = csvData.split('\n').map(row => row.split(','));

// const files = listFiles(sourceImages);
// console.log(`Importing ${files.length} images.`);

// for (const file of files) {
// console.log(`Adding ${file.name}`);

// const fileName = file.name.split('.')[0];

// const csvRow = rows.find(row => row[0] === fileName);

// idnum = csvRow[0];
// overview = csvRow[3].toString();



// const item = {
//     name: file.name,
//     extension: file.name.split('.')[1],
//     overview: csvRow[3].toString(),
//     title: csvRow[1].toString(),
//     image: getBase64(file.path),
//     media: 'image',
//     };



// dataObject.push(item);
// }

// await imagesCollection.data.insertMany(dataObject);
// }

// for any images in images folder not in csv, insert without metadata
const insertImages = async (collectionName: string) => {

    const batchSize = 20;
    let dataObject = [];
    const imagesCollection = client.collections.get(collectionName);

    const files = listFiles(sourceImages);
    console.log(`Importing ${files.length} images.`);

    let counter = 0;
    for (const file of files) {
        console.log(`Adding ${file.name}`);

        const item = {
            name: file.name,
            image: getBase64(file.path),
        };

        dataObject.push(item);
        counter++;

        if (counter % batchSize == 0) {
            let response = await imagesCollection.data.insertMany(dataObject);
            // Clear the dataObject array
            dataObject = [];
        }
        
    }

    if (counter % batchSize !== 0)
        await imagesCollection.data.insertMany(dataObject);
}

