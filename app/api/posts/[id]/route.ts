import Post from "@/models/post"
import mongoose from "mongoose"

// edit post by id

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const { newTitle: title, newDescription: description } = await request.json()
  await mongoose.connect(process.env.MONGODB_URI as string)
  await Post.findByIdAndUpdate(id, { title, description })
  return Response.json({ message: "post updated!" }, { status: 200 })
}

// get post by ID

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  await mongoose.connect(process.env.MONGODB_URI as string)
  const post = await Post.findOne({ _id: id })
  return Response.json({ post }, { status: 200 })
}
