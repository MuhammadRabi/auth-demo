import connectMongoDB from "@/lib/mongodb"
import Post from "@/models/post"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const { newTitle: title, newDescription: description } = await request.json()
  await connectMongoDB()
  await Post.findByIdAndUpdate(id, { title, description })
  return NextResponse.json({ message: "post updated!" }, { status: 200 })
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params
  await connectMongoDB()
  const post = await Post.findOne({ _id: id })
  return NextResponse.json({ post }, { status: 200 })
}
