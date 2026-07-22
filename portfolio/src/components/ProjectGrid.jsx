import React, { useState } from 'react'

const projects = [
  {
    id: 'skillx-map',
    tag: 'System Utility',
    date: '2026',
    title: 'skillx-map',
    description: '프로젝트 디렉토리마다 무분별하게 쌓이는 AI 스킬들의 오작동과 충돌을 제어하기 위해 만들었습니다. 로컬 파일 시스템을 검사하여 자산 충돌을 막고 깔끔한 AI 협업 환경을 유지해 줍니다.',
    links: [
      { label: 'GitHub', url: 'https://github.com/kanziman/skillx-map' },
      { label: 'npm', url: 'https://www.npmjs.com/package/skillx-map' }
    ],
    spec: {
      palette: [
        { hex: '#3178C6', name: 'TS Blue' },
        { hex: '#646CFF', name: 'Vite Purple' },
        { hex: '#1E1E20', name: 'Dark Ink' },
        { hex: '#F9F9FB', name: 'Light Gray' }
      ],
      pattern: 'Zero-dependency CLI, Grouped Tree UI',
      style: '테크니컬 유틸리티 스타일, 라이트/다크 통합 테마',
      typo: 'Outfit (UI) + System Monospace'
    }
  },
  {
    id: 'zettlink',
    tag: 'Full-Stack System',
    date: '2026',
    title: 'zettlink',
    description: '일상 속에서 텔레그램으로 URL만 전송하면 작동하는 가장 쉬운 아카이빙 설계입니다. 자동 추출 및 LLM 가공을 거쳐, TIL이나 심층 분석 등 목적에 맞게 정적 페이지로 즉시 발행합니다.',
    links: [
      { label: 'GitHub', url: 'https://github.com/kanziman/zettlink' },
      { label: 'Live Site', url: 'https://zettlink-site.vercel.app/' }
    ],
    spec: {
      palette: [
        { hex: '#0EA5E9', name: 'Sky Blue' },
        { hex: '#EA580C', name: 'Orange' },
        { hex: '#F8FAFC', name: 'Slate Bg' },
        { hex: '#0F172A', name: 'Ink Blue' }
      ],
      pattern: 'Telegram Bot Queue, Supabase Admin dashboard, Next.js SSG',
      style: '시맨틱 토큰 기반 정보 대시보드, sky + orange 팔레트',
      typo: 'Pretendard (Body) + sans-serif'
    }
  },
  {
    id: 'nsq',
    tag: 'Web Application',
    date: '2026',
    title: 'NSQ (No Stupid Questions)',
    description: '팟캐스트 기반 고품질 영어, 일본어 쉐도잉 서비스입니다. 2만 라인 중 1만 라인을 테스트 코드로 구축한 TDD 워크플로우를 통해 프로덕트의 실행적 안정성과 완성도를 확보했습니다.',
    links: [
      { label: 'GitHub', url: 'https://github.com/kanziman/nsq' },
      { label: 'Live Web', url: 'https://nsq-teal.vercel.app/' }
    ],
    spec: {
      palette: [
        { hex: '#F4F0EA', name: 'Cream Bg' },
        { hex: '#1A1A1A', name: 'Ink Black' },
        { hex: '#C8794B', name: 'Terracotta' },
        { hex: '#8A9A7E', name: 'Sage Green' }
      ],
      pattern: 'A-B Repeat Waveform UI, Interactive Chat, Seamless Component Nesting',
      style: '지면 인쇄물 감성의 매거진 스타일, 보더 위주의 플랫 카드',
      typo: 'Serif (Outfit / Serif Family) + Pretendard'
    }
  },
  {
    id: 'brand-design',
    tag: 'Design System',
    date: '2026',
    title: 'Momento Brand Identity',
    description: '디자인 병목을 직접 해결하기 위해 브랜드의 통일된 토큰 시스템을 정립했습니다. 가이드라인부터 프로덕트 UI, 랜딩, 피칭덱까지 모든 시각적 에셋의 CSS 변수를 하나의 구조적인 토큰 시스템으로 바인딩했습니다.',
    links: [
      { label: 'GitHub', url: 'https://github.com/kanziman/brand-design' },
      { label: 'Live App', url: 'https://brand-design-one.vercel.app/momento/' },
      { label: 'Landing', url: 'https://brand-design-one.vercel.app/' }
    ],
    spec: {
      palette: [
        { hex: '#FFFFFF', name: 'White Bg' },
        { hex: '#F4F0EA', name: 'Cream' },
        { hex: '#C8794B', name: 'Terracotta' },
        { hex: '#1A1A1A', name: 'Ink Black' }
      ],
      pattern: 'CSS Custom Properties design source, WCAG AA Accessibility Contrast',
      style: '그라데이션 없는 플랫 솔리드, 그림자 없는 플랫 보더 카드',
      typo: 'Outfit (Wordmark) + Pretendard (Body text)'
    }
  }
];

export default function ProjectGrid() {
  const [toastText, setToastText] = useState('');
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastText(`${text} 복사되었습니다.`);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }).catch((err) => {
      console.error("복사 실패:", err);
    });
  };

  return (
    <section aria-labelledby="section-projects" className="fade-in delay-1">
      <h2 id="section-projects" className="font-wordmark text-[13px] font-semibold tracking-[0.08em] uppercase text-text-secondary border-b border-border-subtle pb-2 m-0 mb-6">
        Side Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] items-stretch">
        {projects.map((project) => (
          <article
            key={project.id}
            id={`project-${project.id}`}
            className="group bg-bg-surface-raised border border-border-default rounded-[12px] p-6 flex flex-col min-h-[250px] transition-all duration-normal ease-calm"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[11px] font-semibold text-text-accent bg-accent-soft px-2 py-0.5 rounded-[999px]">
                  {project.tag}
                </span>
                <span className="text-[12px] text-text-tertiary">
                  {project.date}
                </span>
              </div>
              <h3 className="text-[18px] font-bold m-0 mb-2 text-text-primary leading-[1.4] tracking-[-0.01em]">
                {project.title}
              </h3>
              <p className="text-[14px] text-text-secondary m-0 mb-6 text-pretty leading-[1.6]">
                {project.description.split('<strong>').map((part, i) => {
                  if (part.includes('</strong>')) {
                    const [bold, normal] = part.split('</strong>');
                    return <span key={i}><strong className="font-semibold text-text-primary">{bold}</strong>{normal}</span>;
                  }
                  return part;
                })}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 text-[12px] font-semibold border-b border-dashed border-border-subtle pb-4 mb-5 w-full">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-text-secondary border border-border-default bg-bg-surface-raised px-3 py-1.5 rounded-full inline-flex items-center gap-1 transition-all duration-fast ease-calm hover:text-text-accent hover:border-accent hover:bg-accent-soft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-fast ease-calm group-hover:translate-x-[1px] group-hover:translate-y-[-1px]">
                    <path d="M7 7h10v10"/>
                    <path d="M7 17 17 7"/>
                  </svg>
                </a>
              ))}
            </div>

            <details className="mt-auto w-full group/spec">
              <summary className="text-[12px] text-text-tertiary cursor-pointer font-semibold outline-none flex items-center gap-1.5 transition-colors duration-fast ease-calm hover:text-text-primary list-none [&::-webkit-details-marker]:hidden before:content-['＋'] before:font-mono before:font-bold group-open/spec:before:content-['－']">
                디자인 스펙 & 토큰
              </summary>
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold uppercase text-text-tertiary tracking-[0.05em]">Color Palette</span>
                  <div className="flex gap-3 flex-wrap">
                    {project.spec.palette.map((color, idx) => (
                      <div 
                        key={idx} 
                        className="flex flex-col items-center gap-1 cursor-pointer group/chip"
                        onClick={() => copyToClipboard(color.hex)}
                      >
                        <div 
                          className="width-[28px] height-[28px] w-7 h-7 rounded-[6px] border border-border-subtle transition-all duration-fast ease-calm group-hover/chip:scale-108 group-hover/chip:border-accent"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="font-wordmark text-[8px] text-text-tertiary tracking-[-0.02em]">{color.hex}</span>
                        <span className="text-[8px] text-text-secondary font-medium">{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-[60px_1fr] row-gap-[6px] gap-y-1.5 gap-x-3 text-[12px] border-t border-border-subtle pt-3">
                  <span className="text-text-tertiary font-medium">패턴</span>
                  <span className="text-text-secondary font-semibold">{project.spec.pattern}</span>
                  <span className="text-text-tertiary font-medium">스타일</span>
                  <span className="text-text-secondary font-semibold">{project.spec.style}</span>
                  <span className="text-text-tertiary font-medium">타이포</span>
                  <span className="text-text-secondary font-semibold">{project.spec.typo}</span>
                </div>
              </div>
            </details>
          </article>
        ))}
      </div>

      <div className={`fixed bottom-6 right-6 bg-text-primary color-bg-page text-white px-5 py-2.5 rounded-[8px] text-[12px] font-semibold shadow-float pointer-events-none transition-all duration-250 ease-calm z-[999] ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        {toastText}
      </div>
    </section>
  )
}
