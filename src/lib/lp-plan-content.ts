export type MaterialStatus = "confirmed" | "partial" | "needed" | "not-started";

export interface LpMaterial {
  id: string;
  name: string;
  description: string;
  status: MaterialStatus;
  source?: string;
  notes?: string;
}

export interface LpSection {
  id: string;
  title: string;
  purpose: string;
  targetNeed: "money" | "easy" | "stable" | "all";
  materials: LpMaterial[];
}

export const statusLabels: Record<MaterialStatus, string> = {
  confirmed: "확보",
  partial: "일부 확보",
  needed: "필요",
  "not-started": "미착수",
};

export const lpSections: LpSection[] = [
  {
    id: "hero",
    title: "히어로 + 후킹",
    purpose: "첫 3초 안에 '이건 다르다'는 인상",
    targetNeed: "all",
    materials: [
      {
        id: "H1",
        name: "헤드라인 카피",
        description: "서울 상륙 첫 가맹 모집 + 10년 검증 메시지",
        status: "confirmed",
        source: "미팅 3차",
        notes: "서울 상륙 첫 가맹 광고 — 고객이 점주가 된 브랜드",
      },
      {
        id: "H2",
        name: "매장 대표 이미지/영상",
        description: "미아점 or 본점 분위기를 보여주는 대표 비주얼",
        status: "needed",
        notes: "기존 촬영본 AI 가공 또는 신규 촬영 필요",
      },
      {
        id: "H3",
        name: "핵심 수치 배지",
        description: "10년 업력 / 원가율 30% / 1인 운영 등 한눈에 보이는 수치",
        status: "confirmed",
        source: "미팅 1-3차",
      },
    ],
  },
  {
    id: "money",
    title: "돈이 된다",
    purpose: "투자 대비 수익이 나온다는 확신",
    targetNeed: "money",
    materials: [
      {
        id: "M1",
        name: "본점 매출 데이터",
        description: "15평 월 1억 (배달 없이)",
        status: "confirmed",
        source: "미팅 1차",
      },
      {
        id: "M2",
        name: "미아점 매출 데이터",
        description: "투자금 5천만 미만, 월 3천만+",
        status: "confirmed",
        source: "미팅 1차",
        notes: "오픈 초기라 정산 데이터 축적 중",
      },
      {
        id: "M3",
        name: "A/B 모델별 영업이익표",
        description: "A(10평 다찌: 1,500~3,500만) / B(15~20평 다찌+테이블: 2,500~6,000만) 각 매출 구간별",
        status: "partial",
        source: "본부 확인",
        notes: "본부에서 작성 중. A/B 모델 구분 + 매출 구간별 원가·인건비·순이익 포함 예정",
      },
      {
        id: "M4",
        name: "원가율 비교",
        description: "라이옥 30% vs 업계 평균 40%",
        status: "confirmed",
        source: "미팅 1차",
      },
      {
        id: "M5",
        name: "비용 투명 공개표",
        description: "가맹비 500만(할인) + 보증금 면제 + 오픈마케팅 500만 지원",
        status: "confirmed",
        source: "미팅 2차",
        notes: "총 1,300만원 혜택. 포솔 리플렛 비용표도 참고",
      },
      {
        id: "M6",
        name: "업종변경 성공 사례",
        description: "부산 매장 — 월 몇백만원 → 라이옥 전환 후 개선",
        status: "partial",
        source: "미팅 2차",
        notes: "부산 업종변경 매장 매출 데이터 추가 확보 필요",
      },
    ],
  },
  {
    id: "easy",
    title: "쉽게 된다",
    purpose: "요리 초보도 첫날부터 운영 가능하다는 안심",
    targetNeed: "easy",
    materials: [
      {
        id: "E1",
        name: "조리 프로세스 시각화",
        description: "쌀국수 30초 완성. 육수팩 → 데움 → 면 삶기 → 토핑",
        status: "partial",
        source: "본부 확인",
        notes: "30초 완성 확정. 사진/영상 촬영 필요",
      },
      {
        id: "E2",
        name: "교육 일정",
        description: "본사 현장교육 2일 + 오픈전 3일 + 오픈 3일",
        status: "confirmed",
        source: "본부 확인",
      },
      {
        id: "E3",
        name: "SV 관리 체계",
        description: "오픈 밀착 + 초기 3개월 월 1~2회 방문",
        status: "confirmed",
        source: "본부 확인",
      },
      {
        id: "E4",
        name: "물류 시스템 설명",
        description: "자체 PB공장 + 삼성웰스토리 전국 물류",
        status: "confirmed",
        source: "미팅 2차",
      },
      {
        id: "E5",
        name: "라이트 메뉴 리스트",
        description: "메인 3개 + 사이드 3개 확정",
        status: "partial",
        source: "미팅 2차",
        notes: "메뉴 구성 확정됨. 메뉴 사진 필요",
      },
      {
        id: "E6",
        name: "키오스크/1인 운영 사례",
        description: "키오스크 주문 + 반조리 = 1인 운영 가능",
        status: "partial",
        source: "미팅 2차",
        notes: "미아점 1인 운영 사례. 운영 타임라인 정리 필요",
      },
    ],
  },
  {
    id: "stable",
    title: "오래 된다",
    purpose: "'안 되면 어떡하지'라는 불안 해소",
    targetNeed: "stable",
    materials: [
      {
        id: "S1",
        name: "10년 업력 스토리",
        description: "본점 10년+ 영업. 트렌드가 아닌 검증된 맛",
        status: "confirmed",
        source: "미팅 3차",
      },
      {
        id: "S2",
        name: "고객→점주 전환 사례",
        description: "부산 전 매장이 고객에서 점주로 전환",
        status: "confirmed",
        source: "미팅 2차",
      },
      {
        id: "S3",
        name: "미디어 노출 리스트",
        description: "이홍렬TV, 와디즈 2회, 아세안 어워드, 레드리본",
        status: "partial",
        source: "미팅 3차",
        notes: "영상 링크 취합 중. 아세안 어워드 연도 확인 필요",
      },
      {
        id: "S4",
        name: "점주 인터뷰 영상",
        description: "1월 촬영 점주 인터뷰 + 추가 인터뷰 섭외",
        status: "partial",
        source: "미팅 3차",
        notes: "1월 촬영분 있음. AI 가공 후 활용 검토",
      },
      {
        id: "S5",
        name: "4계절 매출 데이터",
        description: "계절 변동 없음 + 여름 보완 메뉴(비빔쌀국수, 반미)",
        status: "partial",
        source: "미팅 3차",
        notes: "정성적 확인됨. 정량 데이터(월별 매출) 추가 필요",
      },
      {
        id: "S6",
        name: "전 연령층 어필",
        description: "초등학생~어르신 전 연령 단골",
        status: "confirmed",
        source: "미팅 3차",
      },
    ],
  },
  {
    id: "cta",
    title: "CTA + 신뢰 마감",
    purpose: "지금 바로 문의하게 만드는 마감",
    targetNeed: "all",
    materials: [
      {
        id: "T1",
        name: "문의 폼 설계",
        description: "이름 + 연락처 + 관심 지역. 우측 하단 플로팅 팝업",
        status: "confirmed",
        source: "미팅 3차",
      },
      {
        id: "T2",
        name: "창업 절차 로드맵",
        description: "상담→상권조사→계약→공사→교육→준비→오픈",
        status: "partial",
        source: "미팅 2차",
        notes: "포솔 리플렛 기준. 라이트 버전 맞춤 확인 필요",
      },
      {
        id: "T3",
        name: "카카오톡 채널",
        description: "라이트 전용 카톡 채널 개설 + 연동",
        status: "not-started",
        notes: "구글/카톡/페이스북 계정 신설 필요 (미팅 3차 합의)",
      },
      {
        id: "T4",
        name: "배우자 설득 자료",
        description: "리스크 + 안전장치 중심 1장 요약",
        status: "not-started",
        notes: "가맹 계약 30-40%가 배우자 설득 실패로 무산",
      },
    ],
  },
];
