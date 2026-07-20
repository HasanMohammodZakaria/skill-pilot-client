import type { AdminUser } from "@/app/lib/types";
import RoleSelect from "./RoleSelect";

export default function UsersTable({ users }: { users: AdminUser[] }) {
  return (
    <div className="w-full overflow-x-auto -mx-1 px-1">
      <table className="w-full border-collapse min-w-125">
        <thead>
          <tr className="border-b text-left text-xs sm:text-sm">
            <th className="py-2 pr-3">Name</th>
            <th className="py-2 pr-3">Email</th>
            <th className="py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="border-b text-xs sm:text-sm">
              <td className="py-2 pr-3 whitespace-nowrap">{u.name}</td>
              <td className="py-2 pr-3 max-w-37.5 sm:max-w-none truncate">{u.email}</td>
              <td className="py-2">
                <RoleSelect userId={u._id} currentRole={u.role} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}