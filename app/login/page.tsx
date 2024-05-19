import { redirect } from "next/navigation";
import { LoginForm } from "@/components/login-form";
import { createClient } from "@/lib/supabase/server";

export default async function Login() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/admin");
  }
  return (
    <div className="flex flex-col items-center">
      <LoginForm />
    </div>
  );
}
