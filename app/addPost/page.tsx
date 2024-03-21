"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

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
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })

      if (res.ok) {
        router.push("/posts")
        toast.success("Post added successfully!")
      } else {
        throw new Error("Failde to add post!")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="py-24 text-center w-full">
      <div className="font-bold capitalize mb-4 text-2xl">create post</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 max-w-sm mx-auto"
      >
        <div className="space-x-4">
          <input
            type="text"
            id="title"
            value={title}
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            className="input-controller"
          />
        </div>
        <div className="space-x-4">
          <textarea
            value={description}
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
            className="input-controller h-48 w-full"
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
