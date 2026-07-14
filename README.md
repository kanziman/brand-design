# Momento

> 여러 프로젝트, 지금의 답은 하나. — 혼자 일하는 사람을 위한 조용한 작업 공간.

**Momento**는 1인·프리랜서를 위한 미니멀 프로젝트 관리 웹앱입니다. 여러 프로젝트를
관리하되, 화면은 늘 **'지금 집중할 단 하나'**를 건네 압도감을 없앱니다. 붉은 배지·연체
카운트·달성률 % 같은 압박 신호를 쓰지 않는 것이 핵심 원칙입니다.

브랜드 한 줄: **"내 일의 순간들을, 조용히 정리하다."**

---

## 미리보기

> **라이브 데모** · [랜딩](https://brand-design-one.vercel.app/) · [웹앱](https://brand-design-one.vercel.app/momento/) · [피칭덱](https://brand-design-one.vercel.app/pitch/)

### 디자인 시스템

랜딩·앱·덱·캐러셀이 공유하는 단일 토큰 소스 — 색, 타이포, 그리고 브랜드 금지 규칙.

![Momento 디자인 시스템](previews/design-system.png)

> 본문·링크 텍스트는 **WCAG AA**(대비 4.5:1 이상)를 만족하도록 다듬었습니다 — 아래 [접근성](#접근성) 참고. 이 패널은 실제 토큰([`momento/tokens/`](./momento/tokens/))을 직접 불러와 그려, 앱과 절대 어긋나지 않습니다 ([`previews/design-system.html`](./previews/design-system.html)).

### 랜딩페이지 & 웹앱

| 랜딩페이지 | 웹앱 · 오늘 |
|---|---|
| [![랜딩페이지](previews/landing.png)](./index.html) | [![웹앱 오늘 화면](previews/app.png)](./momento/index.html) |

### 투자자 피칭덱 · 12장

16:9 덱에서 뽑은 6장 — 표지 · 해결책 · 제품 · 차별화 · 트랙션 · 투자 요청.

| | | |
|---|---|---|
| ![01 표지](previews/deck/01.png) | ![03 해결책](previews/deck/03.png) | ![04 제품](previews/deck/04.png) |
| ![07 차별화](previews/deck/07.png) | ![10 트랙션](previews/deck/10.png) | ![12 투자 요청](previews/deck/12.png) |

전체 12장은 [라이브 덱](https://brand-design-one.vercel.app/pitch/) 또는 [`pitch/index.html`](./pitch/index.html) — 브라우저에서 **←/→·Space**로 넘깁니다.

### SNS 출시 캐러셀 · 7장

| | | | |
|---|---|---|---|
| ![캐러셀 1](carousel/out/01.png) | ![캐러셀 2](carousel/out/02.png) | ![캐러셀 3](carousel/out/03.png) | ![캐러셀 4](carousel/out/04.png) |
| ![캐러셀 5](carousel/out/05.png) | ![캐러셀 6](carousel/out/06.png) | ![캐러셀 7](carousel/out/07.png) | |

업로드용 PNG 7장(2700×2160 @2x): [`carousel/out/`](./carousel/out/).

---

## 리포 구성

| 경로 | 내용 | 배포 |
|------|------|------|
| [`index.html`](./index.html) | **랜딩페이지** — 히어로·철학·기능·FAQ·CTA | 🌐 공개 |
| [`momento/`](./momento/) | **웹앱** (hi-fi) — 오늘·전체 보기·프로젝트·메모함·상세 드로어 | 🌐 공개 |
| [`momento/tokens/`](./momento/tokens/) | **디자인 시스템 토큰** — 색·타이포·간격·폰트 | 🌐 공개 |
| [`pitch/`](./pitch/) | **투자자 피칭덱** — 12장 16:9 (아래 참고) | 🌐 공개 |
| [`carousel/`](./carousel/) | **SNS 출시 캐러셀** — 7장 + [`out/`](./carousel/out/) 업로드용 PNG | 🔒 비공개 |
| [`docs/`](./docs/) | **제품 문서** (PRD·화면정의서 등, 아래 참고) | 🔒 비공개 |
| [`archive/`](./archive/) | 초기 디자인 탐색 목업 | 🔒 비공개 |

'공개'는 Vercel 배포에 포함, '비공개'는 [`.vercelignore`](./.vercelignore)로 제외 — 리포에는 남아 있습니다.

---

## 실행

빌드 불필요. 브라우저로 바로 엽니다.

```bash
open index.html          # 랜딩페이지 → CTA로 앱 진입
open momento/index.html  # 웹앱 (상태는 localStorage에 저장)
```

유일한 외부 요청은 웹폰트 두 개(Pretendard·Outfit, CDN)입니다.

---

## 문서 (docs/)

| 문서 | 설명 |
|------|------|
| [PRD.md](./docs/PRD.md) | 제품 요구사항 (v2, 최신 프로토타입 기준) |
| [ui-spec.md](./docs/ui-spec.md) | 화면정의서 — 로그인·오늘·상세 드로어 등 화면/컴포넌트 정의 |
| [pitch-deck.md](./docs/pitch-deck.md) | 투자자 덱 슬라이드별 생성 프롬프트 + 반영 데이터 |
| [landing-PRD.md](./docs/landing-PRD.md) | 랜딩페이지 PRD |
| [release-carousel.md](./docs/release-carousel.md) | 출시 캐러셀 기획 |

---

## 투자자 피칭덱

[`pitch/index.html`](./pitch/index.html) — 12장 16:9 덱. 브라우저로 열고 **←/→·Space** 또는
화면 좌우 클릭으로 넘깁니다. `#6`처럼 해시로 특정 슬라이드에 바로 진입할 수 있고,
브라우저 "PDF로 저장"으로 내보낼 수 있습니다.

구성: 표지 · 문제 · 해결책 · 제품(지금 하나) · 사용법 · 시장 · 차별화 · 비즈니스 모델 ·
GTM · 트랙션/로드맵 · 팀 · 투자 요청/비전.

**공유** — 배포에 포함되어 `/pitch/` URL로 접근할 수 있습니다. 소비자 랜딩(`/`)에는 링크하지
않으므로, 주소를 아는 사람만 자연스럽게 찾아옵니다. 다시 비공개로 돌리려면
[`.vercelignore`](./.vercelignore)에 `pitch/` 한 줄을 추가하면 됩니다.

> 덱의 수치(시장 규모·가격·트랙션·투자 요청액 등)는 **샘플 데이터**입니다. 실제 투자 발표에
> 쓰려면 실제 값으로 교체하세요. 상세는 [docs/pitch-deck.md](./docs/pitch-deck.md).

---

## SNS 출시 캐러셀

[`carousel/index.html`](./carousel/index.html) — 7장 1350×1080 캐러셀. 이미지 소스이며
페이지로 링크하지 않습니다. 업로드용 PNG는 [`carousel/out/`](./carousel/out/)에 있습니다
(`01.png`–`07.png`, 각 2700×2160 @2x). `index.html?export`로 열면 크롬 없이 슬라이드만 캡처됩니다.

---

## Vercel 배포

정적 사이트라 별도 설정 없이 리포 루트를 배포하면 됩니다.

- **공개**: 랜딩 `/`(index.html) + 앱 `/momento/` + 피칭덱 `/pitch/`
- **비공개**([`.vercelignore`](./.vercelignore)): `docs/` · `carousel/` · `archive/` · `*.md`

```bash
vercel          # 프리뷰
vercel --prod   # 프로덕션
```

랜딩의 CTA는 `momento/index.html`(상대경로)로 연결되어 로컬·배포 양쪽에서 동작합니다.

---

## 브랜드 & 디자인 시스템

- **색**: 흰 배경 기본, 크림·웜그레이 서피스, 잉크 본문. **테라코타는 '지금 하나' 등 핵심 신호에만.**
- **금지**: 그라데이션, 붉은색·경고색, 달성률 %, 압박/재촉 카피.
- **타이포**: 본문 Pretendard, 워드마크 Outfit. 위계는 크기·굵기·여백으로.
- 토큰은 [`momento/tokens/`](./momento/tokens/)에 정의되어 랜딩·앱·덱·캐러셀이 모두 재사용합니다.

원 디자인 시스템·프로토타입은 Claude Design 프로젝트 *Momento Design System*에서 가져왔습니다.

---

## 접근성

'조용한' 팔레트는 대비가 낮아지기 쉽습니다. 텍스트·링크 토큰을 **WCAG AA**(본문 4.5:1) 기준으로
검증하고 다듬었습니다.

| 토큰 | 이전 | 현재 | 대비 (흰 배경) |
|------|------|------|------|
| `--text-tertiary` | `#9A9184` | `#70685D` | 2.5:1 → **5.1:1** |
| `--text-link` / `--text-accent` | `#B56A3D` | `#985128` | 3.2:1 → **5.1:1** |

- 링크·보조 텍스트는 흰 배경과 크림(`#F4F0EA`) 서피스 **양쪽에서** AA를 만족합니다.
- 색만으로 상태를 전달하지 않습니다 — 마감·연체는 색 대신 평문 라벨("내일로 미룸")로 표시합니다.
- FAQ·상세 드로어는 네이티브 `<details>`·포커스 유지 입력 등 시맨틱/키보드 접근을 지킵니다.

---

## 디자인 과정

최종 시스템에 이르기까지의 탐색 과정 — 컨셉에서 가이드라인까지 ([`archive/`](./archive/), 배포 제외).

| 문서 | 내용 |
|------|------|
| [brand-guidelines.html](./archive/brand-guidelines.html) | **브랜드 가이드라인** — 미션·철학·로고 시스템·컬러·타이포·보이스&톤 |
| [brand-concepts.html](./archive/brand-concepts.html) | 초기 브랜드 컨셉 탐색 |
| [logo-mockups.html](./archive/logo-mockups.html) | 로고·워드마크 목업 |
| [webapp-mockup.html](./archive/webapp-mockup.html) | 초기 웹앱 목업 (현재 [`momento/`](./momento/) 이전) |

> 이 탐색안들은 리포에는 남지만 배포에서는 제외됩니다([`.vercelignore`](./.vercelignore)) — 방향성 기록용입니다.
