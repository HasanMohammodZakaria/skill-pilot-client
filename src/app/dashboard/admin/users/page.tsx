"use client";

import { useAdminUsers } from "@/app/lib/hooks/useAdminUsers";
import UsersTable from "@/app/components/dashboard/admin/UsersTable";

export default function AdminUsersPage() {
  const { data: users, isLoading } = useAdminUsers();

  return (
    <div className="px-1 sm:px-0">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Manage Users</h1>
      {isLoading ? <p>Loading...</p> : <UsersTable users={users ?? []} />}
    </div>
  );
}