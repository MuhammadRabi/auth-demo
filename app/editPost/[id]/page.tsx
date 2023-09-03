import EditForm from "@/components/EditForm"

// get specific post from db
const getPostById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`)
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
  const { title, description } = post

  return <EditForm id={id} {...post} />
}
