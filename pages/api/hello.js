// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGOURI;
const client = new MongoClient(uri);
const db = client.db("myFirstDatabase");
const col = db.collection("posts");

const handler = async (req, res) => {
  const posts = await col.find().toArray();
  res.status(200).json(posts);
}

export default handler;
