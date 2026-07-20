import Image from "next/image";
import type { AdminUser } from "@/app/lib/types";
import RoleSelect from "./RoleSelect";

export default function UsersTable({ users }: { users: AdminUser[] }) {
  return (
    <div
      className="w-full overflow-x-auto rounded-xl border"
      style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)" }}
    >
      <table className="w-full border-collapse min-w-140">
        <thead>
          <tr
            className="text-left text-xs sm:text-sm"
            style={{ backgroundColor: "var(--bg-surface-raised)" }}
          >
            <th className="py-3.5 px-4 sm:px-5 font-medium">User</th>
            <th className="py-3.5 px-4 sm:px-5 font-medium">Email</th>
            <th className="py-3.5 px-4 sm:px-5 font-medium">Joined</th>
            <th className="py-3.5 px-4 sm:px-5 font-medium">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr
              key={u._id}
              className="text-xs sm:text-sm border-t transition-colors hover:opacity-90"
              style={{ borderColor: "var(--border-default)" }}
            >
              <td className="py-3.5 px-4 sm:px-5 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  {u.image ? (
                    <Image
                      src={u.image}
                      alt={u.name}
                      width={32}
                      height={32}
                      className="rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold shrink-0"
                      style={{ backgroundColor: "var(--brand-primary)", color: "var(--text-on-accent)" }}
                    >
                      {u.name?.charAt(0).toUpperCase() ?? "U"}
                    </span>
                  )}
                  <span className="font-medium">{u.name}</span>
                </div>
              </td>
              <td className="py-3.5 px-4 sm:px-5 max-w-40 sm:max-w-none truncate text-gray-400">
                {u.email}
              </td>
              <td className="py-3.5 px-4 sm:px-5 whitespace-nowrap text-gray-400">
                {new Date(u.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </td>
              <td className="py-3.5 px-4 sm:px-5">
                <RoleSelect userId={u._id} currentRole={u.role} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {users.length === 0 && (
        <p className="text-center text-sm text-gray-500 py-10">No users found.</p>
      )}
    </div>
  );
}