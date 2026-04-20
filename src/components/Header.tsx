"use client";

import { categories, totalQuestions, type Answers } from "@/lib/questions";
import CategoryTabs from "./CategoryTabs";

interface HeaderProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
  answers: Answers;
}

function countAnswered(answers: Answers): number {
  return Object.values(answers).filter((a) => {
    if (a.radio) return true;
    if (a.checkboxes && a.checkboxes.length > 0) return true;
    if (a.text && a.text.trim().length > 0) return true;
    return false;
  }).length;
}

function countCategoryAnswered(categoryId: string, answers: Answers): number {
  const cat = categories.find((c) => c.id === categoryId);
  if (!cat) return 0;
  return cat.questions.filter((q) => {
    const a = answers[q.id];
    if (!a) return false;
    if (a.radio) return true;
    if (a.checkboxes && a.checkboxes.length > 0) return true;
    if (a.text && a.text.trim().length > 0) return true;
    return false;
  }).length;
}

export default function Header({
  activeCategory,
  onCategoryChange,
  answers,
}: HeaderProps) {
  const answered = countAnswered(answers);
  const progress = (answered / totalQuestions) * 100;
  const isComplete = answered === totalQuestions;

  return (
    <header
      className="sticky z-30"
      style={{
        top: "48px",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="mx-auto max-w-[980px] px-[var(--space-6)]">
        {/* Title + Progress Count */}
        <div className="flex items-center justify-between pt-[var(--space-5)] pb-[var(--space-3)]">
          <h1
            className="font-bold text-[var(--text-primary)]"
            style={{
              fontSize: "22px",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              fontWeight: 700,
            }}
          >
            라이옥 가맹점 모집 랜딩페이지 — 사전 질문지
          </h1>
          <span
            className="shrink-0"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--text-secondary)",
            }}
          >
            {answered} / {totalQuestions}
          </span>
        </div>

        {/* Progress Bar */}
        <div
          className="w-full overflow-hidden"
          style={{
            height: "3px",
            borderRadius: "var(--radius-pill)",
            background: "var(--bg-surface)",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              borderRadius: "var(--radius-pill)",
              background: isComplete
                ? "var(--state-success)"
                : "var(--accent)",
              transition: "width 500ms ease-out",
            }}
          />
        </div>

        {/* Category Tabs */}
        <div className="py-[var(--space-3)]">
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={onCategoryChange}
            getCategoryProgress={(id) => {
              const cat = categories.find((c) => c.id === id);
              const total = cat?.questions.length ?? 0;
              const done = countCategoryAnswered(id, answers);
              return { done, total };
            }}
          />
        </div>
      </div>
    </header>
  );
}
