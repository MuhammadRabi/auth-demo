import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutBtn from "./LogoutBtn"
import Link from "next/link"
import { Settings, SquareUserRound } from "lucide-react"
type User =
  | {
      name?: string | null | undefined
      email?: string | null | undefined
      image?: string | null | undefined
      id?: string | null | undefined
    }
  | undefined

type Props = {
  user: User
}

const UserCard = ({ user }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        {" "}
        <article className="dark:bg-slate-500 bg-gray-800 py-0.5 px-2 md:px-4 rounded-md text-white flex items-center gap-2">
          {user?.image ? (
            <Image
              src={user?.image}
              width={35}
              height={35}
              alt={"profile-pic"}
              className="rounded-full mx-auto"
            />
          ) : (
            <p className="w-[35px] h-[35px] bg-slate-300 rounded-full"></p>
          )}
          <h3 className="font-bold text-[8px] md:text-sm">{user?.name}</h3>
        </article>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 text-center dark:bg-slate-700 dark:border-slate-600 border-slate-100 border">
        <DropdownMenuLabel>
          {user?.name && user?.image && (
            <Image
              src={user?.image}
              width={50}
              height={50}
              alt={user?.name}
              className=" rounded-full mx-auto"
            />
          )}
        </DropdownMenuLabel>
        <DropdownMenuLabel>Hi, {user?.name}!</DropdownMenuLabel>
        <DropdownMenuSeparator className="dark:bg-slate-600" />

        <DropdownMenuItem className="group">
          <Link
            href="/profile"
            className="flex gap-3 capitalize items-center text-slate-600 dark:text-slate-300 font-medium group-hover:text-blue-500 duration-300"
          >
            {" "}
            <SquareUserRound />
            edit Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="group">
          <Link
            href="/profile"
            className="flex gap-3 capitalize items-center text-slate-600 dark:text-slate-300 font-medium group-hover:text-blue-500 duration-300"
          >
            {" "}
            <Settings />
            settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="dark:bg-slate-600" />
        <DropdownMenuLabel>
          <LogoutBtn />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default UserCard
