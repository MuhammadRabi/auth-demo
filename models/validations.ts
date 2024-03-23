import { z } from "zod"

export const registerSchema = z
  .object({
    username: z.string().min(3, { message: "Must be at least 3 characters" }),
    email: z
      .string()
      .min(1, { message: "Must add an email" })
      .email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Invalid password" }),
})
