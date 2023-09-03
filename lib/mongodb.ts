import mongoose from "mongoose"

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string)
    console.log("Connected to db!")
  } catch (error) {
    console.log("Failed to connect to db!")
  }
}

export default connectMongoDB
