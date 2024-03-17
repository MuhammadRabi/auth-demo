import connectMongoDB from "@/lib/mongodb"
import Post from "@/models/post"
import { NextRequest } from "next/server"

export async function POST(request: Request) {
  const { title, description } = await request.json()
  await connectMongoDB()
  await Post.create({ title, description })
  return Response.json({ message: "post added!" }, { status: 201 })
}

// get all posts route

export async function GET() {
  await connectMongoDB()
  const posts = await Post.find({})
  return Response.json({ posts })
}
// delete post route

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")
  await connectMongoDB()
  await Post.findByIdAndDelete(id)
  return Response.json({ message: "Post deleted!" }, { status: 200 })
}
