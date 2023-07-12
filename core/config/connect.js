import { MongoClient } from "mongodb";
import createID from "../utils/generateRandomId.js";

export const client = new MongoClient(process.env.DATABASE_URL,{
  pkFactory: { createPk: () =>  createID() }
});
const connect = client.db("internship-task");

async function run(collectionName, query) {
  try {
    const test = connect.collection(collectionName);
    return await test.findOne(query);
  } finally {
    await client.close();
  }
}

export default connect;
