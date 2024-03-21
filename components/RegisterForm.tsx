"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data: FieldValues) =>
    console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-sm gap-4 bg-gray-50 dark:bg-zinc-950 rounded-md p-6 px-8"
    >
      <p className="capitalize text-center text-xl font-bold">register</p>
      <input
        type="text"
        {...register("username")}
        placeholder="your username"
      />
      <input type="email" {...register("email")} placeholder="your email" />
      <input
        type="password"
        {...register("password")}
        placeholder="your password"
      />
      <input
        type="password"
        {...register("confirmPassword")}
        placeholder="confirm your password"
      />
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm
