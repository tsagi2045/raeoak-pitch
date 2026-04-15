export type AnswerType = "text" | "file" | "both";
export type RequestCategory = "confirm" | "data" | "material";

export interface HqRequestItem {
  id: string;
  category: RequestCategory;
  question: string;
  description: string;
  links?: { label: string; url: string }[];
  answerType: AnswerType;
  placeholder?: string;
}

export const categoryLabels: Record<
  RequestCategory,
  { label: string; icon: string }
> = {
  confirm: { label: "확인 사항", icon: "📋" },
  data: { label: "데이터 요청", icon: "📊" },
  material: { label: "자료 요청", icon: "📁" },
};

export const hqRequestItems: HqRequestItem[] = [
  // ── 확인 사항 ──
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
    category: "confirm",
    question: "상권 보호 정책이 반경 몇 M인지 확인 부탁드립니다.",
    description:
      "랜딩페이지 '안정성' 섹션에 '반경 ○M 내 추가 출점 없음'으로 표기하려고 합니다. 라이트/스탠다드별로 다르면 각각 알려주시면 감사하겠습니다.",
    answerType: "text",
    placeholder: "예) 라이트 300M / 스탠다드 500M",
  },
  {
    id: "hq-4",
    category: "confirm",
    question: "현재 폐점한 매장이 있으신가요?",
    description:
      "랜딩페이지에서 '투명성 차별화'로 폐점률을 공개하는 전략을 검토 중입니다. 폐점 매장이 없으면 그 자체가 강력한 어필 포인트가 됩니다.",
    answerType: "text",
    placeholder: "예) 폐점 매장 없습니다 / ○건 있습니다",
  },

  // ── 데이터 요청 ──
  {
    id: "hq-5",
    category: "data",
    question:
      "라이트 A/B 모델별 영업이익표를 보내주실 수 있으실까요?",
    description:
      "작성 중이시라고 말씀해 주셨던 자료입니다. A(10평 다찌)와 B(15~20평 다찌+테이블) 각각 매출 구간별로 부탁드립니다. 랜딩페이지 '수익 시뮬레이션' 섹션의 핵심 자료로 활용됩니다.",
    answerType: "both",
    placeholder: "추가 설명이나 메모가 있으시면 적어주세요",
  },
  {
    id: "hq-6",
    category: "data",
    question:
      "부산 업종변경 매장의 전환 전후 매출 비교가 가능하실까요?",
    description:
      "랜딩페이지에 '기존 매장을 라이옥으로 전환해서 매출이 개선된 사례'로 활용하려고 합니다. 대략적인 수치(예: 월 몇백만원대 → 몇천만원대)라도 괜찮습니다.",
    answerType: "both",
    placeholder: "예) 전환 전 월 300만 → 전환 후 월 2,000만",
  },

  // ── 자료 요청 ──
  {
    id: "hq-7",
    category: "material",
    question:
      "미아점 또는 본점의 고화질 매장 사진을 보내주실 수 있으실까요?",
    description:
      "랜딩페이지 메인 비주얼과 전반에 사용됩니다. 외관, 내부 인테리어, 음식 나오는 모습 등 다양한 앵글이면 좋습니다. 핸드폰 촬영도 괜찮습니다.",
    answerType: "file",
  },
  {
    id: "hq-8",
    category: "material",
    question:
      "쌀국수 조리 과정(30초 완성) 사진이나 영상이 있으실까요?",
    description:
      "랜딩페이지 '쉽게 할 수 있다' 섹션의 핵심 자료입니다. 육수 데움 → 면 삶기 → 토핑 과정을 단계별로 보여주는 사진 또는 짧은 영상이면 좋습니다.",
    answerType: "file",
  },
  {
    id: "hq-9",
    category: "material",
    question:
      "이홍렬TV 유튜브 영상 링크와 와디즈 캠페인 링크를 공유해 주실 수 있으실까요?",
    description:
      "랜딩페이지 '미디어 검증' 섹션에 임베드하거나 링크를 걸 예정입니다. 기타 언론 보도나 방송 출연 영상이 있으시면 함께 보내주시면 감사하겠습니다.",
    answerType: "both",
    placeholder:
      "예) 이홍렬TV: https://youtu.be/... / 와디즈: https://wadiz.kr/...",
  },
  {
    id: "hq-10",
    category: "material",
    question: "1월에 촬영하셨던 점주 인터뷰 영상을 공유해 주실 수 있으실까요?",
    description:
      "랜딩페이지 '점주가 직접 말한다' 섹션에 활용하려고 합니다. 원본 영상 파일 또는 유튜브/드라이브 링크 어느 쪽이든 괜찮습니다.",
    answerType: "both",
    placeholder: "영상 링크를 붙여넣어 주세요",
  },
];
