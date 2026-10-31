import React, { useState } from 'react'

const projects = [
  {
    id: 'nexuswiki',
    tag: 'AI Knowledge Platform',
    date: '2026.08 - 진행 중',
    title: 'NexusWiki',
    highlights: {
      service: '팀원 간 지식 위키 공유 (사내 플랫폼 도입 AI 위키)',
      tech: '4채널(위키/원문 벡터·어휘) 하이브리드 검색 · OpenSpec (SDD)'
    },
    description: '팀원 간 지식 공유를 위해 개인 제안으로 시작하여 <strong>회사 내부 플랫폼에 정식 도입·운영 중인 AI 위키 서비스</strong>입니다. LLM이 원문을 상호 연결된 위키로 정제하고, <strong>4채널(위키 벡터, 원문 벡터, 위키 어휘, 원문 어휘) 하이브리드 검색</strong>으로 원문과 위키 양쪽 출처를 정밀하게 인용하며, <strong>OpenSpec 기반 명세 주도 개발(SDD)</strong>을 적용했습니다.',
    links: [
      { label: 'GitHub', url: 'https://github.com/kanziman/NexusWiki' },
      { label: '서비스', url: 'https://www.nexuswiki.net/' }
    ],
    spec: {
      palette: [
        { hex: '#2563EB', name: 'Royal Blue' },
        { hex: '#10B981', name: 'Emerald' },
        { hex: '#0F172A', name: 'Slate Dark' },
        { hex: '#F8FAFC', name: 'Slate Light' }
      ],
      pattern: 'OpenSpec 기반 SDD 워크플로우, FastAPI + Railway Worker + Next.js 15 Monorepo',
      style: '모던 엔터프라이즈 SaaS 스타일, 고대비 정보 밀도 최적화 대시보드',
      typo: 'Inter (UI) + JetBrains Mono (Code & Citations)'
    }
  },

  {
    id: 'flight-deals',
    tag: 'Verified Deals Feed',
    date: '2026.08 - 진행 중',
    title: '입틀막 (항공 특가 검증 피드)',
    highlights: {
      service: '가짜 할인을 거르는 항공권 특가 검증 피드',
      tech: '노선 중앙값 및 인접일 대조 이상치 필터링 알고리즘 · AI 작성 및 인간 검수 권한 분리'
    },
    description: '항공권 가격을 수집해 노선별 평소 가격과 인접 날짜 가격을 대조하고, <strong>실제로 저렴한 특가만 게시하는 검증 피드</strong>입니다. 콘텐츠는 AI 에이전트가 작성하고 사람이 검수하여 배포합니다.',
    links: [
      { label: '서비스', url: 'https://deals.nexuswiki.net/deals' }
    ],
    spec: {
      palette: [
        { hex: '#0284C7', name: 'Sky Blue' },
        { hex: '#F59E0B', name: 'Amber Alert' },
        { hex: '#1E293B', name: 'Navy Dark' },
        { hex: '#F1F5F9', name: 'Cloud Light' }
      ],
      pattern: 'Flight Deal Scraper + Median Cross-validation Rule Engine + Supabase',
      style: '데이터 피드 스타일, 통계적 신뢰도 강조 카드',
      typo: 'Outfit (UI) + Pretendard'
    }
  },

  {
    id: 'channel-voc-demo',
    tag: 'Agentic GraphRAG System',
    date: '2026',
    title: 'channel-voc-demo',
    highlights: {
      service: '고객 상담(VOC) 분석 및 루트원인 자동 탐지',
      tech: '3중 하이브리드 GraphRAG (Neo4j + BGE + Lucene) · LangGraph 사람 승인 게이트'
    },
    description: '고객 상담(VOC) 대화에서 반복되는 문제의 루트원인과 예상 매출 손실액을 찾아, <strong>사람이 승인하면 GitHub 이슈와 Jira 티켓으로 연결</strong>하는 에이전트입니다. 해커톤 제출작에서 <strong>GraphRAG 엔진, 운영자 코파일럿까지 3단계로 발전</strong>시켰습니다. (공개 Bitext CS 데이터셋 1,200건 기반)',
    links: [
      { label: 'GitHub', url: 'https://github.com/kanziman/channel-voc-demo' },
      { label: 'Live Demo', url: 'https://channel-voc-demo.vercel.app/' }
    ],
    spec: {
      palette: [
        { hex: '#008CC1', name: 'Neo4j Blue' },
        { hex: '#FF6B6B', name: 'Accent Red' },
        { hex: '#3776AB', name: 'Python Blue' },
        { hex: '#1C1917', name: 'Ink Dark' }
      ],
      pattern: 'LangGraph StateGraph, Neo4j GraphRAG (3중 하이브리드)',
      style: '6단계 인터랙티브 대시보드 (6-Step Stepper & Live Search)',
      typo: 'Inter (UI) + JetBrains Mono (Code)'
    }
  },

  {
    id: 'skillx-map',
    tag: 'System Utility',
    date: '2026',
    title: 'skillx-map',
    highlights: {
      service: 'AI 에이전트 스킬 충돌 방지 및 자산 제어 CLI',
      tech: 'Zero-dependency 코어/어댑터 구조 · 안전 복구 설계 · npm 출시 후 500+ 다운로드'
    },
    description: 'Claude Code, Codex, Gemini에 쌓이는 AI 스킬과 플러그인을 한곳에서 스캔·점검·정리하는 CLI와 로컬 웹 UI입니다. <strong>제로 의존성 코어와 플랫폼별 어댑터 구조</strong>로 설계되었으며, <strong>.skillx/trash를 통한 바이트 단위 안전 복구</strong>를 보장합니다. npm 출시 후 <strong>누적 500+ 다운로드</strong>를 기록했습니다.',
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
      pattern: 'Zero-dependency Core + Adapters, Grouped Tree UI',
      style: '테크니컬 유틸리티 스타일, 라이트/다크 통합 테마',
      typo: 'Outfit (UI) + System Monospace'
    }
  },

  {
    id: 'nsq',
    tag: 'Web Application',
    date: '2026',
    title: 'NSQ (No Stupid Questions)',
    highlights: {
      service: '팟캐스트 음성-자막 정합 쉐도잉 웹앱',
      tech: 'AI 에이전트 TDD 루프(테스트 11,800줄) · Cloudflare R2 오디오 파이프라인'
    },
    description: 'Freakonomics 팟캐스트 공식 대본과 유튜브 자막의 시간축을 맞춰 화자가 분리된 영어·일본어 쉐도잉 학습을 제공하는 웹 앱입니다. <strong>소스(약 6,900줄)보다 많은 테스트 코드(약 11,800줄)</strong> 기반의 <strong>AI 에이전트 TDD 루프</strong>를 운영하며, <strong>Cloudflare R2 오디오 파이프라인</strong>으로 egress 비용 부담 없이 오디오를 안정적으로 서빙합니다.',
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] items-start">
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
              {project.highlights && (
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 bg-bg-surface border-l-[3px] border-l-accent rounded-[6px] px-3 py-1.5 my-3 text-[13px] leading-[1.5]">
                  <span className="font-semibold text-text-accent">
                    {project.highlights.service}
                  </span>
                  <span className="text-border-default font-light">·</span>
                  <span className="text-text-primary font-medium">
                    {project.highlights.tech}
                  </span>
                </div>
              )}
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
