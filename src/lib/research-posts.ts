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
    slug: "kurly-only",
    title: "컬리 전용 상품 기획 — 베트남 국밥 단독 런칭",
    summary:
      "컬리 내 베트남 국밥 = 0개 블루오션. 프리미엄 한식 탕 밀키트 1인 14,000~17,000원 판매 실증. 라이옥 국밥을 컬리 Only SKU로 런칭하고 쌀국수는 스마트스토어에 유지하는 전략 제안. 컬리 수수료 구조와 40% 기준 판매가 역산 포함.",
    verdict: "국밥 단독 GO",
    verdictTone: "go",
    date: "2026-04-22",
    tags: ["입점", "마켓컬리", "전용 SKU", "국밥"],
  },
  {
    slug: "youtube-interview",
    title: "유튜브 인터뷰 채널 섭외 제안",
    summary:
      "미아점 가맹점주 인터뷰 영상 제작을 위한 채널 섭외 방향. 슈퍼크리스피 벤치마크 3편 분석 + 자영업자스토리·지방극장·직업의달인 3곳 심층 비교 + 채널별 A/B/C 협상 전략 + 장기 연쇄 인터뷰 로드맵.",
    verdict: "3곳 병행 제안",
    verdictTone: "info",
    date: "2026-04-20",
    tags: ["유튜브", "인터뷰", "섭외", "미아점"],
  },
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
