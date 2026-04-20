import type { Metadata } from "next";
import Link from "next/link";
import { researchPosts, type ResearchPost } from "@/lib/research-posts";

export const metadata: Metadata = {
  title: "리서치 — 라이옥",
  description: "라이옥 가맹점 모집 프로젝트 진행 중 수행한 조사 결과 모음",
};

const verdictStyles: Record<
  NonNullable<ResearchPost["verdictTone"]>,
  { bg: string; color: string }
> = {
  hold: { bg: "rgba(255,149,0,0.12)", color: "#a6660a" },
  nogo: { bg: "rgba(255,59,48,0.10)", color: "#c0392b" },
  go: { bg: "rgba(52,199,89,0.12)", color: "#1f7a3a" },
  info: { bg: "rgba(0,113,227,0.10)", color: "var(--accent)" },
};

function formatDate(d: string): string {
  return d.replace(/-/g, ".");
}

export default function ResearchIndexPage() {
  return (
    <main className="mx-auto w-full max-w-[980px] px-[var(--space-6)] pt-[var(--space-10)] pb-[var(--space-10)]">
      {/* Hero */}
      <header style={{ marginBottom: "var(--space-10)" }}>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--accent)",
            letterSpacing: "0.3px",
            marginBottom: "var(--space-3)",
          }}
        >
          RESEARCH
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 44px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-1.2px",
            color: "var(--text-primary)",
            marginBottom: "var(--space-4)",
          }}
        >
          프로젝트 리서치 아카이브
        </h1>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            maxWidth: "640px",
          }}
        >
          라이옥 가맹점 모집 프로젝트 진행 중 수행한 시장·경쟁·채널 관련 조사 결과를 기록합니다. 각 보고서는 의사결정에 필요한 팩트와 권고만 담았습니다.
        </p>
      </header>

      {/* Posts grid */}
      <section
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "var(--space-5)",
        }}
      >
        {researchPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>

      {researchPosts.length === 0 && (
        <div
          style={{
            padding: "var(--space-10) var(--space-6)",
            background: "var(--bg-surface)",
            borderRadius: "var(--radius-xl)",
            textAlign: "center",
            color: "var(--text-secondary)",
            fontSize: "14px",
          }}
        >
          아직 등록된 리서치가 없습니다.
        </div>
      )}
    </main>
  );
}

function PostCard({ post }: { post: ResearchPost }) {
  const tone = post.verdictTone ?? "info";
  const badge = verdictStyles[tone];
  return (
    <Link
      href={`/research/${post.slug}`}
      style={{
        display: "block",
        background: "var(--bg-surface)",
        borderRadius: "var(--radius-xl)",
        padding: "var(--space-6)",
        textDecoration: "none",
        border: "1px solid transparent",
        transition: "all 200ms ease",
      }}
      className="hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: "var(--space-4)" }}
      >
        <span
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--text-tertiary)",
            letterSpacing: "0.3px",
          }}
        >
          {formatDate(post.date)}
        </span>
        {post.verdict && (
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: "var(--radius-pill)",
              background: badge.bg,
              color: badge.color,
              letterSpacing: "0.2px",
            }}
          >
            {post.verdict}
          </span>
        )}
      </div>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: 1.3,
          letterSpacing: "-0.4px",
          color: "var(--text-primary)",
          marginBottom: "var(--space-3)",
        }}
      >
        {post.title}
      </h2>
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.6,
          color: "var(--text-secondary)",
          marginBottom: "var(--space-4)",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {post.summary}
      </p>
      <div
        className="flex flex-wrap"
        style={{ gap: "6px" }}
      >
        {post.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "11px",
              fontWeight: 500,
              padding: "3px 8px",
              borderRadius: "var(--radius-sm)",
              background: "var(--bg-primary)",
              color: "var(--text-secondary)",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
