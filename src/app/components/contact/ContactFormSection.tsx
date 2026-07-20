"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FiMail, FiClock, FiMessageCircle, FiSend } from "react-icons/fi";

export default function ContactFormSection() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function update(key: string, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      // TODO: connect to backend /api/contact endpoint once available
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Your message has been sent!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    backgroundColor: "var(--bg-surface-raised)",
    borderColor: "var(--border-default)",
    color: "var(--text-primary)",
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">
        {/* ---- Form ---- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="card p-6 sm:p-8"
        >
          <h2
            className="text-lg sm:text-xl font-semibold mb-5"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Send us a message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-secondary)" }}>
                Name
              </label>
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full rounded-md border px-3 py-2.5 text-sm"
                style={inputStyle}
              />
            </div>

            <div>
              <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-secondary)" }}>
                Email
              </label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full rounded-md border px-3 py-2.5 text-sm"
                style={inputStyle}
              />
            </div>

            <div>
              <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-secondary)" }}>
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell us what's on your mind..."
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="w-full rounded-md border px-3 py-2.5 text-sm resize-none"
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex items-center justify-center gap-2 mt-2"
            >
              {loading ? "Sending..." : (
                <>
                  Send Message
                  <FiSend size={15} />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* ---- Contact info ---- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <InfoCard
            icon={FiMail}
            title="Email"
            description="support@skillpilot.ai"
          />
          <InfoCard
            icon={FiClock}
            title="Response Time"
            description="We usually reply within 24-48 hours."
          />
          <InfoCard
            icon={FiMessageCircle}
            title="Feedback"
            description="Have a feature idea? We'd love to hear it."
          />
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
}) {
  return (
    <div className="card p-5 flex items-start gap-3">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: "var(--bg-surface-raised)", color: "var(--brand-primary)" }}
      >
        <Icon size={18} />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-0.5" style={{ color: "var(--text-primary)" }}>
          {title}
        </h3>
        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      </div>
    </div>
  );
}