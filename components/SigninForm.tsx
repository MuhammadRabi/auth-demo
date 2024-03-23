"use client"
import { loginSchema } from "@/models/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import FormInput from "./FormInput"
import InputError from "./InputError"

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
  })
  type LoginInputs = z.infer<typeof loginSchema>

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

  const onSubmit: SubmitHandler<LoginInputs> = ({ email, password }) => {
    const userData = {
      email,
      password,
    }
    console.log(userData)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-sm gap-3 bg-gray-50 dark:bg-zinc-950 rounded-md p-6 px-8"
    >
      <p className="capitalize text-center text-xl font-bold">Log in</p>
      {loginInputs.map((input) => (
        <>
          <FormInput key={input.id} {...input} />
          <InputError key={input.label} error={input.error} />
        </>
      ))}

      <button type="submit" disabled={isSubmitting}>
        Log in
      </button>
    </form>
  )
}

export default SigninForm
