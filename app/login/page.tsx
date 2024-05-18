"use client";
import { LoginForm } from "@/components/login-form";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };
    getSession();
  }, []);
  if (session) {
    router.replace("/admin");
  }
  return (
    <div className="flex flex-col items-center">
      <LoginForm />
    </div>
  );
}
