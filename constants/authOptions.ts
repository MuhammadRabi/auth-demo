import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import User from "@/models/user"
import GoogleProvider from "next-auth/providers/google"
import mongoose from "mongoose"
import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const email = credentials?.email
        const password = credentials?.password
        // Add logic here to look up the user from the credentials supplied
        await mongoose.connect(process.env.MONGO_URI as string)

        const existingUser = await User.findOne({ email })

        const passwordOk =
          existingUser &&
          password &&
          bcrypt.compareSync(password, existingUser.password)

        if (passwordOk) {
          // Any object returned will be saved in `ser` property of the JWT
          console.log(existingUser)
          return existingUser
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
}
