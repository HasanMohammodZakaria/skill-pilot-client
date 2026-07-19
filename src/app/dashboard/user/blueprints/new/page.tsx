"use client";

import BlueprintForm from "@/app/components/dashboard/user/BlueprintForm";

export default function NewBlueprintPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Add New Blueprint</h1>
      <BlueprintForm mode="create" />
    </div>
  );
}