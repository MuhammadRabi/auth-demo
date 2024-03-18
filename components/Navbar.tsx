import Link from "next/link"
import ThemeChanger from "./ThemeChanger"

const Navbar = () => {
  return (
    <nav className="bg-black dark:bg-slate-700 md:px-36 px-8 py-4 flex justify-between items-center text-white">
      <Link href="/">
        <div className="logo text-2xl font-bold">Rabi</div>
      </Link>
      <Link
        href="/addPost"
        className="bg-slate-500 p-1 px-2 rounded-sm duration-150 hover:scale-105"
      >
        Create post
      </Link>
      <ThemeChanger />
    </nav>
  )
}

export default Navbar
