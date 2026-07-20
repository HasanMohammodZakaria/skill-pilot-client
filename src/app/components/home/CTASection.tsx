"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FiArrowRight, FiMail } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }),
};

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Subscribed! We'll keep you posted on new features.");
      setEmail("");
      setSubmitting(false);
    }, 600);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="card card--blueprint relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16 text-center flex flex-col items-center gap-6"
      >
        <motion.h2
          custom={0}
          variants={fadeUp}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Ready to Build Your Learning Path?
        </motion.h2>

        <motion.p
          custom={0.1}
          variants={fadeUp}
          className="text-sm sm:text-base max-w-md"
          style={{ color: "var(--text-secondary)" }}
        >
          Join learners who are turning their career goals into structured,
          AI-powered blueprints — start yours in under a minute.
        </motion.p>

        <motion.div
          custom={0.2}
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
        >
          <Link
            href="/dashboard/user/blueprints/new"
            className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Get Started Free
            <FiArrowRight size={16} />
          </Link>
          <Link
            href="/blueprints"
            className="flex items-center justify-center gap-2 text-sm sm:text-base rounded-full px-6 py-2.5 border font-medium transition-opacity hover:opacity-80"
            style={{ borderColor: "var(--border-default)", color: "var(--text-primary)" }}
          >
            Browse Blueprints
          </Link>
        </motion.div>

        <motion.div
          custom={0.3}
          variants={fadeUp}
          className="w-full max-w-md mt-4 pt-8"
          style={{ borderTop: "1px solid var(--border-default)" }}
        >
          <p className="text-sm font-medium mb-3" style={{ color: "var(--text-primary)" }}>
            Get product updates in your inbox
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <FiMail
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-secondary)" }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-md border pl-9 pr-3 py-2.5 text-sm outline-none"
                style={{
                  backgroundColor: "var(--bg-surface-raised)",
                  borderColor: "var(--border-default)",
                  color: "var(--text-primary)",
                }}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary text-sm px-5 whitespace-nowrap disabled:opacity-60"
            >
              {submitting ? "..." : "Subscribe"}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}