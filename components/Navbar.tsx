import Link from "next/link"
import ThemeChanger from "./ThemeChanger"

const Navbar = () => {
  return (
    <nav className="bg-black dark:bg-slate-700 px-8 py-4 flex justify-between md:justify-around items-center text-white">
      <Link href="/">
        <div className="logo text-2xl font-bold">Rabi</div>
      </Link>
      <div className="flex gap-4 md:gap-8 capitalize items-center">
        <Link href="/">
          <div className="logo font-bold py-1.5">home</div>
        </Link>
        <Link href="/posts">
          <div className="logo font-bold py-1.5">posts</div>
        </Link>
        <ThemeChanger />
        <div className="auth flex items-center">
          <Link href="/signin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 cursor-pointer md:hidden hover:opacity-75"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
          <Link href="/signin">
            <div className="hidden md:block text-sm md:text-base font-bold bg-white text-black px-3 rounded-md py-1.5 hover:bg-gray-300 duration-300">
              sign in
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
