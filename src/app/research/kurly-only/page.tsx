import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "컬리 전용 상품 기획 — 라이옥 리서치",
  description:
    "베트남 국밥을 마켓컬리 전용 SKU로 단독 런칭하는 전략 제안. 수수료 40% 기준 판매가 32,000원, 한식 프리미엄 탕 포지션.",
};

type Reason = { label: string; detail: string };
type FeeRow = { item: string; value: string; note?: string };
type PremiumBroth = {
  brand: string;
  product: string;
  price: string;
  discounted?: string;
  hook: string;
  reviews: string;
};
type Competitor = {
  brand: string;
  price: string;
  perPerson: string;
  kurlyOnly: boolean;
};
type Option = {
  code: string;
  label: string;
  verdict: string;
  pros: string;
  cons: string;
  pick?: boolean;
};

const premiseShifts: Reason[] = [
  {
    label: "생산 라인 동일 확인",
    detail:
      "쌀국수와 국밥은 육수 맛·면 양만 다를 뿐 동일 라인에서 생산 가능하다고 확인해 주셨습니다. 전용 SKU 설비 부담이 해소되었습니다.",
  },
  {
    label: "스마트스토어 여력 여유",
    detail:
      "현재 스마트스토어는 마케팅 미집행으로 매출·리뷰가 저조한 상태입니다. 컬리 전환 시 기회비용이 크지 않습니다.",
  },
  {
    label: "국밥 = 유일 시그니처",
    detail:
      "베트남 국밥은 라이옥 매장의 타사 없는 시그니처입니다. 컬리 차별화 자산으로 활용 가능합니다.",
  },
];

const feeRows1P: FeeRow[] = [
  {
    item: "기본 판매 수수료",
    value: "30% 중반",
    note: "카테고리별 차등. 식품·밀키트 기준",
  },
  {
    item: "광고 · 판촉비 (선택)",
    value: "+5 ~ 10%",
    note: "컬리스 추천, 브랜드관 노출",
  },
  {
    item: "성장장려금",
    value: "+1 ~ 3%",
    note: "일정 이상 매출 업체 대상 (2022년~)",
  },
  {
    item: "실질 총 부담",
    value: "35 ~ 40%",
    note: "광고·성장장려금 포함",
  },
  {
    item: "창고 관리비",
    value: "별도",
    note: "공급업체 부담",
  },
  {
    item: "물류센터 입고 운송비",
    value: "건당 수백 원",
    note: "셀러 부담",
  },
  {
    item: "반품 정책",
    value: "냉동식품 단순변심 불가",
    note: "셀러 리스크 ↓",
  },
];

const feeComparison = [
  {
    type: "1P (직매입)",
    fee: "35 ~ 40%",
    role: "컬리가 재고 매입 · 보관 · 샛별배송",
    fit: "✓ 냉동 밀키트에 적합 (콜드체인)",
    highlight: true,
  },
  {
    type: "3P (파트너 마켓플레이스)",
    fee: "15 ~ 20%",
    role: "셀러가 재고 · 보관 · 배송 직접",
    fit: "△ 냉동 물류 자체 구축 필요",
    highlight: false,
  },
];

const feeScenarios = [
  { rate: "30%", salePrice: "27,143원", note: "광고 미집행 가정" },
  { rate: "35%", salePrice: "29,230원", note: "광고 일부 포함" },
  {
    rate: "40% (보수 가정)",
    salePrice: "31,667원 ≈ 32,000원",
    note: "광고·성장장려금 포함 · 보고 기준",
    highlight: true,
  },
];

const competitors: Competitor[] = [
  { brand: "에머이 소고기 쌀국수 키트 2인", price: "12,500원", perPerson: "6,250", kurlyOnly: true },
  { brand: "리틀 비엣남 소고기 쌀국수 2인", price: "8,500원 (할)", perPerson: "4,250", kurlyOnly: true },
  { brand: "쌉(SAAP) 팟타이 2인", price: "14,280원 (할)", perPerson: "7,140", kurlyOnly: true },
  { brand: "쌉(SAAP) 팟씨유 2인", price: "15,800원", perPerson: "7,900", kurlyOnly: true },
  { brand: "툭툭누들타이 갈비 쌀국수 1인", price: "7,565원 (할)", perPerson: "7,565", kurlyOnly: true },
  { brand: "에머이 소고기 쌀국수 2종 택1", price: "7,268원 (할)", perPerson: "7,268", kurlyOnly: true },
  { brand: "리틀 비엣남 마라 소고기 쌀국수", price: "5,800원 (할)", perPerson: "5,800", kurlyOnly: true },
  { brand: "CJ 베트남 쌀국수 2인", price: "5,980원 (할)", perPerson: "2,990", kurlyOnly: false },
  { brand: "풀무원 Pho 4인", price: "9,980원", perPerson: "2,495", kurlyOnly: false },
];

const premiumBroths: PremiumBroth[] = [
  {
    brand: "벽제갈비",
    product: "한우 설렁탕 · 양곰탕 · 곰탕",
    price: "17,000원~",
    hook: "허영만 <식객> 맛집 + Kurly Only",
    reviews: "9,999+",
  },
  {
    brand: "워커힐",
    product: "명월관 갈비탕",
    price: "17,000원",
    discounted: "14,790원",
    hook: "호텔 맛집 브랜드",
    reviews: "9,999+",
  },
  {
    brand: "워커힐",
    product: "삼계탕",
    price: "15,000원",
    discounted: "13,050원",
    hook: "호텔 프리미엄",
    reviews: "226",
  },
  {
    brand: "조선호텔",
    product: "갈비탕 730g",
    price: "13,900원",
    discounted: "12,920원",
    hook: "호텔 브랜드",
    reviews: "999+",
  },
  {
    brand: "사미헌",
    product: "갈비탕",
    price: "13,000원",
    hook: "전통 맛집",
    reviews: "9,999+",
  },
  {
    brand: "55년 종로 계림",
    product: "마늘 닭도리탕",
    price: "19,900원",
    discounted: "16,910원",
    hook: "55년 전통 맛집 + Kurly Only",
    reviews: "999+",
  },
];

const options: Option[] = [
  {
    code: "A",
    label: "국밥만 컬리 단독",
    verdict: "권장",
    pros: "블루오션 독점 · 한식 탕 포지션으로 가격 정당화 · 스마트스토어 충돌 0",
    cons: "카테고리 인지도 초기 학습 필요",
    pick: true,
  },
  {
    code: "B",
    label: "쌀국수만 컬리",
    verdict: "비추천",
    pros: "카테고리 인지도 높음",
    cons: "에머이·리틀비엣남과 직접 가격 경쟁 · 14,500원 저항 큼",
  },
  {
    code: "C",
    label: "둘 다 컬리",
    verdict: "비추천",
    pros: "포트폴리오 · 크로스셀",
    cons: "초기 리소스 분산 · 쌀국수는 B의 약점 그대로",
  },
  {
    code: "D",
    label: "국밥 컬리 + 쌀국수 스마트스토어",
    verdict: "차선",
    pros: "리스크 분산 · 쌀국수 기존 채널 유지",
    cons: "권장안(A)과 사실상 동일",
  },
];

const kurlyOnlyCases = [
  { brand: "55년 전통 종로 계림", product: "마늘 닭도리탕", price: "16,910원" },
  { brand: "아소정", product: "궁중 대추 소갈비찜", price: "26,550원" },
  { brand: "오근내닭갈비", product: "국산 닭다리살 닭갈비", price: "15,210원" },
  { brand: "에머이", product: "소고기 쌀국수 키트 2인", price: "12,500원" },
  { brand: "쌉(SAAP)", product: "팟타이 2인", price: "14,280원" },
  { brand: "서촌 영화루", product: "고추 간짜장 2인", price: "9,180원" },
  { brand: "전주 베테랑", product: "즉석우동 2인", price: "6,230원" },
  { brand: "성수동 팩피", product: "감바스 파스타", price: "9,600원" },
];

const roadmap = [
  {
    phase: "단기 (1 ~ 2주)",
    items: [
      "본 보고서 검토 및 최종 의사결정",
      "베트남 국밥 OEM 원가 실측 (32,000원 판매가 역산)",
      "컬리 파트너 포털 등록 및 MD 컨택 준비",
    ],
  },
  {
    phase: "중기 (3 ~ 6주)",
    items: [
      "컬리 MD 제안서 작성 (카테고리 최초 포지셔닝 강조)",
      "전용 SKU 구성 확정 (육수·고기 고명·양념장·채소)",
      "진행 중인 패키지 디자인을 컬리 콜드체인에 맞춰 마감",
      "콜드체인 테스트 (48시간 샛별배송 품질 검증)",
    ],
  },
  {
    phase: "런칭 후 (1 ~ 3개월)",
    items: [
      "Kurly Only 첫 2주 프로모션 집중 (체험단·인플루언서)",
      "리뷰 200건 → 500건 → 1,000건 마일스톤 관리",
      "재구매율 모니터링 (CRM 분석)",
      "3개월 시점 성과 평가 및 쌀국수 스마트스토어 리뉴얼 여부 결정",
    ],
  },
];

export default function KurlyOnlyPage() {
  return (
    <main className="mx-auto w-full max-w-[980px] px-[var(--space-6)] pt-[var(--space-8)] pb-[var(--space-10)]">
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
          RESEARCH · 2026-04-22
        </div>
        <h1
          style={{
            fontSize: "clamp(30px, 4.8vw, 46px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            color: "var(--text-primary)",
            marginBottom: "var(--space-4)",
          }}
        >
          컬리 전용 상품 기획
          <br />
          베트남 국밥 단독 런칭 제안
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
          대표님, 지난 마켓컬리 타당성 검토에서 &ldquo;조건부 보류&rdquo;로 올려드렸던 안건을 다시 짚어
          보고드립니다. 세 가지 전제가 움직이면서 <strong>베트남 국밥만 컬리 전용 SKU로
          런칭</strong>하는 방안이 실현 가능한 영역으로 들어왔습니다.
        </p>

        {/* Verdict Card — Green (Go) */}
        <div
          style={{
            background: "linear-gradient(135deg, #0b6b3a, #1fa162)",
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
              opacity: 0.8,
              marginBottom: "var(--space-3)",
            }}
          >
            보고 요지
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
            베트남 국밥 단독 런칭 — GO
          </div>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.6,
              opacity: 0.92,
              maxWidth: "640px",
            }}
          >
            컬리 내 베트남 국밥 = 0개(블루오션)이고, 한식 프리미엄 탕 밀키트 1인 14,000~17,000원
            판매가 실제로 이루어지고 있습니다. 라이옥 국밥을 컬리 Only로 런칭하고, 쌀국수는 기존
            스마트스토어에 유지하는 방향을 제안드립니다. 확인이 필요한 사항 두 가지는 보고서 말미에
            정리했습니다.
          </p>
        </div>

        {/* Three pillars */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "var(--space-4)",
          }}
        >
          {premiseShifts.map((r, i) => (
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
                전제 변화 {String(i + 1).padStart(2, "0")}
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

      {/* 01. 보고 배경 */}
      <Section title="01. 보고 배경" subtitle="이전 '조건부 보류'에서 바뀐 세 가지 전제">
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            marginBottom: "var(--space-4)",
          }}
        >
          2026-04-20 마켓컬리 입점 타당성 검토에서는 (1) 수수료 35~40%, (2) 스마트스토어 동일 제품의
          가격 충돌, (3) 전용 SKU 생산 여력 부족을 근거로 &ldquo;조건부 보류&rdquo;로
          보고드렸습니다. 이후 대표님께서 공유해 주신 세 가지 사실로 인해 해당 결론을 다시 살펴볼
          필요가 생겼습니다.
        </p>
        <Note>
          <strong>요약하자면</strong>, 생산 라인은 동일하고, 스마트스토어 저조로 전환 기회비용이
          작으며, 국밥은 타사에 없는 차별화 자산이라는 세 가지가 합쳐지면서 &ldquo;어떤 SKU를 어떤
          가격으로 런칭할지&rdquo; 구체 기획이 가능한 단계로 이동했습니다.
        </Note>
      </Section>

      {/* 02. 컬리 수수료 구조 */}
      <Section
        title="02. 컬리 수수료 구조 심층"
        subtitle="1P 직매입 vs 3P 마켓플레이스 + 실질 부담"
      >
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            marginBottom: "var(--space-5)",
          }}
        >
          컬리는 현재 <strong>직매입(1P)</strong>과 <strong>마켓플레이스(3P)</strong>를 투트랙으로
          운영하고 있습니다. 2025년 상반기 3P 수수료 매출이 전년 대비 107.8% 증가했다고 매일경제에
          보도된 바 있어, 컬리는 3P 확장에 적극적인 상황입니다. 그러나 라이옥의 냉동 밀키트는
          콜드체인과 샛별배송 인프라가 핵심이므로 <strong>1P 직매입 방식이 사실상 기본값</strong>
          입니다.
        </p>

        {/* 1P vs 3P comparison */}
        <div
          style={{
            background: "var(--bg-surface)",
            borderRadius: "var(--radius-xl)",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            marginBottom: "var(--space-5)",
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
                <Th>구분</Th>
                <Th>수수료</Th>
                <Th>역할 분담</Th>
                <Th>라이옥 적합성</Th>
              </tr>
            </thead>
            <tbody>
              {feeComparison.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: "1px solid var(--border-subtle)",
                    background: row.highlight
                      ? "rgba(31,161,98,0.08)"
                      : "transparent",
                  }}
                >
                  <Td>
                    <strong>{row.type}</strong>
                  </Td>
                  <Td mono>{row.fee}</Td>
                  <Td muted>{row.role}</Td>
                  <Td>{row.fit}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginTop: "var(--space-6)",
            marginBottom: "var(--space-3)",
            letterSpacing: "-0.3px",
          }}
        >
          1P 수수료 내역
        </h3>
        <Table2Col rows={feeRows1P.map((r) => ({ k: r.item, v: `${r.value}${r.note ? `  —  ${r.note}` : ""}` }))} />

        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginTop: "var(--space-6)",
            marginBottom: "var(--space-3)",
            letterSpacing: "-0.3px",
          }}
        >
          실수령 19,000원 역산 (2인 세트 기준)
        </h3>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--space-4)",
          }}
        >
          {feeScenarios.map((s, i) => (
            <div
              key={i}
              style={{
                background: s.highlight ? "var(--text-primary)" : "var(--bg-surface)",
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
                  opacity: s.highlight ? 0.75 : 0.55,
                  marginBottom: "var(--space-2)",
                }}
              >
                수수료 {s.rate}
              </div>
              <div
                style={{
                  fontSize: "26px",
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
                  fontSize: "12px",
                  fontWeight: 500,
                  opacity: s.highlight ? 0.85 : 0.55,
                  lineHeight: 1.4,
                }}
              >
                {s.note}
              </div>
            </div>
          ))}
        </div>
        <Note>
          본 보고서는 <strong>수수료 40% (광고·성장장려금 포함 보수 가정)</strong>를 기준으로
          합니다. 권장 정가는 <strong>32,000원</strong>이며, 할인 노출 시 <strong>27,000~28,000원</strong>
          수준으로 체감 단가를 낮추는 전략을 제안드립니다.
        </Note>
      </Section>

      {/* 03. 베트남 · 아시안 밀키트 가격대 */}
      <Section
        title="03. 컬리 내 베트남 · 아시안 밀키트 가격대"
        subtitle="2026-04-22 Chrome 직접 수집"
      >
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            marginBottom: "var(--space-4)",
          }}
        >
          쌀국수·팟타이·동남아 밀키트 카테고리를 전수 확인했습니다. 1인 단가 범위는
          <strong> 2,500~8,400원</strong>이며, 가장 비싼 제품은 쌉(SAAP)의 팟타이 2인
          16,800원(1인 8,400원)이었습니다. <strong>1인 14,000원대 제품은 해당 카테고리에
          존재하지 않습니다.</strong>
        </p>
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
                <Th>브랜드 · 제품</Th>
                <Th align="right">판매가</Th>
                <Th align="right">1인 단가</Th>
                <Th align="right">Kurly Only</Th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <Td>{c.brand}</Td>
                  <Td align="right" mono>
                    {c.price}
                  </Td>
                  <Td align="right" mono muted>
                    {c.perPerson}
                  </Td>
                  <Td align="right" muted>
                    {c.kurlyOnly ? "✓" : "—"}
                  </Td>
                </tr>
              ))}
              <tr style={{ background: "rgba(31,161,98,0.10)" }}>
                <Td>
                  <strong>라이옥 국밥 (컬리 런칭 제안)</strong>
                </Td>
                <Td align="right" mono>
                  <strong>32,000원 (2인)</strong>
                </Td>
                <Td align="right" mono>
                  <strong>16,000</strong>
                </Td>
                <Td align="right">
                  <strong>✓ 신규</strong>
                </Td>
              </tr>
            </tbody>
          </table>
        </div>
        <Note>
          쌀국수로 컬리에 들어가면 에머이(1인 6,250원)·리틀비엣남(4,250원)·쌉(7,140원)과 직접
          가격 비교됩니다. 라이옥 쌀국수의 1인 16,000원은 카테고리 최고가 대비
          <strong> 1.9~2.2배</strong>로 소비자 저항이 확실합니다. 반면 <strong>국밥은 경쟁 제품이
          0개</strong>이므로 비교 기준이 한식 탕 카테고리로 자연스럽게 이동합니다.
        </Note>
      </Section>

      {/* 04. 프리미엄 한식 탕 밀키트 */}
      <Section
        title="04. 프리미엄 한식 탕 밀키트 — 가격 정당화 근거"
        subtitle="1인 14,000~17,000원대가 실제로 팔리는 카테고리"
      >
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            marginBottom: "var(--space-4)",
          }}
        >
          설렁탕·곰탕·삼계탕·갈비탕 등 한식 국물 밀키트는 1인 5,000~17,000원으로 분포하며,
          <strong> 1인 14,000원대 프리미엄 제품은 명확히 시장에 존재</strong>합니다. 공통 조건은
          (1) 맛집 또는 호텔 브랜드 스토리, (2) Kurly Only 포지셔닝, (3) 리뷰 200건 이상 확보
          세 가지입니다.
        </p>
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
                <Th>브랜드</Th>
                <Th>제품</Th>
                <Th align="right">가격</Th>
                <Th>포지셔닝</Th>
                <Th align="right">리뷰</Th>
              </tr>
            </thead>
            <tbody>
              {premiumBroths.map((p, i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <Td>
                    <strong>{p.brand}</strong>
                  </Td>
                  <Td muted>{p.product}</Td>
                  <Td align="right" mono>
                    {p.discounted ? `${p.discounted} (할)` : p.price}
                  </Td>
                  <Td muted>{p.hook}</Td>
                  <Td align="right" muted>
                    {p.reviews}
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>
          라이옥 국밥 판매가 <strong>32,000원/2인 (1인 16,000원)</strong>은 벽제갈비 설렁탕 17,000원,
          워커힐 갈비탕 14,790원과 동급 포지션입니다. 할인가 노출 시 27,000원(1인 13,500원)은
          워커힐 삼계탕(13,050원)과 거의 동일 가격대로 들어갑니다.
        </Note>
      </Section>

      {/* 05. Kurly Only 매장 기반 F&B 진입 경로 */}
      <Section
        title="05. Kurly Only 매장 기반 F&B 진입 경로"
        subtitle="맛집 밀키트 카테고리 Kurly Only 59개 확인"
      >
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            marginBottom: "var(--space-4)",
          }}
        >
          컬리의 &ldquo;맛집 밀키트&rdquo; 검색 결과에서 <strong>Kurly Only 59개 제품</strong>을 확인했습니다.
          대부분 오프라인 매장을 기반으로 한 소형·중견 F&B 브랜드입니다. 라이옥과 같은 &ldquo;매장 보유
          + 시그니처 보유&rdquo; 브랜드가 Kurly Only 전용 SKU로 진입하는 것은 표준 경로이며,
          구조적으로 막는 요소가 없다는 의미입니다.
        </p>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--space-3)",
          }}
        >
          {kurlyOnlyCases.map((c, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-4)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.3px",
                  marginBottom: "var(--space-1)",
                }}
              >
                {c.brand}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "var(--space-1)",
                  lineHeight: 1.4,
                }}
              >
                {c.product}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--accent)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {c.price}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 06. 상품 선택 - 4옵션 */}
      <Section title="06. 상품 선택 — 4옵션 비교" subtitle="A~D 중 A 권장">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "var(--space-4)",
          }}
        >
          {options.map((o) => (
            <div
              key={o.code}
              style={{
                background: o.pick ? "rgba(31,161,98,0.10)" : "var(--bg-surface)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-5)",
                border: o.pick ? "2px solid #1fa162" : "2px solid transparent",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "var(--space-2)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--text-tertiary)",
                    letterSpacing: "0.8px",
                  }}
                >
                  옵션 {o.code}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: "999px",
                    background: o.pick ? "#1fa162" : "var(--border-subtle)",
                    color: o.pick ? "#fff" : "var(--text-secondary)",
                    letterSpacing: "0.3px",
                  }}
                >
                  {o.verdict}
                </div>
              </div>
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.3px",
                  marginBottom: "var(--space-3)",
                  lineHeight: 1.3,
                }}
              >
                {o.label}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  marginBottom: "var(--space-2)",
                }}
              >
                <strong style={{ color: "var(--text-primary)" }}>장점.</strong> {o.pros}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                }}
              >
                <strong style={{ color: "var(--text-primary)" }}>단점.</strong> {o.cons}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 07. 권장안 & 가격 */}
      <Section title="07. 권장안 정리" subtitle="국밥 컬리 Only + 쌀국수 스마트스토어 유지">
        <div
          style={{
            background: "var(--bg-surface)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-6)",
            marginBottom: "var(--space-4)",
          }}
        >
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "var(--space-5)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.6px",
                  marginBottom: "var(--space-2)",
                }}
              >
                컬리
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "var(--space-2)",
                }}
              >
                베트남 국밥 단독 (Kurly Only)
              </div>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                }}
              >
                정가 <strong>32,000원 / 2인</strong>, 할인 노출 27,000~28,000원. 한식 프리미엄 탕
                포지션으로 진입.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.6px",
                  marginBottom: "var(--space-2)",
                }}
              >
                스마트스토어
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "var(--space-2)",
                }}
              >
                쌀국수만 유지 · 국밥 철수
              </div>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                }}
              >
                국밥은 컬리 독점 포지션 유지. 쌀국수 18,800원은 현행가 유지 또는 추후 리뉴얼.
              </p>
            </div>
          </div>
        </div>
        <Note>
          컬리 MD는 <strong>컬리 독점 또는 최저가 조항</strong>을 선호합니다. 국밥을 컬리 단독으로
          가져가면 협상력이 올라갑니다. 쌀국수는 컬리에 올리지 않으므로 가격 충돌 자체가 발생하지
          않습니다.
        </Note>
      </Section>

      {/* 08. 포지셔닝 */}
      <Section title="08. 포지셔닝 메시지">
        <div
          style={{
            background: "var(--bg-surface)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-6)",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--text-tertiary)",
              letterSpacing: "0.6px",
              marginBottom: "var(--space-3)",
            }}
          >
            헤드라인 제안
          </div>
          <div
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.5px",
              lineHeight: 1.4,
              marginBottom: "var(--space-5)",
            }}
          >
            &ldquo;한국에 단 하나, 라이옥 베트남 국밥.
            <br />
            하노이 새벽시장의 한 그릇을 집에서.&rdquo;
          </div>
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
            {[
              "희소성: 컬리에 단 하나뿐인 베트남 국밥",
              "스토리: 라이옥 매장에서만 맛볼 수 있던 시그니처",
              "편의성: 전자레인지 1개로 끝나는 한 그릇 탕",
            ].map((t, i) => (
              <li
                key={i}
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  paddingLeft: "24px",
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
      </Section>

      {/* 09. 실행 로드맵 */}
      <Section title="09. 실행 로드맵">
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
                padding: "var(--space-5)",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "var(--accent)",
                  letterSpacing: "0.5px",
                  marginBottom: "var(--space-3)",
                }}
              >
                {r.phase}
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
                {r.items.map((item, j) => (
                  <li
                    key={j}
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 10. 대표님 확인 필요 - 2가지 */}
      <Section title="10. 대표님 확인 필요 사항" subtitle="본 보고서 진행을 위한 두 가지 결정">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #fff7e6, #fef3cd)",
              borderRadius: "var(--radius-xl)",
              padding: "var(--space-6)",
              border: "2px solid #f0b429",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#7a4e00",
                letterSpacing: "0.6px",
                marginBottom: "var(--space-2)",
              }}
            >
              질문 01 · 가격 · 원가
            </div>
            <div
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: "var(--space-3)",
                lineHeight: 1.4,
                letterSpacing: "-0.3px",
              }}
            >
              컬리 수수료 40% 가정, 2인 세트 판매가 32,000원 기준 <br />
              베트남 국밥 OEM 원가와 마진이 수용 가능한 수준인가요?
            </div>
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                color: "#3d3d3d",
              }}
            >
              실수령 19,000원 역산 결과로 32,000원을 권장드립니다. 원가가 맞지 않으면 정가 33,000원
              상향 또는 고기 고명 일부 조정으로 마진을 맞추는 대안을 검토 가능합니다.
            </p>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, #fff7e6, #fef3cd)",
              borderRadius: "var(--radius-xl)",
              padding: "var(--space-6)",
              border: "2px solid #f0b429",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#7a4e00",
                letterSpacing: "0.6px",
                marginBottom: "var(--space-2)",
              }}
            >
              질문 02 · 채널 전략
            </div>
            <div
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: "var(--space-3)",
                lineHeight: 1.4,
                letterSpacing: "-0.3px",
              }}
            >
              컬리 런칭에 맞춰 스마트스토어에는 <strong>쌀국수만 판매</strong>하고,
              <br />
              국밥은 컬리 독점으로 가는 방향에 동의하시나요?
            </div>
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                color: "#3d3d3d",
              }}
            >
              컬리 MD 제안 시 &ldquo;컬리 단독&rdquo; 포지션이 협상력을 높입니다. 스마트스토어
              쌀국수는 현행가 유지(추후 리뉴얼 가능)이며, 국밥은 컬리 Only로 이동합니다.
            </p>
          </div>
        </div>
      </Section>

      {/* 11. 출처 */}
      <Section title="11. 데이터 출처">
        <div
          style={{
            background: "var(--bg-surface)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-5)",
          }}
        >
          <SourceGroup
            title="Chrome 브라우저 직접 수집 (2026-04-22)"
            items={[
              {
                text: "컬리 쌀국수 검색 결과",
                url: "https://www.kurly.com/search?sword=%EC%8C%80%EA%B5%AD%EC%88%98",
              },
              {
                text: "컬리 팟타이 검색 결과",
                url: "https://www.kurly.com/search?sword=%ED%8C%9F%ED%83%80%EC%9D%B4",
              },
              {
                text: "컬리 동남아 밀키트 검색 결과",
                url: "https://www.kurly.com/search?sword=%EB%8F%99%EB%82%A8%EC%95%84+%EB%B0%80%ED%82%A4%ED%8A%B8",
              },
              {
                text: "컬리 설렁탕 검색 결과",
                url: "https://www.kurly.com/search?sword=%EC%84%A4%EB%A0%81%ED%83%95",
              },
              {
                text: "컬리 삼계탕 검색 결과",
                url: "https://www.kurly.com/search?sword=%EC%82%BC%EA%B3%84%ED%83%95",
              },
              {
                text: "컬리 갈비탕 검색 결과",
                url: "https://www.kurly.com/search?sword=%EA%B0%88%EB%B9%84%ED%83%95",
              },
              {
                text: "컬리 맛집 밀키트 검색 결과",
                url: "https://www.kurly.com/search?sword=%EB%A7%9B%EC%A7%91+%EB%B0%80%ED%82%A4%ED%8A%B8",
              },
            ]}
          />
          <SourceGroup
            title="수수료 구조 · 입점 경로 (언론 · 공식)"
            items={[
              {
                text: "매일경제 (2025-08-16) — 컬리 3P 수수료 매출 1년 새 2배",
                url: "https://www.mk.co.kr/news/business/",
              },
              {
                text: "뉴스1 (2023-10-19) — 컬리 3자 배송 강화와 수수료",
                url: "https://www.news1.kr/industry/distribution/5203364",
              },
              {
                text: "컬리 파트너 포털 (공식 등록 창구)",
                url: "https://partners.kurly.com",
              },
              {
                text: "컬리 3P 파트너 오피스",
                url: "https://3p-partner.kurly.com/",
              },
            ]}
          />
          <SourceGroup
            title="내부 자료"
            items={[
              { text: "wiki/output/컬리-전용상품-리서치-raw.md — 본 보고서 원본 데이터" },
              { text: "wiki/output/컬리-전용상품-기획안.md — 종합 기획안" },
              { text: "wiki/output/마켓컬리-입점-타당성-보고서.md — 이전 보고서" },
              { text: "wiki/output/컬리-경쟁환경-입점구조.md — 수수료·경쟁 기초 자료" },
              {
                text: "대표님 구두 확인 (2026-04-22): 쌀국수/국밥 생산 라인 동일, 스마트스토어 저조, 국밥 = 라이옥 시그니처",
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
          lineHeight: 1.6,
        }}
      >
        본 보고서는 2026-04-22 기준 컬리 공개 자료와 Chrome 직접 수집 데이터를 바탕으로 작성되었으며,
        <br />
        컬리 3P 파트너 오피스 정확 수수료율은 공식 등록 후 확정됩니다.
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
            gridTemplateColumns: "180px 1fr",
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
