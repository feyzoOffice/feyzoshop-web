import { SignIn } from "@clerk/nextjs";

export default function MySignIn() {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}
