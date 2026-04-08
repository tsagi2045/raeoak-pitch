"use client";

import { type Question, type Answer } from "@/lib/questions";

interface QuestionCardProps {
  question: Question;
  answer: Answer;
  onChange: (answer: Answer) => void;
}

export default function QuestionCard({
  question,
  answer,
  onChange,
}: QuestionCardProps) {
  const hasAnswer =
    !!answer.radio ||
    (answer.checkboxes && answer.checkboxes.length > 0) ||
    (answer.text && answer.text.trim().length > 0);

  return (
    <div
      style={{
        background: "var(--bg-primary)",
        borderRadius: "var(--radius-xl)",
        padding: "var(--space-5) var(--space-5)",
        border: hasAnswer
          ? "1px solid rgba(0,0,0,0.08)"
          : "1px solid rgba(0,0,0,0.04)",
        boxShadow: hasAnswer ? "var(--shadow-card)" : "none",
        transition: "border-color 150ms ease-out, box-shadow 150ms ease-out",
      }}
    >
      {/* Question number + text */}
      <div className="flex gap-[var(--space-2)]">
        <span
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--text-tertiary)",
            lineHeight: 1.6,
            letterSpacing: "-0.1px",
            flexShrink: 0,
          }}
        >
          {question.id}
        </span>
        <p
          style={{
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: 1.6,
            letterSpacing: "-0.3px",
            color: "var(--text-primary)",
          }}
        >
          {question.question}
        </p>
      </div>

      {/* Description block */}
      {question.descriptions && question.descriptions.length > 0 && (
        <div
          className="mt-[var(--space-3)]"
          style={{
            background: "rgba(0,0,0,0.02)",
            borderLeft: "2px solid rgba(0,0,0,0.06)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-3) var(--space-4)",
          }}
        >
          {question.descriptions.map((desc, i) => (
            <p
              key={i}
              style={{
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: 1.7,
                letterSpacing: "-0.1px",
                color: "var(--text-secondary)",
              }}
            >
              {desc}
            </p>
          ))}
        </div>
      )}

      {/* Radio options */}
      {question.type === "radio-text" && question.options && (
        <div className="mt-[var(--space-4)] flex flex-wrap gap-[var(--space-2)]">
          {question.options.map((option) => {
            const isSelected = answer.radio === option;
            return (
              <button
                key={option}
                onClick={() =>
                  onChange({
                    ...answer,
                    radio: isSelected ? undefined : option,
                  })
                }
                className="transition-all duration-150 ease-out active:scale-[0.97]"
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  padding: "8px 16px",
                  borderRadius: "var(--radius-pill)",
                  border: isSelected
                    ? "1.5px solid var(--accent)"
                    : "1.5px solid rgba(0,0,0,0.08)",
                  background: isSelected
                    ? "rgba(0,113,227,0.06)"
                    : "var(--bg-primary)",
                  color: isSelected
                    ? "var(--accent)"
                    : "var(--text-secondary)",
                }}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}

      {/* Checkbox options */}
      {question.type === "checkbox-text" && question.options && (
        <div className="mt-[var(--space-4)] flex flex-col gap-[var(--space-2)]">
          {question.options.map((option) => {
            const checked = answer.checkboxes?.includes(option) ?? false;
            return (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-[var(--space-3)]"
                style={{ fontSize: "14px", lineHeight: 1.6 }}
              >
                <span
                  className="flex shrink-0 items-center justify-center transition-all duration-150"
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "var(--radius-sm)",
                    border: checked
                      ? "1.5px solid var(--accent)"
                      : "1.5px solid rgba(0,0,0,0.12)",
                    background: checked
                      ? "var(--accent)"
                      : "var(--bg-primary)",
                  }}
                >
                  {checked && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2.5 6L5 8.5L9.5 3.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => {
                    const current = answer.checkboxes ?? [];
                    const next = checked
                      ? current.filter((c) => c !== option)
                      : [...current, option];
                    onChange({ ...answer, checkboxes: next });
                  }}
                />
                <span
                  style={{
                    color: checked
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                    fontWeight: checked ? 500 : 400,
                  }}
                >
                  {option}
                </span>
              </label>
            );
          })}
        </div>
      )}

      {/* Text area */}
      <div className="mt-[var(--space-3)]">
        <textarea
          value={answer.text ?? ""}
          onChange={(e) => onChange({ ...answer, text: e.target.value })}
          placeholder={question.textPlaceholder ?? "답변을 입력하세요..."}
          rows={2}
          className="w-full resize-none outline-none transition-all duration-150 ease-out"
          style={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.6,
            padding: "var(--space-3) var(--space-4)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid transparent",
            background: "var(--bg-surface)",
            color: "var(--text-primary)",
            minHeight: "80px",
          }}
          onFocus={(e) => {
            e.currentTarget.style.background = "#ffffff";
            e.currentTarget.style.borderColor = "var(--border-focus)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.background = "var(--bg-surface)";
            e.currentTarget.style.borderColor = "transparent";
          }}
        />
      </div>
    </div>
  );
}
