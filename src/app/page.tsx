"use client";

import Link from "next/link";
import { mainSections } from "@/lib/briefing-main";
import type { ContentBlock } from "@/lib/briefing-main";

function RenderBlock({ block }: { block: ContentBlock }) {
  if (block.type === "text") {
    return (
      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.8,
          color: "var(--text-secondary)",
          fontWeight: 400,
        }}
      >
        {block.value}
      </p>
    );
  }

  if (block.type === "highlight") {
    return (
      <div
        style={{
          background: "rgba(0,113,227,0.04)",
          borderLeft: "3px solid var(--accent)",
          borderRadius: "0 var(--radius-md) var(--radius-md) 0",
          padding: "var(--space-4) var(--space-5)",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.7,
            color: "var(--text-primary)",
            fontWeight: 500,
          }}
        >
          {block.value}
        </p>
      </div>
    );
  }

  if (block.type === "table") {
    return (
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          <thead>
            <tr>
              {block.headers.map((h, i) => (
                <th
                  key={i}
                  style={{
                    textAlign: "left",
                    padding: "var(--space-3) var(--space-4)",
                    borderBottom: "1px solid var(--border-subtle)",
                    color: "var(--text-tertiary)",
                    fontWeight: 500,
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    style={{
                      padding: "var(--space-3) var(--space-4)",
                      borderBottom: "1px solid var(--border-subtle)",
                      color: j === 0 ? "var(--text-tertiary)" : "var(--text-primary)",
                      fontWeight: j === 0 ? 500 : 400,
                      fontSize: j === 0 ? "12px" : "13px",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === "comparison") {
    return (
      <div className="flex flex-col gap-[var(--space-2)]">
        <div
          className="grid grid-cols-2 gap-[var(--space-3)]"
          style={{ marginBottom: "var(--space-2)" }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--text-tertiary)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              padding: "0 var(--space-3)",
            }}
          >
            {block.left}
          </div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--state-error)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              padding: "0 var(--space-3)",
            }}
          >
            {block.right}
          </div>
        </div>
        {block.pairs.map(([left, right], i) => (
          <div key={i} className="grid grid-cols-2 gap-[var(--space-3)]">
            <div
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                color: "var(--text-secondary)",
                padding: "var(--space-2) var(--space-3)",
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              {left}
            </div>
            <div
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                color: "var(--text-primary)",
                fontWeight: 500,
                padding: "var(--space-2) var(--space-3)",
                background: "rgba(255,59,48,0.04)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              {right}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default function MainPage() {
  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "var(--space-10) var(--space-5) 120px",
      }}
    >
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
            marginBottom: "var(--space-3)",
          }}
        >
          가맹점 모집 랜딩페이지
          <br />
          사전 브리핑
        </h1>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: "var(--text-tertiary)",
          }}
        >
          랜딩페이지를 만들기 전에 정리해야 할 것들
        </p>
      </header>

      <div className="flex flex-col gap-[var(--space-8)]">
        {mainSections.map((section, idx) => (
          <section key={section.id}>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--text-tertiary)",
                marginBottom: "var(--space-2)",
              }}
            >
              {String(idx + 1).padStart(2, "0")}
            </div>

            <div
              style={{
                background: "var(--bg-primary)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-6)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(18px, 3vw, 22px)",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  letterSpacing: "-0.3px",
                  color: "var(--text-primary)",
                  marginBottom: "var(--space-1)",
                }}
              >
                {section.title}
              </h2>

              {section.subtitle && (
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-tertiary)",
                    marginBottom: "var(--space-5)",
                  }}
                >
                  {section.subtitle}
                </p>
              )}

              <div className="flex flex-col gap-[var(--space-4)]">
                {section.content.map((block, i) => (
                  <RenderBlock key={i} block={block} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div style={{ marginTop: "var(--space-10)", textAlign: "center" }}>
        <Link
          href="/strategy"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-2)",
            padding: "var(--space-4) var(--space-8)",
            background: "var(--accent)",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            borderRadius: "var(--radius-pill)",
            textDecoration: "none",
            transition: "background var(--duration-fast)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--accent-hover)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--accent)")
          }
        >
          어필 전략 보기
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div style={{ marginTop: "var(--space-6)", textAlign: "center" }}>
        <Link
          href="/lp-plan"
          style={{
            fontSize: "13px",
            color: "var(--text-tertiary)",
            textDecoration: "none",
            transition: "color var(--duration-fast)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--accent)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-tertiary)")
          }
        >
          LP 기획안 · 자료 현황 →
        </Link>
      </div>

      <div style={{ marginTop: "var(--space-3)", textAlign: "center" }}>
        <Link
          href="/questions"
          style={{
            fontSize: "13px",
            color: "var(--text-tertiary)",
            textDecoration: "none",
            transition: "color var(--duration-fast)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--accent)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-tertiary)")
          }
        >
          사전 질문지 바로가기 →
        </Link>
      </div>
    </div>
  );
}
