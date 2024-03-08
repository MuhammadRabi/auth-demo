"use client"
import { useEffect, useState } from "react"
import Post from "./Post"
import { postType } from "@/types"

const PostList = () => {
  const [posts, setPosts] = useState<postType[]>([])

  const getAllPosts = async () => {
    try {
      const res = await fetch("/api/posts", { cache: "no-store" })
      if (!res.ok) {
        throw new Error("failed fetch post from db!")
      }
      const { posts } = await res.json()
      setPosts(posts)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <>
      {posts.map((post: any) => {
        return <Post key={post?._id} {...post} />
      })}
    </>
  )
}

export default PostList
