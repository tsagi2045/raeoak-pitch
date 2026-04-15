export type AnswerType = "text" | "file" | "both";
export type RequestCategory = "confirm" | "data";

export interface HqRequestItem {
  id: string;
  category: RequestCategory;
  question: string;
  description: string;
  links?: { label: string; url: string }[];
  images?: { src: string; alt: string }[];
  answerType: AnswerType;
  placeholder?: string;
}

export const categoryLabels: Record<
  RequestCategory,
  { label: string; icon: string }
> = {
  confirm: { label: "확인 사항", icon: "📋" },
  data: { label: "데이터 요청", icon: "📊" },
};

export const hqRequestItems: HqRequestItem[] = [
  {
    id: "hq-1",
    category: "confirm",
    question:
      "블루리본 서베이(전국)와 레드리본 선정이 2025년이 첫 선정이 맞으실까요?",
    description:
      "블루리본 서베이 사이트에서 확인한 결과, 라이옥이 '전국 2025 선정'과 '레드리본 선정'으로 표시되어 있습니다. 2024년 이전에도 선정된 적이 있으셨는지 확인 부탁드립니다.",
    images: [
      { src: "/ref/ribbon-logos.png", alt: "블루리본·레드리본 서베이 로고" },
    ],
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
      "리플렛에서 아래 이미지를 봤는데, 자세한 내용을 설명해 주실 수 있으실까요?",
    description:
      "랜딩페이지에서 인증 관련해서 활용 가능할 수도 있을 것 같습니다. 어떤 프로그램인지, 언제 받으신 건지 등 알고 계신 내용을 알려주시면 감사하겠습니다.",
    images: [
      { src: "/ref/asean-sticker.png", alt: "아세안 월드 음식점 스티커" },
    ],
    answerType: "text",
    placeholder:
      "예) 2019년 한·아세안 특별정상회의 때 부산시에서 지정받은 것입니다",
  },
  {
    id: "hq-3",
    category: "data",
    question:
      "라이트 모델 10평과 20평 기준으로 수익구조를 정리해서 보내주실 수 있으실까요?",
    description:
      "아래 예시처럼 매출, 비용 항목(식재료, 인건비, 임대료, 운영관리비 등), 순수익, 순수익률(%)까지 나오는 형태가 필요합니다. 10평(다찌)과 20평(다찌+테이블) 각각 부탁드립니다.",
    images: [
      { src: "/ref/profit-example.png", alt: "수익구조 예시" },
    ],
    answerType: "both",
    placeholder: "추가 설명이나 메모가 있으시면 적어주세요",
  },
  {
    id: "hq-4",
    category: "data",
    question:
      "부산 라이트 모델 1개 매장이 업종변경한 것으로 알고 있는데, 그 매장의 변경 전후 매출을 아래와 같은 형식으로 전달해 주실 수 있으실까요?",
    description:
      "랜딩페이지에 '업종변경 성공 사례'로 활용하려고 합니다. 아래는 다른 프랜차이즈의 예시이며, 비슷한 형식으로 전후 비교가 되면 좋겠습니다.",
    images: [
      { src: "/ref/revenue-example.png", alt: "업종변경 매출 예시" },
    ],
    answerType: "both",
    placeholder:
      "예) 변경 전 월 300만 → 변경 후 월 2,000만 / 또는 파일로 보내주셔도 됩니다",
  },
];
