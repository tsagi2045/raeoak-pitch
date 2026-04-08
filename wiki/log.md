---
title: Wiki 변경 로그
created: 2026-04-08
updated: 2026-04-08
---

# Wiki 변경 로그

## 2026-04-08 init | 위키 구조 초기화

- 디렉토리 생성: raw/, wiki/sources/, wiki/concepts/, wiki/entities/, wiki/output/
- CLAUDE.md, rules/wiki-schema.md 생성
- 인제스트 대기 소스 6개 (docs/)

## 2026-04-08 ingest | raw-01-market-research

- **원본**: docs/01-market-research.md → raw/raw-01-market-research.md
- **생성**: wiki/sources/raw-01-summary.md (시장 조사 요약)
- **갱신**: wiki/index.md (1페이지 등록 + Missing Pages 7개)

## 2026-04-08 ingest | raw-02-competitor-analysis

- **원본**: docs/02-competitor-analysis.md → raw/raw-02-competitor-analysis.md
- **생성**: wiki/sources/raw-02-summary.md (경쟁사 10개 브랜드 분석 요약)
- **갱신**: wiki/index.md (1페이지 등록 + Missing Pages 2개 추가)

## 2026-04-08 ingest | raw-03-target-audience

- **원본**: docs/03-target-audience.md → raw/raw-03-target-audience.md
- **생성**: wiki/sources/raw-03-summary.md (3 페르소나 + CTA 차별화)

## 2026-04-08 ingest | raw-04-market-sizing

- **원본**: docs/04-market-sizing.md → raw/raw-04-market-sizing.md
- **생성**: wiki/sources/raw-04-summary.md (TAM 3.55조 / SAM 478억 / SOM 47억)

## 2026-04-08 ingest | raw-05-customer-journey

- **원본**: docs/05-customer-journey.md → raw/raw-05-customer-journey.md
- **생성**: wiki/sources/raw-05-summary.md (6단계 고객 여정, 전환율, 랜딩페이지 역할)

## 2026-04-08 ingest | raw-06-meeting-preparation

- **원본**: docs/06-meeting-preparation.md → raw/raw-06-meeting-preparation.md
- **생성**: wiki/sources/raw-06-summary.md (90분 미팅 아젠다, 28개 질문, 가맹사업법)

## 2026-04-08 ingest | concepts & entities 일괄 생성

- **생성 (concepts 5개)**:
  - wiki/concepts/시장-기회.md — SWOT 기회/위협 (6개 소스 종합)
  - wiki/concepts/소자본-창업.md — MZ세대 트렌드, 비용 구조 (3개 소스)
  - wiki/concepts/배달-시장.md — 40조원 시장, 배달 적합성 (1개 소스)
  - wiki/concepts/랜딩페이지-전략.md — 벤치마킹, 전환 퍼널, CTA (5개 소스)
  - wiki/concepts/가맹-조건.md — 비용 비교, 투명성 전략 (2개 소스)
- **생성 (entities 4개)**:
  - wiki/entities/미분당.md — 가맹점 수 1위(171개), 한국식 쌀국수
  - wiki/entities/미스사이공.md — 급속 확장→대량 폐점 교훈(274→90개)
  - wiki/entities/포메인.md — 19년 원조, 유일한 독립 가맹 사이트
  - wiki/entities/에머이.md — 서울 중심 확장, 1.24억
- **갱신**: wiki/index.md (Concepts 5개, Entities 4개 등록, Missing Pages 해소)
