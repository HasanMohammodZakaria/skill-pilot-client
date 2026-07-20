"use client";

import { useAdminUsers } from "@/app/lib/hooks/useAdminUsers";
import UsersTable from "@/app/components/dashboard/admin/UsersTable";

export default function AdminUsersPage() {
  const { data: users, isLoading } = useAdminUsers();

  const adminCount = users?.filter((u) => u.role === "admin").length ?? 0;
  const userCount = users?.filter((u) => u.role === "user").length ?? 0;

  return (
    <div className="px-1 sm:px-0 space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold">Manage Users</h1>
        <p className="text-sm text-gray-500 mt-1">
          View and manage all registered users on the platform
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          className="border rounded-lg p-4 sm:p-5"
          style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)" }}
        >
          <p className="text-xs sm:text-sm text-gray-500">Total Users</p>
          <p className="text-2xl sm:text-3xl font-bold mt-1">{users?.length ?? "—"}</p>
        </div>
        <div
          className="border rounded-lg p-4 sm:p-5"
          style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)" }}
        >
          <p className="text-xs sm:text-sm text-gray-500">Admins</p>
          <p className="text-2xl sm:text-3xl font-bold mt-1">{adminCount}</p>
        </div>
        <div
          className="border rounded-lg p-4 sm:p-5"
          style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)" }}
        >
          <p className="text-xs sm:text-sm text-gray-500">Regular Users</p>
          <p className="text-2xl sm:text-3xl font-bold mt-1">{userCount}</p>
        </div>
      </div>

      {isLoading ? (
        <div
          className="border rounded-lg p-12 text-center text-sm text-gray-500 animate-pulse"
          style={{ borderColor: "var(--border-default)" }}
        >
          Loading users...
        </div>
      ) : (
        <UsersTable users={users ?? []} />
      )}
    </div>
  );
}