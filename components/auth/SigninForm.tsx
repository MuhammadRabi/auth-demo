"use client"
import { LoginInputs, loginSchema } from "@/models/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
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
  loginInputs

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
          <InputError key={input.placeholder} error={input.error} />
        </>
      ))}

      <button type="submit" disabled={isSubmitting}>
        Log in
      </button>
    </form>
  )
}

export default SigninForm
