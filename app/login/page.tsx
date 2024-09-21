'use client'

import { useState } from 'react'
import LoginFormGithub from '../ui/login-form-github'
import { FaGithub } from 'react-icons/fa'
import { PiPasswordBold } from 'react-icons/pi'
import clsx from 'clsx'
import LoginFormCredentials from '../ui/login-form-credentials'
import Link from 'next/link'

export default function Page() {
  const [kind, setKind] = useState('github')

  return (
    <div className="min-h-screen flex flex-col gap-6 justify-center items-center">
      <div className="flex gap-4 text-2xl">
        <FaGithub
          className={clsx('cursor-pointer', {
            'text-sky-300': kind === 'github',
          })}
          onClick={() => setKind('github')}
        />
        <PiPasswordBold
          className={clsx('cursor-pointer', {
            'text-sky-300': kind === 'credentials',
          })}
          onClick={() => setKind('credentials')}
        />
      </div>
      <div
        className={clsx({
          hidden: kind !== 'github',
        })}
      >
        <LoginFormGithub />
      </div>
      <div
        className={clsx({
          hidden: kind !== 'credentials',
        })}
      >
        <LoginFormCredentials />
      </div>
      <div className="w-[300px] font-medium pl-4 pt-4 items-start flex flex-col gap-4 h-[200px] bg-slate-700 absolute left-10 top-24 rounded">
        <Link className="hover:underline" href="/login">
          Login
        </Link>
        <Link className="hover:underline" href="/signup">
          Signup
        </Link>
        <Link className="hover:underline" href="/profile">
          Profile
        </Link>
      </div>
    </div>
  )
}
