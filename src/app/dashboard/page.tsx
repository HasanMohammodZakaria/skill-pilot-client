import { redirect } from "next/navigation";
import { getServerSession } from "@/app/lib/get-session";

export default async function DashboardIndexPage() {
  const session = await getServerSession();

  if (session?.user.role === "admin") {
    redirect("/dashboard/admin");
  }
  redirect("/dashboard/user");
}