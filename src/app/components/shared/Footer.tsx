import Link from "next/link";
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const SOCIAL_LINKS = [
  { icon: FiFacebook, href: "https://www.facebook.com/hasan.m.zakaria.1", label: "GitHub" },
  { icon: FiTwitter, href: "https://x.com/Zakariak4Khan", label: "Twitter" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/hasanmdzakaria/", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://www.instagram.com/zakariak4/", label: "Instagram" },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Explore Blueprints", href: "/blueprints" },
  { label: "Add Blueprint", href: "/blueprints/add" },
  { label: "Dashboard", href: "/dashboard" },
];

const RESOURCE_LINKS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Help / Support", href: "/help" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        {/* ---- 4 column grid, side by side on desktop ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Logo + description + socials */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
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
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                SkillPilot
              </span>
            </Link>

            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              AI-powered career roadmap and learning assistant — build,
              follow, and share personalized learning blueprints.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
                  style={{
                    borderColor: "var(--border-default)",
                    color: "var(--text-secondary)",
                    backgroundColor: "var(--bg-surface-raised)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wide"
              style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
            >
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Resources + Legal */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wide"
              style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
            >
              Resources
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact info */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wide"
              style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
            >
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <FiMail
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--brand-primary)" }}
                />
                <a
                  href="mailto:support@skillpilot.ai"
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  support@skillpilot.ai
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiPhone
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--brand-primary)" }}
                />
                <a
                  href="tel:+8801700000000"
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  +880 1700-000000
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiMapPin
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--brand-primary)" }}
                />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- Bottom bar ---- */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} SkillPilot AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors hover:opacity-80"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}