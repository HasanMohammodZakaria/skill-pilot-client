"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX, FiUser, FiLogOut, FiGrid } from "react-icons/fi";

import { useSession, signOut } from "@/app/lib/auth-client";
import ThemeToggle from "../ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Blueprints", href: "/blueprints" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setProfileOpen(false);
  }

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  async function handleLogout() {
    await signOut();
    setProfileOpen(false);
    router.push("/");
    router.refresh();
  }

  const user = session?.user;

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          backgroundColor: "color-mix(in srgb, var(--bg-surface) 85%, transparent)",
          borderColor: "var(--border-default)",
        }}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ---- Logo ---- */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold"
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

          {/* ---- Desktop nav links ---- */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium transition-colors rounded-md"
                style={{
                  color: isActive(link.href)
                    ? "var(--brand-primary)"
                    : "var(--text-secondary)",
                }}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    className="absolute -bottom-px left-2 right-2 h-0.5 rounded-full"
                    style={{ backgroundColor: "var(--brand-primary)" }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* ---- Right side (desktop) ---- */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            {isPending ? (
              <div
                className="h-9 w-9 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--bg-surface-raised)" }}
              />
            ) : user ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileOpen((v) => !v)}
                  className="flex items-center gap-2 rounded-full pl-1 pr-3 py-1 border transition-colors"
                  style={{
                    borderColor: "var(--border-default)",
                    backgroundColor: "var(--bg-surface-raised)",
                  }}
                >
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name ?? "User"}
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: "var(--brand-primary)",
                        color: "var(--text-on-accent)",
                      }}
                    >
                      {user.name?.charAt(0).toUpperCase() ?? "U"}
                    </span>
                  )}
                  <span
                    className="text-sm font-medium max-w-30 truncate"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {user.name}
                  </span>
                </button>

                {profileOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 rounded-lg border py-1 shadow-lg"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      borderColor: "var(--border-default)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 text-sm transition-colors"
                      style={{ color: "var(--text-primary)" }}
                      onClick={() => setProfileOpen(false)}
                    >
                      <FiGrid size={15} />
                      Dashboard
                    </Link>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 px-4 py-2 text-sm transition-colors"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <FiLogOut size={15} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="btn-primary flex items-center gap-1.5 text-sm"
              >
                <FiUser size={15} />
                Login
              </Link>
            )}
          </div>

          {/* ---- Mobile: theme toggle + hamburger ---- */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-md border"
              style={{
                borderColor: "var(--border-default)",
                color: "var(--text-primary)",
              }}
            >
              <FiMenu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* ---- Mobile off-canvas wrapper (now a sibling of <header>, NOT inside it) ---- */}
      <div
        className={`fixed inset-0 z-100 transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--bg-base)", opacity: 0.9 }}
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-xs transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundColor: "var(--bg-surface)",
            borderLeft: "1px solid var(--border-default)",
          }}
        >
          <div
            className="flex h-16 items-center justify-between px-4 border-b"
            style={{ borderColor: "var(--border-default)" }}
          >
            <span
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              SkillPilot
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-md"
              style={{ color: "var(--text-primary)" }}
            >
              <FiX size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium"
                style={{
                  color: isActive(link.href)
                    ? "var(--brand-primary)"
                    : "var(--text-primary)",
                  backgroundColor: isActive(link.href)
                    ? "var(--bg-surface-raised)"
                    : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div
            className="border-t px-4 py-4"
            style={{ borderColor: "var(--border-default)" }}
          >
            {user ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name ?? "User"}
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: "var(--brand-primary)",
                        color: "var(--text-on-accent)",
                      }}
                    >
                      {user.name?.charAt(0).toUpperCase() ?? "U"}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {user.name}
                    </p>
                    <p
                      className="text-xs truncate"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {user.email}
                    </p>
                  </div>
                </div>

                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
                  style={{
                    backgroundColor: "var(--bg-surface-raised)",
                    color: "var(--text-primary)",
                  }}
                >
                  <FiGrid size={15} />
                  Dashboard
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
                  style={{
                    backgroundColor: "var(--bg-surface-raised)",
                    color: "var(--text-primary)",
                  }}
                >
                  <FiLogOut size={15} />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="btn-primary flex items-center justify-center gap-1.5 text-sm w-full"
              >
                <FiUser size={15} />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}