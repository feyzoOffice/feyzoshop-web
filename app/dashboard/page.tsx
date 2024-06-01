import { redirect } from "next/navigation";
import { checkRole } from "@/types/roles";

export default async function Dashboard() {
  // If the user does not have the admin role, redirect them to the home page
  if (!checkRole("admin")) {
    redirect("/");
  }
  return (
    <div className="flex flex-col items-center">
      <h1>لوحة التحكم</h1>
    </div>
  );
}
