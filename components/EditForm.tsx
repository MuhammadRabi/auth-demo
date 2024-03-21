"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-hot-toast"

type PostProps = {
  id: string
  title?: string
  description?: string
}

const EditForm = ({ id, title, description }: PostProps) => {
  const [newTitle, setNewtitle] = useState(title)
  const [newDescription, setNewdescription] = useState(description)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ newTitle, newDescription }),
      })
      if (!res.ok) {
        throw new Error("failed to update post!")
      }
      router.push("/posts")
      toast.success(`${newTitle} was updated successfully!`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="py-24 text-center w-full">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="space-x-4">
          <input
            type="text"
            value={newTitle}
            placeholder={title}
            onChange={(e) => setNewtitle(e.target.value)}
            className="input-controller"
          />
        </div>
        <div className="space-x-4">
          <textarea
            value={newDescription}
            placeholder={description}
            onChange={(e) => setNewdescription(e.target.value)}
            className="input-controller h-48"
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-500 w-fit p-2 capitalize mx-auto rounded-sm hover:bg-emerald-600 duration-300 font-bold text-white"
        >
          update post
        </button>
      </form>
    </section>
  )
}

export default EditForm
