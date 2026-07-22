import React from 'react'
import Sidebar from './components/Sidebar'
import ProjectGrid from './components/ProjectGrid'
import AboutSection from './components/AboutSection'

export default function App() {
  return (
    <div className="max-w-[1120px] mx-auto px-5 py-12 md:px-6 md:py-20 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-16">
      <Sidebar />
      <main className="flex flex-col gap-14">
        {/* Hero Introduction */}
        <header className="mb-14 fade-in">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <h2 className="font-wordmark text-[26px] md:text-[40px] font-extrabold leading-[1.35] text-text-primary m-0 mb-4 tracking-[-0.03em] text-balance">
                백엔드 파이프라인부터 디자인 시스템까지,<br />
                배움에 경계를 두지 않고 <span className="text-text-accent inline-block">필요한 모든 것을 구현합니다</span>.
              </h2>
              <p className="text-[15px] text-text-secondary leading-[1.7] max-w-[700px] m-0 text-pretty">
                끊임없는 호기심으로 문제를 파고들며, 필요한 기술이라면 경계 없이 깊고 빠르게 학습합니다.<br />
                복잡해지는 AI 협업 환경의 비효율을 제어할 모니터링 시스템과 백엔드 지식 파이프라인을 구축했으며,<br />
                온전한 사용자 경험을 제공하기 위해 프론트엔드와 디자인 시스템 영역까지 직접 완성해 왔습니다.
              </p>
            </div>
            <div className="shrink-0 mt-2 self-start">
              <a 
                href="https://www.credly.com/badges/0e84b30f-c0aa-448c-a2ce-d974496f2fea/public_url" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/linkedin_thumb_image.png" 
                  alt="AWS Certified Solutions Architect – Associate" 
                  className="w-[100px] h-[100px] md:w-[100px] md:h-[100px] w-20 h-20 hover:scale-105 transition-transform duration-fast ease-calm"
                />
              </a>
            </div>
          </div>
        </header>

        <ProjectGrid />
        <AboutSection />
      </main>
    </div>
  )
}
