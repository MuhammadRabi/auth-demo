"use client"

import { PostProps } from "@/lib/types"
import Link from "next/link"
import { toast } from "react-hot-toast"
import RemoveBtn from "./RemoveBtn"

const Post = ({ title, description, _id }: PostProps) => {
  const removeHandler = async () => {
    const res = await fetch(`/api/posts?id=${_id}`, {
      method: "DELETE",
    })
    if (res.ok) {
      window.location.reload()
      toast.error("Your post has been deleted!")
    }
  }

  return (
    <article className="border-2 border-gray-100 dark:border-gray-700 shadow-lg p-5 flex rounded-md items-center justify-between space-x-6 mb-4 w-full md:w-3/4 max-w-2xl dark:border-l-orange-600 border-l-orange-500 dark:bg-zinc-800 ">
      <div className="details dark:text-white">
        <h2 className="text-2xl capitalize font-bold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <div className="icons flex space-x-2">
        <Link href={`/editPost/${_id}`}>
          <svg
            aria-label="edit-post"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-emerald-600 cursor-pointer hover:text-emerald-500 hover:scale-105 duration-300"
          >
            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
          </svg>
        </Link>
        <RemoveBtn removeHandler={removeHandler} />
      </div>
    </article>
  )
}

export default Post
