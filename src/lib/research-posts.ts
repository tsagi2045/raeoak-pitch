export type ResearchPost = {
  slug: string;
  title: string;
  summary: string;
  verdict?: string;
  verdictTone?: "hold" | "go" | "nogo" | "info";
  date: string;
  tags: string[];
};

export const researchPosts: ResearchPost[] = [
  {
    slug: "marketkurly",
    title: "마켓컬리 입점 타당성",
    summary:
      "라이옥 쌀국수·국밥 밀키트를 마켓컬리에 입점할 수 있을지 검토. 수수료·경쟁 현황·스마트스토어 이중 채널 문제를 분석한 결과 조건부 보류 권고.",
    verdict: "조건부 보류",
    verdictTone: "hold",
    date: "2026-04-20",
    tags: ["입점", "마켓컬리", "밀키트"],
  },
];

export function findResearchPost(slug: string): ResearchPost | undefined {
  return researchPosts.find((p) => p.slug === slug);
}
