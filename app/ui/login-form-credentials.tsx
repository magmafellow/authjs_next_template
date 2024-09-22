'use client'

import { signIn } from '@/auth'
import { loginCredentials } from '../lib/actions/authenticate'
import { useFormState } from 'react-dom'

export default function LoginFormCredentials() {
  const [message, dispatch] = useFormState(loginCredentials, undefined)

  return (
    <form action={dispatch}>
      <div>
        <div>
          <label className="text-stone-300" htmlFor="email">
            email
          </label>
        </div>
        <div>
          <input
            className="text-stone-800"
            type="text"
            id="email"
            name="email"
          />
        </div>
      </div>
      <div className="mb-3">
        <div>
          <label className="text-stone-300" htmlFor="password">
            password
          </label>
        </div>
        <div>
          <input
            className="text-stone-800"
            type="text"
            id="password"
            name="password"
          />
        </div>
      </div>
      <div className="mb-3">
        <button
          type="submit"
          className="w-full bg-green-800 hover:bg-green-700 text-green-50 py-0.5"
        >
          login
        </button>
      </div>
      <div>
        {message?.error && (
          <p className="text-center text-red-700">{message.error}</p>
        )}
      </div>
      <div>
        {message?.success && (
          <p className="text-center text-green-700">{message.success}</p>
        )}
      </div>
    </form>
  )
}
