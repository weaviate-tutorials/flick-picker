import { createCollection, deleteCollection } from './collection';
import { importMediaFiles } from './import';

const collectionName = 'PalmMediaTest';

const run = async () => {
  await deleteCollection(collectionName);
  await createCollection(collectionName);
  await importMediaFiles(collectionName);
}

run();


