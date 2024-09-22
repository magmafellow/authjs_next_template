import Link from "next/link";

export default function LinkMap() {
  return (
    <div className="w-[300px] font-medium pl-4 pt-4 items-start flex flex-col gap-4 h-[200px] bg-slate-700 absolute left-10 top-24 rounded">
      <Link className="hover:underline" href="/login">
        Login
      </Link>
      <Link className="hover:underline" href="/signup">
        Signup
      </Link>
      <a className="hover:underline" href="/profile">
        Profile
      </a>
    </div>
  )
}
