'use client'

import { useFormState } from "react-dom"
import { signupCredentials } from "../lib/actions/authenticate"

export default function SignupFormCredentials() {
  const [message, dispatch] = useFormState(signupCredentials, undefined)

  return (
    <form action={dispatch}>
      <div className='text-center mb-3'>
        <h2 className='text-gray-200 font-bold text-xl'>Signup</h2>
      </div>
      <div className='mb-3'>
        <div>
          <label className="text-stone-300" htmlFor="username">
            username
          </label>
        </div>
        <div>
          <input
            className="text-stone-800 px-2 py-0.5 rounded"
            type="text"
            id="username"
            name="username"
          />
        </div>
      </div>
      <div className='mb-3'>
        <div>
          <label className="text-stone-300" htmlFor="email">
            email
          </label>
        </div>
        <div>
          <input
            className="text-stone-800 px-2 py-0.5 rounded"
            type="text"
            id="email"
            name="email"
          />
        </div>
      </div>
      <div className="mb-6">
        <div>
          <label className="text-stone-300" htmlFor="password">
            password
          </label>
        </div>
        <div>
          <input
            className="text-stone-800 px-2 py-0.5 rounded"
            type="password"
            id="password"
            name="password"
          />
        </div>
      </div>
      <div className="mb-3">
        <button
          type="submit"
          className="w-full bg-green-800 hover:bg-green-700 text-green-50 rounded py-1 font-medium"
        >
          register
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