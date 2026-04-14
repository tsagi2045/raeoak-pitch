export interface MainSection {
  id: string;
  title: string;
  subtitle?: string;
  content: ContentBlock[];
}

export type ContentBlock =
  | { type: "text"; value: string }
  | { type: "highlight"; value: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "comparison"; left: string; right: string; pairs: [string, string][] };

export const mainSections: MainSection[] = [
  {
    id: "essence",
    title: "비즈니스의 본질",
    subtitle: "왜 이 이야기부터 시작하는가",
    content: [
      {
        type: "text",
        value:
          "사람이 돈을 쓰는 이유는 하나입니다. 자기 문제가 해결되니까.",
      },
      {
        type: "text",
        value:
          "가맹점 모집도 마찬가지입니다. 우리의 고객은 예비 가맹점주이고, 랜딩페이지는 이 사람의 문제를 해결할 수 있다고 증명하는 도구입니다.",
      },
      {
        type: "highlight",
        value:
          "랜딩페이지에 들어가는 모든 내용은 \"우리가 자랑하고 싶은 것\"이 아니라, \"예비 점주가 불안해하는 것\"에 답해야 합니다.",
      },
    ],
  },
  {
    id: "target",
    title: "타겟 정의",
    subtitle: "우리의 고객은 누구인가",
    content: [
      {
        type: "text",
        value:
          "모든 사람에게 팔 수 없습니다. 누구에게 팔 건지 먼저 정해야 메시지가 날카로워집니다.",
      },
      {
        type: "table",
        headers: ["", "Primary: 소자본 첫 창업", "Secondary: 탈직장인"],
        rows: [
          ["나이", "25~35세", "35~49세"],
          ["자산", "3,000~7,000만원", "1~2.5억"],
          ["경험", "사업 경험 없음", "직장 15년+, 사업 경험 없음"],
          ["한 줄", "\"적은 돈으로 내 가게를 갖고 싶다\"", "\"할 거면 제대로 하고 싶다\""],
        ],
      },
    ],
  },
  {
    id: "real-anxiety",
    title: "표면 질문과 진짜 불안",
    subtitle: "이 사람들이 입으로 묻는 것 vs 속으로 느끼는 것",
    content: [
      {
        type: "text",
        value:
          "가맹 희망자가 말하는 것과 실제로 느끼는 것은 다릅니다. 논리적으로 완벽한 제안도 감정적 불안을 다루지 못하면 거절당합니다.",
      },
      {
        type: "comparison",
        left: "묻는 것",
        right: "느끼는 것",
        pairs: [
          ["\"투자금 얼마예요?\"", "이 돈 날리면 어떡하지"],
          ["\"요리 못 하는데요\"", "내가 이걸 감당할 수 있나"],
          ["\"3년 뒤에 안 되면?\"", "빠져나올 수 있는 건가"],
          ["\"배우자가 반대해요\"", "가족 동의 없이는 못 해"],
          ["\"본사가 없어지면요?\"", "나 혼자 남겨지는 거 아닌가"],
        ],
      },
      {
        type: "highlight",
        value:
          "랜딩페이지는 왼쪽(표면 질문)이 아니라 오른쪽(진짜 불안)에 답해야 합니다.",
      },
    ],
  },
  {
    id: "three-needs",
    title: "타겟의 문제 = 랜딩페이지가 해결할 것",
    subtitle: "이 사람들의 욕구는 딱 3개입니다",
    content: [
      {
        type: "table",
        headers: ["1순위", "2순위", "3순위"],
        rows: [
          [
            "돈을 벌 수 있어야 한다",
            "쉽게 벌 수 있어야 한다",
            "안정적으로, 오래 벌 수 있어야 한다",
          ],
        ],
      },
      {
        type: "text",
        value:
          "랜딩페이지의 모든 섹션은 이 3가지 중 하나를 증명하기 위해 존재해야 합니다. 어떤 재료로 증명할 수 있는지, 지금부터 같이 정리합시다.",
      },
    ],
  },
];
