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
      <DropdownMenuContent className="w-52 text-center">
        <DropdownMenuLabel>
          {user?.name && user?.image && (
            <Image
              src={user?.image}
              width={50}
              height={50}
              alt={user?.name}
              className="my-2 rounded-full mx-auto"
            />
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Hi, {user?.name}!</DropdownMenuLabel>
        <DropdownMenuLabel className="text-xs font-normal">
          {user?.email}
        </DropdownMenuLabel>
        <DropdownMenuLabel>
          <LogoutBtn />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default UserCard
