import Link from "next/link"

const CreatePostBtn = () => {
  return (
    <Link
      href="/addPost"
      className="text-white mt-2 mb-4 bg-slate-500 w-fit p-1 px-2 rounded-md duration-150 hover:scale-105"
    >
      Create post
    </Link>
  )
}

export default CreatePostBtn
