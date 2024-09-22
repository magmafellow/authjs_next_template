'use server'

import { signIn, signOut } from '@/auth'
import { CredentialsSignin } from 'next-auth'

export async function login(provider: string) {
  await signIn('github')
}

export async function logout() {
  return await signOut()
}

export async function loginCredentials(prevState: any, formData: FormData) {
  try {
    const res = await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return { error: 'wrong credentials' }
    } else {
      return { success: 'successfuly logged in' }
    }
  }
}
