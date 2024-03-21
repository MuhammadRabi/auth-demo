"use client"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  email: string
  password: string
}
const SigninForm = () => {
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
      <p className="capitalize text-center text-xl font-bold">Log in</p>
      <input type="email" {...register("email")} placeholder="your email" />
      <input
        type="password"
        {...register("password")}
        placeholder="your password"
      />
      <button type="submit">Log in</button>
    </form>
  )
}

export default SigninForm
