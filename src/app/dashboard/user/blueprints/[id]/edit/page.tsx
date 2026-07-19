import { apiServer } from "@/app/lib/api-server";
import type { ApiResponse, Blueprint } from "@/app/lib/types";
import BlueprintForm from "@/app/components/dashboard/user/BlueprintForm";

export default async function EditBlueprintPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await apiServer<ApiResponse<Blueprint>>(`/api/blueprints/${id}`);
  const blueprint = res.data;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Blueprint</h1>
      <BlueprintForm mode="edit" initialData={blueprint} />
    </div>
  );
}