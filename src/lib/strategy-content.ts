export interface StrategyItem {
  id: string;
  point: string;
  expression: string;
  material: string;
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
        point: "투자금 대비 회수 기간",
        expression:
          "보수적/기본/낙관 3개 시나리오로 제시. 보수적을 먼저 보여주고, 낙관은 보조로. \"이만큼 번다\"가 아니라 \"돈이 이렇게 움직인다\"는 구조 공개",
        material: "실제 매장 기반 월 매출·비용 데이터",
      },
      {
        id: "A2",
        point: "비용 구조 투명 공개",
        expression:
          "가맹금 / 교육비 / 인테리어 / 설비를 항목별로 분해한 차트. 총액이 아니라 항목을 보여줘야 \"숨기는 게 없구나\" 느낌",
        material: "라이트 모델 확정 비용표",
      },
      {
        id: "A3",
        point: "원가율과 마진",
        expression:
          "\"원재료비 ○%, 영업이익 ○%\" 파이차트. 비율로 보여주면 매출 규모와 무관하게 구조를 이해할 수 있음",
        material: "브로슈어 수치 재확인 또는 실제 매장 월 정산 데이터",
      },
      {
        id: "A4",
        point: "실제 매장 매출",
        expression:
          "\"○○점 월 매출 범위 ○○~○○만원\" — 단일 숫자보다 범위로 제시하면 현실감+신뢰 동시 확보",
        material: "직영점 / 미아점 매출 추이 데이터",
      },
      {
        id: "A5",
        point: "배달 이중 수익",
        expression:
          "\"홀 + 배달 = 복수 매출 채널\" 비중 차트. 홀만으로도 되지만 배달까지 있다는 안심",
        material: "매장별 배달 매출 비중 데이터",
      },
      {
        id: "A6",
        point: "로열티는 투자다",
        expression:
          "\"월 30만원 → 마케팅 + SV + 신메뉴 지원. 이걸 직접 하시면 200만원 이상\" — 비용이 아니라 교환으로 프레이밍",
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
        point: "육수는 본사가 만든다",
        expression:
          "\"15시간 육수 → 본사 제조 → 매장은 데우고 토핑\" 3단계 비주얼. 요리 못 해도 된다는 걸 시각적으로 증명",
        material: "조리 과정 3단계별 사진 또는 영상",
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
        point: "혼자서도 돌아간다",
        expression:
          "\"1인 운영 가능. 키오스크 주문 + 반조리 = 인건비 0원도 가능\" — 실제 1인 매장의 하루를 타임라인으로",
        material: "1인 운영 매장 사례, 1일 운영 타임라인",
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
      },
      {
        id: "B6",
        point: "메뉴가 단순하다",
        expression:
          "\"핵심 ○개 메뉴 집중. 복잡하지 않습니다\" — 메뉴 수가 적을수록 운영이 쉽고 품질이 일정",
        material: "라이트 확정 메뉴 리스트",
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
        point: "10년 생존한 브랜드",
        expression:
          "\"2013년 시작 → 10년간 살아남은 맛과 시스템\" — 타임라인 비주얼로 신뢰 축적",
        material: "연혁 정리 소재",
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
        point: "여름에도 된다",
        expression:
          "\"여름 전용 메뉴로 매출 방어\" + 성수기/비수기 데이터 — 계절 불안 선제 해소",
        material: "계절별 매출 데이터, 여름 메뉴 리스트",
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
        point: "브랜드가 진화한다",
        expression:
          "\"분기마다 신메뉴, 본사가 계속 투자\" — 정체되지 않는 브랜드라는 증거",
        material: "최근 신메뉴 사례, 개발 주기",
      },
    ],
  },
];
