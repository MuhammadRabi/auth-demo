"use client"
import EditForm from "@/components/EditForm"
import { postType } from "@/types"
import { useEffect, useState } from "react"
export default function EditPost({ params }: { params: { id: string } }) {
  const { id } = params
  const [editedPost, setEditedPost] = useState<postType | null>(null)
  const getPostById = async () => {
    try {
      const res = await fetch(`/api/posts/${id}`)
      if (!res.ok) {
        throw new Error("failed fetch post from db!")
      }
      const { post } = await res.json()
      if (post) {
        setEditedPost(post)
      }
    } catch (error) {
      throw new Error("there is an error!")
    }
  }
  useEffect(() => {
    getPostById()
  }, [])
  return <section>{editedPost && <EditForm id={id} {...editedPost} />}</section>
}
