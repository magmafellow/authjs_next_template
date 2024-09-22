import { auth, signOut } from '@/auth'
import Signout from '../ui/signout'
import LinkMap from '../ui/link-map'

export default async function Page() {
  const res = await auth()
  // console.log(res)
  return (
    <div>
      <div className="w-[700px] rounded-md overflow-hidden bg-gray-700 min-h-40 mx-auto mt-24">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="font-bold text-xl">author</div>
          <div className="h-14 w-14 rounded-full bg-sky-600"></div>
        </div>
        <div>
          <pre>
            <code className="language-javascript block w-full overflow-hidden">
              {JSON.stringify(res, null, 2)}
            </code>
          </pre>
          <pre>
            <code className="language-javascript block">
              const a = 1; console.log(a)
            </code>
          </pre>
        </div>
      </div>
      <div className="pt-10 text-center">{res && <Signout />}</div>
      <LinkMap />
    </div>
  )
}
