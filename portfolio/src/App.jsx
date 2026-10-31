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
                백엔드에서 시작해,<br />
                만들고 싶은 제품은 <span className="text-text-accent inline-block">화면과 배포까지 직접 만듭니다</span>.
              </h2>
              <p className="text-[15px] text-text-secondary leading-[1.7] max-w-[700px] m-0 text-pretty">
                백엔드 5년. 글로벌 5개 리전 콘텐츠 플랫폼을 개발·운영합니다.<br />
                업무 밖에서는 위키, 특가 서비스, 에이전트, CLI, 쉐도잉 앱까지 다섯 개의 제품을 만들었습니다.<br />
                위키는 제안해서 사내 플랫폼에 도입되었고, CLI는 npm 출시 후 500+ 다운로드를 기록했습니다.
              </p>
            </div>
            <div className="shrink-0 mt-2 self-start">
              <a 
                href="https://www.credly.com/badges/0e84b30f-c0aa-448c-a2ce-d974496f2fea/public_url" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" 
                  alt="AWS Certified Solutions Architect – Associate" 
                  className="w-[100px] h-[100px] hover:scale-105 transition-transform duration-fast ease-calm"
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
