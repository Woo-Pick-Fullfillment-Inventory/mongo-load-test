const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const MONGO_CONNECTION_URI = `mongodb+srv://woopickcloudvn:${process.env.MONGO_PASSWORD}@cluster0.brctpzh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const mongoClient = new MongoClient(MONGO_CONNECTION_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

module.exports = { mongoClient };