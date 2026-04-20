import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "유튜브 인터뷰 채널 섭외 제안 — 라이옥 리서치",
  description:
    "미아점 가맹점주 인터뷰 영상 제작을 위한 채널 섭외 방향. 슈퍼크리스피 벤치마크 + 자영업자스토리·지방극장·직업의달인 3곳 심층 비교 + 채널별 A/B/C 협상 전략.",
};

type Reason = { label: string; detail: string };
type BenchmarkVideo = {
  title: string;
  channel: string;
  owner: string;
  length: string;
  url: string;
};
type Formula = {
  eyebrow: string;
  title: string;
  detail: string;
};
type Translation = { k: string; v: string };
type ChannelMetric = {
  label: string;
  jangsaStory: string;
  jibangTheater: string;
  jikdal: string;
  highlight?: "jibang" | null;
};
type Strategy = {
  code: string;
  name: string;
  method: string;
  oneLine: string;
};
type ChannelStrategy = {
  channel: string;
  strategy: string;
  reason: string;
};
type Differentiator = {
  hook: string;
  embed: string;
};
type RoadmapPhase = {
  phase: string;
  period: string;
  title: string;
  bullets: string[];
};

const reasons: Reason[] = [
  {
    label: "간접 유도형 컨셉",
    detail:
      "본사 홍보 톤 배제. 점주 1인칭 서사로 호기심을 유발해 시청자가 스스로 브랜드를 검색하게 만드는 방식. 슈퍼크리스피가 여러 채널에서 반복 검증한 공식.",
  },
  {
    label: "도달률 기준 선정",
    detail:
      "구독자 수보다 실제 본 사람이 중요. 구독 대비 도달률이 높은 중소형 자영업 인터뷰 채널 3곳을 엄선해 병행 컨택.",
  },
  {
    label: "채널별 다른 전략",
    detail:
      "일률 접근이 아닌 규모·운영 형태에 맞춤. A(점진 추가) / B(점진 감축) / C(미디어킷 선요청) 하이브리드 적용.",
  },
];

const background: Translation[] = [
  { k: "왜 지금", v: "미아점 = 라이트 모델 첫 사례 + 수도권 첫 진출. 오픈 초기 서사가 살아있을 때 촬영 가치 최대" },
  { k: "출연자", v: "라이옥 미아점 가맹점주 (출연 확정)" },
  { k: "대상 모델", v: "라이트 (10평 내외 · 1~2인 운영 · 수도권 확장 모델)" },
  { k: "컨셉", v: "간접 유도형 — 직접 홍보 톤 배제, 점주 1인칭 서사 중심" },
  { k: "벤치마크", v: "슈퍼크리스피 (치킨버거 프랜차이즈) — 자영업자 인터뷰 채널 반복 출연으로 포맷 검증" },
  { k: "1차 성과 목표", v: "미아점 점주 영상 1편 → 가맹 문의 유입 퍼널 확보 + 자사 LP·SNS 2차 활용 자산화" },
];

const benchmarkVideos: BenchmarkVideo[] = [
  {
    title: "치킨버거가 2,900원? 물가 역행해서 동네손님 블랙홀처럼 빨아들이는 25살 사장님",
    channel: "자영업자스토리",
    owner: "슈퍼크리스피 시흥 함송점 황의용",
    length: "16:44",
    url: "https://www.youtube.com/watch?v=X1kuDPA95Zg",
  },
  {
    title: "\"이게 남는다고?\" 2,900원 햄버거로 가족 인건비 빼고도 대박난 이유 l 12분 휴먼 다큐",
    channel: "지방극장",
    owner: "슈퍼크리스피 화성 병점점 (50세 가장·타워크레인 23년차)",
    length: "12:08",
    url: "https://www.youtube.com/watch?v=WYdbey48J3Y",
  },
  {
    title: "2000원짜리 메뉴팔아 월 5천 버는 30대ㅣ슈퍼크리스피",
    channel: "직업의달인",
    owner: "슈퍼크리스피 고덕점 이허석 (전직 군인)",
    length: "10:29",
    url: "https://www.youtube.com/watch?v=uR_gREU-c3A",
  },
];

const formulas: Formula[] = [
  {
    eyebrow: "공식 01",
    title: "과거와의 강렬한 대비",
    detail: "전직(군인·타워크레인·20대 초 사회 초년생) → 현재 만족도 극대화",
  },
  {
    eyebrow: "공식 02",
    title: "'노하우'가 아닌 '시스템' 강조",
    detail: "\"요리 못 해도 된다\", \"본사 매뉴얼대로만\" 반복",
  },
  {
    eyebrow: "공식 03",
    title: "가격·숫자 훅 선배치",
    detail: "2,900원·매출 4,300만 등 임팩트 숫자를 오프닝 10초 내 배치",
  },
  {
    eyebrow: "공식 04",
    title: "물류·마진 투명 공개",
    detail: "\"본사 직접 물류로 마진 보전\" 명시 → 착한 프랜차이즈 이미지 구축",
  },
  {
    eyebrow: "공식 05",
    title: "생생한 고객 검증 3분 이상",
    detail: "점주 말뿐 아니라 실제 매장 고객 반응을 길게 노출",
  },
];

const translations: Translation[] = [
  {
    k: "1. 과거 대비",
    v: "미아점 점주님의 전직 커리어·생활 상황 — 점주 사전 협의 후 공개 범위 확정",
  },
  {
    k: "2. 시스템 강조",
    v: "15시간 육수 + 30초 완성 + SV 밀착 = 라이옥의 절대 우위 지점",
  },
  {
    k: "3. 숫자 훅",
    v: "쌀국수는 저가 업종 아님 → 시간 훅(15시간) + 스케일 훅(본점 월 1억 vs 미아점 월 3,000만)으로 변주",
  },
  {
    k: "4. 물류 투명성",
    v: "삼성 웰스토리 + 자체 PB공장 + 원가율 30% (업계 평균 40% 대비 10%p 낮음) 자연 공개",
  },
];

const channelMetrics: ChannelMetric[] = [
  {
    label: "채널 핸들",
    jangsaStory: "@jangsa_story",
    jibangTheater: "@user-jibang_life",
    jikdal: "@Jikdal",
  },
  {
    label: "비즈니스 이메일",
    jangsaStory: "minerva2086@naver.com",
    jibangTheater: "ad_gram@naver.com",
    jikdal: "jadalin53@gmail.com",
  },
  {
    label: "구독자",
    jangsaStory: "17.5만",
    jibangTheater: "2.4만",
    jikdal: "18.2만",
  },
  {
    label: "최근 영상 조회수",
    jangsaStory: "130,241",
    jibangTheater: "66,958",
    jikdal: "52,525",
  },
  {
    label: "구독 대비 도달률",
    jangsaStory: "0.74배",
    jibangTheater: "2.79배 ⭐",
    jikdal: "0.29배",
    highlight: "jibang",
  },
  {
    label: "영상 길이",
    jangsaStory: "16:44 (긴 편)",
    jibangTheater: "12:08 (중간)",
    jikdal: "10:29 (짧은 편)",
  },
  {
    label: "톤·스타일",
    jangsaStory: "젊은 감각·빠른 편집",
    jibangTheater: "휴먼 다큐·가족 서사·감성",
    jikdal: "시스템·효율성·정보 전달",
    highlight: "jibang",
  },
  {
    label: "슈퍼크리스피 매장",
    jangsaStory: "시흥 함송점 (황의용)",
    jibangTheater: "화성 병점점",
    jikdal: "고덕점 (이허석)",
  },
  {
    label: "채널 규모",
    jangsaStory: "중형",
    jibangTheater: "소형 (1인 운영 추정)",
    jikdal: "중형",
  },
  {
    label: "라이옥 핏 강점",
    jangsaStory: "도달 최대·젊은 예비창업자층",
    jibangTheater: "다큐 톤·도달률 최고",
    jikdal: "시스템 서사 정합·구독 규모",
  },
  {
    label: "라이옥 핏 약점",
    jangsaStory: "상대적 고단가 구간",
    jibangTheater: "절대 구독 수 작음",
    jikdal: "도달률 낮음·영상 짧음",
  },
  {
    label: "협상 여지",
    jangsaStory: "중",
    jibangTheater: "상",
    jikdal: "상",
  },
  {
    label: "답장 확률 (추정)",
    jangsaStory: "70%",
    jibangTheater: "80%",
    jikdal: "65%",
  },
  {
    label: "종합 핏 점수",
    jangsaStory: "72/100",
    jibangTheater: "92/100 ⭐",
    jikdal: "78/100",
    highlight: "jibang",
  },
];

const strategies: Strategy[] = [
  {
    code: "A",
    name: "점진 추가",
    method: "필수 구성만 먼저 제시 → 견적 받고 → 옵션 하나씩 추가 협상",
    oneLine: "소형·1인 운영 채널에 부담 적은 방식",
  },
  {
    code: "B",
    name: "점진 감축",
    method: "필수 + 모든 옵션 한 번에 제시 → 총액 받고 → 불필요 항목 빼면서 감액 협상",
    oneLine: "중형 비즈니스 채널에 효과적",
  },
  {
    code: "C",
    name: "미디어킷 선요청",
    method: "단가표·사례·활용권 정책을 먼저 받아 정보 선확보 → 우리가 조합 설계해 2차 제안",
    oneLine: "규모 큰 채널에 프로페셔널 톤 전달",
  },
];

const channelStrategies: ChannelStrategy[] = [
  {
    channel: "자영업자스토리",
    strategy: "C. 미디어킷 선요청",
    reason: "채널 규모 큼 → 미디어킷·단가표 갖춰져 있을 가능성 높음. 정보 먼저 파악 후 우리 조합을 역제안",
  },
  {
    channel: "지방극장",
    strategy: "A. 점진 추가",
    reason: "1인 운영 추정 → 미디어킷 없을 가능성. 심플한 필수 구성으로 먼저 견적 받는 방식이 채널 부담 최소",
  },
  {
    channel: "직업의달인",
    strategy: "B. 점진 감축",
    reason: "중형 + 정보 전달 톤 → 비즈니스 소통 능숙 추정. 최대 사양으로 한 번에 견적 받고 조정이 속도 빠름",
  },
];

const commonPrinciples = [
  "첫 이메일에서 예산 비공개 — 우리 예산을 명시하는 순간 그 금액에 맞춰 견적이 나옵니다 (앵커링)",
  "하이브리드 접근 선언 — 씬 구성·톤·편집은 크리에이터에게 전적 일임, 우리는 메시지와 촬영 소재만 제공",
  "슈퍼크리스피 영상 직접 인용 — 해당 채널의 구체 매장 이름·점주 이름까지 지목해 \"진짜 봤구나\" 신뢰 조성",
  "2차 응답은 48시간 내 — 크리에이터 기억 사라지기 전 후속 진행",
  "발신자 통일 — 김성찬 / 라이옥(Raeoak) 마케팅 담당 명의, 회사 메일 도메인 발송",
];

const differentiators: Differentiator[] = [
  {
    hook: "15시간 육수 vs 30초 완성 대비",
    embed: "점주 대사: \"본사가 이걸 미리 해줘서 저는 30초면 나와요\"",
  },
  {
    hook: "ㄱ자 다찌 주방→손님 3걸음 서빙",
    embed: "B-roll 원테이크 영상 (쇼츠 핵심 소재)",
  },
  {
    hook: "SV 밀착 지원",
    embed: "SV가 많이 도와준다는 점을 점주 대사로 언급",
  },
  {
    hook: "미아점 월 3,000만대 매출",
    embed: "점주 자연스럽게 \"너무 쉬워서 1인으로도 가능하다\"고 언급",
  },
];

const numberRules = [
  {
    tone: "good" as const,
    text: "\"오픈 1~2개월 데이터로, 월 3,000만~4,000만대입니다. 본점(15평)은 월 1억 수준입니다.\"",
  },
  {
    tone: "bad" as const,
    text: "\"오픈 1개월에 월 1억 벌 수 있습니다.\"",
  },
];

const roadmap: RoadmapPhase[] = [
  {
    phase: "단기",
    period: "2026 상반기",
    title: "미아점 점주 인터뷰 1편",
    bullets: [
      "3개 채널 중 1곳(1순위: 지방극장) 섭외",
      "LP·자사 SNS 2차 활용 자산화",
      "가맹 문의 유입 퍼널 가동",
    ],
  },
  {
    phase: "중기",
    period: "2026 하반기 ~ 2027",
    title: "신규 수도권 가맹점 오픈 시마다 연쇄 인터뷰",
    bullets: [
      "3개 채널 돌아가며 집행 (포트폴리오 효과)",
      "\"라이트 모델 사례 시리즈\" 누적",
      "예비 창업자에게 \"선택지 풍부한 프랜차이즈\" 인식 형성",
    ],
  },
  {
    phase: "장기",
    period: "시스템 안착 후",
    title: "인싸맨 채널 진출 (본사 대표 인터뷰)",
    bullets: [
      "슈퍼크리스피 정관영 대표가 이미 인싸맨 출연 — 참조 레퍼런스",
      "\"다매장 실적 + 명확한 시스템\" 갖춘 후 적기",
      "라이옥 브랜드 권위·확장성 시그널 확립",
    ],
  },
];

const approvalItems = [
  {
    num: "1",
    label: "본 제안 방향 승인",
    detail: "3개 채널 병행 컨택 + 채널별 다른 전략(A/B/C) + 장기 연쇄 인터뷰 로드맵",
  },
  {
    num: "2",
    label: "미아점 점주 배경 공유",
    detail: "전직 커리어·개인 상황 (슈퍼크리스피 공식 1번 \"과거 대비\"에 직접 활용). 점주님과 사전 협의해 공개 가능 범위 정리 필요",
  },
];

export default function ResearchPage() {
  return (
    <main
      className="mx-auto w-full max-w-[980px] px-[var(--space-5)] pt-[var(--space-6)] pb-[var(--space-10)] sm:px-[var(--space-6)] sm:pt-[var(--space-8)]"
      style={{ wordBreak: "keep-all" }}
    >
      <Link
        href="/research"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "13px",
          fontWeight: 500,
          color: "var(--text-secondary)",
          marginBottom: "var(--space-5)",
          textDecoration: "none",
        }}
        className="transition-opacity duration-150 hover:opacity-70"
      >
        ← 리서치 목록
      </Link>

      {/* Hero */}
      <section style={{ marginBottom: "var(--space-10)" }}>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--accent)",
            letterSpacing: "0.3px",
            marginBottom: "var(--space-3)",
          }}
        >
          RESEARCH · 2026-04-20
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            color: "var(--text-primary)",
            marginBottom: "var(--space-4)",
          }}
        >
          유튜브 인터뷰 채널 섭외 제안
        </h1>
        <p
          style={{
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            marginBottom: "var(--space-8)",
          }}
        >
          미아점 가맹점주 인터뷰 영상 제작을 위한 채널 섭외 방향. 슈퍼크리스피 벤치마크 3편 분석 + 자영업자스토리·지방극장·직업의달인 3곳 심층 비교 + 채널별 A/B/C 협상 전략 + 장기 연쇄 인터뷰 로드맵.
        </p>

        {/* Verdict Card */}
        <div
          style={{
            background: "linear-gradient(135deg, #1d1d1f, #3a3a3c)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-8)",
            color: "#fff",
            marginBottom: "var(--space-6)",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "1px",
              opacity: 0.7,
              marginBottom: "var(--space-3)",
            }}
          >
            제안 요약
          </div>
          <div
            style={{
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              marginBottom: "var(--space-4)",
              lineHeight: 1.15,
            }}
          >
            중소형 3곳 병행 컨택
          </div>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.6,
              opacity: 0.85,
              maxWidth: "640px",
            }}
          >
            슈퍼크리스피 출연 이력이 검증된 중소형 자영업 인터뷰 채널 3곳(자영업자스토리·지방극장·직업의달인)에 병행 컨택합니다. 각 채널 규모와 운영 형태에 맞는 A/B/C 전략을 매핑해 답장률과 협상력을 동시에 확보합니다.
          </p>
        </div>

        {/* Reasons */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "var(--space-4)",
          }}
        >
          {reasons.map((r, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-5)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.5px",
                  marginBottom: "var(--space-2)",
                }}
              >
                근거 {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.3px",
                  marginBottom: "var(--space-2)",
                }}
              >
                {r.label}
              </div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                }}
              >
                {r.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Background */}
      <Section title="01. 검토 배경">
        <Table2Col rows={background} />
      </Section>

      {/* Benchmark Videos */}
      <Section
        title="02. 벤치마킹 — 슈퍼크리스피 레퍼런스 영상 3편"
        subtitle="자영업자 인터뷰 채널에 반복 출연하며 간접 유도형 공식을 검증한 사례"
      >
        <div
          style={{
            background: "var(--bg-surface)",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            marginBottom: "var(--space-6)",
          }}
        >
          {benchmarkVideos.map((v, i) => (
            <a
              key={i}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${v.channel} — ${v.title} (YouTube 새 탭에서 열기)`}
              style={{
                display: "block",
                padding: "var(--space-5)",
                borderBottom:
                  i < benchmarkVideos.length - 1
                    ? "1px solid var(--border-subtle)"
                    : "none",
                textDecoration: "none",
                color: "inherit",
                WebkitTapHighlightColor: "transparent",
              }}
              className="transition-colors duration-150 hover:bg-black/[0.02] active:bg-black/[0.04]"
            >
              <div
                className="flex items-center justify-between flex-wrap"
                style={{ gap: "var(--space-3)", marginBottom: "var(--space-2)" }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--accent)",
                    letterSpacing: "-0.2px",
                  }}
                >
                  <PlayIcon />
                  {v.channel}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "var(--text-tertiary)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {v.length}
                </div>
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: 1.5,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.3px",
                  marginBottom: "var(--space-2)",
                }}
              >
                {v.title}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "var(--text-secondary)",
                  marginBottom: "var(--space-3)",
                }}
              >
                출연: {v.owner}
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--accent)",
                  letterSpacing: "0.2px",
                }}
              >
                YouTube에서 보기
                <ExternalLinkIcon />
              </div>
            </a>
          ))}
        </div>

        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.3px",
            marginBottom: "var(--space-4)",
          }}
        >
          3편 공통 공식 (슈퍼크리스피 포맷)
        </h3>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--space-4)",
            marginBottom: "var(--space-6)",
          }}
        >
          {formulas.map((f, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-5)",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.8px",
                  marginBottom: "var(--space-2)",
                }}
              >
                {f.eyebrow}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.3px",
                  marginBottom: "var(--space-2)",
                  lineHeight: 1.3,
                }}
              >
                {f.title}
              </div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                }}
              >
                {f.detail}
              </p>
            </div>
          ))}
        </div>

        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.3px",
            marginBottom: "var(--space-4)",
          }}
        >
          라이옥 적용 매핑
        </h3>
        <Table2Col rows={translations} />
      </Section>

      {/* Channel Comparison */}
      <Section
        title="03. 섭외 대상 — 채널 3곳 심층 비교"
        subtitle="슈퍼크리스피 출연 이력이 검증된 중소형 자영업 인터뷰 채널"
      >
        <div
          className="sm:hidden"
          style={{
            fontSize: "12px",
            color: "var(--text-tertiary)",
            textAlign: "center",
            marginBottom: "var(--space-2)",
            letterSpacing: "0.3px",
          }}
          aria-hidden="true"
        >
          ← 좌우로 스크롤 →
        </div>
        <div
          style={{
            background: "var(--bg-surface)",
            borderRadius: "var(--radius-xl)",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <table
            style={{
              width: "100%",
              minWidth: "680px",
              borderCollapse: "collapse",
              fontSize: "13px",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                  textAlign: "left",
                }}
              >
                <Th>지표</Th>
                <Th align="left">
                  <ChannelHeader name="자영업자스토리" url="https://www.youtube.com/@jangsa_story" />
                </Th>
                <Th align="left">
                  <ChannelHeader name="지방극장 ⭐" url="https://www.youtube.com/@user-jibang_life" />
                </Th>
                <Th align="left">
                  <ChannelHeader name="직업의달인" url="https://www.youtube.com/@Jikdal" />
                </Th>
              </tr>
            </thead>
            <tbody>
              {channelMetrics.map((m, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom:
                      i < channelMetrics.length - 1
                        ? "1px solid var(--border-subtle)"
                        : "none",
                  }}
                >
                  <Td>
                    <span style={{ fontWeight: 600, color: "var(--text-secondary)" }}>
                      {m.label}
                    </span>
                  </Td>
                  <Td muted={m.highlight === "jibang"}>{m.jangsaStory}</Td>
                  <Td
                    highlight={m.highlight === "jibang"}
                  >
                    {m.jibangTheater}
                  </Td>
                  <Td muted={m.highlight === "jibang"}>{m.jikdal}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>
          <strong>지방극장</strong> ⭐ — 구독 2.4만으로 가장 작지만 도달률 2.79배로 실제 본 사람은 오히려 많습니다. 휴먼 다큐 톤이 &ldquo;부산→서울 진출한 점주&rdquo; 서사와 완벽 매칭되어 가장 안정적.
        </Note>
      </Section>

      {/* Strategies */}
      <Section
        title="04. 협상 전략 — 채널별 다른 접근"
        subtitle="A/B/C 하이브리드 매핑"
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "var(--space-4)",
            marginBottom: "var(--space-6)",
          }}
        >
          {strategies.map((s, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-5)",
                height: "100%",
              }}
            >
              <div
                className="flex items-center"
                style={{ gap: "var(--space-3)", marginBottom: "var(--space-3)" }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--text-primary)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: 800,
                  }}
                >
                  {s.code}
                </div>
                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {s.name}
                </div>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  marginBottom: "var(--space-3)",
                }}
              >
                {s.method}
              </p>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--accent)",
                }}
              >
                {s.oneLine}
              </div>
            </div>
          ))}
        </div>

        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.3px",
            marginBottom: "var(--space-4)",
          }}
        >
          채널별 전략 매핑
        </h3>
        <div
          style={{
            background: "var(--bg-surface)",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            marginBottom: "var(--space-6)",
          }}
        >
          {channelStrategies.map((cs, i) => (
            <div
              key={i}
              style={{
                padding: "var(--space-4) var(--space-5)",
                borderBottom:
                  i < channelStrategies.length - 1
                    ? "1px solid var(--border-subtle)"
                    : "none",
              }}
            >
              <div
                className="flex items-center flex-wrap"
                style={{ gap: "var(--space-3)", marginBottom: "var(--space-2)" }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.2px",
                  }}
                >
                  {cs.channel}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: "var(--radius-pill)",
                    background: "rgba(0,113,227,0.1)",
                    color: "var(--accent)",
                    letterSpacing: "0.2px",
                  }}
                >
                  {cs.strategy}
                </span>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                }}
              >
                {cs.reason}
              </p>
            </div>
          ))}
        </div>

        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.3px",
            marginBottom: "var(--space-4)",
          }}
        >
          공통 원칙 (모든 채널)
        </h3>
        <div
          style={{
            background: "var(--bg-surface)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-5)",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-3)",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {commonPrinciples.map((p, i) => (
              <li
                key={i}
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  paddingLeft: "20px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    fontWeight: 700,
                    color: "var(--accent)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Differentiators */}
      <Section
        title="05. 라이옥이 영상에 심을 차별화 포인트"
        subtitle="슈퍼크리스피 공식을 표층으로 따르되, 라이옥이 아니면 담을 수 없는 훅을 자연스럽게 임베드"
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-4)",
            marginBottom: "var(--space-6)",
          }}
        >
          {differentiators.map((d, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-5)",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.5px",
                  marginBottom: "var(--space-2)",
                }}
              >
                훅 {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.3px",
                  marginBottom: "var(--space-3)",
                  lineHeight: 1.3,
                }}
              >
                {d.hook}
              </div>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                }}
              >
                {d.embed}
              </p>
            </div>
          ))}
        </div>

        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.3px",
            marginBottom: "var(--space-4)",
          }}
        >
          숫자 공개 원칙
        </h3>
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            marginBottom: "var(--space-4)",
          }}
        >
          미아점은 오픈 1~2개월차로 정착 매출 아님. 이 단서를 <strong>먼저</strong> 밝히고 숫자 제시하는 것이 오히려 신뢰도를 올립니다.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
          }}
        >
          {numberRules.map((r, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "var(--space-4)",
                alignItems: "center",
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-4) var(--space-5)",
                borderLeft:
                  r.tone === "good"
                    ? "3px solid #1f7a3a"
                    : "3px solid #c0392b",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  fontSize: "20px",
                  fontWeight: 800,
                  color: r.tone === "good" ? "#1f7a3a" : "#c0392b",
                }}
              >
                {r.tone === "good" ? "○" : "×"}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "var(--text-primary)",
                  fontWeight: 500,
                }}
              >
                {r.text}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Roadmap */}
      <Section
        title="06. 장기 로드맵"
        subtitle="1편 단발이 아닌 영상 자산 누적 — 슈퍼크리스피 모델 차용"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          {roadmap.map((r, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-6)",
                position: "relative",
              }}
            >
              <div
                className="flex items-center flex-wrap"
                style={{ gap: "var(--space-3)", marginBottom: "var(--space-3)" }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "var(--radius-pill)",
                    background: "var(--text-primary)",
                    color: "#fff",
                    letterSpacing: "0.5px",
                  }}
                >
                  {r.phase}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "var(--text-tertiary)",
                  }}
                >
                  {r.period}
                </div>
              </div>
              <h3
                style={{
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.4px",
                  marginBottom: "var(--space-3)",
                  lineHeight: 1.3,
                }}
              >
                {r.title}
              </h3>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {r.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                      paddingLeft: "16px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--text-tertiary)",
                      }}
                    >
                      ·
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Note>
          <strong>왜 이 로드맵이 중요한가:</strong> 1편 단발과 3~5편 시리즈는 예비 창업자 입장에서 설득력이 기하급수적으로 다릅니다. &ldquo;한 번 성공한 매장&rdquo;은 우연일 수 있지만, &ldquo;여러 매장이 계속 성공하는&rdquo; 증거가 쌓이면 의사결정이 달라집니다. 3개 채널 분산은 시청자 풀이 겹치지 않아 도달 누적도 최대화됩니다.
        </Note>
      </Section>

      {/* Approval */}
      <Section title="07. 승인 요청">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
          }}
        >
          {approvalItems.map((a) => (
            <div
              key={a.num}
              style={{
                display: "flex",
                gap: "var(--space-4)",
                alignItems: "flex-start",
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-5)",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                {a.num}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "var(--space-1)",
                    letterSpacing: "-0.2px",
                  }}
                >
                  {a.label}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                  }}
                >
                  {a.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Sources */}
      <Section title="08. 데이터 출처">
        <div
          style={{
            background: "var(--bg-surface)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-5)",
          }}
        >
          <SourceGroup
            title="벤치마크 영상 (2026-04-20)"
            items={[
              {
                text: "자영업자스토리 — 치킨버거 2,900원 25살 사장님",
                url: "https://www.youtube.com/watch?v=X1kuDPA95Zg",
              },
              {
                text: "지방극장 — 2,900원 햄버거 가족 인건비 휴먼 다큐",
                url: "https://www.youtube.com/watch?v=WYdbey48J3Y",
              },
              {
                text: "직업의달인 — 2000원 메뉴로 월 5천 버는 30대",
                url: "https://www.youtube.com/watch?v=uR_gREU-c3A",
              },
              {
                text: "인싸맨 — 슈퍼크리스피 정관영 대표 인터뷰 (장기 로드맵 참조)",
                url: "https://www.youtube.com/watch?v=zJHwCtRIC8o",
              },
            ]}
          />
          <SourceGroup
            title="섭외 후보 채널"
            items={[
              {
                text: "자영업자스토리 (@jangsa_story)",
                url: "https://www.youtube.com/@jangsa_story",
              },
              {
                text: "지방극장 (@user-jibang_life)",
                url: "https://www.youtube.com/@user-jibang_life",
              },
              {
                text: "직업의달인 (@Jikdal)",
                url: "https://www.youtube.com/@Jikdal",
              },
            ]}
          />
          <SourceGroup
            title="분석 도구"
            items={[
              { text: "Gemini 2.5 Pro — 슈퍼크리스피 4편 영상 직접 재생 분석 (2026-04-20)" },
            ]}
          />
          <SourceGroup
            title="내부 자료"
            items={[
              { text: "wiki/output/조민서-보고_유튜브-인터뷰-채널-섭외-제안.md — 기반 보고서" },
              { text: "wiki/output/슈퍼크리스피-채널-심층조사-결과.md — 채널별 점수·재평가" },
              { text: "wiki/output/3채널-협상전략-및-비교표.md — 전략 A/B/C 매핑" },
              { text: "wiki/output/슈퍼크리스피-벤치마크-간접유도형-계획안.md — 간접 유도형 원칙·훅" },
              { text: "wiki/entities/라이옥.md — 미아점·본점 실적·라이트 모델 구조" },
            ]}
            last
          />
        </div>
      </Section>

      <div
        style={{
          marginTop: "var(--space-10)",
          paddingTop: "var(--space-6)",
          borderTop: "1px solid var(--border-subtle)",
          fontSize: "12px",
          color: "var(--text-tertiary)",
          textAlign: "center",
        }}
      >
        본 보고서에는 채널별 예상 견적을 일절 기재하지 않았습니다. 예산 기준점을 미리 만들면 협상에서 앵커링 효과로 불리해지므로, 실제 견적은 섭외 과정에서 자연스럽게 확인·협의 예정입니다.
      </div>
    </main>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "var(--space-10)" }}>
      <div style={{ marginBottom: "var(--space-6)" }}>
        <h2
          style={{
            fontSize: "clamp(22px, 3vw, 28px)",
            fontWeight: 800,
            letterSpacing: "-0.8px",
            color: "var(--text-primary)",
            marginBottom: subtitle ? "var(--space-1)" : 0,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <div
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--text-secondary)",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
      {children}
    </section>
  );
}

function Table2Col({ rows }: { rows: Translation[] }) {
  return (
    <div
      style={{
        background: "var(--bg-surface)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
      }}
    >
      {rows.map((r, i) => (
        <div
          key={r.k}
          className="grid grid-cols-[110px_1fr] gap-[var(--space-3)] sm:grid-cols-[160px_1fr] sm:gap-0"
          style={{
            padding: "var(--space-4) var(--space-5)",
            borderBottom:
              i < rows.length - 1 ? "1px solid var(--border-subtle)" : "none",
            fontSize: "14px",
          }}
        >
          <div style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
            {r.k}
          </div>
          <div style={{ color: "var(--text-primary)", fontWeight: 500 }}>
            {r.v}
          </div>
        </div>
      ))}
    </div>
  );
}

function ChannelHeader({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} 채널 (새 탭)`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        color: "var(--text-primary)",
        textDecoration: "none",
        fontSize: "13px",
        fontWeight: 700,
      }}
      className="transition-opacity duration-150 hover:opacity-70"
    >
      {name}
      <ExternalLinkIcon />
    </a>
  );
}

function PlayIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function Th({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <th
      className="py-2 px-3 sm:py-3 sm:px-4"
      style={{
        fontSize: "12px",
        fontWeight: 600,
        color: "var(--text-tertiary)",
        letterSpacing: "0.3px",
        textAlign: align,
      }}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  align = "left",
  muted = false,
  highlight = false,
}: {
  children: React.ReactNode;
  align?: "left" | "right";
  muted?: boolean;
  highlight?: boolean;
}) {
  return (
    <td
      className="py-2 px-3 sm:py-3 sm:px-4"
      style={{
        fontSize: "13px",
        fontWeight: highlight ? 700 : 500,
        color: highlight
          ? "var(--accent)"
          : muted
            ? "var(--text-secondary)"
            : "var(--text-primary)",
        textAlign: align,
        background: highlight ? "rgba(0,113,227,0.06)" : "transparent",
      }}
    >
      {children}
    </td>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        marginTop: "var(--space-4)",
        padding: "var(--space-4) var(--space-5)",
        background: "rgba(0,113,227,0.06)",
        borderLeft: "3px solid var(--accent)",
        borderRadius: "var(--radius-md)",
        fontSize: "13px",
        lineHeight: 1.6,
        color: "var(--text-primary)",
      }}
    >
      {children}
    </div>
  );
}

type SourceItem = { text: string; url?: string };

function SourceGroup({
  title,
  items,
  last = false,
}: {
  title: string;
  items: SourceItem[];
  last?: boolean;
}) {
  return (
    <div style={{ marginBottom: last ? 0 : "var(--space-5)" }}>
      <div
        style={{
          fontSize: "12px",
          fontWeight: 700,
          color: "var(--text-primary)",
          letterSpacing: "0.3px",
          textTransform: "uppercase",
          marginBottom: "var(--space-3)",
        }}
      >
        {title}
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-2)",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              fontSize: "13px",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              paddingLeft: "14px",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                color: "var(--text-tertiary)",
              }}
            >
              ·
            </span>
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--accent)",
                  textDecoration: "none",
                  wordBreak: "break-word",
                }}
                className="transition-opacity duration-150 hover:opacity-70"
              >
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
