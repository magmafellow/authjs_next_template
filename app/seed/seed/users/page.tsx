import { createUsers } from "@/app/lib/actions/users"

export default async function () {
  await createUsers()

  return (
    <div>seed users</div>
  )
}