import Image from "next/image"

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
  )
}
export default UserCard
