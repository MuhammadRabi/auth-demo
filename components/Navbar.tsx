"use client"
import Link from "next/link"
import ThemeChanger from "./ThemeChanger"
import SignOut from "./SignOut"
import { useSession } from "next-auth/react"
import Login from "./Login"
import UserCard from "./TestUserCard"

const Navbar = () => {
  const { data: session, status } = useSession()
  return (
    <nav className="bg-black dark:bg-slate-700 px-2 md:px-8 py-4 gap-1 flex justify-between md:justify-around items-center text-white">
      <Link href="/">
        <div className="text-xl md:text-2xl font-bold">Rabi</div>
      </Link>
      <div className="flex gap-4 md:gap-8 capitalize items-center">
        <Link href="/">
          <div className="font-bold py-1.5">home</div>
        </Link>
        <Link href="/posts">
          <div className="font-bold py-1.5">posts</div>
        </Link>
        <ThemeChanger />
        {session && <UserCard user={session?.user} />}
        {status === "authenticated" ? <SignOut /> : <Login />}
      </div>
    </nav>
  )
}

export default Navbar
