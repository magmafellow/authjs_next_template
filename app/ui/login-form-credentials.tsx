'use client'

export default function LoginFormCredentials() {
  return (
    <form action="">
      <div>
        <div><label className='text-stone-300' htmlFor="username">username</label></div>
        <div><input type="text" id="username" name="username" /></div>
      </div>
      <div className='mb-3'>
        <div><label className='text-stone-300' htmlFor="password">password</label></div>
        <div><input type="text" id="password" name="password" /></div>
      </div>
      <div>
        <button className='w-full bg-green-800 hover:bg-green-700 text-green-50 py-0.5'>login</button>
      </div>
    </form>
  )
}