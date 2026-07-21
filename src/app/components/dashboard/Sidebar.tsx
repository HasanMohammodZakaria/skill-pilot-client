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
          w-64 border-r flex flex-col
          transform transition-transform duration-200 ease-in-out
          md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border-default)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-5 shrink-0"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-md text-sm font-bold shrink-0"
            style={{
              backgroundColor: "var(--brand-primary)",
              color: "var(--text-on-accent)",
            }}
          >
            SP
          </span>
          <span
            className="text-lg font-semibold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            SkillPilot
          </span>
        </Link>

        <div className="h-px mx-4 mb-3" style={{ backgroundColor: "var(--border-default)" }} />

        {/* Nav links */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                style={{
                  backgroundColor: isActive ? "var(--brand-primary)" : "transparent",
                  color: isActive ? "var(--text-on-accent)" : "var(--text-secondary)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}