"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAddBlueprint } from "@/app/lib/hooks/useAddBlueprint";
import { useUpdateBlueprint } from "@/app/lib/hooks/useUpdateBlueprint";
import type { Blueprint } from "@/app/lib/types";

export default function BlueprintForm({
  mode,
  initialData,
}: {
  mode: "create" | "edit";
  initialData?: Blueprint;
}) {
  const router = useRouter();
  const { mutate: addBlueprint, isPending: isAdding } = useAddBlueprint();
  const { mutate: updateBlueprint, isPending: isUpdating } = useUpdateBlueprint();

  const [title, setTitle] = useState(initialData?.title ?? "");
  const [shortDescription, setShortDescription] = useState(initialData?.shortDescription ?? "");
  const [fullDescription, setFullDescription] = useState(initialData?.fullDescription ?? "");
  const [category, setCategory] = useState(initialData?.category ?? "");
  const [difficulty, setDifficulty] = useState(initialData?.difficulty ?? "Beginner");
  const [estimatedDuration, setEstimatedDuration] = useState(initialData?.estimatedDuration ?? "");
  const [skillTagsInput, setSkillTagsInput] = useState(initialData?.skillTags?.join(", ") ?? "");
  const [learningGoal, setLearningGoal] = useState(initialData?.learningGoal ?? "");
  const [coverImageUrl, setCoverImageUrl] = useState(initialData?.coverImageUrl ?? "");
  const [resourceLink, setResourceLink] = useState(initialData?.resourceLink ?? "");

  const isPending = isAdding || isUpdating;

  function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  const payload = {
    title,
    shortDescription,
    fullDescription,
    category,
    difficulty,
    estimatedDuration,
    skillTags: skillTagsInput.split(",").map((s) => s.trim()).filter(Boolean),
    learningGoal,
    resourceLink: resourceLink || undefined,
    coverImageUrl: coverImageUrl || undefined,
  };

  if (mode === "create") {
    addBlueprint(payload, {
      onSuccess: () => router.push("/dashboard/user/blueprints"),
    });
  } else if (initialData) {
    updateBlueprint(
      { id: initialData._id, data: payload },
      { onSuccess: () => router.push("/dashboard/user/blueprints") }
    );
  }
}

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg mx-auto px-1 sm:px-0">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border rounded px-3 py-2 text-sm sm:text-base"
        required
      />

      <textarea
        value={shortDescription}
        onChange={(e) => setShortDescription(e.target.value)}
        placeholder="Short Description (a one-line summary)"
        className="w-full border rounded px-3 py-2 text-sm sm:text-base"
        rows={2}
        required
      />

      <div>
        <textarea
          value={fullDescription}
          onChange={(e) => setFullDescription(e.target.value)}
          placeholder="Full Description (minimum 30 characters)"
          className="w-full border rounded px-3 py-2 text-sm sm:text-base"
          rows={5}
          required
          minLength={30}
        />
        <p className="text-xs text-gray-500 mt-1">
          {fullDescription.length}/30 characters minimum
        </p>
      </div>

      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="w-full border rounded px-3 py-2 text-sm sm:text-base"
        required
      />

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value as Blueprint["difficulty"])}
        className="w-full border rounded px-3 py-2 text-sm sm:text-base"
      >
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <input
        value={estimatedDuration}
        onChange={(e) => setEstimatedDuration(e.target.value)}
        placeholder="Estimated Duration (e.g. 3 months)"
        className="w-full border rounded px-3 py-2 text-sm sm:text-base"
        required
      />

      <input
        value={skillTagsInput}
        onChange={(e) => setSkillTagsInput(e.target.value)}
        placeholder="Skill Tags (comma separated, e.g. React, Node.js, MongoDB)"
        className="w-full border rounded px-3 py-2 text-sm sm:text-base"
        required
      />

      <textarea
        value={learningGoal}
        onChange={(e) => setLearningGoal(e.target.value)}
        placeholder="Learning Goal"
        className="w-full border rounded px-3 py-2 text-sm sm:text-base"
        rows={3}
        required
      />

      <input
        value={resourceLink}
        onChange={(e) => setResourceLink(e.target.value)}
        placeholder="Resource Link (optional, must be a valid URL)"
        type="url"
        className="w-full border rounded px-3 py-2 text-sm sm:text-base"
      />

      <input
        value={coverImageUrl}
        onChange={(e) => setCoverImageUrl(e.target.value)}
        placeholder="Cover Image URL (optional, must be a valid URL)"
        type="url"
        className="w-full border rounded px-3 py-2 text-sm sm:text-base"
      />

      <button
        disabled={isPending}
        className="w-full sm:w-auto bg-black text-white px-4 py-2 rounded disabled:opacity-50 text-sm sm:text-base"
      >
        {isPending ? "Saving..." : mode === "create" ? "Add Blueprint" : "Update Blueprint"}
      </button>
    </form>
  );
}