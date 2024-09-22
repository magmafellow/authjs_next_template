import LinkMap from "../ui/link-map";
import SignupFormCredentials from "../ui/signup-form-credentials";

export default function Page() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <SignupFormCredentials />
      <LinkMap />
    </div>
  )
}