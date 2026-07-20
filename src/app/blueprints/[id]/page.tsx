import Image from "next/image";
import { apiServer } from "@/app/lib/api-server";
import { getServerSession } from "@/app/lib/get-session";
import type { ApiResponse, Blueprint } from "@/app/lib/types";
import Link from "next/link";
import ReviewSection from "@/app/components/dashboard/user/ReviewSection";


export default async function BlueprintDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await apiServer<ApiResponse<Blueprint>>(`/api/blueprints/${id}`);
  const blueprint = res.data;
  const session = await getServerSession();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
      {blueprint.coverImageUrl && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-800">
          <Image
            src={blueprint.coverImageUrl}
            alt={blueprint.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
      )}

      <h1 className="text-xl sm:text-2xl font-bold">{blueprint.title}</h1>

      <p className="text-sm sm:text-base text-gray-400">{blueprint.shortDescription}</p>

      <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-500">
        <span className="border rounded px-2 py-1">{blueprint.category}</span>
        <span className="border rounded px-2 py-1">{blueprint.difficulty}</span>
        <span className="border rounded px-2 py-1">{blueprint.estimatedDuration}</span>
      </div>

      <div>
        <h2 className="font-semibold text-sm sm:text-base mb-1">Description</h2>
        <p className="text-sm sm:text-base text-gray-600 whitespace-pre-wrap">
          {blueprint.fullDescription}
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-sm sm:text-base mb-1">Learning Goal</h2>
        <p className="text-sm sm:text-base text-gray-600">{blueprint.learningGoal}</p>
      </div>

      {blueprint.skillTags && blueprint.skillTags.length > 0 && (
        <div>
          <h2 className="font-semibold text-sm sm:text-base mb-2">Skill Tags</h2>
          <div className="flex flex-wrap gap-2">
            {blueprint.skillTags.map((tag) => (
              <span key={tag} className="text-xs sm:text-sm border rounded-full px-3 py-1 text-gray-500">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {blueprint.resourceLink && (
        <Link
          href={blueprint.resourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm sm:text-base text-blue-600 underline"
        >
          View Resource
        </Link>
      )}

      <ReviewSection blueprintId={id} isLoggedIn={!!session} />
    </div>
  );
}