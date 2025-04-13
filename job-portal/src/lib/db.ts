import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const MONGODB_URI = process.env.MONGODB_URI;

export const dbConnect = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");

    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    await mongoose.connect(MONGODB_URI, { dbName: "Job-Portal" });
    console.log("MongoDB connected successfully");
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error connecting database:", error.message);
    } else {
      console.log("Error connecting database:", error);
    }
  }
};
