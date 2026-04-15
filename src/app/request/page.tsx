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

const MAX_FILE_SIZE_MB = 50;
const MAX_FILES_PER_ITEM = 10;

/* ── Image Modal ── */
function ImageModal({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        cursor: "zoom-out",
      }}
    >
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100%",
          maxHeight: "90vh",
          borderRadius: 12,
          objectFit: "contain",
          cursor: "default",
        }}
      />
    </div>
  );
}

/* ── Status Badge ── */
function StatusBadge({ answered }: { answered: boolean }) {
  return (
    <span
      style={{
        fontSize: "11px",
        fontWeight: 600,
        padding: "3px 10px",
        borderRadius: "var(--radius-pill)",
        background: answered ? "#34c759" : "rgba(0,0,0,0.08)",
        color: answered ? "#fff" : "rgba(0,0,0,0.36)",
        letterSpacing: "0.2px",
      }}
    >
      {answered ? "답변 완료" : "미답변"}
    </span>
  );
}

/* ── File Item ── */
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
        gap: 8,
        padding: "8px 12px",
        background: "#f5f5f7",
        borderRadius: 8,
        border: "1px solid rgba(0,0,0,0.06)",
        fontSize: 13,
      }}
    >
      <span style={{ flexShrink: 0 }}>📎</span>
      <a
        href={file.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#0071e3",
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
      <span style={{ color: "rgba(0,0,0,0.32)", fontSize: 11, flexShrink: 0 }}>
        {sizeStr}
      </span>
      <button
        onClick={onDelete}
        style={{
          background: "none",
          border: "none",
          color: "rgba(0,0,0,0.32)",
          cursor: "pointer",
          fontSize: 16,
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

/* ── Request Card ── */
function RequestCard({
  item,
  index,
  answer,
  onTextChange,
  onFileUpload,
  onFileDelete,
  onImageClick,
}: {
  item: HqRequestItem;
  index: number;
  answer?: HqAnswer;
  onTextChange: (id: string, text: string) => void;
  onFileUpload: (id: string, file: File) => void;
  onFileDelete: (id: string, filePath: string) => void;
  onImageClick: (src: string, alt: string) => void;
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
        background: "#fff",
        borderRadius: 16,
        padding: 24,
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <div style={{ flex: 1 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "rgba(0,0,0,0.32)",
              marginBottom: 4,
              display: "block",
            }}
          >
            Q{index + 1}
          </span>
          <h3
            style={{
              fontSize: 15,
              fontWeight: 600,
              lineHeight: 1.6,
              color: "#1d1d1f",
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
          fontSize: 13,
          lineHeight: 1.7,
          color: "rgba(0,0,0,0.56)",
          marginBottom: item.links || item.images ? 8 : 16,
        }}
      >
        {item.description}
      </p>

      {/* Links */}
      {item.links && (
        <div style={{ marginBottom: 16 }}>
          {item.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: "#0071e3",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                padding: "4px 0",
              }}
            >
              {link.label}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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

      {/* Reference Images */}
      {item.images && item.images.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 16,
            flexWrap: "wrap",
          }}
        >
          {item.images.map((img, i) => (
            <div
              key={i}
              onClick={() => onImageClick(img.src, img.alt)}
              style={{
                cursor: "zoom-in",
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.08)",
                maxWidth: item.images!.length === 1 ? "100%" : "48%",
                flex: item.images!.length === 1 ? "1" : undefined,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
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
            padding: "12px 16px",
            borderRadius: 8,
            border: "1px solid rgba(0,0,0,0.12)",
            background: "#f5f5f7",
            fontSize: 14,
            lineHeight: 1.6,
            color: "#1d1d1f",
            resize: "vertical",
            fontFamily: "inherit",
            outline: "none",
            boxSizing: "border-box",
            transition: "border-color 150ms",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#0071e3")}
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")
          }
        />
      )}

      {/* File Upload */}
      {(item.answerType === "file" || item.answerType === "both") && (
        <div style={{ marginTop: item.answerType === "both" ? 12 : 0 }}>
          {hasFiles && (
            <div
              className="flex flex-col gap-[8px]"
              style={{ marginBottom: 12 }}
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

          {canUpload && (
            <div
              onDrop={(e) => {
                e.preventDefault();
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                e.currentTarget.style.background = "#f5f5f7";
                const file = e.dataTransfer.files[0];
                if (file) handleFileSelect(file);
              }}
              onDragOver={(e) => {
                e.preventDefault();
                e.currentTarget.style.borderColor = "#0071e3";
                e.currentTarget.style.background = "rgba(0,113,227,0.03)";
              }}
              onDragLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                e.currentTarget.style.background = "#f5f5f7";
              }}
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: "2px dashed rgba(0,0,0,0.12)",
                borderRadius: 10,
                padding: "20px 16px",
                textAlign: "center",
                cursor: "pointer",
                background: "#f5f5f7",
                transition: "border-color 150ms, background 150ms",
              }}
            >
              <div
                style={{ fontSize: 13, fontWeight: 500, color: "#1d1d1f", marginBottom: 4 }}
              >
                {uploading
                  ? "업로드 중..."
                  : "파일을 드래그하거나 클릭해서 업로드"}
              </div>
              <div style={{ fontSize: 11, color: "rgba(0,0,0,0.36)" }}>
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

          {error && (
            <p style={{ fontSize: 12, color: "#ff3b30", marginTop: 8 }}>
              {error}
            </p>
          )}

          {hasFiles && (
            <p
              style={{
                fontSize: 11,
                color: "rgba(0,0,0,0.32)",
                marginTop: 8,
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

/* ── (nav removed — /request is standalone) ── */

/* ── Page ── */
export default function RequestPage() {
  const [answers, setAnswers] = useState<HqAnswers>({});
  const [loaded, setLoaded] = useState(false);
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);
  const debounceRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

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

  const handleFileUpload = useCallback(async (id: string, file: File) => {
    const uploaded = await uploadFile(file);
    if (!uploaded) return;
    setAnswers((prev) => {
      const existing = prev[id] || {};
      const files = [...(existing.files || []), uploaded];
      const next = { ...prev, [id]: { ...existing, files } };
      saveHqAnswer(id, next[id]);
      return next;
    });
  }, []);

  const handleFileDelete = useCallback(async (id: string, filePath: string) => {
    await deleteFile(filePath);
    setAnswers((prev) => {
      const existing = prev[id] || {};
      const files = (existing.files || []).filter((f) => f.path !== filePath);
      const next = { ...prev, [id]: { ...existing, files } };
      saveHqAnswer(id, next[id]);
      return next;
    });
  }, []);

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
          padding: "80px 20px",
          textAlign: "center",
          color: "rgba(0,0,0,0.32)",
          fontSize: 14,
        }}
      >
        불러오는 중...
      </div>
    );
  }

  let globalIndex = 0;

  return (
    <>
      {modal && (
        <ImageModal
          src={modal.src}
          alt={modal.alt}
          onClose={() => setModal(null)}
        />
      )}

      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "40px 20px 120px",
        }}
      >
        {/* Title */}
        <header style={{ marginBottom: 40 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "#0071e3",
              letterSpacing: "0.5px",
              marginBottom: 8,
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
              color: "#1d1d1f",
              marginBottom: 16,
            }}
          >
            가맹본부 확인 요청
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(0,0,0,0.56)" }}>
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
            gap: 12,
            padding: "14px 20px",
            background: "#f5f5f7",
            borderRadius: 12,
            marginBottom: 32,
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              flex: 1,
              height: 6,
              background: "rgba(0,0,0,0.06)",
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
                    ? "#34c759"
                    : "#0071e3",
                borderRadius: 3,
                transition: "width 300ms",
              }}
            />
          </div>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color:
                answeredCount === hqRequestItems.length
                  ? "#34c759"
                  : "#0071e3",
              whiteSpace: "nowrap",
            }}
          >
            {answeredCount}/{hqRequestItems.length}
          </span>
        </div>

        {/* Sections */}
        {(["confirm", "data"] as RequestCategory[]).map((cat) => {
          const items = grouped[cat];
          if (!items) return null;
          const { label, icon } = categoryLabels[cat];
          return (
            <section key={cat} style={{ marginBottom: 32 }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#1d1d1f",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  paddingBottom: 12,
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <span>{icon}</span>
                {label}
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.32)",
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

              <div className="flex flex-col gap-[16px]">
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
                      onImageClick={(src, alt) => setModal({ src, alt })}
                    />
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
