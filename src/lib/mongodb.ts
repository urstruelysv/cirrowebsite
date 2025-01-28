import mongoose from "mongoose";

type CachedType = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
} | null;

declare global {
  var mongoose: CachedType;
}

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/cirro";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached: CachedType = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (!cached) {
    cached = { conn: null, promise: null };
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
