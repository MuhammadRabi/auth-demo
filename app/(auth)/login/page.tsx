import SigninForm from "@/components/auth/SigninForm"
import React from "react"

const Login = () => {
  return (
    <section className="flex flex-col justify-between items-center gap-4 my-16">
      <SigninForm />
    </section>
  )
}

export default Login
