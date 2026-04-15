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
          "본점 15평 월 매출 1억 (배달 없이). 미아점 투자금 5천만 미만 → 월 3천만 이상. 숫자가 곧 설득력",
        material: "본점·미아점 실제 매출 데이터 (미팅 확인)",
        images: [
          { src: "/benchmarks/ari-001-revenue-growth.jpeg", alt: "아리계곡 매출 4배 성장 사례" },
        ],
      },
      {
        id: "A2",
        point: "가맹점별 매출·순수익 공개",
        expression:
          "미아점 실제 정산 데이터 공개. 3단계 매출 시나리오(3천/5천/8천만)로 현실적 수익 시뮬레이션",
        material: "미아점 매출 추이 + 3단계 시나리오별 마진/영업이익금 (본부 요청 중)",
        images: [
          { src: "/benchmarks/ari-005-store-revenue.jpeg", alt: "아리계곡 가맹점별 매출·순수익" },
          { src: "/benchmarks/crispy-005-revenue-sim.jpeg", alt: "슈퍼크리스피 매출 구간별 수익 시뮬레이션" },
        ],
      },
      {
        id: "A3",
        point: "업종 대비 마진율 비교",
        expression:
          "업계 평균 원가율 40% vs 라이옥 30% — 10%p 차이가 순이익을 만든다",
        material: "원가율 30% 미팅 확인 (브로슈어 38%보다 실제 더 낮음)",
        images: [
          { src: "/benchmarks/ari-012-margin-compare.jpeg", alt: "아리계곡 업종별 원가율 비교" },
          { src: "/benchmarks/ari-013-profit-table.jpeg", alt: "아리계곡 순수익률 비교표" },
        ],
      },
      {
        id: "A4",
        point: "비용 구조 투명 공개",
        expression:
          "가맹비 500만(1천만에서 할인) + 보증금 300만 면제 + 오픈마케팅 500만 지원. 총 1,300만원 혜택을 항목별로 투명 공개",
        material: "확정 비용표 — 가맹비 할인, 보증금 면제, 오픈마케팅 지원 (미팅 확인)",
        images: [
          { src: "/benchmarks/ari-017-cost-detail.jpeg", alt: "아리계곡 평수별 창업비용 상세" },
          { src: "/benchmarks/crispy-007-cost-table.jpeg", alt: "슈퍼크리스피 평수별 비용표" },
        ],
      },
      {
        id: "A5",
        point: "배달 의존도 낮은 구조",
        expression:
          "본점 15평 월 1억을 배달 없이 달성. 홀+포장 중심 구조 — 배달앱 수수료에 끌려다니지 않는다",
        material: "본점 배달 제외 매출 데이터 (미팅 확인)",
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
          "육수 15시간 이상 본사 제조 → 매장은 데우고 토핑. 소스도 공장 제조. 쌀국수 30초 완성",
        material: "조리 프로세스 (쌀국수 30초 완성. 육수팩 → 데움 → 면 삶기 → 토핑)",
        images: [
          { src: "/benchmarks/ari-014-cook-system.jpeg", alt: "아리계곡 원팩 시스템" },
        ],
      },
      {
        id: "B2",
        point: "교육이 다 잡아준다",
        expression:
          "본사 현장교육 2일 + 오픈전 3일 + 오픈 3일 밀착 지원. 요리 초보도 첫날부터 운영 가능",
        material: "교육 일정 (본부 확인: 본사 현장 2일 + 오픈전 3일 + 오픈 3일)",
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
          "오픈 밀착 지원 후 초기 3개월 월 1~2회 방문. 혼자 내버려두지 않는다",
        material: "SV 방문 스케줄 (본부 확인: 오픈 밀착 + 초기 3개월 월 1~2회)",
      },
      {
        id: "B5",
        point: "물류 걱정 없다",
        expression:
          "자체 PB공장(육수·소스) + 삼성 웰스토리 전국 물류. 식자재 품질과 수급 모두 본사 책임",
        material: "PB공장 + 삼성웰스토리 물류 계약 (미팅 확인)",
        images: [
          { src: "/benchmarks/crispy-006-logistics.jpeg", alt: "슈퍼크리스피 본사 물류 시스템" },
        ],
      },
      {
        id: "B6",
        point: "메뉴가 단순하다",
        expression:
          "라이트 메뉴: 쌀국수+국밥 중심, 심플 구성. A(10평 다찌) / B(15~20평 다찌+테이블) 두 컨셉 모두 동일",
        material: "라이트 확정 메뉴 리스트 (미팅 확인: 메인3 + 사이드3)",
      },
      {
        id: "B7",
        point: "본사 주도 마케팅",
        expression:
          "서울 상륙 첫 가맹 — 본사가 광고 전면 지원. 오픈마케팅 500만원(반값 행사 식재료) 포함",
        material: "오픈마케팅 500만 지원 (미팅 확인) + 서울 첫 가맹 마케팅 전략",
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
          "2019 아세안 월드 음식점 선정 + 2025 블루리본·레드리본 전국 선정 + 이홍렬TV 유튜브 + 와디즈 2회. 10년간 쌓인 검증",
        material: "2019 아세안 월드 음식점, 2025 블루리본·레드리본 (본부 연도 확인 필요), 이홍렬TV, 와디즈 2회",
        images: [
          { src: "/benchmarks/ari-006-brand-trust.jpeg", alt: "아리계곡 1등 브랜드 신뢰" },
          { src: "/benchmarks/crispy-002-youtube.jpeg", alt: "슈퍼크리스피 유튜브·언론 노출" },
        ],
      },
      {
        id: "C5",
        point: "점주가 직접 말한다",
        expression:
          "부산 전 매장이 고객에서 점주로 전환. 먹어본 사람이 투자한 증거 — 본사 말이 아니라 고객의 선택",
        material: "고객→점주 전환 사례 (미팅 확인: 부산 전 매장) + 점주 인터뷰 영상 (1월 촬영분)",
      },
      {
        id: "C6",
        point: "4계절 매출 안정",
        expression:
          "사계절 매출 큰 변동 없음. 여름엔 비빔쌀국수·반미로 보완. 탕후루처럼 반짝하고 사라지지 않는다",
        material: "4계절 매출 안정성 (미팅 확인) + 계절 메뉴 운영",
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
          "초등학생부터 어르신까지 전 연령이 단골. 트렌드에 의존하지 않는 생활식",
        material: "전 연령층 고객 데이터 (미팅 확인: 초등생~어르신)",
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
