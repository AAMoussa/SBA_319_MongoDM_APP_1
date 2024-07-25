// Create a db/db.js file to connect to MongoDB


const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://ahmedmoussa0013:AMmdb2013@cluster0.nola0m8.mongodb.net/'; // Update with your MongoDB URI
const dbName = 'AMMongoDB'; // Update with your database name

let client;

async function connectDB() {
  try {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

function getDB() {
  return client.db(dbName);
}

function closeDB() {
  client.close();
  console.log('Disconnected from MongoDB');
}

module.exports = { connectDB, getDB, closeDB };