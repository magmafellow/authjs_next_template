import { createPosts } from '@/app/lib/actions/posts'
import { createUsers } from '@/app/lib/actions/users'

export default async function Page() {
  await createUsers()
  await createPosts()

  return <div>seed/seed</div>
}
