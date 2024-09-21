'use client'

import { logout } from "../lib/actions/authenticate"

export default function Signout() {
  return (
    <button
      className="bg-blue-900 py-3 px-2 rounded"
      onClick={async () => await logout()}
    >
      logout
    </button>
  )
}
