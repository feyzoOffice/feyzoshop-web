import { SignUp } from "@clerk/nextjs";

export default function MySignUp() {
  const metaData: SignUpUnsafeMetadata = {
    ["role"]: "client",
  };
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <SignUp signInUrl="/sign-in" unsafeMetadata={metaData} />
    </div>
  );
}
