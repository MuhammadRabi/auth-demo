"use client"
import { signOut } from "next-auth/react"

const SignOut = () => {
  return (
    <button
      type="button"
      className="capitalize hidden md:block text-sm md:text-base font-bold bg-white text-black px-3 rounded-md py-1.5 hover:bg-gray-300 duration-300"
      onClick={() => signOut()}
    >
      log out
    </button>
  )
}

export default SignOut
