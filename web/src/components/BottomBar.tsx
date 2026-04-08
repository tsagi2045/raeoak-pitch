"use client";

interface BottomBarProps {
  onSubmit: () => void;
  onReset: () => void;
  isComplete: boolean;
  answeredCount: number;
  totalCount: number;
}

export default function BottomBar({
  onSubmit,
  onReset,
  isComplete,
  answeredCount,
  totalCount,
}: BottomBarProps) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40"
      style={{
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(20px) saturate(180%)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="mx-auto flex max-w-[980px] items-center justify-between px-[var(--space-6)] py-[var(--space-3)]">
        <div className="flex items-center gap-[var(--space-3)]">
          {isComplete ? (
            <button
              onClick={onReset}
              className="transition-opacity duration-150 hover:opacity-90 active:scale-[0.97]"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 24px",
                borderRadius: "var(--radius-pill)",
                background: "transparent",
                color: "var(--state-error)",
                border: "1.5px solid rgba(255,59,48,0.2)",
              }}
            >
              초기화
            </button>
          ) : (
            <span
              className="hidden sm:block"
              style={{
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: 1.4,
                letterSpacing: "-0.1px",
                color: "var(--text-tertiary)",
              }}
            >
              답변은 자동으로 저장됩니다
            </span>
          )}
        </div>

        <div className="flex items-center gap-[var(--space-3)]">
          {isComplete && (
            <span
              className="hidden sm:block"
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--state-success)",
              }}
            >
              작성 완료됨
            </span>
          )}
          <button
            onClick={onSubmit}
            className="transition-opacity duration-150 hover:opacity-90 active:scale-[0.97]"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              padding: "10px 24px",
              borderRadius: "var(--radius-pill)",
              background: "var(--accent)",
              color: "#ffffff",
            }}
          >
            {answeredCount === 0
              ? "제출하기"
              : `제출하기 (${answeredCount}/${totalCount})`}
          </button>
        </div>
      </div>
    </div>
  );
}
