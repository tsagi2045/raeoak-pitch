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

## 2026-04-08 lint | 무결성 점검

- **결과**: 깨진 wikilink 0, Missing Pages 0, Orphan 0, Frontmatter 정상
- **교차 참조 수정 2건**:
  - wiki/concepts/시장-기회.md 출처에 raw-03, raw-05, raw-06 추가
  - wiki/concepts/랜딩페이지-전략.md 출처에 raw-04 추가

## 2026-04-08 query | 투명성 차별화 설계

- **질문**: "포메인의 독립 LP 전략을 벤치마킹하되, 투명성으로 이기려면 구체적으로 어떤 데이터를 어느 섹션에 배치해야 하나?"
- **참조**: 6개 페이지 ([[포메인]], [[랜딩페이지-전략]], [[가맹-조건]], [[시장-기회]], [[raw-03-summary]], [[raw-05-summary]])
- **생성**: wiki/output/투명성-차별화-설계.md
- **결론**: 포메인의 비용 비공개 + 직영점 데이터만 제시하는 약점을 투자비 구성 분해 + 정보공개서 기반 가맹점 매출 공개로 공략. D5(데이터 공개 범위)가 전략의 열쇠.

## 2026-04-08 ingest | raw-07-raeoak-profile

- **원본**: raw/raw-07-raeoak-profile.md (웹 조사 기반 라이옥 브랜드 프로필)
- **생성**:
  - wiki/sources/raw-07-summary.md — 라이옥 프로필 요약 (연혁, USP, 매장, 웹 현황)
  - wiki/entities/라이옥.md — 클라이언트 브랜드 엔티티 (핵심 인물, 인프라, 경쟁사 비교)
- **갱신**:
  - wiki/concepts/랜딩페이지-전략.md — 라이옥 현재 웹사이트(cafe24) 분석 + 비교표 추가
  - wiki/concepts/가맹-조건.md — 비용 비교표에 라이옥 추가 + 가맹 현황 섹션 추가
  - wiki/index.md — Sources에 raw-07, Entities에 라이옥 추가

## 2026-04-08 query | 라이옥 포지셔닝 전략

- **질문**: "라이옥은 경쟁사 대비 어떤 포지션이고, LP에서 이 포지션을 어떻게 표현해야 하나?"
- **참조**: 9개 페이지 ([[라이옥]], [[포메인]], [[미분당]], [[미스사이공]], [[에머이]], [[가맹-조건]], [[랜딩페이지-전략]], [[시장-기회]], [[투명성-차별화-설계]])
- **생성**: wiki/output/라이옥-포지셔닝-전략.md
- **결론**: 규모(10개 vs 100~171개)로 싸우면 지는 게임. "베트남인 80%가 인정한 정통성"과 "작기에 가능한 1:1 밀착 지원"으로 약점을 강점으로 전환.

## 2026-04-08 query | 라이옥 페르소나 설득 전략

- **질문**: "라이옥에 가장 적합한 고객 페르소나는 무엇이며, 그들에게는 어떠한 전략으로 접근을 해서 설득을 해야 될까요?"
- **참조**: 7개 페이지 ([[라이옥]], [[raw-03-summary]], [[raw-05-summary]], [[랜딩페이지-전략]], [[라이옥-포지셔닝-전략]], [[투명성-차별화-설계]], [[시장-기회]])
- **생성**: wiki/output/라이옥-페르소나-설득전략.md
- **결론**: 다점포 운영자를 3순위로 하향, 소자본을 Secondary로 승격. Primary(탈직장인)은 "가치 지향형"으로 재정의. 설득 핵심은 규모가 아닌 "진짜"(80% 베트남인, 판매 중단 원칙, 1:1 밀착).
