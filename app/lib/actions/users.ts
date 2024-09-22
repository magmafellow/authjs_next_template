import { db } from '@/drizzle'
import { users } from '@/mannequin_data'
import { InsertUser, usersTable } from '@/schema'
import { eq } from 'drizzle-orm'

export async function createUsers() {
  for (let i = 0; i < users.length; i++) {
    await db.insert(usersTable).values(users[i])
  }

  console.log('Users have been created')
}

export async function deleteUsers() {
  await db.delete(usersTable)
}

export async function registerGithubUser(user: InsertUser) {
  await db.insert(usersTable).values(user)
  console.log('github user has been registered')
}

export async function isUserById(id: string) {
  const res = await db.select().from(usersTable).where(eq(usersTable.id, id))
  if (res.length === 1) {
    return true
  } else {
    return false
  }
}

export async function getUserByEmail(email: string) {
  const res = await db.select().from(usersTable).where(eq(usersTable.email, email))
  if (res.length === 0) {
    return null
  } else {
    return res[0]
  }
}
