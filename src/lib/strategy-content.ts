export interface StrategyItem {
  id: string;
  point: string;
  expression: string;
  material: string;
  images?: { src: string; alt: string }[];
}

export interface StrategyTab {
  id: string;
  label: string;
  icon: string;
  description: string;
  items: StrategyItem[];
}

export const strategyTabs: StrategyTab[] = [
  {
    id: "money",
    label: "돈을 벌 수 있다",
    icon: "💰",
    description:
      "이 수치를 보여주면 \"여기서 돈이 되겠구나\"라고 느낀다.",
    items: [
      {
        id: "A1",
        point: "매출 성공 사례",
        expression:
          "\"3천만원에서 1억 3천, 4배 성장\" 같은 실제 매장 사례. 숫자가 곧 설득력",
        material: "기존 매장의 매출 성장 사례 데이터",
        images: [
          { src: "/benchmarks/ari-001-revenue-growth.jpeg", alt: "아리계곡 매출 4배 성장 사례" },
        ],
      },
      {
        id: "A2",
        point: "가맹점별 매출·순수익 공개",
        expression:
          "매장별 실제 정산 데이터를 공개. \"전가맹점 월평균 순수익 2,800만원\" 같은 구체 수치",
        material: "직영점/미아점 매출·순수익 추이 데이터",
        images: [
          { src: "/benchmarks/ari-005-store-revenue.jpeg", alt: "아리계곡 가맹점별 매출·순수익" },
          { src: "/benchmarks/crispy-005-revenue-sim.jpeg", alt: "슈퍼크리스피 매출 구간별 수익 시뮬레이션" },
        ],
      },
      {
        id: "A3",
        point: "업종 대비 마진율 비교",
        expression:
          "\"한식 38~48% 원가 vs 라이옥 ○%\" — 같은 업종과 비교하면 차이가 선명",
        material: "브로슈어 수치 재확인 또는 실제 매장 월 정산",
        images: [
          { src: "/benchmarks/ari-012-margin-compare.jpeg", alt: "아리계곡 업종별 원가율 비교" },
          { src: "/benchmarks/ari-013-profit-table.jpeg", alt: "아리계곡 순수익률 비교표" },
        ],
      },
      {
        id: "A4",
        point: "비용 구조 투명 공개",
        expression:
          "가맹금 / 교육비 / 인테리어 / 설비를 항목별로 분해한 차트. 총액이 아니라 항목을 보여줘야 \"숨기는 게 없구나\"",
        material: "라이트 모델 확정 비용표",
        images: [
          { src: "/benchmarks/ari-017-cost-detail.jpeg", alt: "아리계곡 평수별 창업비용 상세" },
          { src: "/benchmarks/crispy-007-cost-table.jpeg", alt: "슈퍼크리스피 평수별 비용표" },
        ],
      },
      {
        id: "A5",
        point: "배달 의존도 낮은 구조",
        expression:
          "\"포장/홀 중심 = 배달앱 수수료 부담 적음\" — 배달 플랫폼에 끌려다니지 않는 구조",
        material: "매장별 홀/포장/배달 비중 데이터",
        images: [
          { src: "/benchmarks/crispy-008-no-delivery.jpeg", alt: "슈퍼크리스피 배달앱 탈피 전략" },
        ],
      },
      {
        id: "A6",
        point: "객단가 설계",
        expression:
          "세트·사이드 메뉴 구성으로 객단가 극대화. \"테이블당 평균 ○만원\" 전략적 메뉴 기획",
        material: "세트 메뉴 구성, 평균 객단가 데이터",
        images: [
          { src: "/benchmarks/ari-008-menu-unit-price.jpeg", alt: "아리계곡 테이블 평균단가 7만원" },
        ],
      },
      {
        id: "A7",
        point: "로열티는 투자다",
        expression:
          "\"월 30만원 → 마케팅 + SV + 신메뉴 지원. 이걸 직접 하시면 200만원 이상\" — 비용이 아니라 교환",
        material: "로열티 대비 본사 제공 서비스 항목 리스트",
      },
    ],
  },
  {
    id: "easy",
    label: "쉽게 벌 수 있다",
    icon: "🔧",
    description:
      "이 시스템을 보여주면 \"나도 할 수 있겠다\"고 느낀다.",
    items: [
      {
        id: "B1",
        point: "원팩 시스템 — 첫날부터 운영 가능",
        expression:
          "\"규격화된 식재료 + 15시간 육수 본사 제조 → 매장은 데우고 토핑\" — 요리 경험 불필요",
        material: "조리 과정 3단계별 사진 또는 영상",
        images: [
          { src: "/benchmarks/ari-014-cook-system.jpeg", alt: "아리계곡 원팩 시스템" },
        ],
      },
      {
        id: "B2",
        point: "교육이 다 잡아준다",
        expression:
          "\"○주 교육 + 오픈 후 밀착\" 타임라인. 교육 현장 사진과 함께 \"처음이라도 괜찮습니다\"",
        material: "교육 커리큘럼, 교육장 사진",
      },
      {
        id: "B3",
        point: "키오스크/QR — 인건비 절감",
        expression:
          "\"키오스크 주문 + 반조리 시스템 = 1인 운영 가능, 인건비 0원도 가능\"",
        material: "1인 운영 매장 사례, 1일 운영 타임라인",
        images: [
          { src: "/benchmarks/ari-016-qr-system.jpeg", alt: "아리계곡 QR 주문 시스템" },
          { src: "/benchmarks/crispy-004-easy-cook.jpeg", alt: "슈퍼크리스피 초간단 조리" },
        ],
      },
      {
        id: "B4",
        point: "SV가 옆에 있다",
        expression:
          "\"오픈 후 ○주 상주, 이후 월 ○회 방문\" — 혼자 내버려두지 않는다는 안심",
        material: "SV 방문 빈도·내용 구체 수치",
      },
      {
        id: "B5",
        point: "물류 걱정 없다",
        expression:
          "\"삼성 웰스토리 전국 물류, 주 6일 배송\" — 식자재 수급은 본사가 해결",
        material: "배송 스케줄, 긴급 발주 가능 여부",
        images: [
          { src: "/benchmarks/crispy-006-logistics.jpeg", alt: "슈퍼크리스피 본사 물류 시스템" },
        ],
      },
      {
        id: "B6",
        point: "메뉴가 단순하다",
        expression:
          "\"핵심 ○개 메뉴 집중. 복잡하지 않습니다\" — 메뉴 수가 적을수록 운영이 쉽고 품질이 일정",
        material: "라이트 확정 메뉴 리스트",
      },
      {
        id: "B7",
        point: "본사 주도 마케팅",
        expression:
          "\"SNS·플레이스·인스타 마케팅을 본사가 해줌\" — 점주는 매장 운영에만 집중",
        material: "본사 마케팅 지원 항목, SNS 운영 실적",
        images: [
          { src: "/benchmarks/ari-015-sns-marketing.jpeg", alt: "아리계곡 본사 SNS 마케팅 1,000만 뷰" },
        ],
      },
    ],
  },
  {
    id: "stable",
    label: "안정적으로, 오래",
    icon: "🛡️",
    description:
      "이 안전장치를 보여주면 \"안 되면 어떡하지\"가 해소된다.",
    items: [
      {
        id: "C1",
        point: "폐점률 투명 공개",
        expression:
          "\"라이옥 폐점률 ○%\" — 숨기지 않는 것 자체가 신뢰. 낮으면 강점, 높더라도 투명성이 차별화",
        material: "실제 폐점 매장 수",
      },
      {
        id: "C2",
        point: "상권 보호",
        expression:
          "\"반경 ○M 내 추가 출점 없음\" — 바로 옆에 같은 매장이 생기지 않는다는 안심",
        material: "상권 보호 정책 상세",
      },
      {
        id: "C3",
        point: "출구가 있다",
        expression:
          "\"해지 시 이렇게, 양도 시 이렇게\" — 출구를 투명하게 보여주는 것이 오히려 진입을 쉽게 만듦",
        material: "계약 해지 위약금, 양도 조건·매칭 지원 여부",
      },
      {
        id: "C4",
        point: "미디어 검증",
        expression:
          "유튜브·언론·블루리본 등 미디어 노출 실적. \"남이 먼저 인정한 브랜드\"",
        material: "미디어 노출 리스트 (이홍렬TV, 블루리본 등)",
        images: [
          { src: "/benchmarks/ari-006-brand-trust.jpeg", alt: "아리계곡 1등 브랜드 신뢰" },
          { src: "/benchmarks/crispy-002-youtube.jpeg", alt: "슈퍼크리스피 유튜브·언론 노출" },
        ],
      },
      {
        id: "C5",
        point: "점주가 직접 말한다",
        expression:
          "기존 점주 인터뷰 영상 또는 텍스트 후기. 본사가 아니라 점주의 입으로 말해야 신뢰",
        material: "인터뷰 가능한 점주 섭외",
      },
      {
        id: "C6",
        point: "4계절 매출 안정",
        expression:
          "\"계절 변동 없이 연간 고매출 유지\" — 계절성 불안을 그래프로 선제 해소",
        material: "계절별 매출 데이터, 여름 메뉴 리스트",
        images: [
          { src: "/benchmarks/ari-010-seasonal.jpeg", alt: "아리계곡 4계절 매출 유지" },
        ],
      },
      {
        id: "C7",
        point: "가족이 안심한다",
        expression:
          "배우자용 1장 요약 자료 (리스크 + 안전장치 중심). 가맹 계약의 30~40%가 배우자 설득 실패로 무산",
        material: "배우자 설득 사례, 가구 단위 재무 시뮬레이션",
      },
      {
        id: "C8",
        point: "넓은 고객층",
        expression:
          "\"20~50대 전 연령이 방문\" — 트렌드에 의존하지 않는 안정적 수요 기반",
        material: "고객 연령대 분포 데이터",
        images: [
          { src: "/benchmarks/ari-011-customer-age.jpeg", alt: "아리계곡 20~50대 고객 분포" },
        ],
      },
      {
        id: "C9",
        point: "창업 절차 로드맵",
        expression:
          "8단계 시각화 — \"이렇게 진행됩니다\" 명확한 프로세스가 불안을 줄임",
        material: "창업 절차 8단계 상세",
        images: [
          { src: "/benchmarks/ari-018-process.jpeg", alt: "아리계곡 8단계 창업절차" },
          { src: "/benchmarks/crispy-010-process.jpeg", alt: "슈퍼크리스피 8단계 창업절차" },
        ],
      },
    ],
  },
];
