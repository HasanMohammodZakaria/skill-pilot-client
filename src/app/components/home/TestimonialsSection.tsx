"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Review } from "@/app/lib/types";

export default function TestimonialsSection({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
const [visibleCount, setVisibleCount] = useState(1);

useEffect(() => {
  function updateVisibleCount() {
    const next = window.innerWidth >= 640 ? 3 : 1;
    setVisibleCount((prev) => {
      if (prev !== next) {
        setIndex(0);
      }
      return next;
    });
  }
  updateVisibleCount();
  window.addEventListener("resize", updateVisibleCount);
  return () => window.removeEventListener("resize", updateVisibleCount);
}, []);

  if (reviews.length === 0) return null;

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }
  function next() {
    setIndex((i) => Math.min(maxIndex, i + 1));
  }

  const gapRem = visibleCount === 1 ? 1.25 : 1.5;
  const slidePercent = 100 / visibleCount;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="flex items-end justify-between mb-8 sm:mb-10">
        <div>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            What Learners Say
          </h2>
          <p className="text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
            Real feedback from real learners using SkillPilot.
          </p>
        </div>

        <div className="hidden sm:flex gap-2">
          <button
            type="button"
            onClick={prev}
            disabled={index === 0}
            className="w-9 h-9 rounded-full border flex items-center justify-center disabled:opacity-40"
            style={{ borderColor: "var(--border-default)", color: "var(--text-primary)" }}
            aria-label="Previous"
          >
            <FiChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={index === maxIndex}
            className="w-9 h-9 rounded-full border flex items-center justify-center disabled:opacity-40"
            style={{ borderColor: "var(--border-default)", color: "var(--text-primary)" }}
            aria-label="Next"
          >
            <FiChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-5 sm:gap-6 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(-${index} * (${slidePercent}% + ${gapRem / visibleCount}rem)))`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review._id}
              className="card p-6 flex flex-col gap-4 shrink-0 w-full sm:w-[calc((100%-3rem)/3)]"
            >
              <span
                className="text-4xl leading-none"
                style={{ color: "var(--brand-accent)", fontFamily: "var(--font-display)" }}
              >
              &ldquo;
              </span>
              <p
                className="text-sm leading-relaxed flex-1 line-clamp-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {review.comment}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div
                  className="relative w-10 h-10 rounded-full overflow-hidden shrink-0"
                  style={{ backgroundColor: "var(--bg-surface-raised)" }}
                >
                  {review.userImageUrl ? (
                    <Image
                      src={review.userImageUrl}
                      alt={review.userName}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-sm font-semibold"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {review.userName.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {review.userName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex sm:hidden gap-2 justify-center mt-6">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          className="w-9 h-9 rounded-full border flex items-center justify-center disabled:opacity-40"
          style={{ borderColor: "var(--border-default)", color: "var(--text-primary)" }}
          aria-label="Previous"
        >
          <FiChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={next}
          disabled={index === maxIndex}
          className="w-9 h-9 rounded-full border flex items-center justify-center disabled:opacity-40"
          style={{ borderColor: "var(--border-default)", color: "var(--text-primary)" }}
          aria-label="Next"
        >
          <FiChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}