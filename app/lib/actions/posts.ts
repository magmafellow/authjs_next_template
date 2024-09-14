import { db } from '@/drizzle'
import { posts } from '@/mannequin_data'
import { postsTable } from '@/schema'

export async function createPosts() {
  for (let i = 0; i < posts.length; i++) {
    await db.insert(postsTable).values(posts[i])
  }

  console.log('Posts have been created')
}
