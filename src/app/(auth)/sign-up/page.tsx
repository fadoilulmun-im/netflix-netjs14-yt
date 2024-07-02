import Link from "next/link";
import GithubSignInButton from "@/app/components/GithubSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";
import EmailSignInButton from "@/app/components/EmailSignInButton";
import SignUpForm from "./form";

export default async function SignUpPage() {
  const session = await getServerSession(authOptions);
  if(session) {
    return redirect("/home");
  }
  return (
    <div className="mx-8 my-12 rounded bg-black/80 py-10 px-6 md:max-w-sm md:px-14">
      <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
      <SignUpForm />

      <div className="text-gray-500 text-sm mt-2">
        Already have an account?{" "}
        <Link className="text-white hover:underline" href="/sign-in">
          Sign in now!
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSignInButton />
        <GoogleSignInButton />
        {/* <EmailSignInButton /> */}
      </div>
    </div>
  );
}
