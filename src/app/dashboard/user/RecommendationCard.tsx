"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { FiZap } from "react-icons/fi";
import { apiClient } from "@/app/lib/api-client";
import type { ApiSuccess, AIRecommendation } from "@/app/lib/types";

export default function RecommendationCard() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIRecommendation | null>(null);
  const [goal, setGoal] = useState("");

  async function handleGetRecommendation() {
    if (!goal) {
      toast.error("Please enter your goal first");
      return;
    }
    setLoading(true);
    try {
      const res = await apiClient<ApiSuccess<AIRecommendation>>("/api/ai/recommend", {
        method: "POST",
        body: JSON.stringify({ goal }),
      });
      setResult(res.data);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to get recommendation";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card card--blueprint p-4 sm:p-5">
      <h2
        className="font-medium mb-3 flex items-center gap-1.5 text-base"
        style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
      >
        <FiZap size={16} style={{ color: "var(--brand-accent)" }} />
        AI Recommendation
      </h2>

      <div className="flex flex-col sm:flex-row gap-2 mb-3">
        <input
          placeholder="Enter your career goal..."
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="flex-1 rounded-md border px-3 py-2 text-sm w-full outline-none"
          style={{
            backgroundColor: "var(--bg-surface-raised)",
            borderColor: "var(--border-default)",
            color: "var(--text-primary)",
          }}
        />
        <button
          type="button"
          onClick={handleGetRecommendation}
          disabled={loading}
          className="btn-primary text-sm px-4 whitespace-nowrap disabled:opacity-60"
        >
          {loading ? "..." : "Ask AI"}
        </button>
      </div>

      {result && (
        <div className="flex flex-col gap-3 mt-2">
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {result.reasoning}
          </p>

          {result.recommendedCategories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {result.recommendedCategories.map((c) => (
                <span key={c} className="badge-ai">
                  {c}
                </span>
              ))}
            </div>
          )}

          {result.suggestedNextSkills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {result.suggestedNextSkills.map((s) => (
                <span key={s} className="skill-tag">
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}