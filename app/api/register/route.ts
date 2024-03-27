import User from "@/models/user"
import bcrypt from "bcrypt"
import mongoose from "mongoose"

export async function POST(request: Request) {
  const body = await request.json()
  await mongoose.connect(process.env.MONGODB_URI as string)
  const plaintextPassword = body.password
  body.password = bcrypt.hashSync(plaintextPassword, 10)

  const newUser = await User.create(body)
  return Response.json(newUser)
}
