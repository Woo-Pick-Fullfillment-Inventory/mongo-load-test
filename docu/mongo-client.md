The MongoClient::close() method forcefully closes a connection to the database, even if persistent connections are being used. You should never have to do this under normal circumstances.

Sync vs Async

When you perform a sync operation, your aplication will wait for MongoDB to finalize the work. With a async operation you can perform many operations at the same time. Server, and client side.