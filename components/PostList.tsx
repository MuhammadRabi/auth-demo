import Post from "./Post"

const getAllPosts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("failed to fetch posts!")
    }

    return res.json()
  } catch (error) {
    console.log("Error loading posts: ", error)
  }
}

const PostList = async () => {
  const { posts } = await getAllPosts()
  return (
    <>
      {posts.map((post: any) => {
        return <Post key={post._id} {...post} />
      })}
    </>
  )
}

export default PostList
