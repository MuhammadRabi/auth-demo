import ClientTest from "@/components/ClientTest"
import CreatePostBtn from "@/components/CreatePostBtn"
import UserCard from "@/components/UserCard"

export default function Home() {
  return (
    <section className="flex flex-col justify-between items-center">
      <h2 className="text-3xl font-bold bg-slate-200 dark:bg-slate-600 w-fit capitalize p-4 my-4 rounded-sm dark:text-white">
        quotes app
      </h2>
      <article className="w-full px-2 lg:w-1/2 my-8 leading-relaxed flex flex-col gap-12">
        <p>
          Welcome to our AI-generated blog posts! At our site, cutting-edge
          artificial intelligence technology crafts engaging content for your
          reading pleasure. With algorithms honed to perfection, expect
          insightful, diverse, and thought-provoking articles. Embrace the
          future of content creation with our AI-powered platform. Explore
          fascinating topics curated by machine intelligence. Dive into a world
          where creativity meets computational prowess!
        </p>
        <CreatePostBtn />
        <div className="flex items-center justify-center">
          <ClientTest />
          <UserCard />
        </div>
      </article>
    </section>
  )
}
