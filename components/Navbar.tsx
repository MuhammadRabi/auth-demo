import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-slate-700 md:mx-24 mt-4 px-4 md:px-12 py-4 flex justify-between items-center text-white">
      <Link href="/">
        <div className="logo text-2xl font-bold">Rabi</div>
      </Link>
      <Link
        href="/addPost"
        className="bg-slate-500 p-1 px-2 rounded-sm duration-150 hover:scale-105"
      >
        Create post
      </Link>
    </nav>
  )
}

export default Navbar
