"use client";

import { categories } from "@/lib/questions";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
  getCategoryProgress: (id: string) => { done: number; total: number };
}

export default function CategoryTabs({
  activeCategory,
  onCategoryChange,
  getCategoryProgress,
}: CategoryTabsProps) {
  return (
    <div className="scrollbar-hide flex gap-[var(--space-1)] overflow-x-auto">
      {categories.map((cat) => {
        const isActive = cat.id === activeCategory;
        const { done, total } = getCategoryProgress(cat.id);

        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className="shrink-0 flex items-center gap-[var(--space-2)] transition-all duration-150 ease-out active:scale-[0.97]"
            style={{
              borderRadius: "var(--radius-pill)",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 600,
              lineHeight: 1,
              background: isActive ? "var(--accent)" : "var(--bg-surface)",
              color: isActive ? "#ffffff" : "var(--text-secondary)",
            }}
          >
            <span>
              {cat.label}. {cat.title}
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 500,
                padding: "2px 6px",
                borderRadius: "var(--radius-pill)",
                background: isActive
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(0,0,0,0.05)",
              }}
            >
              {done}/{total}
            </span>
          </button>
        );
      })}
    </div>
  );
}
