"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-9 h-9 rounded-full border"
        style={{
          borderColor: "var(--border-default)",
          backgroundColor: "var(--bg-surface-raised)",
        }}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  function handleToggle() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        inline-flex items-center justify-center
        w-9 h-9 rounded-full
        border transition-colors duration-200
        hover:opacity-80
      "
      style={{
        borderColor: "var(--border-default)",
        backgroundColor: "var(--bg-surface-raised)",
        color: "var(--brand-primary)",
      }}
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}