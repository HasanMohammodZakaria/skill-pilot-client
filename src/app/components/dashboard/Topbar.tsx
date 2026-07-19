"use client";

import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Topbar({
  name,
  onMenuClick,
}: {
  name: string;
  onMenuClick: () => void;
}) {
  const router = useRouter();

  async function handleLogout() {
    await authClient.signOut();
    router.push("/login");
  }

  return (
    <header
      className="flex items-center justify-between border-b px-4 sm:px-6 py-4"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border-default)",
      }}
    >
      <button
        onClick={onMenuClick}
        className="md:hidden rounded p-2"
        style={{ color: "var(--text-primary)" }}
        aria-label="Open menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
        </svg>
      </button>

      <div className="hidden md:block" />

      <div className="flex items-center gap-2 sm:gap-4">
        <span
          className="text-sm font-medium hidden sm:inline"
          style={{ color: "var(--text-primary)" }}
        >
          {name}
        </span>
        <button
          onClick={handleLogout}
          className="rounded px-3 py-1.5 text-sm border transition-colors hover:opacity-80"
          style={{
            backgroundColor: "var(--bg-surface-raised)",
            borderColor: "var(--border-default)",
            color: "var(--text-primary)",
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}