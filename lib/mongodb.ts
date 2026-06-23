import mongoose, { ConnectOptions } from "mongoose";

// Next.js may reload modules during development, which can cause
// multiple Mongoose connections to be created. We cache the connection
// and reuse it across hot reloads.
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const cache: MongooseCache = globalThis.mongooseCache ?? {
  conn: null,
  promise: null,
};

if (!globalThis.mongooseCache) {
  globalThis.mongooseCache = cache;
}

const mongooseOptions: ConnectOptions = {
  dbName: process.env.MONGODB_DB_NAME,
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

/**
 * Connect to MongoDB using Mongoose and return the cached connection.
 * This helper prevents creating multiple connections during development.
 */
export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cache.conn) {
    return cache.conn;
  }

  if (!cache.promise) {
    cache.promise = mongoose
      .connect(MONGODB_URI, mongooseOptions)
      .then((mongooseInstance) => {
        cache.conn = mongooseInstance;
        return mongooseInstance;
      });
  }

  return cache.promise;
}

export default connectToDatabase;
