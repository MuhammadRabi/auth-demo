"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { baseUrl } from "@/constants/constants"

const AddPost = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title || !description) {
      toast.error("Title and description are required.")
      return
    }

    try {
      const res = await fetch(`${baseUrl}/api/posts`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })

      if (res.ok) {
        router.push("/")
        router.refresh()
        toast.success("Post added successfully!")
      } else {
        throw new Error("Failde to add post!")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="my-8 text-center w-full">
      <div className="font-bold capitalize mb-4 text-2xl">create post page</div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="space-x-4">
          <input
            type="text"
            value={title}
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            className="bg-slate-100 p-3"
          />
        </div>
        <div className="space-x-4">
          <input
            type="text"
            value={description}
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
            className="bg-slate-100 p-3"
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-500 w-fit p-2 capitalize mx-auto rounded-sm hover:bg-emerald-600 duration-300 font-bold text-white"
        >
          add post
        </button>
      </form>
    </section>
  )
}

export default AddPost
