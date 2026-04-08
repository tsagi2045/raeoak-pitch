"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import QuestionCard from "@/components/QuestionCard";
import BottomBar from "@/components/BottomBar";
import Toast from "@/components/Toast";
import {
  categories,
  totalQuestions,
  type Answers,
  type Answer,
} from "@/lib/questions";

const STORAGE_KEY = "raeoak-qa-answers";

function loadAnswers(): Answers {
  if (typeof window === "undefined") return {};
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveAnswers(answers: Answers) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {
    // ignore
  }
}

function countAnswered(answers: Answers): number {
  return Object.values(answers).filter((a) => {
    if (a.radio) return true;
    if (a.checkboxes && a.checkboxes.length > 0) return true;
    if (a.text && a.text.trim().length > 0) return true;
    return false;
  }).length;
}

export default function Home() {
  const [answers, setAnswers] = useState<Answers>({});
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [toast, setToast] = useState({ visible: false, message: "" });
  const [mounted, setMounted] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAnswers(loadAnswers());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      saveAnswers(answers);
    }
  }, [answers, mounted]);

  const handleAnswerChange = useCallback(
    (questionId: string, answer: Answer) => {
      setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    },
    []
  );

  const handleCategoryChange = useCallback((id: string) => {
    setActiveCategory(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const showToast = useCallback((message: string) => {
    setToast({ visible: true, message });
  }, []);

  const hideToast = useCallback(() => {
    setToast({ visible: false, message: "" });
  }, []);

  const handleSubmit = useCallback(() => {
    const data = {
      submittedAt: new Date().toISOString(),
      answers: Object.fromEntries(
        Object.entries(answers).map(([id, a]) => [
          id,
          {
            ...(a.radio ? { selected: a.radio } : {}),
            ...(a.checkboxes && a.checkboxes.length > 0
              ? { checked: a.checkboxes }
              : {}),
            ...(a.text && a.text.trim() ? { text: a.text.trim() } : {}),
          },
        ])
      ),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `라이옥-사전질문지-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast("응답이 다운로드되었습니다");
  }, [answers, showToast]);

  const handleReset = useCallback(() => {
    if (window.confirm("모든 응답을 초기화하시겠습니까?")) {
      setAnswers({});
      localStorage.removeItem(STORAGE_KEY);
      showToast("응답이 초기화되었습니다");
    }
  }, [showToast]);

  const activeCat = categories.find((c) => c.id === activeCategory)!;
  const answered = countAnswered(answers);
  const isComplete = answered === totalQuestions;

  return (
    <>
      <Header
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        answers={answers}
      />

      <main
        ref={mainRef}
        className="mx-auto w-full max-w-[980px] px-[var(--space-6)] pt-[var(--space-8)] pb-[100px]"
      >
        {/* Category Title */}
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 32px)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-1px",
            color: "var(--text-primary)",
            marginBottom: "var(--space-8)",
          }}
        >
          {activeCat.label}. {activeCat.title}
        </h2>

        {/* Question Cards */}
        <div className="flex flex-col gap-[var(--space-3)]">
          {activeCat.questions.map((q) => (
            <QuestionCard
              key={q.id}
              question={q}
              answer={answers[q.id] ?? {}}
              onChange={(a) => handleAnswerChange(q.id, a)}
            />
          ))}
        </div>

        {/* Category Navigation */}
        <div className="mt-[var(--space-10)] flex justify-between">
          {activeCategory !== categories[0].id ? (
            <button
              onClick={() => {
                const idx = categories.findIndex(
                  (c) => c.id === activeCategory
                );
                if (idx > 0) handleCategoryChange(categories[idx - 1].id);
              }}
              className="transition-opacity duration-150 hover:opacity-80 active:scale-[0.97]"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 24px",
                borderRadius: "var(--radius-pill)",
                background: "var(--bg-surface)",
                color: "var(--text-secondary)",
              }}
            >
              ← 이전
            </button>
          ) : (
            <div />
          )}
          {activeCategory !== categories[categories.length - 1].id ? (
            <button
              onClick={() => {
                const idx = categories.findIndex(
                  (c) => c.id === activeCategory
                );
                if (idx < categories.length - 1)
                  handleCategoryChange(categories[idx + 1].id);
              }}
              className="transition-opacity duration-150 hover:opacity-80 active:scale-[0.97]"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 24px",
                borderRadius: "var(--radius-pill)",
                background: "var(--accent)",
                color: "#ffffff",
              }}
            >
              다음 →
            </button>
          ) : (
            <div />
          )}
        </div>
      </main>

      <BottomBar
        onSubmit={handleSubmit}
        onReset={handleReset}
        isComplete={isComplete}
        answeredCount={answered}
        totalCount={totalQuestions}
      />

      <Toast message={toast.message} visible={toast.visible} onHide={hideToast} />
    </>
  );
}
