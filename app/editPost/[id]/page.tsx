import EditForm from "@/components/EditForm"
import { baseUrl } from "@/constants/constants"

// get specific post from db
const getPostById = async (id: string) => {
  try {
    const res = await fetch(`${baseUrl}/api/posts/${id}`)
    if (!res.ok) {
      throw new Error("failed fetch post from db!")
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
export default async function EditPost({ params }: { params: { id: string } }) {
  const { id } = params
  const { post } = await getPostById(id)

  return <EditForm id={id} {...post} />
}
