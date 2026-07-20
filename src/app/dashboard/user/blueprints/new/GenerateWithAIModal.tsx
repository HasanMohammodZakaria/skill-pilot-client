"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { FiX, FiZap } from "react-icons/fi";
import { apiClient } from "@/app/lib/api-client";
import type { ApiSuccess, AIGeneratedBlueprint, DifficultyLevel } from "@/app/lib/types";

interface Props {
  onGenerated: (result: AIGeneratedBlueprint) => void;
  onClose: () => void;
}

const LEVELS: DifficultyLevel[] = ["Beginner", "Intermediate", "Advanced"];

const inputStyle = {
  backgroundColor: "var(--bg-surface-raised)",
  borderColor: "var(--border-default)",
  color: "var(--text-primary)",
};

export default function GenerateWithAIModal({ onGenerated, onClose }: Props) {
  const [loading, setLoading] = useState(false);
  const [targetRole, setTargetRole] = useState("");
  const [currentLevel, setCurrentLevel] = useState<DifficultyLevel>("Beginner");
  const [timeCommitment, setTimeCommitment] = useState("");
  const [focusAreas, setFocusAreas] = useState("");

  async function handleGenerate() {
    if (!targetRole || !timeCommitment) {
      toast.error("Please provide target role and time commitment");
      return;
    }
    setLoading(true);
    try {
      const res = await apiClient<ApiSuccess<AIGeneratedBlueprint>>(
        "/api/ai/generate-blueprint",
        {
          method: "POST",
          body: JSON.stringify({
            targetRole,
            currentLevel,
            timeCommitment,
            focusAreas: focusAreas
              .split(",")
              .map((f) => f.trim())
              .filter(Boolean),
          }),
        }
      );
      onGenerated(res.data);
      toast.success("AI blueprint generated — review the form below");
      onClose();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to generate blueprint";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-80 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        className="card w-full sm:max-w-md max-h-[90vh] overflow-y-auto p-5 sm:p-6 rounded-b-none sm:rounded-(--radius-card)"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-lg font-semibold flex items-center gap-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            <FiZap size={18} style={{ color: "var(--brand-accent)" }} />
            Generate with AI
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full transition-opacity hover:opacity-70"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Close"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <input
            placeholder="Target role / goal (e.g. Frontend Developer)"
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value)}
            className="rounded-md border px-3 py-2 text-sm w-full outline-none"
            style={inputStyle}
          />
          <select
            value={currentLevel}
            onChange={(e) => setCurrentLevel(e.target.value as DifficultyLevel)}
            className="rounded-md border px-3 py-2 text-sm w-full outline-none"
            style={inputStyle}
          >
            {LEVELS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
          <input
            placeholder="Time commitment (e.g. 5 hours/week)"
            value={timeCommitment}
            onChange={(e) => setTimeCommitment(e.target.value)}
            className="rounded-md border px-3 py-2 text-sm w-full outline-none"
            style={inputStyle}
          />
          <input
            placeholder="Focus areas (comma separated, optional)"
            value={focusAreas}
            onChange={(e) => setFocusAreas(e.target.value)}
            className="rounded-md border px-3 py-2 text-sm w-full outline-none"
            style={inputStyle}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-5">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-full border px-3 py-2.5 text-sm font-medium order-2 sm:order-1"
            style={{ borderColor: "var(--border-default)", color: "var(--text-primary)" }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading}
            className="btn-primary flex-1 text-sm order-1 sm:order-2 disabled:opacity-60"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      </div>
    </div>
  );
}