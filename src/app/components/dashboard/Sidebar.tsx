"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const userLinks = [
  { href: "/dashboard/user", label: "Overview" },
  { href: "/dashboard/user/blueprints", label: "My Blueprints" },
  { href: "/dashboard/user/blueprints/new", label: "Add Blueprint" },
];

const adminLinks = [
  { href: "/dashboard/admin", label: "Overview" },
  { href: "/dashboard/admin/users", label: "Manage Users" },
  { href: "/dashboard/admin/blueprints", label: "All Blueprints" },
];

export default function Sidebar({
  role,
  isOpen,
  onClose,
}: {
  role: "admin" | "user";
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const links = role === "admin" ? adminLinks : userLinks;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50 h-full md:h-auto
          w-64 border-r p-4 space-y-2
          transform transition-transform duration-200 ease-in-out
          md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border-default)",
        }}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`block rounded px-3 py-2 ${
              pathname === link.href ? "bg-black text-white" : "hover:bg-gray-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </aside>
    </>
  );
}