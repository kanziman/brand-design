# Momento — 출시 소식 카드뉴스 캐로셀 (Carousel Spec)

- **버전**: v1 (초안) · **작성일**: 2026-07-12
- **목적**: 인스타그램, 링크드인 등 SNS 캐로셀(슬라이드형 카드뉴스) 업로드용 콘텐츠 기획서.
- **사용법**: 슬라이드별 **「카피」**와 **「디자인 가이드/프롬프트」**를 바탕으로 카드뉴스 이미지를 제작하거나 슬라이드 생성 도구에 입력하여 사용합니다.
- **브랜드 톤**: 절대 자극적이거나 과장되게 홍보하지 않습니다. 조용하고 차분하게 초대하는 톤을 유지합니다. (느낌표 `!` 사용 최소화, 차분한 존댓말 사용)

---

## 🎨 전역 카드뉴스 디자인 규칙

- **비율**: 1:1 정방형 (1080px × 1080px) 또는 4:5 세로형 (1080px × 1350px).
- **색상 시스템**: 
  - 기본 배경: 크림색 (`#F4F0EA`) 또는 완전한 흰색 (`#FFFFFF`).
  - 메인 텍스트: 잉크 블랙 (`#1A1A1A`).
  - 포인트 컬러: 테라코타 (`#C8794B`). 슬라이드당 꼭 필요한 곳 한두 군데만 사용합니다.
- **타이포그래피**:
  - 국문: Pretendard (가독성 높은 본문 및 헤드라인).
  - 영문/숫자: Outfit (브랜드 로고용 폰트, 현대적인 넘버링 스타일).
- **레이아웃**: 극도의 여백을 두어 스크롤 중 눈을 편안하게 만듭니다. 복잡한 그래픽 아이콘이나 일러스트 대신 **실제 웹앱 화면의 조각(스냅샷)**과 **깔끔한 타이포그래피** 중심으로 구성합니다.

---

## 📱 슬라이드 상세 구성 (총 7장)

### 슬라이드 1 — 표지 (Cover)
* **목적**: 피드 스크롤을 멈추고 "조용함과 몰입"의 브랜드 감각을 시각적으로 전합니다.
* **비주얼**: 크림색 배경의 정중앙. 얇은 테라코타 테두리를 가진 작은 사각형 박스 안에 "Momento" 로고.
* **핵심 카피**:
  > **여러 프로젝트, 지금의 답은 하나.**
  > 
  > 혼자 일하는 사람을 위한 조용한 작업 공간, 
  > Momento 웹앱 출시 소식.
* **디자인 프롬프트**:
  > Cream background (#F4F0EA). In the absolute center, a minimalist square container with a 1px terracotta (#C8794B) border. Inside the box, the logo wordmark "Momento" in Outfit font (semibold, ink color). Below the box, the sub-headline "여러 프로젝트, 지금의 답은 하나." in Pretendard semibold. Large empty space, calm and premium mood.

---

### 슬라이드 2 — 문제 제기 (Problem)
* **목적**: 1인 작업자가 매일 느끼는 '도구의 재촉과 압박'이라는 고통에 공감합니다.
* **비주얼**: 회색빛의 복잡한 체크리스트와 수많은 빨간 알림 숫자들이 희미하게 겹쳐 보이는 배경(시각적 압박을 간접 묘사).
* **핵심 카피**:
  > **도구가 나를 재촉하고 있지는 않나요?**
  > 
  > 쌓여 있는 할 일 목록, 빨간 알림 배지, 
  > 그리고 "N일 지연"이라는 재촉들.
  > 
  > 우리는 할 일이 많아서가 아니라, 
  > 도구의 재촉 때문에 압도당하곤 합니다.
* **디자인 프롬프트**:
  > Clean white background. On the left, bold dark text "도구가 나를 재촉하고 있지는 않나요?". On the right, a mockup of a typical chaotic todo list with red badge count indicators but desaturated to low-opacity gray tones, showing overwhelming stress in a calm visual style. 

---

### 슬라이드 3 — 해결책 제시 (Solution)
* **목적**: 재촉을 멈추고 '지금 집중할 단 하나'만을 제안하는 Momento의 핵심 철학을 소개합니다.
* **비주얼**: 화면 중앙에 테라코타 포인트 테두리가 있는 단 하나의 카드 스냅샷이 크게 배치됩니다.
* **핵심 카피**:
  > **재촉을 멈추고, 지금 할 하나만.**
  > 
  > Momento는 수많은 리스트를 가려두고,
  > 지금 이 순간 집중해야 할 **단 하나의 태스크**만 
  > 카드 형태로 크게 건넵니다.
* **디자인 프롬프트**:
  > Soft warm gray background. In the center, a single white card with a 1.5px terracotta border, representing the "One Now" card of Momento. Inside the card, a single task text "뉴스레터 초안 작성하기" and a "✓ 끝냈어요" button. Extremely clean, lots of breathing room.

---

### 슬라이드 4 — 핵심 기능 1: 지금 하나 & 다정한 이월
* **목적**: 킬러 피처인 '지금 하나'의 작동 원리와 죄책감 없는 '다정한 이월'을 설명합니다.
* **비주얼**: 오늘 다 끝내지 못한 태스크가 다음 날로 조용히 넘어가는 시각적 타임라인(점선과 둥근 카드).
* **핵심 카피**:
  > **끝냈거나, 혹은 내일로 미루거나.**
  > 
  > 태스크를 마치면 **[끝냈어요]**를 눌러 다음 일로 나아갑니다.
  > 
  > 오늘 다 하지 못한 일은 붉은 경고 표시 없이 
  > **[내일로 미룸]** 라벨과 함께 조용히 이월됩니다.
* **디자인 프롬프트**:
  > Clean cream background. Two cards side by side: left card with "✓ 끝냈어요" in a calm green/gray button, right card showing a task with a subtle gray pill outline saying "내일로 미룸". No red alert colors. Modern flat interface design.

---

### 슬라이드 5 — 핵심 기능 2: 빠른 메모 & 똑똑한 메모함
* **목적**: 작업 흐름을 방해하지 않는 '빠른 메모' 단축키와 인라인 프로젝트 전환 기능을 소개합니다.
* **비주얼**: 맥북 화면 위에 단축키 `⌘N`이 깔끔하게 띄워져 있는 모습과 메모가 프로젝트 칩으로 쏙 들어가는 모습.
* **핵심 카피**:
  > **흐름을 끊지 않는 빠른 메모.**
  > 
  > 일하는 도중 아이디어가 떠오르면 **⌘N**을 누르세요.
  > 한 줄로 메모하고 가볍게 엔터를 치면 끝입니다.
  > 
  > 모인 생각들은 메모함에서 원하는 프로젝트로 
  > 클릭 한 번에 태스크로 전환할 수 있습니다.
* **디자인 프롬프트**:
  > White background. In the center, a floating minimalist popover input box with shortcut key text overlay "⌘N" in a small retro-style keycap box. Below, a small visual cue showing a text note converting into a colored project dot (Sage/Blue/Plum).

---

### 슬라이드 6 — 제품 특징: 온전한 내 개인 공간 (Local-First)
* **목적**: 개인 정보 보호와 마찰 없는 시작(로그인 없음 가능)을 강조해 신뢰감을 줍니다.
* **비주얼**: 데이터가 디바이스 내부에 안전하게 잠겨 작동하는 미니멀한 그래픽 또는 선택형 로그인 화면 조각.
* **핵심 카피**:
  > **가입 없이 바로, 로컬에 저장되니까.**
  > 
  > 번거로운 로그인이나 가입 절차 없이 즉시 시작하세요.
  > 모든 데이터는 본인의 브라우저 로컬 저장소에 우선 저장됩니다.
  > 
  > 기기 간 동기화가 필요할 때만 선택적으로 로그인하세요.
* **디자인 프롬프트**:
  > Cream background. Minimal layout showing a laptop and a mobile phone side by side, connected by a very thin dashed line with a sage green dot, symbolizing optional synchronization. Flat design.

---

### 슬라이드 7 — 아웃트로 & 액션 유도 (Outro / CTA)
* **목적**: 마지막 슬라이드로서 조용히 제품 사용을 권유하고 접속 경로를 알립니다.
* **비주얼**: 1번 표지 슬라이드와 수미상관 구조. 크림색 배경에 테라코타 색상의 주 CTA 텍스트 링크.
* **핵심 카피**:
  > **오늘도 한 걸음, 조용하게.**
  > 
  > 복잡한 협업 도구에 지쳤다면,
  > 나만의 조용한 작업 공간을 만나보세요.
  > 
  > **지금 주소창에 입력하거나 프로필 링크를 클릭하세요.**
  > 🔗 `momento-app.html` (또는 배포된 링크)
* **디자인 프롬프트**:
  > Suited to match Slide 1 cover. Central tagline "오늘도 한 걸음, 조용하게." in large Pretendard font. Underneath, a clean URL link button "Momento 시작하기" in solid terracotta fill with ink-black text or a clean ghost style.

---

## 💡 카드뉴스 배포 & 활용 팁

1. **포스팅 캡션 추천**:
   > "여러 프로젝트를 혼자서 굴리다 보면, 늘 할 일이 아니라 도구에 압도되곤 합니다. 매일 아침 수십 개의 할 일 목록을 보며 한숨을 쉬었다면, 이제 나만을 위한 조용한 작업 공간 'Momento'를 열어보세요. 오직 지금 할 단 하나에만 몰입하도록 돕습니다. 가입 없이 바로 사용해 보실 수 있습니다."
2. **배포 채널**:
   - **인스타그램**: 디자인 톤앤매너(감성적이고 미니멀한 무드)에 어울려 솔로프리너/프리랜서 디자이너/개발자 타겟팅에 적합.
   - **링크드인**: 1인 창업가, 생산성 도구에 관심이 많은 테크 업계 종사자 유입 유도에 효과적.
