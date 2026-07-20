"use client";

import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Our Mission
          </h2>
          <p className="text-sm sm:text-base mb-3 sm:mb-4" style={{ color: "var(--text-secondary)" }}>
            With countless online courses and tutorials out there, finding the
            right path can be overwhelming. SkillPilot is a structured,
            community-driven, AI-assisted platform where every blueprint
            follows a clear roadmap.
          </p>
          <p className="text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
            We believe the clearer the learning path, the easier it is to
            reach your goal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card card--blueprint p-6 sm:p-8"
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <MissionPoint text="AI-generated personalized learning blueprints" />
            <MissionPoint text="Community reviews to verify quality" />
            <MissionPoint text="For every level — Beginner to Advanced" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MissionPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="mt-1 h-2 w-2 rounded-full shrink-0"
        style={{ backgroundColor: "var(--brand-primary)" }}
      />
      <p className="text-sm" style={{ color: "var(--text-primary)" }}>{text}</p>
    </div>
  );
}