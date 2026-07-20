"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiZap, FiCpu, FiTrendingUp, FiArrowRight } from "react-icons/fi";

const features = [
  {
    icon: <FiZap size={22} />,
    title: "Instant Blueprint Generation",
    description:
      "Describe your career goal and let AI draft a complete learning roadmap — title, skills, timeline, and step-by-step plan — in seconds.",
  },
  {
    icon: <FiTrendingUp size={22} />,
    title: "Smart Recommendations",
    description:
      "Get personalized category and skill suggestions based on your goals, so you always know what to learn next.",
  },
  {
    icon: <FiCpu size={22} />,
    title: "Powered by Modern LLMs",
    description:
      "Built on Google Gemini for structured reasoning and Groq for fast, conversational assistance across the platform.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }),
};

export default function AIHighlightSection() {
  return (
    <section
      className="w-full py-14 sm:py-20"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <motion.span
            custom={0}
            variants={fadeUp}
            className="badge-ai inline-flex items-center gap-1.5 mb-4"
          >
            <FiZap size={12} />
            AI at the Core
          </motion.span>
          <motion.h2
            custom={0.1}
            variants={fadeUp}
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Learning, Reimagined with AI
          </motion.h2>
          <motion.p
            custom={0.2}
            variants={fadeUp}
            className="text-sm sm:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            SkillPilot does not just list courses — it thinks alongside you, generating
            and refining learning paths tailored to your exact goals.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i * 0.1}
              variants={fadeUp}
              className="card card--blueprint p-6 flex flex-col gap-3"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--brand-accent) 15%, transparent)",
                  color: "var(--brand-accent)",
                }}
              >
                {feature.icon}
              </div>
              <h3
                className="font-semibold text-base"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}
          variants={fadeUp}
          className="flex justify-center"
        >
          <Link
            href="/dashboard/user/blueprints/new"
            className="btn-primary flex items-center gap-2 text-sm sm:text-base"
          >
            <FiZap size={16} />
            Try AI Generation Now
            <FiArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}