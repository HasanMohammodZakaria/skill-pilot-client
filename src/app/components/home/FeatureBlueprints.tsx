import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiClock } from "react-icons/fi";
import { getFeaturedBlueprints } from "@/app/lib/actions/blueprint.actions";

export default async function FeatureBlueprints() {
  const blueprints = await getFeaturedBlueprints();

  if (blueprints.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 sm:mb-10">
        <div>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Featured Blueprints
          </h2>
          <p className="text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
            Hand-picked learning paths to jumpstart your next skill.
          </p>
        </div>
        <Link
          href="/blueprints"
          className="text-sm font-medium flex items-center gap-1.5 whitespace-nowrap"
          style={{ color: "var(--brand-primary)" }}
        >
          View all
          <FiArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {blueprints.map((bp) => (
          <div key={bp._id} className="card flex flex-col overflow-hidden h-full">
            <div className="relative w-full aspect-16/10" style={{ backgroundColor: "var(--bg-surface-raised)" }}>
              {bp.coverImageUrl ? (
                <Image
                  src={bp.coverImageUrl}
                  alt={bp.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  No image
                </div>
              )}
              <span
                className="absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-full"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  color: "var(--brand-primary)",
                  border: "1px solid var(--border-default)",
                }}
              >
                {bp.category}
              </span>
            </div>

            <div className="flex flex-col flex-1 p-4 gap-2">
              <h3
                className="font-semibold text-base line-clamp-1"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
              >
                {bp.title}
              </h3>
              <p
                className="text-sm line-clamp-2 flex-1"
                style={{ color: "var(--text-secondary)" }}
              >
                {bp.shortDescription}
              </p>

              <div className="flex items-center gap-1.5 text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                <FiClock size={12} />
                {bp.estimatedDuration}
                <span className="skill-tag ml-auto">{bp.difficulty}</span>
              </div>

              <Link
                href={`/blueprints/${bp._id}`}
                className="btn-primary text-center text-sm mt-3 w-full"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}