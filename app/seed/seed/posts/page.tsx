import { createPosts } from "@/app/lib/actions/posts"

export default async function Page() {
  const res = await createPosts()
  
  return (
    <div>seed/posts</div>
  )
}
