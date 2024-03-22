import { z } from "zod"

export const formSchema = z.object({
  username: z.string().min(3, { message: "must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "must be at least 6 characters" }),
})
