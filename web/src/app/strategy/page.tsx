"use client";

import { useState } from "react";
import Link from "next/link";
import { strategyTabs } from "@/lib/strategy-content";

export default function StrategyPage() {
  const [activeTab, setActiveTab] = useState(strategyTabs[0].id);
  const currentTab = strategyTabs.find((t) => t.id === activeTab)!;

  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "var(--space-10) var(--space-5) 120px",
      }}
    >
      {/* Back + Header */}
      <header style={{ marginBottom: "var(--space-8)" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-1)",
            fontSize: "13px",
            fontWeight: 500,
            color: "var(--accent)",
            textDecoration: "none",
            marginBottom: "var(--space-5)",
            transition: "opacity var(--duration-fast)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 4l-4 4 4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          사전 브리핑
        </Link>

        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 32px)",
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: "-0.5px",
            color: "var(--text-primary)",
            marginBottom: "var(--space-2)",
          }}
        >
          어필 전략
        </h1>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: "var(--text-tertiary)",
          }}
        >
          예비 가맹점주의 3가지 욕구별로,
          <br />
          우리가 어떤 어필이 가능한지 정리합니다.
        </p>
      </header>

      {/* Tabs */}
      <div
        className="flex gap-[var(--space-2)] scrollbar-hide"
        style={{
          overflowX: "auto",
          marginBottom: "var(--space-6)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "var(--bg-primary)",
          paddingTop: "var(--space-3)",
          paddingBottom: "var(--space-3)",
        }}
      >
        {strategyTabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                padding: "var(--space-3) var(--space-5)",
                borderRadius: "var(--radius-pill)",
                border: "1px solid",
                borderColor: isActive ? "var(--accent)" : "var(--border-subtle)",
                background: isActive ? "var(--accent)" : "transparent",
                color: isActive ? "#fff" : "var(--text-secondary)",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all var(--duration-fast)",
              }}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab description */}
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.6,
          color: "var(--text-secondary)",
          marginBottom: "var(--space-6)",
          fontWeight: 400,
        }}
      >
        {currentTab.description}
      </p>

      {/* Items */}
      <div className="flex flex-col gap-[var(--space-4)]">
        {currentTab.items.map((item, idx) => (
          <div
            key={item.id}
            style={{
              background: "var(--bg-primary)",
              borderRadius: "var(--radius-xl)",
              padding: "var(--space-5)",
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            {/* Item header */}
            <div
              className="flex items-center gap-[var(--space-3)]"
              style={{ marginBottom: "var(--space-4)" }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 24,
                  height: 24,
                  borderRadius: "var(--radius-sm)",
                  background: "var(--bg-surface)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--text-tertiary)",
                  flexShrink: 0,
                }}
              >
                {idx + 1}
              </span>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.2px",
                }}
              >
                {item.point}
              </h3>
            </div>

            {/* LP form */}
            <div style={{ marginBottom: "var(--space-3)" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "var(--text-tertiary)",
                  marginBottom: "var(--space-1)",
                }}
              >
                LP에 넣을 수 있는 형태
              </div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  background: "var(--bg-surface)",
                  padding: "var(--space-3) var(--space-4)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                {item.lpForm}
              </p>
            </div>

            {/* Discussion point */}
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "var(--accent)",
                  marginBottom: "var(--space-1)",
                }}
              >
                대표님과 확인할 것
              </div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "var(--text-primary)",
                  fontWeight: 500,
                  background: "rgba(0,113,227,0.04)",
                  padding: "var(--space-3) var(--space-4)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                {item.discuss}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div
        style={{
          marginTop: "var(--space-8)",
          padding: "var(--space-5)",
          background: "var(--bg-surface)",
          borderRadius: "var(--radius-xl)",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            lineHeight: 1.7,
            color: "var(--text-tertiary)",
          }}
        >
          <strong style={{ color: "var(--text-secondary)" }}>참고: </strong>
          &quot;월 ○○만원 보장&quot; 같은 확정 표현은 가맹사업법 위반입니다.
          LP에서는 &quot;예상 수익률&quot;로 표현하고, &quot;매장 매출과 여건에
          따라 달라질 수 있음&quot;을 반드시 병기해야 합니다.
        </p>
      </div>
    </div>
  );
}
