import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const connectMongoDB = async () => {
  try {
    console.log("printing URI: ", process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
