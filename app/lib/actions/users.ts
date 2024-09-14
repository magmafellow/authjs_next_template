import { db } from '@/drizzle'
import { users } from '@/mannequin_data'
import { usersTable } from '@/schema'

export async function createUsers() {
  for (let i = 0; i < users.length; i++) {
    await db.insert(usersTable).values(users[i])
  }

  console.log('Users have been created')
}

export async function deleteUsers() {
  await db.delete(usersTable)
}
