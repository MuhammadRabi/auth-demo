import { Toaster } from "react-hot-toast"
import Navbar from "@/components/Navbar"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

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
    <html lang="en">
      <body className={inter.className}>
        <main className="px-24">
          <Navbar />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}
