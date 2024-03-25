import { getServerSession } from "next-auth/next"
import { authOptions } from "@/constants/authOptions"
import Image from "next/image"
export type User =
  | {
      name?: string | null | undefined
      email?: string | null | undefined
      image?: string | null | undefined
    }
  | undefined
const UserCard = async () => {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <>
      {session && (
        <article className="bg-slate-500 rounded-md mx-auto text-white text-center p-3 max-w-xs">
          <div>
            <h3 className="font-bold">{session?.user?.name}</h3>
            <span className="text-xs">{session?.user?.email}</span>
            {session?.user?.image && (
              <Image
                src={session?.user?.image}
                width={60}
                height={60}
                alt={"profile-pic"}
                className="rounded-full mx-auto"
              />
            )}
            <p>logged in</p>
          </div>
        </article>
      )}
    </>
  )
}

export default UserCard
