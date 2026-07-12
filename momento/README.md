# Momento — web app (hi-fi v2)

Runnable implementation of the **Momento** hi-fi prototype (`Momento.dc.html`,
imported from Claude Design), built on the **Momento Design System** tokens.

Momento is a minimal project-management app for solo freelancers — "a quiet
workspace of your own." This is the latest prototype: optional login, a
task-detail drawer, and richer Today states on top of the original screens.

Product spec for this app: [`../docs/ui-spec.md`](../docs/ui-spec.md) (화면정의서) + [`../docs/PRD.md`](../docs/PRD.md).

## Run

Open `index.html` in any browser — no build step, no dependencies. State persists
to `localStorage`.

```
open index.html
```

The only network requests are the two web fonts (Pretendard + Outfit) from CDN.

## Screens

- **로그인 게이트 (Login gate, S-00)** — Google or "계정 없이 시작하기" (local-first)
- **오늘 (Today, S-01)** — terracotta "지금 하나" card, 이어서, 오늘 완료, all-done/empty states
- **전체 보기 (Overview, S-02)** — project grid with next-task + progress
- **프로젝트 (Project, S-03)** — task list, add task, 오늘로 ↑ / 완료
- **메모함 (Inbox, S-04)** — quick notes with inline "프로젝트로 전환"
- **빠른 메모 (Quick Note, S-05)** — ⌘N centered popover
- **할 일 상세 (Task Detail, S-07)** — right slide-over: 메모 · 링크 · 마감일 · 상태 · 삭제
- **사이드바 (G-01)** — nav + projects + account row, off-canvas drawer < 760px

## Structure

```
index.html          self-contained app (vanilla JS, no framework)
styles.css          links the token files below
tokens/
  colors.css        warm triad — ink / terracotta / cream / warm-gray
  typography.css    Pretendard (body) + Outfit (wordmark), size/weight scale
  spacing.css       spacing, radius, shadow, motion tokens
  fonts.css         @font-face / CDN imports for the two fonts
```

## Brand rules honored

Flat solid fills, no gradients. Terracotta is the only accent, reserved for the
"지금 하나" signal (card border + `--accent-soft`) and the "오늘로 ↑" control.
**No red, no warning colors, no percentages, no "D-n" / overdue counters** —
deadlines and rollovers get a plain label ("내일로 미룸"), never a color signal;
a past-due date does not change color. Cards are flat + bordered with no rest
shadow; a soft ambient shadow appears only on floating surfaces (Quick Note
popover, task-detail drawer). Copy stays plain and unhurried ("오늘도 한 걸음.").

## Notes on the port

- The source is a Design-Composer template (`Momento.dc.html`) using a custom
  `x-dc` / `sc-if` / `sc-for` runtime plus a component bundle. This port
  reproduces every component, screen, and behavior as dependency-free vanilla JS
  + the exact design tokens, so it runs with no build and no CDN framework.
- Text edits in the detail drawer use uncontrolled inputs (mutate-on-input, no
  re-render) so focus is never lost while typing.
- Pretendard's 9 local `.otf` weights aren't vendored here; `tokens/fonts.css`
  loads the identical open-source family from its CDN. Swap in a local
  `@font-face` block if you want to vendor the OTFs offline.
- The 🔗 / ✕ / 📅 glyphs and the Google "G" mark are placeholders (see
  `../docs/ui-spec.md` open items) — swap for Lucide icons and the official Google SVG.
