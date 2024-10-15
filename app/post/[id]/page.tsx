import prisma from "@/lib/prisma"

const PostPage = async () => {
await prisma.user.findUnique({
    where: {
      id: 1
    }
  })

  const updateUser = async (formData: FormData): Promise<void> => {
    'use server'
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    await prisma.user.update({
      where: {
        id: 1
      },
      data: {
        name,
        email
      }
    })
  }

  return (
    <div>
      <form action={updateUser}>
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PostPage
