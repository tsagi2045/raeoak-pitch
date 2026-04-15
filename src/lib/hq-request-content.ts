export type AnswerType = "text" | "file" | "both";
export type RequestCategory = "confirm" | "data";

export interface HqRequestItem {
  id: string;
  category: RequestCategory;
  question: string;
  description: string;
  links?: { label: string; url: string }[];
  answerType: AnswerType;
  placeholder?: string;
}

export const categoryLabels: Record<RequestCategory, { label: string; icon: string }> = {
  confirm: { label: "확인 사항", icon: "📋" },
  data: { label: "자료 요청", icon: "📁" },
};

export const hqRequestItems: HqRequestItem[] = [
  {
    id: "hq-1",
    category: "confirm",
    question:
      "블루리본 서베이(전국)와 레드리본 선정이 2025년이 첫 선정이 맞으실까요?",
    description:
      "블루리본 서베이 사이트에서 확인한 결과, 라이옥이 '전국 2025 선정'과 '레드리본 선정'으로 표시되어 있습니다. 2024년 이전에도 선정된 적이 있으셨는지 확인 부탁드립니다.",
    links: [
      {
        label: "블루리본 서베이 — 라이옥 페이지",
        url: "https://bluer.co.kr/restaurants/34779",
      },
    ],
    answerType: "text",
    placeholder: "예) 2025년이 첫 선정입니다 / 2024년에도 선정되었습니다",
  },
  {
    id: "hq-2",
    category: "confirm",
    question:
      "매장에 부착된 '아세안 월드 음식점' 스티커가 2019년 한·아세안 특별정상회의 때 받으신 게 맞으실까요?",
    description:
      "랜딩페이지 인증 섹션에 '2019 한·아세안 특별정상회의 아세안 월드 음식점'으로 표기하려고 합니다. 정확한 명칭이나 추가 정보가 있으시면 함께 알려주시면 감사하겠습니다.",
    answerType: "text",
    placeholder: "예) 맞습니다 / 정확한 명칭은 ○○입니다",
  },
  {
    id: "hq-3",
    category: "data",
    question:
      "라이트 A/B 모델별 영업이익표를 보내주실 수 있으실까요?",
    description:
      "작성 중이시라고 말씀해 주셨던 자료입니다. A(10평 다찌)와 B(15~20평 다찌+테이블) 각각 매출 구간별로 부탁드립니다. 랜딩페이지 '수익 시뮬레이션' 섹션의 핵심 자료로 활용됩니다.",
    answerType: "both",
    placeholder: "추가 설명이나 메모가 있으시면 적어주세요",
  },
  {
    id: "hq-4",
    category: "data",
    question:
      "부산 업종변경 매장의 전환 전후 매출 비교가 가능하실까요?",
    description:
      "랜딩페이지에 '기존 매장을 라이옥으로 전환해서 매출이 개선된 사례'로 활용하려고 합니다. 대략적인 수치(예: 월 몇백만원대 → 몇천만원대)라도 괜찮습니다.",
    answerType: "both",
    placeholder: "예) 전환 전 월 300만 → 전환 후 월 2,000만",
  },
];
