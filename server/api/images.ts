import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
    const directoryPath = path.join(process.cwd(), 'public', 'images')
    const fileNames = fs.readdirSync(directoryPath)
    const images = fileNames.map((fileName) => `/images/${fileName}`)
  
    return images
})



