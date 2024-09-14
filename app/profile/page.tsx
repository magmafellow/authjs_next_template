import { auth } from "@/auth"

export default async function Page() {
  const res = await auth()
  console.log(res)
  return (
    <div className='w-[700px] rounded-md bg-gray-700 min-h-40 mx-auto mt-24'>
      <div className='flex justify-between items-center px-6 py-4'>
        <div className='font-bold'>author</div>
        <div className='h-8 w-8 rounded-full bg-sky-600'></div>
      </div>
      <div>
        <pre>
          <code className='language-javascript block w-full overflow-hidden'>
            {JSON.stringify(res, null, 2)}
          </code>
        </pre>
        <pre>
          <code className='language-javascript block'>
            const a = 1;
            console.log(a)
          </code>
        </pre>
      </div>
    </div>
  )
}