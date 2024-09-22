import { isUserById } from "../lib/actions/users"

export default async function Page() {
  const res = await isUserById('1')
  console.log(res)
  return (
    <div>for test requests</div>
  )
}