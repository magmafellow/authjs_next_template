'use server'

import { signIn, signOut } from "@/auth"


export async function login(provider: string) {
  await signIn('github')
  
}

export async function logout() {
  return await signOut()
}
