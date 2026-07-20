// "use client";

// import BlueprintForm from "@/app/components/dashboard/user/BlueprintForm";

// export default function NewBlueprintPage() {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-6">Add New Blueprint</h1>
//       <BlueprintForm mode="create" />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { FiZap } from "react-icons/fi";
import BlueprintForm from "@/app/components/dashboard/user/BlueprintForm";
import GenerateWithAIModal from "./GenerateWithAIModal";
import type { AIGeneratedBlueprint } from "@/app/lib/types";

export default function NewBlueprintPage() {
  const [showAIModal, setShowAIModal] = useState(false);
  const [aiInitialData, setAiInitialData] = useState<AIGeneratedBlueprint | null>(null);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <h1
          className="text-xl sm:text-2xl font-semibold"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Add New Blueprint
        </h1>
        <button
          type="button"
          onClick={() => setShowAIModal(true)}
          className="flex items-center justify-center gap-1.5 text-sm px-3 py-1.5 rounded-full self-start sm:self-auto"
          style={{
            backgroundColor: "var(--bg-surface-raised)",
            color: "var(--brand-accent)",
            border: "1px solid var(--border-default)",
          }}
        >
          <FiZap size={14} />
          Generate with AI
        </button>
      </div>

      <BlueprintForm
  key={aiInitialData ? "ai-filled" : "empty"}
  mode="create"
  aiData={aiInitialData ?? undefined}
/>
      {showAIModal && (
        <GenerateWithAIModal
          onGenerated={(result) => {
            setAiInitialData(result);
            setShowAIModal(false);
          }}
          onClose={() => setShowAIModal(false)}
        />
      )}
    </div>
  );
}