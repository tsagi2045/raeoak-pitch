"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import QuestionCard from "@/components/QuestionCard";
import BriefingTab from "@/components/BriefingTab";
import FileUpload from "@/components/FileUpload";
import BottomBar from "@/components/BottomBar";
import Toast from "@/components/Toast";
import { BRIEFING_TAB_ID } from "@/components/CategoryTabs";
import {
  categories,
  totalQuestions,
  type Answers,
  type Answer,
} from "@/lib/questions";
import {
  loadAnswers as loadFromSupabase,
  saveAnswer,
  clearAllAnswers,
  migrateLocalToSupabase,
  type UploadedFile,
} from "@/lib/storage";

const FILES_KEY = "raeoak-qa-files";

function countAnswered(answers: Answers): number {
  return Object.values(answers).filter((a) => {
    if (a.radio) return true;
    if (a.checkboxes && a.checkboxes.length > 0) return true;
    if (a.text && a.text.trim().length > 0) return true;
    return false;
  }).length;
}

const allTabIds = [BRIEFING_TAB_ID, ...categories.map((c) => c.id), "_files"];

function tabIdToHash(id: string): string {
  if (id === BRIEFING_TAB_ID) return "#briefing";
  if (id === "_files") return "#files";
  return `#${id}`;
}

function hashToTabId(hash: string): string | null {
  if (!hash) return null;
  const h = hash.replace("#", "");
  if (h === "briefing") return BRIEFING_TAB_ID;
  if (h === "files") return "_files";
  if (allTabIds.includes(h)) return h;
  return null;
}

export default function Home() {
  const [answers, setAnswers] = useState<Answers>({});
  const [activeCategory, setActiveCategory] = useState(() => {
    if (typeof window !== "undefined") {
      return hashToTabId(window.location.hash) ?? BRIEFING_TAB_ID;
    }
    return BRIEFING_TAB_ID;
  });
  const [toast, setToast] = useState({ visible: false, message: "" });
  const [mounted, setMounted] = useState(false);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const debounceRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const mainRef = useRef<HTMLDivElement>(null);

  const isBriefing = activeCategory === BRIEFING_TAB_ID;
  const isFiles = activeCategory === "_files";

  useEffect(() => {
    (async () => {
      await migrateLocalToSupabase();
      const loaded = await loadFromSupabase();
      setAnswers(loaded);
      // Load files from localStorage
      try {
        const savedFiles = localStorage.getItem(FILES_KEY);
        if (savedFiles) setFiles(JSON.parse(savedFiles));
      } catch {}
      setMounted(true);
    })();
  }, []);

  useEffect(() => {
    if (mounted && files.length > 0) {
      localStorage.setItem(FILES_KEY, JSON.stringify(files));
    }
  }, [files, mounted]);

  const handleAnswerChange = useCallback(
    (questionId: string, answer: Answer) => {
      setAnswers((prev) => ({ ...prev, [questionId]: answer }));
      if (debounceRef.current[questionId]) {
        clearTimeout(debounceRef.current[questionId]);
      }
      debounceRef.current[questionId] = setTimeout(() => {
        saveAnswer(questionId, answer);
      }, 300);
    },
    []
  );

  const handleCategoryChange = useCallback((id: string) => {
    setActiveCategory(id);
    window.history.replaceState(null, "", tabIdToHash(id));
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
      files: files.map((f) => ({
        name: f.originalName,
        url: f.url,
      })),
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
  }, [answers, files, showToast]);

  const handleReset = useCallback(() => {
    if (window.confirm("모든 응답을 초기화하시겠습니까?")) {
      setAnswers({});
      setFiles([]);
      localStorage.removeItem(FILES_KEY);
      clearAllAnswers();
      showToast("응답이 초기화되었습니다");
    }
  }, [showToast]);

  const activeCat = categories.find((c) => c.id === activeCategory);
  const answered = countAnswered(answers);
  const isComplete = answered === totalQuestions;

  const currentTabIdx = allTabIds.indexOf(activeCategory);
  const hasPrev = currentTabIdx > 0;
  const hasNext = currentTabIdx < allTabIds.length - 1;

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
        {isBriefing ? (
          <>
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
              미팅 브리핑
            </h2>
            <BriefingTab />
          </>
        ) : isFiles ? (
          <>
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
              파일 첨부
            </h2>
            <div
              style={{
                background: "var(--bg-primary)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-5)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  marginBottom: "var(--space-4)",
                }}
              >
                미팅 관련 자료나 참고 파일을 첨부해주세요.
              </p>
              <FileUpload files={files} onFilesChange={setFiles} />
            </div>
          </>
        ) : (
          <>
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
              {activeCat!.label}. {activeCat!.title}
            </h2>

            <div className="flex flex-col gap-[var(--space-3)]">
              {activeCat!.questions.map((q) => (
                <QuestionCard
                  key={q.id}
                  question={q}
                  answer={answers[q.id] ?? {}}
                  onChange={(a) => handleAnswerChange(q.id, a)}
                />
              ))}
            </div>
          </>
        )}

        {/* Tab Navigation */}
        <div className="mt-[var(--space-10)] flex justify-between">
          {hasPrev ? (
            <button
              onClick={() => handleCategoryChange(allTabIds[currentTabIdx - 1])}
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
          {hasNext ? (
            <button
              onClick={() => handleCategoryChange(allTabIds[currentTabIdx + 1])}
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
