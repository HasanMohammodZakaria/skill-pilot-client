import Link from "next/link";
import { FiHome, FiCompass, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
       
        <div
          className="card card--blueprint flex items-center justify-center px-8 py-6 mb-8"
          style={{ backgroundColor: "var(--bg-surface)" }}
        >
          <span
            className="text-6xl sm:text-7xl font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--brand-primary)",
            }}
          >
            404
          </span>
        </div>

        <span className="badge-ai mb-4">Route not found</span>

        <h1
          className="text-2xl sm:text-3xl font-semibold"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          This blueprint doesn&apos;t exist
        </h1>

        <p
          className="mt-3 text-sm sm:text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          The page you&apos;re looking for might have been moved, renamed, or
          never existed in the first place. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <FiHome size={16} />
            Back to Home
          </Link>

          <Link
            href="/blueprints"
            className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-full border px-6 py-2.5 text-sm font-medium transition-colors"
            style={{
              borderColor: "var(--border-default)",
              color: "var(--text-primary)",
              backgroundColor: "var(--bg-surface-raised)",
            }}
          >
            <FiCompass size={16} />
            Explore Blueprints
          </Link>
        </div>

        <Link
          href="javascript:history.back()"
          className="mt-6 inline-flex items-center gap-1.5 text-xs"
          style={{ color: "var(--text-secondary)" }}
        >
          <FiArrowLeft size={12} />
          Go back to previous page
        </Link>
      </div>

      
      <div
        className="pointer-events-none absolute top-6 left-6 h-10 w-10 border-l-2 border-t-2 opacity-30 hidden sm:block"
        style={{ borderColor: "var(--brand-primary)" }}
      />
      <div
        className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 border-r-2 border-b-2 opacity-30 hidden sm:block"
        style={{ borderColor: "var(--brand-primary)" }}
      />
    </div>
  );
}