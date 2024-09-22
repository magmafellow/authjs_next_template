'use client'

import { useState } from 'react'
import LoginFormGithub from '../ui/login-form-github'
import { FaGithub } from 'react-icons/fa'
import { PiPasswordBold } from 'react-icons/pi'
import clsx from 'clsx'
import LoginFormCredentials from '../ui/login-form-credentials'
import Link from 'next/link'
import LinkMap from '../ui/link-map'

export default function Page() {
  const [kind, setKind] = useState('github')

  return (
    <div className="min-h-screen flex flex-col gap-6 justify-center items-center">
      <div className="flex absolute left-[50%] top-[27%] -translate-x-1/2 gap-6 text-4xl">
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
      <LinkMap />
    </div>
  )
}
