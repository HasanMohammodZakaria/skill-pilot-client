"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <span className="badge-ai mb-4 inline-block">Get in Touch</span>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Contact Us
        </h1>
        <p
          className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Have a question, feedback, or a partnership idea? Fill out the form below
          and our team will get back to you as soon as possible.
        </p>
      </motion.div>
    </section>
  );
}