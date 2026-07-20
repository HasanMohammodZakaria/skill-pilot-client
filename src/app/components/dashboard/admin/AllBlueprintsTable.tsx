import Image from "next/image";
import type { AdminBlueprint } from "@/app/lib/types";
import StatusToggle from "./StatusToggle";
import DeleteBlueprintAdminButton from "./DeleteBlueprintAdminButton";

export default function AllBlueprintsTable({ blueprints }: { blueprints: AdminBlueprint[] }) {
  return (
    <div
      className="w-full overflow-x-auto rounded-lg border"
      style={{ borderColor: "var(--border-default)" }}
    >
      <table className="w-full border-collapse min-w-162.5">
        <thead>
          <tr
            className="text-left text-xs sm:text-sm"
            style={{ backgroundColor: "var(--bg-surface-raised)" }}
          >
            <th className="py-3 px-4 font-medium">Blueprint</th>
            <th className="py-3 px-4 font-medium">Category</th>
            <th className="py-3 px-4 font-medium">Difficulty</th>
            <th className="py-3 px-4 font-medium">Status</th>
            <th className="py-3 px-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blueprints.map((bp) => (
            <tr
              key={bp._id}
              className="text-xs sm:text-sm border-t"
              style={{ borderColor: "var(--border-default)" }}
            >
              <td className="py-3 px-4">
                <div className="flex items-center gap-3 max-w-55">
                  <div className="relative w-10 h-10 rounded overflow-hidden bg-gray-800 shrink-0">
                    {bp.coverImageUrl ? (
                      <Image src={bp.coverImageUrl} alt={bp.title} fill className="object-cover" sizes="40px" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-500">
                        N/A
                      </div>
                    )}
                  </div>
                  <span className="truncate">{bp.title}</span>
                </div>
              </td>
              <td className="py-3 px-4 whitespace-nowrap">{bp.category}</td>
              <td className="py-3 px-4 whitespace-nowrap">{bp.difficulty}</td>
              <td className="py-3 px-4">
                <StatusToggle id={bp._id} status={bp.status} />
              </td>
              <td className="py-3 px-4">
                <DeleteBlueprintAdminButton id={bp._id} title={bp.title} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {blueprints.length === 0 && (
        <p className="text-center text-sm text-gray-500 py-8">No blueprints found.</p>
      )}
    </div>
  );
}