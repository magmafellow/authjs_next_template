import { signIn } from "@/auth"
import { loginCredentials } from "../lib/actions/authenticate"

export default function LoginFormCredentials() {
  return (
    <form action={loginCredentials}>
      <div>
        <div><label className='text-stone-300' htmlFor="email">email</label></div>
        <div><input className='text-stone-800' type="text" id="email" name="email" /></div>
      </div>
      <div className='mb-3'>
        <div><label className='text-stone-300' htmlFor="password">password</label></div>
        <div><input className='text-stone-800' type="text" id="password" name="password" /></div>
      </div>
      <div>
        <button type="submit" className='w-full bg-green-800 hover:bg-green-700 text-green-50 py-0.5'>login</button>
      </div>
    </form>
  )
}
