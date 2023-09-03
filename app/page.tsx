import PostList from "@/components/PostList"

export default function Home() {
  return (
    <section className="flex flex-col justify-between items-center mt-4">
      <h2 className="text-3xl font-bold bg-slate-200 w-fit p-4 my-4 rounded-sm">
        CRUD mongoDB app
      </h2>
      <PostList />
    </section>
  )
}
