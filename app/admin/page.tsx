import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { SignOutButton } from "@/components/sign-out-button";

export default async function Admin() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center">
      <h1>لوحة التحكم</h1>
      <p>مرحباً {data.user.email}</p>
      <SignOutButton />
    </div>
  );
}
