export type InputType = "text" | "radio-text" | "checkbox-text";

export interface Question {
  id: string;
  question: string;
  descriptions?: string[];
  type: InputType;
  options?: string[];
  textPlaceholder?: string;
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
          "프랜차이즈 사업을 어떻게 시작하게 되셨나요? 본사(문건우 대표님)와는 어떤 관계이신가요?",
        type: "text",
        textPlaceholder: "자유롭게 서술해주세요",
      },
      {
        id: "A2",
        question:
          "본사로부터 어떤 지원(물류, 레시피, 교육, 마케팅 등)을 받고 계시고, 의사결정 권한은 어디까지인가요?",
        descriptions: [
          "랜딩페이지 콘텐츠를 독자적으로 결정할 수 있는지, 본사 컨펌이 필요한지 확인하고 싶습니다.",
        ],
        type: "text",
        textPlaceholder: "지원 범위와 의사결정 권한을 알려주세요",
      },
      {
        id: "A3",
        question: "랜딩페이지 제작 시 제약 사항이 있나요?",
        descriptions: [
          "사용 금지 표현, 본사 승인 필요 항목, 공개 불가 정보 등",
        ],
        type: "text",
        textPlaceholder: "제약 사항을 알려주세요",
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
        question: "라이옥의 차별성이 뭐라고 생각하시나요?",
        descriptions: [
          '저희가 조사한 바로는 "13시간 육수, 베트남인 80% 고객, 재료 원칙 고수"인데 맞는지 확인 겸 여쭤봅니다.',
        ],
        type: "text",
        textPlaceholder: "라이옥만의 차별성을 자유롭게 작성해주세요",
      },
      {
        id: "B2",
        question: "현재 가맹 문의가 들어오는 경로가 있나요?",
        descriptions: [
          "전화, 웹사이트, 지인 소개, 박람회 등",
        ],
        type: "checkbox-text",
        options: [
          "전화",
          "웹사이트",
          "지인 소개",
          "박람회",
          "SNS (인스타그램, 블로그 등)",
          "배달앱 문의",
        ],
        textPlaceholder: "기타 경로가 있으면 입력해주세요",
      },
      {
        id: "B3",
        question:
          "가맹점주 교육 기간과 오픈까지 걸리는 시간은 대략 어느 정도인가요?",
        type: "text",
        textPlaceholder: "예: 교육 2주, 오픈까지 약 2개월",
      },
      {
        id: "B4",
        question: "미아점 초기 반응은 어떤가요?",
        descriptions: [
          "매출, 고객 반응 등 랜딩페이지에 활용 가능한 수준이면 좋겠습니다.",
        ],
        type: "text",
        textPlaceholder: "매출, 고객 반응 등을 자유롭게 작성해주세요",
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
          "아래 항목 중 보유하고 있는 것에 체크해주세요.",
        ],
        type: "checkbox-text",
        options: [
          "브랜드 가이드라인 (로고 원본, 컬러 코드, 지정 폰트)",
          "메뉴 원본 이미지 (음식 사진 고해상도)",
          "매장 인테리어/외관 사진",
          "브랜드 소개 PDF / 리플렛",
          "가맹 안내 자료 (기존에 쓰던 것)",
          "대표 프로필 사진",
          "베트남 현지 관련 사진/영상",
          "미디어 보도 자료 (이홍렬TV 외 추가)",
        ],
        textPlaceholder: "추가 공유 가능한 소재가 있으면 입력해주세요",
      },
    ],
  },
  {
    id: "D",
    label: "D",
    title: "랜딩페이지 데이터 공개 여부",
    questions: [
      {
        id: "D1",
        question:
          "가맹 비용(가맹비, 교육비, 인테리어 등)을 랜딩페이지에 공개할 의향이 있으신가요?",
        descriptions: [
          "경쟁사 대부분이 비공개인데, 공개하면 차별화가 됩니다.",
          "단, 비용이 높은 편이면 안 올리는 게 나을 수 있습니다.",
        ],
        type: "radio-text",
        options: ["공개 의향 있음", "비공개 선호", "미정"],
        textPlaceholder: "세부 의견이 있으시면 입력해주세요",
      },
      {
        id: "D2",
        question: "매출/수익 데이터가 어필에 유리한 수준인가요?",
        descriptions: [
          "유리하다면 랜딩페이지에 올리면 강력한 설득 포인트가 됩니다.",
        ],
        type: "radio-text",
        options: ["유리함 — 공개 가능", "애매함", "비공개 선호"],
        textPlaceholder: "가능하면 구체 수치를 알려주세요",
      },
      {
        id: "D3",
        question: "소형 매장이나 배달 특화 모델이 있나요?",
        descriptions: [
          "있다면 소자본 창업자를 위한 별도 섹션을 랜딩페이지에 만들 수 있습니다.",
        ],
        type: "radio-text",
        options: ["있음", "없음", "검토 중"],
        textPlaceholder: "있다면 최소 평수 등을 알려주세요",
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
        question: "문의 폼에 어떤 정보를 받고 싶나요?",
        type: "checkbox-text",
        options: [
          "이름",
          "연락처 (전화번호)",
          "이메일",
          "희망 지역",
          "가용 투자금 범위",
          "현재 직업",
        ],
        textPlaceholder: "기타 항목이 있으면 입력해주세요",
      },
      {
        id: "E2",
        question: "문의가 들어오면 어떤 프로세스로 처리하나요?",
        descriptions: [
          "자동 응답 이메일? 담당자가 직접 전화? 카카오톡?",
        ],
        type: "text",
        textPlaceholder: "문의 처리 프로세스를 알려주세요",
      },
    ],
  },
];

export const totalQuestions = categories.reduce(
  (sum, cat) => sum + cat.questions.length,
  0
);
