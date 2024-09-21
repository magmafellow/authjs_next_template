'use client'

import { signIn } from '@/auth'
import { login } from '../lib/actions/authenticate'

export default function LoginFormGithub() {
  return (
    <div>
      <button
        className="bg-green-600 p-4"
        onClick={() => {
          login('github')
        }}
      >
        Login Via Github
      </button>
    </div>
  )
}
