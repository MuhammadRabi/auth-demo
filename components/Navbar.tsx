import Link from "next/link"
import ThemeChanger from "./ThemeChanger"

const Navbar = () => {
  return (
    <nav className="bg-black dark:bg-slate-700 md:px-36 px-8 py-4 flex justify-around items-center text-white">
      <Link href="/">
        <div className="logo text-2xl font-bold">Rabi</div>
      </Link>
      <div className="flex gap-12 capitalize">
        <Link href="/">
          <div className="logo text-2xl font-bold">home</div>
        </Link>
        <Link href="/posts">
          <div className="logo text-2xl font-bold">posts</div>
        </Link>

        <ThemeChanger />
      </div>
    </nav>
  )
}

export default Navbar
