/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import { LoginInputs, loginSchema } from "@/models/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import FormInput from "./FormInput"
import InputError from "./InputError"
import Link from "next/link"
import { signIn } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const SigninForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
  })

  const loginInputs = [
    {
      label: "Email",
      id: "email",
      type: "email",
      placeholder: "your email",
      register: register("email"),
      error: errors.email,
    },
    {
      label: "Password",
      id: "password",
      type: "password",
      placeholder: "your password",
      register: register("password"),
      error: errors.password,
    },
  ]

  const onSubmit: SubmitHandler<LoginInputs> = async ({ email, password }) => {
    const userData = {
      email,
      password,
    }
    // email and password passed as options
    const login = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: false,
    })

    if (login?.ok && login?.url) {
      router.push(login.url)
    } else {
      toast.error("Login failed!")
    }

    console.log(userData)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-sm gap-3 bg-gray-200 dark:bg-zinc-950 rounded-md p-6 px-8"
    >
      <p className="capitalize text-center text-xl font-bold">Log in</p>
      {loginInputs.map((input) => (
        <>
          <FormInput key={input.id} {...input} />
          <InputError key={input.placeholder} error={input.error} />
        </>
      ))}
      <div className="text-xs flex gap-1">
        <p>If you don&apos;t have an account please</p>
        <Link href="/register" className="text-blue-600 capitalize font-bold">
          sign up{" "}
        </Link>
      </div>
      <button type="submit" disabled={isSubmitting}>
        Log in
      </button>
      <span className="text-center">or</span>
      <button
        className="google-btn flex items-center justify-center gap-3"
        type="button"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        Sign in with Google
        <Image
          src="/google.png"
          alt="google-login-btn"
          width={20}
          height={20}
        />
      </button>
    </form>
  )
}

export default SigninForm
