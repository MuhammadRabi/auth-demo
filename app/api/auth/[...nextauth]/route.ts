import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { connectMongodb } from "@/lib/mongodb"
import User from "@/models/user"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
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
        //  mongoose.connect(process.env.MONGO_URI as string)
        connectMongodb()
        const existingUser = await User.findOne({ email })
        console.log(existingUser)

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
  // to push oAuth provider to db
  callbacks: {
    async session({ session }) {
      return session
    },
    async signIn({ profile, user }) {
      const { email } = user

      console.log(profile)
      try {
        await connectMongodb()
        // check if user already exists
        const userExists = await User.findOne({ email: email })

        if (!userExists) {
          const user = await User.create({
            email: profile?.email,
            name: profile?.name,
            image: profile?.picture,
          })
        }

        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
