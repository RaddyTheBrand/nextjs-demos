import { MongoClient } from "mongodb";
const MONGODB_URI = process.env.MONGODB_URI;
let client = null;

export async function connectToDatabase() {
  if (client) {
    return client;
  }

  if (!MONGODB_URI) {
    console.log("MongoDb URI not found.");
  }

  try {
    client = await MongoClient.connect(MONGODB_URI);
    console.log("Connected to MongoDb successfully.");
    return client;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
