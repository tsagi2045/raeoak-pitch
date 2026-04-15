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

const MAX_FILE_SIZE_MB = 7;
const MAX_FILES_PER_ITEM = 5;

function StatusBadge({ answered }: { answered: boolean }) {
  return (
    <span
      style={{
        fontSize: "11px",
        fontWeight: 600,
        padding: "3px 10px",
        borderRadius: "var(--radius-pill)",
        background: answered
          ? "var(--state-success)"
          : "var(--text-tertiary)",
        color: "#fff",
        letterSpacing: "0.2px",
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
        gap: "var(--space-2)",
        padding: "var(--space-2) var(--space-3)",
        background: "var(--bg-surface)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--border-subtle)",
        fontSize: "13px",
      }}
    >
      <span style={{ flexShrink: 0 }}>📎</span>
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
        {file.originalName}
      </a>
      <span
        style={{
          color: "var(--text-tertiary)",
          fontSize: "11px",
          flexShrink: 0,
        }}
      >
        {sizeStr}
      </span>
      <button
        onClick={onDelete}
        style={{
          background: "none",
          border: "none",
          color: "var(--text-tertiary)",
          cursor: "pointer",
          fontSize: "16px",
          padding: "0 2px",
          lineHeight: 1,
          flexShrink: 0,
        }}
      >
        ×
      </button>
    </div>
  );
}

function RequestCard({
  item,
  index,
  answer,
  onTextChange,
  onFileUpload,
  onFileDelete,
}: {
  item: HqRequestItem;
  index: number;
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
  const [error, setError] = useState<string | null>(null);
  const fileCount = answer?.files?.length || 0;
  const canUpload = fileCount < MAX_FILES_PER_ITEM;

  const handleFileSelect = useCallback(
    async (file: File) => {
      setError(null);
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setError(`파일 크기가 ${MAX_FILE_SIZE_MB}MB를 초과합니다.`);
        return;
      }
      if (!canUpload) {
        setError(`파일은 최대 ${MAX_FILES_PER_ITEM}개까지 업로드 가능합니다.`);
        return;
      }
      setUploading(true);
      await onFileUpload(item.id, file);
      setUploading(false);
    },
    [item.id, onFileUpload, canUpload]
  );

  return (
    <div
      style={{
        background: "var(--bg-primary)",
        borderRadius: "var(--radius-xl)",
        padding: "var(--space-6)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--space-3)",
          marginBottom: "var(--space-3)",
        }}
      >
        <div style={{ flex: 1 }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--text-tertiary)",
              marginBottom: 4,
              display: "block",
            }}
          >
            Q{index + 1}
          </span>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: 1.6,
              color: "var(--text-primary)",
            }}
          >
            {item.question}
          </h3>
        </div>
        <div style={{ flexShrink: 0, marginTop: 18 }}>
          <StatusBadge answered={answered} />
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "13px",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
          marginBottom: item.links ? "var(--space-2)" : "var(--space-4)",
        }}
      >
        {item.description}
      </p>

      {/* Links */}
      {item.links && (
        <div style={{ marginBottom: "var(--space-4)" }}>
          {item.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                color: "var(--accent)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                padding: "var(--space-1) 0",
              }}
            >
              {link.label}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{ opacity: 0.6 }}
              >
                <path
                  d="M4.5 2.5h5m0 0v5m0-5L3 9"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      )}

      {/* Text Input */}
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
            transition: "border-color var(--duration-fast)",
          }}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "var(--accent)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "var(--border-subtle)")
          }
        />
      )}

      {/* File Upload */}
      {(item.answerType === "file" || item.answerType === "both") && (
        <div
          style={{
            marginTop:
              item.answerType === "both" ? "var(--space-3)" : undefined,
          }}
        >
          {/* Uploaded files */}
          {hasFiles && (
            <div
              className="flex flex-col gap-[var(--space-2)]"
              style={{ marginBottom: "var(--space-3)" }}
            >
              {answer!.files!.map((f) => (
                <FileItem
                  key={f.path}
                  file={f}
                  onDelete={() => onFileDelete(item.id, f.path)}
                />
              ))}
            </div>
          )}

          {/* Drop zone */}
          {canUpload && (
            <div
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file) handleFileSelect(file);
              }}
              onDragOver={(e) => {
                e.preventDefault();
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.background =
                  "rgba(0,113,227,0.04)";
              }}
              onDragLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.background = "transparent";
              }}
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: "2px dashed var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "var(--space-5) var(--space-4)",
                textAlign: "center",
                cursor: "pointer",
                transition:
                  "border-color var(--duration-fast), background var(--duration-fast)",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  marginBottom: 4,
                }}
              >
                {uploading
                  ? "업로드 중..."
                  : "파일을 드래그하거나 클릭해서 업로드해 주세요"}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--text-tertiary)",
                }}
              >
                최대 {MAX_FILE_SIZE_MB}MB · {MAX_FILES_PER_ITEM}개까지 ·
                이미지, PDF, 엑셀, 영상 등
              </div>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (file) await handleFileSelect(file);
              e.target.value = "";
            }}
          />

          {/* Error */}
          {error && (
            <p
              style={{
                fontSize: "12px",
                color: "var(--state-error)",
                marginTop: "var(--space-2)",
              }}
            >
              {error}
            </p>
          )}

          {/* File count */}
          {hasFiles && (
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-tertiary)",
                marginTop: "var(--space-2)",
                textAlign: "right",
              }}
            >
              {fileCount}/{MAX_FILES_PER_ITEM}개 업로드됨
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function RequestPage() {
  const [answers, setAnswers] = useState<HqAnswers>({});
  const [loaded, setLoaded] = useState(false);
  const debounceRef = useRef<Record<string, ReturnType<typeof setTimeout>>>(
    {}
  );

  useEffect(() => {
    loadHqAnswers().then((a) => {
      setAnswers(a);
      setLoaded(true);
    });
  }, []);

  const handleTextChange = useCallback((id: string, text: string) => {
    setAnswers((prev) => {
      const next = { ...prev, [id]: { ...prev[id], text } };
      if (debounceRef.current[id]) clearTimeout(debounceRef.current[id]);
      debounceRef.current[id] = setTimeout(() => {
        saveHqAnswer(id, next[id]);
      }, 300);
      return next;
    });
  }, []);

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
        const files = (existing.files || []).filter(
          (f) => f.path !== filePath
        );
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
          fontSize: "14px",
        }}
      >
        불러오는 중...
      </div>
    );
  }

  // global item index for Q numbering
  let globalIndex = 0;

  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "var(--space-10) var(--space-5) 120px",
      }}
    >
      {/* Header */}
      <header style={{ marginBottom: "var(--space-10)" }}>
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
            marginBottom: "var(--space-4)",
          }}
        >
          가맹본부 확인 요청
        </h1>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
          }}
        >
          안녕하세요, 랜딩페이지 제작에 필요한 몇 가지 확인과 자료를
          요청드립니다.
          <br />
          답변해 주시면 바로 반영하겠습니다.
        </p>
      </header>

      {/* Progress */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
          padding: "var(--space-4) var(--space-5)",
          background: "var(--bg-surface)",
          borderRadius: "var(--radius-lg)",
          marginBottom: "var(--space-8)",
          border: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            flex: 1,
            height: 6,
            background: "var(--border-subtle)",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${(answeredCount / hqRequestItems.length) * 100}%`,
              height: "100%",
              background:
                answeredCount === hqRequestItems.length
                  ? "var(--state-success)"
                  : "var(--accent)",
              borderRadius: 3,
              transition: "width var(--duration-normal)",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color:
              answeredCount === hqRequestItems.length
                ? "var(--state-success)"
                : "var(--accent)",
            whiteSpace: "nowrap",
          }}
        >
          {answeredCount}/{hqRequestItems.length}
        </span>
      </div>

      {/* Sections */}
      {(["confirm", "data", "material"] as RequestCategory[]).map((cat) => {
        const items = grouped[cat];
        if (!items) return null;
        const { label, icon } = categoryLabels[cat];
        return (
          <section key={cat} style={{ marginBottom: "var(--space-8)" }}>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "var(--space-4)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                paddingBottom: "var(--space-3)",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <span>{icon}</span>
              {label}
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--text-tertiary)",
                  marginLeft: "auto",
                }}
              >
                {items.filter((item) => {
                  const a = answers[item.id];
                  return (
                    a &&
                    ((a.text && a.text.trim()) ||
                      (a.files && a.files.length > 0))
                  );
                }).length}
                /{items.length}
              </span>
            </div>

            <div className="flex flex-col gap-[var(--space-4)]">
              {items.map((item) => {
                const idx = globalIndex++;
                return (
                  <RequestCard
                    key={item.id}
                    item={item}
                    index={idx}
                    answer={answers[item.id]}
                    onTextChange={handleTextChange}
                    onFileUpload={handleFileUpload}
                    onFileDelete={handleFileDelete}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
