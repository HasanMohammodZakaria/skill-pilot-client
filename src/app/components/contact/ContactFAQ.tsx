"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const FAQS = [
  {
    question: "How does the AI blueprint generator work?",
    answer:
      "You provide your target role, current skill level, and available time commitment. Our AI analyzes this input and generates a structured learning roadmap tailored specifically to your goals.",
  },
  {
    question: "Is SkillPilot free to use?",
    answer:
      "Yes, browsing blueprints and creating an account is completely free. Some advanced AI features may have usage limits depending on your plan.",
  },
  {
    question: "Can I contribute my own learning blueprint?",
    answer:
      "Absolutely. Once you sign up, you can create and publish your own blueprints for others to follow, and the community can leave reviews on them.",
  },
  {
    question: "How accurate are the AI-generated reviews?",
    answer:
      "AI reviews are generated to assess completeness and clarity of a blueprint. They're a helpful signal, but we also encourage real user reviews for a fuller picture.",
  },
  {
    question: "How do I report an issue or a bug?",
    answer:
      "Use the contact form above to reach out to our support team, and we'll get back to you as soon as possible.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-8 sm:mb-12"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                >
                  <span
                    className="text-sm sm:text-base font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                    style={{ color: "var(--brand-primary)" }}
                  >
                    <FiChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <p
                        className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}