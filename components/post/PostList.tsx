"use client"
import { useEffect, useState } from "react"
import Post from "../Post"
import { PostProps } from "@/lib/types"

const PostList = () => {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [loading, setLoading] = useState(false)

  const getAllPosts = async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/posts", {
        cache: "no-store",
      })
      if (!res.ok) {
        throw new Error("failed fetch post from db!")
      }
      const { posts } = await res.json()
      setPosts(posts)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <>
      {loading && (
        <div className="bg-slate-50 dark:bg-slate-600 p-4 my-6 rounded-md">
          <p className="text-xl dark:text-white">Loading... </p>
        </div>
      )}
      {posts?.length > 0 ? (
        posts.map((post: PostProps) => {
          return <Post key={post?._id} {...post} />
        })
      ) : (
        <div className="bg-slate-50 dark:bg-slate-600 p-4 my-6 rounded-md">
          <p className="text-xl dark:text-white"></p>
        </div>
      )}
    </>
  )
}

export default PostList
