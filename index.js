const express = require("express");
const bodyParser = require("body-parser");
const { mongoClient } = require("./mongo-init");
const { createRandomProducts } = require("./generate-fake-data");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a heavy-task endpoint
app.post('/heavy-task', async (req, res) => {
  try {
    await mongoClient.connect();

    const database = mongoClient.db("test-db");
    const collection = database.collection("test-collection");

    // create a document to insert
    const fakeProducts = createRandomProducts(5000);
    const bulk = collection.initializeUnorderedBulkOp();
    fakeProducts.forEach((product) => {
        bulk.insert(product);
    });
    await bulk.execute();

    // Respond with success message
    res.status(200).json({ message: 'Heavy task completed successfully' });
  } catch (error) {
    // Respond with error message
    res.status(500).json({ error: error.message });
  } 
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });