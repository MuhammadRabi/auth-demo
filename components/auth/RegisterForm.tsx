"use client"

import { RegisterInputs, registerSchema } from "@/models/validations"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import FormInput from "./FormInput"
import InputError from "./InputError"

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit: SubmitHandler<RegisterInputs> = ({
    username,
    email,
    password,
  }) => {
    const userData = {
      username,
      password,
      email,
    }
    // to db
    console.log(userData)
    reset()
  }
  const signupInputs = [
    {
      label: "Username",
      id: "username",
      type: "text",
      placeholder: "your username",
      register: register("username"),
      error: errors.username,
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
      className="flex flex-col max-w-md gap-3 bg-gray-50 dark:bg-zinc-950 rounded-md p-6 px-8"
    >
      <p className="capitalize text-center text-xl font-bold">register</p>
      {signupInputs.map((input) => (
        <>
          <FormInput key={input.id} {...input} />
          <InputError key={input.placeholder} error={input.error} />
        </>
      ))}

      <div className="text-sm">
        <p>Do you already have an account?</p>
        <Link href="/signin" className="text-blue-600 text-center">
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
