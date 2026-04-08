# Q&A Design System — Apple-Inspired

> Q&A / 질문지 / 설문 웹사이트에 최적화된 디자인 시스템.
> Apple Human Interface Guidelines의 타이포그래피, 색상, 여백 철학을 기반으로 하되,
> 폼 입력과 정보 구조화에 특화된 컴포넌트를 정의합니다.

---

## 1. Design Philosophy

- **Content-First**: 질문 텍스트와 답변 영역이 주역. 장식 요소 최소화.
- **Single Accent**: 인터랙티브 요소에만 하나의 accent color 사용. 나머지는 뉴트럴.
- **Quiet Surface**: 배경은 white와 light gray(`#f5f5f7`) 교차. 카드는 보더 없이 배경색 차이로 구분.
- **Tight Typography**: Apple 스타일의 negative letter-spacing을 모든 텍스트 크기에 적용.
- **Progressive Disclosure**: 카테고리 탭으로 질문을 분리하여 한 번에 하나의 맥락에 집중.

---

## 2. Color System

### Core

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#ffffff` | 페이지 배경, 카드 배경 |
| `--bg-surface` | `#f5f5f7` | textarea 배경, 탭 비활성, 교차 섹션 |
| `--text-primary` | `#1d1d1f` | 제목, 본문, 답변 텍스트 |
| `--text-secondary` | `rgba(0,0,0,0.48)` | 서브카테고리 제목, 부가 설명, placeholder |
| `--text-tertiary` | `rgba(0,0,0,0.32)` | Q번호, context 태그, 비활성 뱃지 |

### Interactive

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `#0071e3` | 활성 탭, 작성 완료 버튼, 진행률 바, 토스트 |
| `--accent-hover` | `#0077ed` | 버튼 hover |
| `--accent-on-dark` | `#2997ff` | 다크 배경 위 링크 (기술 차별점 탭 등) |

### State

| Token | Value | Usage |
|-------|-------|-------|
| `--state-success` | `#34C759` | 진행률 100%, 완료 상태 |
| `--state-error` | `#FF3B30` | 초기화 버튼, 에러 |

### Border & Shadow

| Token | Value | Usage |
|-------|-------|-------|
| `--border-subtle` | `rgba(0,0,0,0.06)` | 헤더 하단선, 카드 보더 (비활성) |
| `--border-focus` | `rgba(0,113,227,0.4)` | textarea focus 보더 |
| `--shadow-card` | `0 1px 3px rgba(0,0,0,0.04)` | 답변 있는 카드 미세 쉐도우 |
| `--shadow-toast` | `0 4px 12px rgba(0,0,0,0.12)` | 토스트 알림 |

### Rules

- accent color는 **인터랙티브 요소에만** 사용. 텍스트 강조에 accent 사용 금지.
- 카드 구분은 보더가 아닌 **배경색 차이**로. 답변이 있는 카드만 미세 보더 표시.
- 다크 모드 불필요 (내부용 Q&A).

---

## 3. Typography

### Font Stack

```
"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif
```

Pretendard는 SF Pro의 한글 대응. CDN `<link>` 태그로 로드 (CSS @import 금지 — Tailwind v4 충돌).

### Scale

| Role | Size | Weight | Line Height | Letter Spacing | Usage |
|------|------|--------|-------------|----------------|-------|
| Page Title | 22px | 700 | 1.2 | -0.5px | "리서치 미팅 Q&A" 헤더 |
| Category Title | clamp(24px, 3.5vw, 32px) | 800 | 1.15 | -1px | "1. Scope 확정" 카테고리 제목 |
| Subcategory | 13px | 600 | 1.4 | 0.5px (uppercase) | "3-1. 조사원 모집" 서브 제목 |
| Question | 15px | 500 | 1.6 | -0.3px | 질문 텍스트 |
| Description | 13px | 400 | 1.7 | -0.1px | 설명 블록, 위키 데이터 |
| Answer Input | 14px | 400 | 1.6 | 0 | textarea 입력 |
| Tab Label | 13px | 600 | 1.0 | 0 | 카테고리 탭 |
| Badge | 11px | 500 | 1.0 | 0 | 진행률 뱃지 (3/8) |
| Context Tag | 12px | 500 | 1.4 | 0 | 프로세스 단계 태그 |
| Toast | 14px | 500 | 1.0 | 0 | 알림 메시지 |
| Progress Count | 13px | 500 | 1.0 | 0 | "25 / 68" 헤더 카운터 |
| Caption | 12px | 400 | 1.4 | -0.1px | 하단 안내 텍스트 |

### Rules

- **Negative letter-spacing**: 15px 이상 텍스트에는 반드시 음수 letter-spacing 적용.
- **Weight 제한**: 400(본문), 500(질문/라벨), 600(탭/서브제목), 700(페이지 제목), 800(카테고리 제목). 그 이상 사용 금지.
- **Line height**: 제목은 tight(1.15~1.2), 본문/설명은 relaxed(1.6~1.7). 이 대비가 계층을 만든다.

---

## 4. Layout

### Container

| Property | Value |
|----------|-------|
| Max Width | 980px |
| Side Padding | 24px |
| Center | margin: 0 auto |

### Vertical Rhythm

| Property | Value |
|----------|-------|
| 카테고리 제목 → 첫 서브카테고리 | 32px |
| 서브카테고리 제목 → 첫 카드 | 16px |
| 카드 간 간격 | 12px |
| 서브카테고리 간 간격 | 40px |
| 메인 영역 상하 패딩 | 32px |

### Sticky Header

| Property | Value |
|----------|-------|
| 구성 | 페이지 제목 + 진행률 + 탭 바 (하나의 sticky 컨테이너) |
| Background | `rgba(255,255,255,0.85)` + `backdrop-filter: blur(20px) saturate(180%)` |
| Border Bottom | 1px solid `var(--border-subtle)` |
| Z-index | 30 |

---

## 5. Components

### 5-1. Question Card

Q&A 시스템의 핵심 컴포넌트. 질문 + 맥락 + 설명 + 답변 입력을 하나의 카드에 담는다.

```
┌─────────────────────────────────────┐
│ [context tag]                        │  ← 선택적. 프로세스 단계 표시
│                                     │
│ Q1  질문 텍스트가 여기에             │  ← 15px, weight 500
│                                     │
│ ┌─ description ──────────────────┐  │  ← 선택적. 회색 좌측 보더
│ │ 설명 텍스트...                  │  │
│ └────────────────────────────────┘  │
│                                     │
│ ┌─ textarea ─────────────────────┐  │  ← 항상 표시. 비어있어도 표시
│ │ 답변을 입력하세요...             │  │
│ └────────────────────────────────┘  │
└─────────────────────────────────────┘
```

**States:**
- Default: `bg-primary`, border `rgba(0,0,0,0.04)`
- Has Answer: border `rgba(0,0,0,0.08)`
- Locked (완료): `bg-surface`, textarea readonly

**Context Tag:**
- Background: `rgba(0,0,0,0.03)`
- Text: `var(--text-secondary)`
- Radius: 8px
- Padding: 6px 12px

**Description Block:**
- Background: `rgba(0,0,0,0.02)`
- Border Left: 2px solid `rgba(0,0,0,0.06)`
- Radius: 12px
- Padding: 12px 16px
- Text: `var(--text-secondary)`, 13px

**Textarea:**
- Background: `var(--bg-surface)` → focus 시 `#ffffff`
- Border: 1px solid transparent → focus 시 `var(--border-focus)`
- Radius: 12px
- Padding: 12px 16px
- Min Height: 80px
- Auto-resize: 입력에 따라 높이 자동 조절

### 5-2. Category Tabs

가로 스크롤 탭 바. 카테고리 간 전환.

**Active Tab:**
- Background: `var(--accent)`
- Text: `#ffffff`
- Badge: `rgba(255,255,255,0.2)` 배경

**Inactive Tab:**
- Background: `var(--bg-surface)`
- Text: `var(--text-secondary)`
- Badge: `rgba(0,0,0,0.05)` 배경

**Common:**
- Radius: 980px (pill)
- Padding: 8px 16px
- Font: 13px, weight 600
- Gap: 4px
- 가로 스크롤, scrollbar-hide

**Special Tabs (기술 차별점, 추가 질문):**
- 동일 스타일, 뱃지 없음

### 5-3. Progress Bar

헤더 하단의 전체 진행률 표시.

- Track: `var(--bg-surface)`, height 3px, radius full
- Fill: `var(--accent)` → 100% 시 `var(--state-success)`
- Transition: width 500ms ease-out

### 5-4. Bottom Bar

고정 하단 액션 바.

- Background: `rgba(255,255,255,0.9)` + `backdrop-filter: blur(20px) saturate(180%)`
- Border Top: 1px solid `var(--border-subtle)`
- Z-index: 40

**Draft State:**
- "답변은 자동으로 저장됩니다" (caption)
- [작성 완료] 버튼: `var(--accent)` 배경, white 텍스트, radius pill

**Completed State:**
- [초기화] 버튼: `var(--state-error)` 톤, 투명 배경
- "작성 완료됨" 라벨
- [수정하기] 버튼: `var(--bg-surface)` 배경

**Button Common:**
- Radius: 980px (pill)
- Padding: 10px 24px
- Font: 14px, weight 600
- Transition: opacity 150ms
- Active: scale(0.97)

### 5-5. Toast

상단 중앙 알림.

- Background: `var(--accent)`
- Text: `#ffffff`, 14px, weight 500
- Radius: 16px
- Padding: 12px 20px
- Shadow: `var(--shadow-toast)`
- Animation: fadeIn 200ms ease-out
- Duration: 2초 후 자동 사라짐

### 5-6. Comparison Card (기술 차별점)

경쟁사 vs 우리 비교 카드.

**경쟁사 카드:**
- Background: `var(--bg-surface)`
- Header Icon: `var(--state-error)` 원형 배경 + ✕
- 항목 Icon: 빨간 톤 원형

**우리 카드:**
- Background: `var(--accent)` (다크)
- Header Icon: `rgba(255,255,255,0.2)` 원형 배경 + ✓
- Text: `#ffffff`

### 5-7. File Upload Area (추가 질문)

파일 첨부 영역.

- Border: 2px dashed `rgba(0,0,0,0.08)` → hover 시 `rgba(0,0,0,0.15)`
- Background: `var(--bg-surface)`
- Radius: 12px
- Padding: 24px
- Text: center, `var(--text-secondary)`
- 업로드 중: spinner (accent border-top)
- 완료: 📎 아이콘 + 파일명 + 다운로드 링크

---

## 6. Spacing Scale

8px 기반. Q&A에서 자주 쓰는 값만 정의.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | 아이콘-텍스트 간 미세 간격 |
| `--space-2` | 8px | 뱃지 내부 패딩, 탭 간 갭 |
| `--space-3` | 12px | 카드 간 간격, textarea 패딩 |
| `--space-4` | 16px | 서브카테고리→카드, 카드 내부 좌우 패딩 |
| `--space-5` | 20px | 카드 내부 상하 패딩 |
| `--space-6` | 24px | 컨테이너 사이드 패딩 |
| `--space-8` | 32px | 카테고리 제목→콘텐츠, 메인 영역 패딩 |
| `--space-10` | 40px | 서브카테고리 간 간격 |

---

## 7. Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 6px | 작은 태그 |
| `--radius-md` | 8px | context 태그, 버튼 (비 pill) |
| `--radius-lg` | 12px | textarea, description 블록, 파일 업로드 |
| `--radius-xl` | 16px | 질문 카드, 토스트 |
| `--radius-pill` | 980px | 탭, CTA 버튼, 진행률 바 |

### Rules

- 카드는 16px. Apple 기본(8px)보다 크지만, Q&A 카드는 콘텐츠가 많아 여유가 필요.
- 버튼/탭은 항상 pill(980px). Apple의 시그니처.
- textarea/description은 12px. 카드 안의 nested element이므로 카드보다 작아야 함.

---

## 8. Motion

| Type | Duration | Easing | Property |
|------|----------|--------|----------|
| Tab 전환 | 150ms | ease-out | background, color |
| Textarea focus | 150ms | ease-out | border-color, background |
| Progress bar | 500ms | ease-out | width |
| Toast 등장 | 200ms | ease-out | opacity, transform |
| Button active | 100ms | ease-out | transform scale(0.97) |
| Scroll to top | smooth | — | 탭 클릭 시 |

### Rules

- `prefers-reduced-motion: reduce` 시 모든 애니메이션 비활성화.
- 과도한 모션 금지. fade/scale만 허용. slide, bounce 사용 금지.
- 인터랙션 피드백은 빠르게 (100~200ms), 상태 전환은 느리게 (300~500ms).

---

## 9. Responsive

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | 단일 컬럼, 탭 가로 스크롤 |
| Tablet+ | >= 640px | 기술 차별점 2컬럼, 프로세스 스텝 4컬럼 |

### Mobile Patterns

- 탭: 가로 스크롤 + scrollbar-hide
- 카테고리 제목: clamp(24px, 3.5vw, 32px) 반응형
- 하단 바: "자동 저장" 텍스트 숨김 (`hidden sm:block`)
- 비교 카드: 1컬럼 스택

---

## 10. Accessibility

- textarea: placeholder는 `var(--text-tertiary)` — WCAG AA 미달이지만 장식적 텍스트이므로 허용
- 버튼: 최소 44px 터치 타겟
- 진행률 바: aria 불필요 (시각적 보조 수단, 텍스트 카운터가 주 정보)
- 탭: 키보드 좌우 이동 지원 고려 (현재 미구현)
- `prefers-reduced-motion` 대응 필수

---

## 11. New Page Checklist

새로운 Q&A 프로젝트를 만들 때:

1. `globals.css`에 위 토큰 복사
2. Pretendard CDN link를 `layout.tsx`에 추가
3. `questions.ts` 데이터 구조 (Category → SubCategory → Question) 정의
4. 컴포넌트 복사: Header, CategoryTabs, QuestionCard, BottomBar
5. Accent color만 프로젝트에 맞게 변경 (기본 `#0071e3`)
6. Supabase 프로젝트 생성 + answers 테이블 + RLS 설정
7. `npm run build` → 에러 없음 확인
