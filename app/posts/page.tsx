import CreatePostBtn from "@/components/CreatePostBtn"
import PostList from "@/components/post/PostList"

const page = () => {
  return (
    <section className="flex flex-col justify-between items-center">
      <CreatePostBtn />
      <PostList />
    </section>
  )
}

export default page
