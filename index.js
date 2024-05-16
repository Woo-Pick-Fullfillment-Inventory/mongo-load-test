const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
const { createRandomProducts } = require("./generate-fake-data");

dotenv.config();

const MONGO_CONNECTION_URI = `mongodb+srv://woopickcloudvn:${process.env.MONGO_PASSWORD}@cluster0.brctpzh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(MONGO_CONNECTION_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("test-db");
    const collection = database.collection("test-collection");

    // Start measuring time
    console.time("InsertionTime");

    // create a document to insert
    const fakeProducts = createRandomProducts(100000);
    const bulk = collection.initializeUnorderedBulkOp();
    fakeProducts.forEach((product) => {
        bulk.insert(product);
    });
    await bulk.execute();

    // End measuring time
    console.timeEnd("InsertionTime");

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
