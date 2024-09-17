const { MongoClient } = require("mongodb");
require('dotenv').config();

const mongoClient = new MongoClient(process.env.VITE_MONGODB_URI);

const clientPromise - mongoClient.connect();

const handler = async (event) => {
  try {
    const database = (avait clientPromise).db(process.env.VITE_MONGODB_DATABASE);
    const collection = database.collection(process.env.VITE_MONGODB_COLLECTION);

    const results = await collection.find({}).limit(10).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    }
  } catch (error){
    return {statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }

