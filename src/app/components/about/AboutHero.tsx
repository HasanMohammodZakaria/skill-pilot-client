"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <span className="badge-ai mb-4 inline-block">About SkillPilot</span>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Your AI-Powered Career & Learning Companion
        </h1>
        <p className="text-sm sm:text-base lg:text-lg px-2 sm:px-0" style={{ color: "var(--text-secondary)" }}>
  SkillPilot helps you discover the right learning path, follow structured
  blueprints to build real skills, and get AI guidance at every step.
</p>
      </motion.div>
    </section>
  );
}