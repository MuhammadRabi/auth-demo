import CreatePostBtn from "@/components/CreatePostBtn"
import PostList from "@/components/post/PostList"
import Link from "next/link"

const page = () => {
  return (
    <section className="flex flex-col justify-between items-center">
      <CreatePostBtn />
      <PostList />
    </section>
  )
}

export default page
