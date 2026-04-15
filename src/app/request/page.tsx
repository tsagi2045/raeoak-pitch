"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  hqRequestItems,
  categoryLabels,
  type RequestCategory,
  type HqRequestItem,
} from "@/lib/hq-request-content";
import {
  loadHqAnswers,
  saveHqAnswer,
  uploadFile,
  deleteFile,
  type HqAnswer,
  type HqAnswers,
  type UploadedFile,
} from "@/lib/hq-storage";

function StatusBadge({ answered }: { answered: boolean }) {
  return (
    <span
      style={{
        fontSize: "11px",
        fontWeight: 600,
        padding: "2px 8px",
        borderRadius: "var(--radius-pill)",
        background: answered ? "rgba(52,199,89,0.1)" : "rgba(142,142,147,0.1)",
        color: answered ? "#34c759" : "#8e8e93",
      }}
    >
      {answered ? "답변 완료" : "미답변"}
    </span>
  );
}

function FileItem({
  file,
  onDelete,
}: {
  file: UploadedFile;
  onDelete: () => void;
}) {
  const sizeStr =
    file.size < 1024 * 1024
      ? `${(file.size / 1024).toFixed(0)}KB`
      : `${(file.size / (1024 * 1024)).toFixed(1)}MB`;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "var(--space-2) var(--space-3)",
        background: "var(--bg-surface)",
        borderRadius: "var(--radius-sm)",
        fontSize: "13px",
      }}
    >
      <a
        href={file.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "var(--accent)",
          textDecoration: "none",
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        📎 {file.originalName}
      </a>
      <span
        style={{
          color: "var(--text-tertiary)",
          fontSize: "11px",
          marginLeft: "var(--space-2)",
          flexShrink: 0,
        }}
      >
        {sizeStr}
      </span>
      <button
        onClick={onDelete}
        style={{
          marginLeft: "var(--space-2)",
          background: "none",
          border: "none",
          color: "var(--text-tertiary)",
          cursor: "pointer",
          fontSize: "14px",
          padding: "2px 4px",
          flexShrink: 0,
        }}
      >
        ✕
      </button>
    </div>
  );
}

function RequestCard({
  item,
  answer,
  onTextChange,
  onFileUpload,
  onFileDelete,
}: {
  item: HqRequestItem;
  answer?: HqAnswer;
  onTextChange: (id: string, text: string) => void;
  onFileUpload: (id: string, file: File) => void;
  onFileDelete: (id: string, filePath: string) => void;
}) {
  const hasText = !!(answer?.text && answer.text.trim());
  const hasFiles = !!(answer?.files && answer.files.length > 0);
  const answered = hasText || hasFiles;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) onFileUpload(item.id, file);
    },
    [item.id, onFileUpload]
  );

  return (
    <div
      style={{
        background: "var(--bg-primary)",
        borderRadius: "var(--radius-xl)",
        padding: "var(--space-6)",
        border: "1px solid rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--space-3)",
          marginBottom: "var(--space-3)",
        }}
      >
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 600,
            lineHeight: 1.5,
            color: "var(--text-primary)",
            flex: 1,
          }}
        >
          {item.question}
        </h3>
        <StatusBadge answered={answered} />
      </div>

      <p
        style={{
          fontSize: "13px",
          lineHeight: 1.7,
          color: "var(--text-tertiary)",
          marginBottom: item.links ? "var(--space-2)" : "var(--space-4)",
        }}
      >
        {item.description}
      </p>

      {item.links && (
        <div style={{ marginBottom: "var(--space-4)" }}>
          {item.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "12px",
                color: "var(--accent)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              🔗 {link.label}
              <span style={{ fontSize: "10px", opacity: 0.6 }}>↗</span>
            </a>
          ))}
        </div>
      )}

      {(item.answerType === "text" || item.answerType === "both") && (
        <textarea
          value={answer?.text || ""}
          onChange={(e) => onTextChange(item.id, e.target.value)}
          placeholder={item.placeholder}
          rows={3}
          style={{
            width: "100%",
            padding: "var(--space-3) var(--space-4)",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-subtle)",
            background: "var(--bg-surface)",
            fontSize: "14px",
            lineHeight: 1.6,
            color: "var(--text-primary)",
            resize: "vertical",
            fontFamily: "inherit",
            outline: "none",
            boxSizing: "border-box",
          }}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "var(--accent)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "var(--border-subtle)")
          }
        />
      )}

      {(item.answerType === "file" || item.answerType === "both") && (
        <div style={{ marginTop: "var(--space-3)" }}>
          {answer?.files && answer.files.length > 0 && (
            <div
              className="flex flex-col gap-[var(--space-2)]"
              style={{ marginBottom: "var(--space-3)" }}
            >
              {answer.files.map((f) => (
                <FileItem
                  key={f.path}
                  file={f}
                  onDelete={() => onFileDelete(item.id, f.path)}
                />
              ))}
            </div>
          )}

          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileInputRef.current?.click()}
            style={{
              border: "1px dashed var(--border-subtle)",
              borderRadius: "var(--radius-md)",
              padding: "var(--space-4)",
              textAlign: "center",
              cursor: "pointer",
              transition: "border-color var(--duration-fast)",
              color: "var(--text-tertiary)",
              fontSize: "13px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-subtle)")
            }
          >
            {uploading
              ? "업로드 중..."
              : "파일을 드래그하거나 클릭해서 업로드해 주세요"}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (file) {
                setUploading(true);
                await onFileUpload(item.id, file);
                setUploading(false);
              }
              e.target.value = "";
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function RequestPage() {
  const [answers, setAnswers] = useState<HqAnswers>({});
  const [loaded, setLoaded] = useState(false);
  const debounceRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    loadHqAnswers().then((a) => {
      setAnswers(a);
      setLoaded(true);
    });
  }, []);

  const handleTextChange = useCallback(
    (id: string, text: string) => {
      setAnswers((prev) => {
        const next = { ...prev, [id]: { ...prev[id], text } };
        if (debounceRef.current[id]) clearTimeout(debounceRef.current[id]);
        debounceRef.current[id] = setTimeout(() => {
          saveHqAnswer(id, next[id]);
        }, 300);
        return next;
      });
    },
    []
  );

  const handleFileUpload = useCallback(
    async (id: string, file: File) => {
      const uploaded = await uploadFile(file);
      if (!uploaded) return;
      setAnswers((prev) => {
        const existing = prev[id] || {};
        const files = [...(existing.files || []), uploaded];
        const next = { ...prev, [id]: { ...existing, files } };
        saveHqAnswer(id, next[id]);
        return next;
      });
    },
    []
  );

  const handleFileDelete = useCallback(
    async (id: string, filePath: string) => {
      await deleteFile(filePath);
      setAnswers((prev) => {
        const existing = prev[id] || {};
        const files = (existing.files || []).filter((f) => f.path !== filePath);
        const next = { ...prev, [id]: { ...existing, files } };
        saveHqAnswer(id, next[id]);
        return next;
      });
    },
    []
  );

  const answeredCount = hqRequestItems.filter((item) => {
    const a = answers[item.id];
    if (!a) return false;
    return (a.text && a.text.trim()) || (a.files && a.files.length > 0);
  }).length;

  const grouped = hqRequestItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<RequestCategory, HqRequestItem[]>
  );

  if (!loaded) {
    return (
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "var(--space-10) var(--space-5)",
          textAlign: "center",
          color: "var(--text-tertiary)",
        }}
      >
        불러오는 중...
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "var(--space-10) var(--space-5) 120px",
      }}
    >
      <header style={{ marginBottom: "var(--space-8)" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--accent)",
            letterSpacing: "0.5px",
            marginBottom: "var(--space-2)",
          }}
        >
          RAEOAK FRANCHISE
        </p>
        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 32px)",
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: "-0.5px",
            color: "var(--text-primary)",
            marginBottom: "var(--space-3)",
          }}
        >
          가맹본부 확인 요청
        </h1>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "var(--text-tertiary)",
          }}
        >
          안녕하세요, 랜딩페이지 제작에 필요한 몇 가지 확인과 자료를
          요청드립니다.
          <br />
          답변해 주시면 바로 반영하겠습니다.
        </p>
      </header>

      {(["confirm", "data"] as RequestCategory[]).map((cat) => {
        const items = grouped[cat];
        if (!items) return null;
        const { label, icon } = categoryLabels[cat];
        return (
          <section key={cat} style={{ marginBottom: "var(--space-8)" }}>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--text-tertiary)",
                marginBottom: "var(--space-4)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
              }}
            >
              <span>{icon}</span>
              {label}
            </div>

            <div className="flex flex-col gap-[var(--space-4)]">
              {items.map((item) => (
                <RequestCard
                  key={item.id}
                  item={item}
                  answer={answers[item.id]}
                  onTextChange={handleTextChange}
                  onFileUpload={handleFileUpload}
                  onFileDelete={handleFileDelete}
                />
              ))}
            </div>
          </section>
        );
      })}

      <div
        style={{
          textAlign: "center",
          padding: "var(--space-4)",
          background: "var(--bg-surface)",
          borderRadius: "var(--radius-md)",
          fontSize: "13px",
          color: "var(--text-tertiary)",
        }}
      >
        전체{" "}
        <strong
          style={{
            color:
              answeredCount === hqRequestItems.length
                ? "#34c759"
                : "var(--accent)",
          }}
        >
          {answeredCount}/{hqRequestItems.length}
        </strong>{" "}
        완료
      </div>
    </div>
  );
}
