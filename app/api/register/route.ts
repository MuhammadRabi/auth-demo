import connectMongoDB from "@/lib/mongodb"
import User from "@/models/user"
import bcrypt from "bcrypt"

export async function POST(request: Request) {
  const body = await request.json()
  await connectMongoDB()
  const plaintextPassword = body.password
  body.password = bcrypt.hashSync(plaintextPassword, 10)

  const newUser = await User.create(body)
  return Response.json(newUser)
}
