export type InputType = "text" | "radio-text" | "checkbox-text";

export interface Link {
  label: string;
  url: string;
}

export interface Question {
  id: string;
  question: string;
  descriptions?: string[];
  type: InputType;
  options?: string[];
  textPlaceholder?: string;
  links?: Link[];
}

export interface Category {
  id: string;
  label: string;
  title: string;
  questions: Question[];
}

export interface Answer {
  radio?: string;
  checkboxes?: string[];
  text?: string;
}

export type Answers = Record<string, Answer>;

export const categories: Category[] = [
  {
    id: "A",
    label: "A",
    title: "조민서 대표님 / 본사 관계",
    questions: [
      {
        id: "A1",
        question:
          "본사(문건우 대표님)와의 관계, 그리고 가맹사업을 시작하게 된 배경을 알려주세요.",
        descriptions: [
          "세부적인 내용을 알수록 랜딩페이지 기획뿐 아니라 추후 운영·확장 방향을 잡는 데 도움이 됩니다.",
          "본사와의 역할 분담, 브랜드에 대한 비전 등 편하게 공유해주시면 됩니다.",
        ],
        type: "text",
        textPlaceholder: "자유롭게 서술해주세요",
      },
      {
        id: "A2",
        question:
          "랜딩페이지 관련 의사결정을 독자적으로 하실 수 있나요?",
        descriptions: [
          "콘텐츠 방향, 가격 공개, 디자인 등을 자체 결정 가능한지, 본사 컨펌이 필요한지에 따라 제작 프로세스가 달라집니다.",
        ],
        type: "radio-text",
        options: ["독자 결정 가능", "본사 컨펌 필요", "항목별로 다름"],
        textPlaceholder:
          "본사로부터 받는 지원(물류, 레시피, 교육, 마케팅 등)도 함께 알려주시면 좋습니다",
      },
      {
        id: "A3",
        question: "랜딩페이지 제작 시 제약 사항이 있나요?",
        descriptions: [
          "해당하는 항목을 체크해주세요.",
        ],
        type: "checkbox-text",
        options: [
          "특정 문구/표현 사용 금지",
          "가격 정보 비공개",
          "매출/수익 데이터 비공개",
          "본사 사전 승인 필요",
          "특정 이미지/영상 사용 제한",
          "제약 없음",
        ],
        textPlaceholder: "구체적인 제약 사항이 있으면 알려주세요",
      },
    ],
  },
  {
    id: "B",
    label: "B",
    title: "브랜드/운영 확인",
    questions: [
      {
        id: "B1",
        question:
          "라이옥의 차별성으로 아래 내용이 맞는지 확인해주시고, 추가 차별점이 있으면 알려주세요.",
        descriptions: [
          "저희가 사전 조사한 내용입니다. 맞는 것에 체크해주세요.",
        ],
        type: "checkbox-text",
        options: [
          "13시간 우린 정통 육수",
          "베트남인 고객 비율이 높음 (정통성 입증)",
          "재료 원칙 — 기준 미달 시 당일 판매 중단",
          "다이닝코드 맛 평점 4.8",
          "부산 본점 10년 이상 운영",
        ],
        textPlaceholder:
          "위 내용 중 수정할 부분이나, 추가 차별점을 알려주세요",
        links: [
          {
            label: "라이옥 공식 사이트",
            url: "https://raeoakfood.co.kr",
          },
        ],
      },
      {
        id: "B2",
        question: "현재 가맹 문의가 들어오는 경로가 있나요?",
        descriptions: [
          "해당하는 것을 모두 체크해주세요.",
        ],
        type: "checkbox-text",
        options: [
          "전화 문의",
          "공식 웹사이트",
          "지인 소개",
          "박람회",
          "SNS (인스타그램, 블로그 등)",
          "배달앱 통한 문의",
          "아직 별도 문의 경로 없음",
        ],
        textPlaceholder: "기타 경로가 있으면 입력해주세요",
      },
      {
        id: "B3",
        question:
          "가맹점주 교육 기간과 매장 오픈까지 걸리는 시간은?",
        type: "radio-text",
        options: ["교육 1주 이내", "교육 2주", "교육 1개월 이상"],
        textPlaceholder:
          "오픈까지 총 소요 기간과 교육 내용도 알려주시면 좋습니다",
      },
      {
        id: "B4",
        question: "미아점(서울 1호) 초기 반응은 어떤가요?",
        descriptions: [
          "아래 내용 중 공유 가능한 부분을 알려주시면 랜딩페이지에 활용할 수 있습니다.",
          "- 월 매출 대략적 범위 / 일 평균 방문 고객 수 / 재방문 고객 반응 / 주변 상권 반응",
        ],
        type: "text",
        textPlaceholder: "공유 가능한 범위에서 자유롭게 작성해주세요",
      },
    ],
  },
  {
    id: "C",
    label: "C",
    title: "랜딩페이지 소재",
    questions: [
      {
        id: "C1",
        question:
          "랜딩페이지 제작에 필요한 소재를 공유해주실 수 있나요?",
        descriptions: [
          "보유하고 있는 항목에 체크해주세요. 미팅 후 전달해주시면 됩니다.",
        ],
        type: "checkbox-text",
        options: [
          "브랜드 가이드라인 (로고 원본, 컬러 코드, 지정 폰트)",
          "메뉴 원본 이미지 (음식 사진 고해상도)",
          "메뉴판 / 가격표",
          "매장 인테리어 · 외관 사진",
          "브랜드 소개 PDF / 리플렛",
          "가맹 안내 자료 (기존에 쓰던 것)",
          "대표 프로필 사진",
          "베트남 현지 관련 사진 · 영상",
          "미디어 보도 자료 (유튜브, 기사 등)",
        ],
        textPlaceholder: "추가 공유 가능한 소재가 있으면 입력해주세요",
      },
    ],
  },
  {
    id: "D",
    label: "D",
    title: "랜딩페이지 콘텐츠 방향",
    questions: [
      {
        id: "D1",
        question:
          "가맹 비용(가맹비, 교육비, 인테리어 등)을 랜딩페이지에 공개할 의향이 있으신가요?",
        descriptions: [
          "공개 시 — 투명성으로 차별화, 진지한 문의만 유입 (경쟁사 대부분 비공개)",
          "비공개 시 — 상담 전환 유도, 비용이 높을 경우 이탈 방지",
        ],
        type: "radio-text",
        options: ["공개 의향 있음", "비공개 선호", "미정 — 미팅에서 논의"],
        textPlaceholder: "세부 의견이 있으시면 입력해주세요",
      },
      {
        id: "D2",
        question:
          "매출/수익 데이터를 랜딩페이지에 공유할 수 있으신가요?",
        descriptions: [
          "유리한 수치가 있다면 강력한 설득 포인트가 됩니다. 없어도 다른 방식으로 대체 가능합니다.",
        ],
        type: "radio-text",
        options: [
          "공유 가능 — 유리한 수치가 있음",
          "애매함 — 미팅에서 논의",
          "비공개 선호",
        ],
        textPlaceholder: "공유 가능하면 대략적인 수치를 알려주세요",
      },
      {
        id: "D3",
        question:
          "경쟁사 랜딩페이지에 아래와 같은 섹션들이 있는데, 라이옥도 넣을 수 있을까요?",
        descriptions: [
          "포메인 등 경쟁사의 가맹 페이지를 참고했습니다. 가능한 항목에 체크해주세요.",
        ],
        type: "checkbox-text",
        options: [
          "브랜드 스토리 (창업 배경, 철학)",
          "본사 지원 시스템 (상권분석, SV 관리)",
          "교육 프로그램 상세",
          "인테리어 시공 사례",
          "매출/수익 사례 (실제 가맹점 기준)",
          "가맹 절차 안내 (단계별 프로세스)",
          "가맹점주 인터뷰/후기",
        ],
        textPlaceholder:
          "추가 의견이나 넣고 싶은 콘텐츠가 있으면 알려주세요",
        links: [
          {
            label: "경쟁사 참고: 포메인 메인",
            url: "https://www.phomein.com/brand/main/main.do",
          },
          {
            label: "포메인 가맹안내",
            url: "https://www.phomein.com/company/franchisee/step02.do",
          },
        ],
      },
      {
        id: "D4",
        question: "소형 매장이나 배달 특화 모델이 있나요?",
        descriptions: [
          "있다면 소자본 창업자를 위한 별도 섹션을 만들어 타겟을 넓힐 수 있습니다.",
        ],
        type: "radio-text",
        options: ["있음", "없음", "검토 중"],
        textPlaceholder: "있다면 최소 평수, 예상 투자금 등을 알려주세요",
      },
    ],
  },
  {
    id: "E",
    label: "E",
    title: "랜딩페이지 기능",
    questions: [
      {
        id: "E1",
        question: "문의 폼에서 어떤 정보를 받고 싶나요?",
        descriptions: [
          "랜딩페이지 하단의 가맹 문의 폼에 들어갈 항목입니다.",
        ],
        type: "checkbox-text",
        options: [
          "이름",
          "연락처 (전화번호)",
          "이메일",
          "희망 지역",
          "가용 투자금 범위",
          "현재 직업",
          "창업 경험 유무",
        ],
        textPlaceholder: "기타 항목이 있으면 입력해주세요",
      },
      {
        id: "E2",
        question: "문의가 들어오면 어떤 방식으로 응대하시나요?",
        descriptions: [
          "해당하는 것을 모두 체크해주세요.",
        ],
        type: "checkbox-text",
        options: [
          "담당자가 직접 전화",
          "카카오톡 상담",
          "이메일 회신",
          "대면 상담 안내",
          "아직 프로세스 없음 — 함께 설계 희망",
        ],
        textPlaceholder: "추가 설명이 있으면 입력해주세요",
      },
    ],
  },
];

export const totalQuestions = categories.reduce(
  (sum, cat) => sum + cat.questions.length,
  0
);
