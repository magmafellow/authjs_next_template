'use server'

import { db } from '@/drizzle'
import { users } from '@/mannequin_data'
import { InsertUser, usersTable } from '@/schema'
import { eq } from 'drizzle-orm'
import { unstable_noStore } from 'next/cache'

export async function createUsers() {
  unstable_noStore()
  await Promise.all(users.map((user) => db.insert(usersTable).values(user)))

  console.log('Users have been created')
}

export async function deleteUsers() {
  unstable_noStore()
  await db.delete(usersTable)
}

export async function registerGithubUser(user: InsertUser) {
  unstable_noStore()
  await db.insert(usersTable).values(user)
  console.log('github user has been registered')
}

export async function registerCredentialsUser(user: InsertUser) {
  unstable_noStore()
  await db.insert(usersTable).values(user)
  console.log('credentials user has been registered')
}

export async function isUserById(id: string) {
  unstable_noStore()
  const res = await db.select().from(usersTable).where(eq(usersTable.id, id))
  if (res.length === 1) {
    return true
  } else {
    return false
  }
}

export async function getUserByEmail(email: string) {
  unstable_noStore()
  const res = await db.select().from(usersTable).where(eq(usersTable.email, email))
  if (res.length === 0) {
    return null
  } else {
    return res[0]
  }
}
