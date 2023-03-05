const { MongoClient } = require("mongodb");
require('dotenv').config()

//ADD YOUR CONNECTION STRING IN .env FILE!
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
  } finally {
    await client.close();
  }
}


module.exports = {startServer:run}