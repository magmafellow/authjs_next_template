import { auth } from '@/auth'

export default async function Page() {
  const user = await auth()
  console.log(user)

  if (!user) {
    return (
      <div className="min-h-screen bg-red-700 text-rose-200 font-bold flex flex-col gap-8 justify-center items-center">
        <h1 className="text-2xl">We dont know you</h1>
        <p>You are NOT authorized</p>
        <p>Get Away!</p>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-green-700 text-white font-bold flex flex-col gap-8 justify-center items-center">
      <h1 className="text-2xl">Hello, friend.</h1>
      <p>You are authorized</p>
    </div>
  )
}
