"use client";

import Link from "next/link";
import {
  lpSections,
  statusLabels,
  type MaterialStatus,
  type LpMaterial,
} from "@/lib/lp-plan-content";

const statusColors: Record<MaterialStatus, { bg: string; text: string }> = {
  confirmed: { bg: "rgba(52,199,89,0.1)", text: "#34c759" },
  partial: { bg: "rgba(0,113,227,0.08)", text: "var(--accent)" },
  needed: { bg: "rgba(255,149,0,0.1)", text: "#ff9500" },
  "not-started": { bg: "rgba(142,142,147,0.1)", text: "#8e8e93" },
};

const needLabels: Record<string, string> = {
  money: "💰 돈",
  easy: "🔧 쉬움",
  stable: "🛡️ 안정",
  all: "전체",
};

function StatusBadge({ status }: { status: MaterialStatus }) {
  const c = statusColors[status];
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "11px",
        fontWeight: 600,
        padding: "2px 8px",
        borderRadius: "var(--radius-pill)",
        background: c.bg,
        color: c.text,
        whiteSpace: "nowrap",
      }}
    >
      {statusLabels[status]}
    </span>
  );
}

function MaterialRow({ m }: { m: LpMaterial }) {
  return (
    <div
      style={{
        padding: "var(--space-3) 0",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--space-3)",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: 2,
            }}
          >
            <span
              style={{
                fontSize: "11px",
                color: "var(--text-tertiary)",
                marginRight: "var(--space-2)",
              }}
            >
              {m.id}
            </span>
            {m.name}
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "var(--text-secondary)",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {m.description}
          </p>
          {m.notes && (
            <p
              style={{
                fontSize: "12px",
                color: "var(--text-tertiary)",
                lineHeight: 1.4,
                margin: "4px 0 0",
              }}
            >
              {m.notes}
            </p>
          )}
        </div>
        <StatusBadge status={m.status} />
      </div>
    </div>
  );
}

export default function LpPlanPage() {
  const allMaterials = lpSections.flatMap((s) => s.materials);
  const total = allMaterials.length;
  const counts: Record<MaterialStatus, number> = {
    confirmed: 0,
    partial: 0,
    needed: 0,
    "not-started": 0,
  };
  for (const m of allMaterials) {
    counts[m.status]++;
  }

  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "var(--space-10) var(--space-5) 120px",
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: "13px",
          color: "var(--text-tertiary)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--space-1)",
          marginBottom: "var(--space-6)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 12l-4-4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        메인으로
      </Link>

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
          LP PLANNING
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
          랜딩페이지 기획안
        </h1>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: "var(--text-tertiary)",
          }}
        >
          섹션별 필요 자료와 수집 현황
        </p>
      </header>

      {/* Summary Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "var(--space-3)",
          marginBottom: "var(--space-8)",
        }}
      >
        {(
          [
            ["confirmed", counts.confirmed],
            ["partial", counts.partial],
            ["needed", counts.needed],
            ["not-started", counts["not-started"]],
          ] as [MaterialStatus, number][]
        ).map(([status, count]) => {
          const c = statusColors[status];
          return (
            <div
              key={status}
              style={{
                textAlign: "center",
                padding: "var(--space-3) var(--space-2)",
                background: c.bg,
                borderRadius: "var(--radius-md)",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: c.text,
                }}
              >
                {count}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: c.text,
                  opacity: 0.8,
                }}
              >
                {statusLabels[status]}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          fontSize: "13px",
          color: "var(--text-tertiary)",
          textAlign: "center",
          marginBottom: "var(--space-8)",
          padding: "var(--space-3)",
          background: "var(--bg-surface)",
          borderRadius: "var(--radius-md)",
        }}
      >
        전체 {total}개 자료 중{" "}
        <strong style={{ color: statusColors.confirmed.text }}>
          {counts.confirmed}개 확보
        </strong>
        ,{" "}
        <strong style={{ color: statusColors.partial.text }}>
          {counts.partial}개 일부
        </strong>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-[var(--space-6)]">
        {lpSections.map((section) => (
          <section
            key={section.id}
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
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "var(--space-2)",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.3px",
                }}
              >
                {section.title}
              </h2>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "var(--text-tertiary)",
                  background: "var(--bg-surface)",
                  padding: "2px 8px",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                {needLabels[section.targetNeed]}
              </span>
            </div>

            <p
              style={{
                fontSize: "13px",
                color: "var(--text-tertiary)",
                marginBottom: "var(--space-4)",
              }}
            >
              {section.purpose}
            </p>

            <div>
              {section.materials.map((m) => (
                <MaterialRow key={m.id} m={m} />
              ))}
            </div>

            <div
              style={{
                marginTop: "var(--space-3)",
                fontSize: "12px",
                color: "var(--text-tertiary)",
              }}
            >
              {section.materials.filter((m) => m.status === "confirmed").length}/
              {section.materials.length} 확보
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
