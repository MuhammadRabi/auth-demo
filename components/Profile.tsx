"use client"
import LogoutBtn from "@/components/LogoutBtn"
import { BadgeX } from "lucide-react"
import { useSession } from "next-auth/react"
import Image from "next/image"

export default function Profile() {
  const { data: session } = useSession()
  return (
    <section className="bg-sky-50 dark:bg-sky-950 opacity-75 rounded-md h-screen py-16 px-8">
      <h1 className="text-3xl font-bold capitalize">profile</h1>
      <div className="flex items-center gap-4 bg-slate-500 w-fit border-2 border-cyan-500 py-2 px-6 rounded-md">
        <BadgeX size={24} />
        <p className="capitalize text-xs text-white font-semibold">
          this page is under construction!
        </p>
      </div>
      <article className="flex justify-center my-16 gap-16">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl capitalize">{session?.user.name}</h2>
          <span>{session?.user.email}</span>
          <p>id:{session?.user.id}</p>
        </div>
        {session?.user.image && session?.user.name && (
          <Image
            src={session?.user.image}
            width={100}
            height={100}
            alt={session?.user.name}
            className="rounded-full"
          />
        )}
      </article>
      <div className="mt-16 w-1/6 mx-auto">
        <LogoutBtn />
      </div>
    </section>
  )
}
