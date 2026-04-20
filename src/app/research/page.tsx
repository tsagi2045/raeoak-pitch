import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마켓컬리 입점 타당성 보고서 — 라이옥",
  description:
    "라이옥 쌀국수·국밥 밀키트 마켓컬리 입점 타당성 분석 — 조건부 보류 결론",
};

type Reason = { label: string; detail: string };
type Competitor = {
  brand: string;
  price: string;
  perPerson: string;
  reviews: string;
};
type LogicStep = { step: string; text: string; verdict: string };

const reasons: Reason[] = [
  {
    label: "수수료 35~40%",
    detail:
      "컬리 실질 수수료 기준 실수령 2인당 19,000원을 받으려면 판매가 29,230~31,667원이 필요.",
  },
  {
    label: "수수료 반영 시 판매가 +55%",
    detail:
      "제품 1인 단가 9,400원 자체도 컬리 내 최상단. 여기에 수수료 35%를 얹으면 판매가 29,230원(네이버 18,800원 대비 +55%)이 되어 경쟁력이 크게 약화.",
  },
  {
    label: "스마트스토어 존재",
    detail:
      "동일 제품이 스마트스토어에 18,800원으로 판매 중. 컬리 고객이 1만원 더 내고 살 이유 없음.",
  },
];

const product = [
  { k: "판매 채널", v: "네이버 스마트스토어" },
  { k: "제품", v: "쌀국수·국밥 각 2인분 18,800원" },
  { k: "1인분 단가", v: "약 9,400원 (시장 최상위)" },
  { k: "누적 리뷰", v: "180건" },
  { k: "생산 캐파", v: "각 월 15,000인분" },
  { k: "컬리 경험", v: "처음" },
];

const competitors: Competitor[] = [
  {
    brand: "에머이 소고기 키트 (2인)",
    price: "10,625원",
    perPerson: "5,313",
    reviews: "60,208건 / 9,999+",
  },
  {
    brand: "마이하노이 고기폭탄",
    price: "7,600원",
    perPerson: "3,800",
    reviews: "9,999+",
  },
  {
    brand: "리틀 비엣남 소고기 (2인)",
    price: "8,500원",
    perPerson: "4,250",
    reviews: "999+",
  },
  {
    brand: "소이연남 태국 소고기 (1인)",
    price: "8,200원",
    perPerson: "8,200",
    reviews: "24,419건",
  },
  {
    brand: "소이연남 똠얌 (1인)",
    price: "8,800원",
    perPerson: "8,800",
    reviews: "14,723건",
  },
  {
    brand: "풀무원 Pho (4인)",
    price: "8,980원",
    perPerson: "2,245",
    reviews: "364건",
  },
];

const financeScenarios = [
  { rate: "30%", salePrice: "27,143원", gap: "+44%" },
  { rate: "35% (기본)", salePrice: "29,230원", gap: "+55%", highlight: true },
  { rate: "40% (광고 포함)", salePrice: "31,667원", gap: "+68%" },
];

const logicSteps: LogicStep[] = [
  {
    step: "1",
    text: "컬리 실질 수수료 35~40%",
    verdict: "팩트 확인",
  },
  {
    step: "2",
    text: "실수령 19,000원 목표 → 판매가 29,230~31,667원 필요",
    verdict: "역산 확정",
  },
  {
    step: "3",
    text: "컬리 내 경쟁 Top 제품 대비 2.8~3배 비쌈",
    verdict: "경쟁 데이터 확인",
  },
  {
    step: "4",
    text: "동일 제품이 스마트스토어에 18,800원 → 컬리 구매 이유 소멸",
    verdict: "구조적 결론",
  },
  {
    step: "5",
    text: "컬리 전용 상위 제품 개발이 해결책이나 현재 여력 부족",
    verdict: "실행 불가",
  },
];

const retryTriggers = [
  "컬리 전용 상위 SKU 개발·운영 여력 확보 (별도 생산 라인, 재고 관리 인력)",
  "밀키트 OEM 원가가 20% 이하로 개선 (현재 30~40%)",
  "스마트스토어 판매가 인상으로 컬리와의 격차 축소",
];

const maintain = [
  "컬리 측 MD 관계 라인은 필요 시 접촉 가능한 수준 유지",
  "에머이·소이연남 컬리 판매 동향 분기 1회 모니터링",
  "스마트스토어 리뷰·매출 성장에 집중 (180→1,000건 로드맵)",
];

export default function ResearchPage() {
  return (
    <main className="mx-auto w-full max-w-[980px] px-[var(--space-6)] pt-[var(--space-10)] pb-[var(--space-10)]">
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
          마켓컬리 입점 타당성 보고서
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
          라이옥 쌀국수·국밥 밀키트의 마켓컬리 진입 가능성 분석. 수수료 구조·경쟁 현황·스마트스토어 이중 채널 문제를 검토한 결과 보고서.
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
            최종 권고
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
            조건부 보류
          </div>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.6,
              opacity: 0.85,
              maxWidth: "640px",
            }}
          >
            현재 조건(동일 제품·동일 가격대)으로는 마켓컬리 입점을 권고하지 않습니다. 컬리 전용 상위 제품을 개발·운영할 여력이 확보되거나, 원가가 개선될 때 재검토합니다.
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
      <Section title="01. 검토 배경" subtitle="제품 현황 및 검증 질문">
        <Table2Col rows={product} />
        <Note>
          <strong>검증 질문:</strong> &ldquo;2인당 실수령 19,000원을 유지하면서 마켓컬리에 진입 가능한가?&rdquo;
        </Note>
      </Section>

      {/* Kurly Structure */}
      <Section title="02. 마켓컬리 핵심 구조">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-4)",
          }}
        >
          <InfoCard
            eyebrow="고객"
            title="30~40대 전문직 여성"
            bullets={[
              "40대 관심 35% + 30대 32%",
              "앱 사용자 여성 75.8%",
              "전업주부 아닌 사무직·전문기술직 우위",
              "밀키트 구매 비중 50.7% (쿠팡·이마트 2배)",
            ]}
          />
          <InfoCard
            eyebrow="수수료"
            title="실질 35~40%"
            bullets={[
              "기본 판매 수수료 30% 중반",
              "광고·판촉비 +5~10%",
              "물류·창고 관리비 셀러 부담",
              "냉동식품 반품 불가 (셀러 리스크 ↓)",
            ]}
          />
          <InfoCard
            eyebrow="입점 프로세스"
            title="7주 · 통과율 8%"
            bullets={[
              "70여 가지 품질 기준 심사",
              "전체 성분 공개 필수",
              "상품위원회(김슬아 대표) 참석 심사",
              "통과 시 MD 기획→판매까지 7주",
            ]}
          />
        </div>
      </Section>

      {/* Competition */}
      <Section
        title="03. 컬리 내 쌀국수 경쟁 현황"
        subtitle="2026-04-20 Chrome 브라우저 직접 수집"
      >
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
              minWidth: "560px",
              borderCollapse: "collapse",
              fontSize: "14px",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                  textAlign: "left",
                }}
              >
                <Th>브랜드 · 상품</Th>
                <Th align="right">판매가</Th>
                <Th align="right">1인 단가</Th>
                <Th align="right">리뷰</Th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, i) => (
                <tr
                  key={i}
                  style={{ borderBottom: "1px solid var(--border-subtle)" }}
                >
                  <Td>{c.brand}</Td>
                  <Td align="right" mono>
                    {c.price}
                  </Td>
                  <Td align="right" mono muted>
                    {c.perPerson}
                  </Td>
                  <Td align="right" muted>
                    {c.reviews}
                  </Td>
                </tr>
              ))}
              <tr
                style={{
                  background: "rgba(0,113,227,0.06)",
                }}
              >
                <Td>
                  <strong>라이옥 (네이버 현 판매)</strong>
                </Td>
                <Td align="right" mono>
                  <strong>18,800원</strong>
                </Td>
                <Td align="right" mono>
                  <strong>9,400</strong>
                </Td>
                <Td align="right" muted>
                  180건 (네이버)
                </Td>
              </tr>
            </tbody>
          </table>
        </div>
        <Note>
          제품 1인 단가 기준: 소이연남(8,200) <strong>1.15배</strong>, 에머이(5,313) <strong>1.77배</strong>, 풀무원(2,245) 4.19배 — 이미 컬리 내 최상단. 여기에 수수료 35% 반영 시 판매가 <strong>29,230원(1인 14,615원)</strong>으로 뛰어 격차가 더 벌어짐 (→ 04 재무 판단).
        </Note>
      </Section>

      {/* Finance */}
      <Section
        title="04. 재무 판단"
        subtitle="19,000원 실수령 목표 역산"
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--space-4)",
            marginBottom: "var(--space-5)",
          }}
        >
          {financeScenarios.map((s, i) => (
            <div
              key={i}
              style={{
                background: s.highlight
                  ? "var(--text-primary)"
                  : "var(--bg-surface)",
                color: s.highlight ? "#fff" : "var(--text-primary)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-5)",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  opacity: s.highlight ? 0.7 : 0.5,
                  marginBottom: "var(--space-2)",
                }}
              >
                수수료 {s.rate}
              </div>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  letterSpacing: "-0.8px",
                  marginBottom: "var(--space-1)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {s.salePrice}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  opacity: s.highlight ? 0.7 : 0.5,
                }}
              >
                네이버 18,800원 대비 {s.gap}
              </div>
            </div>
          ))}
        </div>
        <Note>
          <strong>원가 구조:</strong> 제품 원가 약 30% (9,500원 판매 기준 3,000원), 아이스박스·부자재·포장 포함 시 최대 40% — 라이옥 측 확인.
        </Note>
      </Section>

      {/* Logic */}
      <Section title="05. 판단 논리" subtitle="5단계 팩트 체인">
        <ol
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {logicSteps.map((s) => (
            <li
              key={s.step}
              style={{
                display: "flex",
                gap: "var(--space-4)",
                alignItems: "center",
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-4) var(--space-5)",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "var(--text-primary)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                {s.step}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    marginBottom: "2px",
                  }}
                >
                  {s.text}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "var(--accent)",
                  }}
                >
                  {s.verdict}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <Note>
          다섯 단계가 모두 성립하므로 <strong>현재 조건의 입점은 타당하지 않음</strong>. 해결 경로는 컬리 전용 상위 제품 개발이지만 현재 여력상 실행 불가.
        </Note>
      </Section>

      {/* Recommendation */}
      <Section title="06. 권고 및 재검토 조건">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-4)",
          }}
        >
          <div
            style={{
              background: "var(--bg-surface)",
              borderRadius: "var(--radius-xl)",
              padding: "var(--space-5)",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "var(--space-3)",
                letterSpacing: "-0.2px",
              }}
            >
              재검토 트리거
            </h3>
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
              {retryTriggers.map((t, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "14px",
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
                    }}
                  >
                    {i + 1}.
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              background: "var(--bg-surface)",
              borderRadius: "var(--radius-xl)",
              padding: "var(--space-5)",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "var(--space-3)",
                letterSpacing: "-0.2px",
              }}
            >
              보류 기간 중 유지
            </h3>
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
              {maintain.map((m, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "14px",
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
                      color: "var(--text-tertiary)",
                    }}
                  >
                    ·
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Sources */}
      <Section title="07. 데이터 출처">
        <div
          style={{
            background: "var(--bg-surface)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-5)",
          }}
        >
          <SourceGroup
            title="Chrome 브라우저 직접 수집 (2026-04-20)"
            items={[
              {
                text: "에머이 소고기 쌀국수 키트 상세·리뷰",
                url: "https://www.kurly.com/goods/5073094",
              },
              {
                text: "소이연남 태국 소고기 쌀국수 상세·리뷰",
                url: "https://www.kurly.com/goods/5044569",
              },
              {
                text: "소이연남 똠얌 쌀국수 상세",
                url: "https://www.kurly.com/goods/5055889",
              },
              {
                text: "풀무원 베트남 쌀국수 Pho 4인",
                url: "https://www.kurly.com/goods/1000331934",
              },
              {
                text: "컬리 쌀국수 검색 결과",
                url: "https://www.kurly.com/search?sword=%EC%8C%80%EA%B5%AD%EC%88%98",
              },
              {
                text: "컬리 국밥 검색 결과",
                url: "https://www.kurly.com/search?sword=%EA%B5%AD%EB%B0%A5",
              },
            ]}
          />
          <SourceGroup
            title="언론·업계 자료"
            items={[
              {
                text: "녹색경제신문 — 70개 기준 통과해야 입점",
                url: "https://www.greened.kr/news/articleView.html?idxno=270634",
              },
              {
                text: "뉴스1 — 컬리 3자 배송 강화와 수수료",
                url: "https://www.news1.kr/industry/distribution/5203364",
              },
              {
                text: "뉴데일리 — 판매자 배송 비중 44%",
                url: "https://biz.newdaily.co.kr/site/data/html/2024/05/20/2024052000114.html",
              },
              {
                text: "지구인사이드 — 컬리 납품 포기 사례",
                url: "https://g9inside.com/?p=6471",
              },
              {
                text: "디지털데일리 — 컬리 오픈마켓 성공 조건",
                url: "https://m.ddaily.co.kr/page/view/2021090811061506404",
              },
              {
                text: "이데일리 — 에머이 마켓컬리 입점",
                url: "https://m.edaily.co.kr/News/Read?newsId=01564566629113864&mediaCodeNo=257",
              },
              {
                text: "랭키파이 — 마켓컬리 연령별 관심도",
                url: "https://www.job-post.co.kr/news/articleView.html?idxno=102210",
              },
              {
                text: "데이터솜 — 새벽배송 주 이용자 분석",
                url: "http://www.datasom.co.kr/news/articleView.html?idxno=116924",
              },
              {
                text: "오픈서베이 — 온라인 식료품 채널 비교",
                url: "https://www.mobiinside.co.kr/2022/03/07/food-mall-trend/",
              },
              {
                text: "물류신문 — 컬리 충성 고객 성장",
                url: "https://www.klnews.co.kr/news/articleView.html?idxno=304593",
              },
              {
                text: "ZDNet — 마켓컬리 김포 물류센터",
                url: "https://zdnet.co.kr/view/?no=20210330162555",
              },
              {
                text: "어패럴뉴스 — 채소 팔던 마켓컬리",
                url: "https://m.apparelnews.co.kr/news/news_view/?idx=212045",
              },
            ]}
          />
          <SourceGroup
            title="컬리 공식"
            items={[
              {
                text: "컬리 품질기준",
                url: "https://www.kurly.com/introduce/quality-standard",
              },
              {
                text: "컬리 가격정책",
                url: "https://www.kurly.com/m2/introduce/priceMethod/price_policy.php",
              },
              {
                text: "3P 파트너 오피스",
                url: "https://3p-partner.kurly.com/",
              },
            ]}
          />
          <SourceGroup
            title="내부 자료"
            items={[
              { text: "wiki/output/컬리-경쟁환경-입점구조.md — Phase 1·2 상세" },
              { text: "wiki/output/마켓컬리-입점-타당성-보고서.md — 최종 보고서" },
              { text: "wiki/entities/라이옥.md — 제품·캐파·원가" },
              {
                text: "대표님 구두 확인 (2026-04-20): 원가 30%(부자재 포함 최대 40%), 실수령 목표 2인 19,000원",
              },
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
        본 보고서는 2026-04-20 기준 공개 자료 및 라이옥 측 구두 확인 정보를 바탕으로 작성되었으며, 컬리 3P 파트너 오피스 정확 수수료율은 미확정으로 일반 업계 공개 수치에 근거함.
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

function Table2Col({ rows }: { rows: { k: string; v: string }[] }) {
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
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr",
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

function InfoCard({
  eyebrow,
  title,
  bullets,
}: {
  eyebrow: string;
  title: string;
  bullets: string[];
}) {
  return (
    <div
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
          textTransform: "uppercase",
          marginBottom: "var(--space-2)",
        }}
      >
        {eyebrow}
      </div>
      <div
        style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "var(--text-primary)",
          letterSpacing: "-0.3px",
          marginBottom: "var(--space-4)",
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
        {bullets.map((b, i) => (
          <li
            key={i}
            style={{
              fontSize: "13px",
              lineHeight: 1.5,
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
            {b}
          </li>
        ))}
      </ul>
    </div>
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
      style={{
        padding: "var(--space-4) var(--space-5)",
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
  mono = false,
  muted = false,
}: {
  children: React.ReactNode;
  align?: "left" | "right";
  mono?: boolean;
  muted?: boolean;
}) {
  return (
    <td
      style={{
        padding: "var(--space-4) var(--space-5)",
        fontSize: "13px",
        fontWeight: mono ? 600 : 500,
        color: muted ? "var(--text-secondary)" : "var(--text-primary)",
        textAlign: align,
        fontVariantNumeric: mono ? "tabular-nums" : "normal",
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
