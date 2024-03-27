"use client"
import { useSession } from "next-auth/react"
import React from "react"

const ClientTest = () => {
  const { status } = useSession()
  return (
    <>
      {status === "authenticated" && (
        <p className="bg-red-500 text-white px-4 py-2 w-fit rounded-md mx-auto uppercase font-semibold">
          authenticated
        </p>
      )}
    </>
  )
}

export default ClientTest
