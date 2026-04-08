# Wiki SCHEMA — 운영 규칙

## 레이어 구조

1. **raw/** — 불변 원본 소스. LLM은 읽기만 하며 절대 수정하지 않는다.
2. **wiki/** — LLM이 컴파일한 지식. sources/concepts/entities/output 하위 구조.
3. **이 파일** — 위키 운영 규칙 (Ingest/Query/Lint 워크플로우 정의).

## 파일 규칙

- 파일명: kebab-case (예: `가맹점-모집-전략.md`)
- 위키 콘텐츠 언어: 한국어 (기술 용어는 영어 유지)
- 교차 참조: `[[페이지-이름]]` 위키링크 형식
- 모든 wiki/ 페이지 상단에 YAML frontmatter:

```yaml
---
title: 페이지 제목
source: 원본 파일 경로
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [tag1, tag2]
---
```

- 각 페이지 하단에 `## 출처`, `## 관련 개념` 섹션 포함

## Ingest 워크플로우

1. raw/ 소스 파일을 읽는다
2. 핵심 takeaway를 파악한다
3. `wiki/sources/`에 구조화된 요약 페이지를 생성한다
4. 핵심 개념은 `wiki/concepts/`, 주요 엔티티는 `wiki/entities/`에 분리한다
5. `wiki/index.md`의 링크맵을 갱신한다
6. `wiki/log.md`에 `## [날짜] ingest | 제목` 엔트리를 추가한다

## Query 워크플로우

1. `wiki/index.md`로 관련 페이지를 식별한다
2. 해당 페이지를 읽고 `[[위키링크]]`를 인용하며 답변한다
3. 가치 있는 답변은 `wiki/output/`에 저장한다

## Lint 워크플로우

1. 페이지 간 모순 탐지
2. 고아 페이지 (index.md에 없는 페이지) 식별
3. 깨진 `[[위키링크]]` 나열
4. Missing Pages (참조되었으나 아직 없는 페이지) 목록
5. 다음 조사 질문 제안

## 금지 사항

- `raw/` 파일을 절대 수정하지 않는다
- `docs/` 파일을 절대 수정하지 않는다
- wiki/ 페이지에서 원본 내용을 그대로 복사하지 않는다 (요약+구조화)
