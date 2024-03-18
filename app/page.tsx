import PostList from "@/components/PostList"

export default function Home() {
  return (
    <section className="flex flex-col justify-between items-center">
      <h2 className="text-3xl font-bold bg-slate-200 dark:bg-slate-600 w-fit capitalize p-4 my-4 rounded-sm dark:text-white">
        quotes app
      </h2>
      <PostList />
    </section>
  )
}
