"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiZap } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  return (
    <section
       className="relative w-full flex items-center sm:overflow-hidden"
  style={{
    minHeight: "60vh",
    backgroundColor: "var(--bg-base)",
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Text content */}
        <div className="flex flex-col gap-5 sm:gap-6 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
          <motion.span
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="badge-ai inline-flex items-center gap-1.5 w-fit"
          >
            <FiZap size={12} />
            AI-Powered Learning Paths
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Chart Your Career Path with{" "}
            <span style={{ color: "var(--brand-primary)" }}>Confidence</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="text-sm sm:text-base max-w-md"
            style={{ color: "var(--text-secondary)" }}
          >
            SkillPilot turns your career goals into structured, AI-generated learning
            blueprints — so you always know exactly what to learn next.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2"
          >
            <Link
              href="/blueprints"
              className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Explore Blueprints
              <FiArrowRight size={16} />
            </Link>
            <Link
              href="/dashboard/user/blueprints/new"
              className="flex items-center justify-center gap-2 text-sm sm:text-base rounded-full px-6 py-2.5 border font-medium transition-opacity hover:opacity-80"
              style={{
                borderColor: "var(--border-default)",
                color: "var(--text-primary)",
              }}
            >
              <FiZap size={16} style={{ color: "var(--brand-accent)" }} />
              Generate with AI
            </Link>
          </motion.div>
        </div>

        {/* Right: Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative order-1 lg:order-2 w-full flex justify-center"
        >
          <div
            className="card card--blueprint relative w-full max-w-xl aspect-4/3 overflow-hidden"
  style={{ padding: 0 }}
          >
            <Image
              src="/heroimage.png"
              alt="AI-generated learning roadmap illustration"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade transition into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg-base))",
        }}
      />
    </section>
  );
}