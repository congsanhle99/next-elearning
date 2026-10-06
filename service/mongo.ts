import mongoose from "mongoose";

export const dbConnect = async (): Promise<typeof mongoose | undefined> => {
  try {
    const conn = await mongoose.connect(String(process.env.MONGODB_CONNECTION_STRING));
    return conn;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
