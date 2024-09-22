'use server'

import { signIn, signOut } from '@/auth'
import { CredentialsSignin } from 'next-auth'
import { SignupSchema } from '../defenitions'
import { getUserByEmail, registerCredentialsUser } from './users'
import { v4 } from 'uuid'

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

export async function signupCredentials(prevState: any, formData: FormData) {
  const formObject = {
    email: formData.get('email'),
    password: formData.get('password'),
    username: formData.get('username'),
  }

  const parsed = SignupSchema.safeParse(formObject)

  if (parsed.success) {
    const { email, password, username } = parsed.data
    const userDB = await getUserByEmail(email)
    if (userDB) {
      return { error: 'Email is already taken' }
    }

    const id = v4()
    const res = await registerCredentialsUser({ email, password, id, username })

    return {success: 'account was registered'}
  } else {
    return {error: 'invalid input'}
  }
}
