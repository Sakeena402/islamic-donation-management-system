import mongoose from 'mongoose';

export default async function connectDB() {
  try {
    // If already connected, skip reconnection
    if (mongoose.connection.readyState === 1) {
      return;
    }

    await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDB connected successfully");

    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });
  } catch (error) {
    console.error(`Database connection error: ${error}`);
    throw new Error("Failed to connect to database");
  }
}
