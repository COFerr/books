const { MongoClient, ObjectId } = require('mongodb');
import dotenv from 'dotenv'
dotenv.config();

const url = process.env.MONGO_URL as string
console.log(url)
const db = 'books'
const collection = 'collection'

const client = new MongoClient(url)
const database = client.db(db).collection(collection)

export default database


