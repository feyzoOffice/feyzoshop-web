"use client";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();
  const supabase = createClient();
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <Button variant="outline" onClick={signOut}>
      تسجيل الخروج
    </Button>
  );
}
