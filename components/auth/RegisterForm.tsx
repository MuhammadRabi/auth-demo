"use client"

import { RegisterInputs, registerSchema } from "@/models/validations"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import FormInput from "./FormInput"
import InputError from "./InputError"
import { useRouter } from "next/navigation"

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(registerSchema),
  })

  const router = useRouter()

  const onSubmit: SubmitHandler<RegisterInputs> = async ({
    name,
    email,
    password,
  }) => {
    const userData = {
      name,
      password,
      email,
    }
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })

    // to db
    if (!response.ok) {
      console.log("There was an error!")
    }
    console.log(userData)
    reset()
    router.push("/")
  }
  const signupInputs = [
    {
      label: "Name",
      id: "name",
      type: "text",
      placeholder: "your name",
      register: register("name"),
      error: errors.name,
    },
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
    {
      label: "Confirm Password",
      id: "confirmpassword",
      type: "password",
      placeholder: "confirm your password",
      register: register("confirmPassword"),
      error: errors.confirmPassword,
    },
  ]

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-md gap-3 bg-gray-200 dark:bg-zinc-950 rounded-md p-6 px-8"
    >
      <p className="capitalize text-center text-xl font-bold">register</p>
      {signupInputs.map((input) => (
        <>
          <FormInput key={input.id} {...input} />
          <InputError key={input.placeholder} error={input.error} />
        </>
      ))}

      <div className="text-xs flex gap-1">
        <p>Do you already have an account?</p>
        <Link href="/signin" className="text-blue-600 capitalize font-bold">
          Log in
        </Link>
      </div>
      <button type="submit" disabled={isSubmitting}>
        Register
      </button>
    </form>
  )
}

export default RegisterForm
