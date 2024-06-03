import { SignIn } from "@clerk/nextjs";

export default function MySignIn() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}
