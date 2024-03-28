import { connectMongodb } from "@/lib/mongodb"
import Post from "@/models/post"

// edit post by id

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const { newTitle: title, newDescription: description } = await request.json()
  await connectMongodb()
  await Post.findByIdAndUpdate(id, { title, description })
  return Response.json({ message: "post updated!" }, { status: 200 })
}

// get post by ID

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  await connectMongodb()
  const post = await Post.findOne({ _id: id })
  return Response.json({ post }, { status: 200 })
}
