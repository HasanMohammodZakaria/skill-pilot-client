"use client";

import { useState } from "react";

export default function StarRating({
  value,
  onChange,
  readOnly = false,
}: {
  value: number;
  onChange?: (rating: number) => void;
  readOnly?: boolean;
}) {
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = readOnly ? star <= value : star <= (hoverValue || value);
        return (
          <button
            key={star}
            type="button"
            disabled={readOnly}
            onClick={() => onChange?.(star)}
            onMouseEnter={() => !readOnly && setHoverValue(star)}
            onMouseLeave={() => !readOnly && setHoverValue(0)}
            className={readOnly ? "cursor-default" : "cursor-pointer"}
            aria-label={`${star} star`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill={filled ? "#facc15" : "none"}
              stroke={filled ? "#facc15" : "#6b7280"}
              strokeWidth="1.5"
            >
              <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}