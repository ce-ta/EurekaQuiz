const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/api/health", (_: any, res: any) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const uri = `mongodb+srv://asahitsuchida7865_db_user:password12345@cluster0.hj0jsxg.mongodb.net/`;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const collection = client.db("test").collection("devices");
    console.log("Connected successfully to server");
  } finally {
    await client.close();
  }
}
run();