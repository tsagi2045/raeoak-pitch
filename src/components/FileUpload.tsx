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
              클릭하거나 파일을 드래그하세요
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "var(--text-tertiary)",
                marginTop: "var(--space-1)",
              }}
            >
              PDF, Word, Excel, 이미지, 영상 (50MB 이하)
            </p>
          </>
        )}
      </div>

      {/* Uploaded files list */}
      {files.length > 0 && (
        <div className="mt-[var(--space-3)] flex flex-col gap-[var(--space-2)]">
          {files.map((f) => (
            <div
              key={f.path}
              className="flex items-center justify-between"
              style={{
                padding: "var(--space-2) var(--space-3)",
                borderRadius: "var(--radius-md)",
                background: "var(--bg-surface)",
              }}
            >
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[var(--space-2)] transition-opacity hover:opacity-70"
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--accent)",
                  minWidth: 0,
                }}
              >
                <span style={{ flexShrink: 0 }}>📎</span>
                <span className="truncate">{f.originalName}</span>
              </a>
              <button
                onClick={() => handleDelete(f.path)}
                className="shrink-0 transition-opacity hover:opacity-70"
                style={{
                  fontSize: "12px",
                  color: "var(--state-error)",
                  padding: "4px 8px",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                삭제
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
