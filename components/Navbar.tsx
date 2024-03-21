import Link from "next/link"
import ThemeChanger from "./ThemeChanger"

const Navbar = () => {
  return (
    <nav className="bg-black dark:bg-slate-700 px-8 py-4 flex justify-between md:justify-around items-center text-white">
      <Link href="/">
        <div className="logo text-2xl font-bold">Rabi</div>
      </Link>
      <div className="flex gap-6 md:gap-12 capitalize">
        <Link href="/">
          <div className="logo font-bold py-1.5">home</div>
        </Link>
        <Link href="/posts">
          <div className="logo font-bold py-1.5">posts</div>
        </Link>
        <ThemeChanger />
        <div className="auth flex gap-4">
          <Link href="/register">
            <div className="logo font-bold bg-white text-black px-3 rounded-md py-1.5 hover:bg-gray-300 duration-300">
              register
            </div>
          </Link>
          <Link href="/signin">
            <div className="logo font-bold bg-white text-black px-3 rounded-md py-1.5 hover:bg-gray-300 duration-300">
              sign in
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
