import { createPosts } from '@/app/lib/actions/posts'
import { createUsers } from '@/app/lib/actions/users'

export default async function Page() {
  await createUsers()
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 3700)
  })
  await createPosts()

  return <div>seed/seed</div>
}
