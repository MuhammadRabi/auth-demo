"use client"

import { formSchema } from "@/models/validations"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const RegisterForm = () => {
  zodResolver
  type FormInputs = z.infer<typeof formSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormInputs> = (data: FieldValues) =>
    console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-md gap-4 bg-gray-50 dark:bg-zinc-950 rounded-md p-6 px-8"
    >
      <p className="capitalize text-center text-xl font-bold">register</p>
      <input
        type="text"
        {...register("username")}
        placeholder="your username"
      />
      {errors && (
        <p className="text-red-500 text-xs px-2 font-semibold">
          {errors.username?.message}
        </p>
      )}
      <input type="email" {...register("email")} placeholder="your email" />
      {errors && (
        <p className="text-red-500 text-xs  px-2 font-semibold">
          {errors.email?.message}
        </p>
      )}
      <input
        type="password"
        {...register("password")}
        placeholder="your password"
      />
      {errors && (
        <p className="text-red-500 text-xs  px-2 font-semibold">
          {errors.password?.message}
        </p>
      )}
      {/* <input
        type="password"
        {...register("confirmPassword")}
        placeholder="confirm your password"
      /> */}
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm
