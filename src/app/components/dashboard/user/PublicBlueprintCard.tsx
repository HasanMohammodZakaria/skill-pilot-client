import Image from "next/image";
import Link from "next/link";
import type { Blueprint } from "@/app/lib/types";

export default function PublicBlueprintCard({ blueprint }: { blueprint: Blueprint }) {
  return (
    <div className="border rounded-lg overflow-hidden flex flex-col">
      <div className="relative w-full aspect-video bg-gray-800">
        {blueprint.coverImageUrl ? (
          <Image
            src={blueprint.coverImageUrl}
            alt={blueprint.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
            No Image
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4 space-y-2 flex-1 flex flex-col">
        <h3 className="font-semibold text-sm sm:text-base line-clamp-1">{blueprint.title}</h3>
        <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">{blueprint.shortDescription}</p>
        <p className="text-xs sm:text-sm text-gray-500">
          {blueprint.category} · {blueprint.difficulty}
        </p>

        <Link
          href={`/blueprints/${blueprint._id}`}
          className="mt-auto inline-block text-center bg-black text-white px-3 py-1.5 rounded text-xs sm:text-sm"
        >
          Details
        </Link>
      </div>
    </div>
  );
}