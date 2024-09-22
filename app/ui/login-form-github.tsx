'use client'

import { signIn } from '@/auth'
import { login } from '../lib/actions/authenticate'

export default function LoginFormGithub() {
  return (
    <div>
      <button
        className="bg-stone-600 hover:bg-stone-700 font-medium rounded-xl p-4"
        onClick={async () => {
          await login('github')
        }}
      >
        Login Via Github
      </button>
    </div>
  )
}
