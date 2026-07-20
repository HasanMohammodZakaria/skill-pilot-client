"use client";

import { motion } from "framer-motion";
import { FiTarget, FiZap, FiBookOpen, FiTrendingUp } from "react-icons/fi";

const steps = [
  {
    icon: <FiTarget size={20} />,
    title: "Set Your Goal",
    description:
      "Tell us the role or skill you're aiming for — from Frontend Developer to Data Scientist.",
  },
  {
    icon: <FiZap size={20} />,
    title: "Generate a Blueprint",
    description:
      "Let AI instantly draft a structured learning roadmap tailored to your level and time commitment.",
  },
  {
    icon: <FiBookOpen size={20} />,
    title: "Follow the Roadmap",
    description:
      "Work through the step-by-step plan at your own pace, tracking progress along the way.",
  },
  {
    icon: <FiTrendingUp size={20} />,
    title: "Grow & Get Recommendations",
    description:
      "As you progress, get smart AI recommendations for what to learn next based on your goals.",
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

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <motion.h2
          custom={0}
          variants={fadeUp}
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          How SkillPilot Works
        </motion.h2>
        <motion.p
          custom={0.1}
          variants={fadeUp}
          className="text-sm sm:text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          From goal to growth in four simple steps.
        </motion.p>
      </motion.div>

      <div className="relative">
        {/* Timeline connector line — desktop horizontal, mobile vertical */}
        <div
          className="hidden sm:block absolute top-6 left-0 right-0 h-px"
          style={{ backgroundColor: "var(--border-default)" }}
        />
        <div
          className="sm:hidden absolute top-0 bottom-0 left-6 w-px"
          style={{ backgroundColor: "var(--border-default)" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-6 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i * 0.12}
              variants={fadeUp}
              className="relative flex sm:flex-col gap-4 sm:gap-0 sm:text-center"
            >
              {/* Step number circle */}
              <div
                className="relative z-10 shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold sm:mx-auto sm:mb-4"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "2px solid var(--brand-primary)",
                  color: "var(--brand-primary)",
                }}
              >
                {step.icon}
              </div>

              <div className="flex-1">
                <span
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: "var(--brand-accent)" }}
                >
                  STEP {i + 1}
                </span>
                <h3
                  className="font-semibold text-base mt-1 mb-1.5"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}