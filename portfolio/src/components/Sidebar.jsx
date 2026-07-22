import React from 'react'

export default function Sidebar() {
  return (
    <aside className="md:sticky md:top-[80px] h-fit fade-in">
      <div className="w-16 h-16 rounded-[12px] bg-accent-soft text-text-accent flex items-center justify-center font-wordmark text-[24px] font-bold mb-6 border border-border-subtle">
        H
      </div>
      <h1 className="font-wordmark text-[24px] font-bold text-text-primary m-0 mb-2 tracking-[-0.02em]">
        황경태
      </h1>
      <p className="text-[14px] text-text-secondary mb-6 font-medium">
        AI Product Engineer & Generalist
      </p>
      <p className="text-[14px] text-text-tertiary max-w-[250px] md:max-w-full leading-[1.6] mb-8 text-pretty">
        호기심과 집요함을 바탕으로 백엔드 파이프라인부터 디자인 시스템까지 일관되게 관통시키며, 사용자의 온전한 AI 경험(AX)을 설계하고 구현하는 메이커입니다.
      </p>
      
      <ul className="list-none p-0 m-0">
        <li className="mb-3">
          <a href="mailto:hwanghkt@naver.com" id="link-email" className="text-[14px] text-text-secondary hover:text-text-primary flex items-center gap-2 transition-colors duration-fast ease-calm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Email
          </a>
        </li>
        <li className="mb-3">
          <a href="https://github.com/kanziman" id="link-github" className="text-[14px] text-text-secondary hover:text-text-primary flex items-center gap-2 transition-colors duration-fast ease-calm" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            GitHub
          </a>
        </li>
      </ul>
    </aside>
  )
}
