"use client";

import { motion } from "framer-motion";
import { FiCpu, FiUsers, FiLayers, FiShield } from "react-icons/fi";

const FEATURES = [
  { icon: FiCpu, title: "AI-Powered", description: "Blueprint generation, reviews, and recommendations powered by Gemini and Groq." },
  { icon: FiUsers, title: "Community Driven", description: "Content verified by real user reviews and ratings." },
  { icon: FiLayers, title: "Structured Roadmaps", description: "Every blueprint is organized step by step, with zero confusion." },
  { icon: FiShield, title: "Quality Checked", description: "AI review scoring ensures every blueprint meets a quality standard." },
];

export default function FeaturesSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-8 sm:mb-12"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Why SkillPilot
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card p-5"
              >
                <Icon size={22} style={{ color: "var(--brand-accent)" }} className="mb-3" />
                <h3 className="font-semibold mb-1.5 text-sm" style={{ color: "var(--text-primary)" }}>
                  {f.title}
                </h3>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}