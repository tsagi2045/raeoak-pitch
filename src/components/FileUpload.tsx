"use client";

import { useCallback, useRef, useState } from "react";
import {
  uploadFile,
  deleteFile,
  type UploadedFile,
} from "@/lib/storage";

interface FileUploadProps {
  files: UploadedFile[];
  onFilesChange: (files: UploadedFile[]) => void;
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

async function downloadFile(url: string, fileName: string) {
  const res = await fetch(url);
  const blob = await res.blob();
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
}

export default function FileUpload({ files, onFilesChange }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = useCallback(
    async (fileList: FileList) => {
      setUploading(true);
      const newFiles: UploadedFile[] = [];
      for (const file of Array.from(fileList)) {
        const result = await uploadFile(file);
        if (result) newFiles.push(result);
      }
      onFilesChange([...files, ...newFiles]);
      setUploading(false);
    },
    [files, onFilesChange]
  );

  const handleDelete = useCallback(
    async (path: string) => {
      await deleteFile(path);
      onFilesChange(files.filter((f) => f.path !== path));
    },
    [files, onFilesChange]
  );

  return (
    <div>
      {/* Drop zone */}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (e.dataTransfer.files.length > 0) handleFiles(e.dataTransfer.files);
        }}
        className="cursor-pointer transition-all duration-150"
        style={{
          border: dragOver
            ? "2px dashed rgba(0,0,0,0.15)"
            : "2px dashed rgba(0,0,0,0.08)",
          background: dragOver ? "rgba(0,0,0,0.02)" : "var(--bg-surface)",
          borderRadius: "var(--radius-lg)",
          padding: "var(--space-6)",
          textAlign: "center",
        }}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.hwp,.jpg,.jpeg,.png,.gif,.mp4,.mov,.zip"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              handleFiles(e.target.files);
              e.target.value = "";
            }
          }}
        />

        {uploading ? (
          <div className="flex items-center justify-center gap-[var(--space-2)]">
            <div
              className="animate-spin"
              style={{
                width: "16px",
                height: "16px",
                border: "2px solid var(--bg-surface)",
                borderTop: "2px solid var(--accent)",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--text-secondary)",
              }}
            >
              업로드 중...
            </span>
          </div>
        ) : (
          <>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--text-secondary)",
              }}
            >
              클릭하여 파일 선택
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "var(--text-tertiary)",
                marginTop: "var(--space-1)",
              }}
            >
              PDF, Word, Excel, 이미지 등 (최대 50MB)
            </p>
          </>
        )}
      </div>

      {/* Uploaded files list */}
      {files.length > 0 && (
        <div className="mt-[var(--space-4)] flex flex-col gap-[var(--space-2)]">
          {files.map((f) => (
            <div
              key={f.path}
              className="flex items-center gap-[var(--space-3)]"
              style={{
                padding: "var(--space-3) var(--space-4)",
                borderRadius: "var(--radius-md)",
                background: "var(--bg-surface)",
              }}
            >
              {/* Icon + filename */}
              <div
                className="flex items-center gap-[var(--space-2)] min-w-0"
                style={{ flex: 1 }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M8.586 1.5H4.5A1.5 1.5 0 003 3v10a1.5 1.5 0 001.5 1.5h7A1.5 1.5 0 0013 13V5.914a1 1 0 00-.293-.707l-3.414-3.414a1 1 0 00-.707-.293z"
                    stroke="var(--text-tertiary)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 1.5V5a1 1 0 001 1H13"
                    stroke="var(--text-tertiary)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="truncate"
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                  }}
                >
                  {f.originalName}
                </span>
              </div>

              {/* Size + actions */}
              <div className="flex shrink-0 items-center gap-[var(--space-3)]">
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--text-tertiary)",
                  }}
                >
                  {formatSize(f.size)}
                </span>
                <button
                  onClick={() => downloadFile(f.url, f.originalName)}
                  className="transition-opacity hover:opacity-70"
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "var(--accent)",
                  }}
                >
                  다운로드
                </button>
                <button
                  onClick={() => handleDelete(f.path)}
                  className="transition-opacity hover:opacity-70"
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "var(--state-error)",
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
