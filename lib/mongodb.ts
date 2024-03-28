import mongoose, { ConnectOptions } from "mongoose"
export const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string)
    console.log("Connected to db!")
  } catch (error) {
    console.log("Failed to connect to db!")
  }
}
