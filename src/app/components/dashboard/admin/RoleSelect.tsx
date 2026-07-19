"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useUpdateUserRole } from "@/app/lib/hooks/useUpdateUserRole";

export default function RoleSelect({
  userId,
  currentRole,
}: {
  userId: string;
  currentRole: "admin" | "user";
}) {
  const [role, setRole] = useState<"admin" | "user">(currentRole);
  const { mutate, isPending } = useUpdateUserRole();

  function handleChange(newRole: "admin" | "user") {
    const previousRole = role;
    setRole(newRole);

    mutate(
      { id: userId, role: newRole },
      {
        onSuccess: () => {
          toast.success("Role আপডেট হয়েছে");
        },
        onError: (err) => {
          toast.error(err instanceof Error ? err.message : "Role আপডেট ব্যর্থ হয়েছে");
          setRole(previousRole);
        },
      }
    );
  }

  return (
    <select
      value={role}
      disabled={isPending}
      onChange={(e) => handleChange(e.target.value as "admin" | "user")}
      className="rounded-md border px-2 py-1 text-sm"
      style={{
        backgroundColor: "var(--bg-surface-raised)",
        borderColor: "var(--border-default)",
        color: "var(--text-primary)",
      }}
    >
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
  );
}