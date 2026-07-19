import { redirect } from "next/navigation";
import { getServerSession } from "@/app/lib/get-session";
import DashboardShell from "@/app/components/dashboard/DashboardShell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <DashboardShell role={session.user.role} name={session.user.name}>
      {children}
    </DashboardShell>
  );
}