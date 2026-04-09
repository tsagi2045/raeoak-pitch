"use client";

import { briefingSections } from "@/lib/briefing";

export default function BriefingTab() {
  return (
    <div className="flex flex-col gap-[var(--space-6)]">
      {briefingSections.map((section, i) => (
        <div
          key={i}
          style={{
            background: "var(--bg-primary)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-5)",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          <h3
            style={{
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: 1.4,
              letterSpacing: "-0.3px",
              color: "var(--text-primary)",
              marginBottom: "var(--space-3)",
            }}
          >
            {section.title}
          </h3>

          <ul className="flex flex-col gap-[var(--space-2)]">
            {section.items.map((item, j) => (
              <li
                key={j}
                className="flex gap-[var(--space-2)]"
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                }}
              >
                <span
                  className="shrink-0 mt-[2px]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {section.links && section.links.length > 0 && (
            <div className="mt-[var(--space-3)] flex flex-wrap gap-[var(--space-2)]">
              {section.links.map((link, k) => (
                <a
                  key={k}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-opacity duration-150 hover:opacity-70"
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "var(--accent)",
                    padding: "4px 10px",
                    borderRadius: "var(--radius-pill)",
                    background: "rgba(0,113,227,0.06)",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    style={{ flexShrink: 0 }}
                  >
                    <path
                      d="M5 3H3.5A1.5 1.5 0 002 4.5v4A1.5 1.5 0 003.5 10h4A1.5 1.5 0 009 8.5V7M7 2h3v3M6 6l4-4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
