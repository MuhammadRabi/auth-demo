import { Toaster } from "react-hot-toast"
import Navbar from "@/components/Navbar"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/Footer"
import { Providers } from "../components/Providers"
import AuthProvider from "./context/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Posts",
  description: "add posts",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <AuthProvider>
            <Navbar />
            <main className="pt-4 pb-12 px-4 sm:px-8 md:px-24 min-h-[90vh] dark:bg-zinc-900">
              {children}
            </main>
            <Footer />
            <Toaster />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  )
}
