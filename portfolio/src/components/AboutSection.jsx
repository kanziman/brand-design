import React from 'react'

export default function AboutSection() {
  return (
    <section aria-labelledby="section-about" className="fade-in delay-2">
      <h2 id="section-about" className="font-wordmark text-[13px] font-semibold tracking-[0.08em] uppercase text-text-secondary border-b border-border-subtle pb-2 m-0 mb-6">
        About & Philosophy
      </h2>
      
      <div className="flex flex-col gap-4 max-w-[650px]">
        <p className="text-[15px] text-text-secondary leading-[1.7] m-0 text-pretty">
          AI 시대에 개인이 어떤 역량을 쌓아야 하는지가 요즘 가장 큰 관심사입니다. AI를 충분히 쓰면 한 사람이 할 수 있는 일의 범위가 넓어진다고 보고, 저는 그 힘을 백엔드 경험을 바탕으로 제품 전체를 보는 시야를 키우는 데 쓰고 싶습니다.
        </p>
        <p className="text-[15px] text-text-secondary leading-[1.7] m-0 text-pretty">
          그래서 업무 밖에서도 도메인이 다른 프로젝트를 하나씩 만들고 있습니다. 회사 사양서 기반 챗봇 경험에서 출발해 제안하고 사내 플랫폼에 도입된 <code>NexusWiki</code>, 가짜 특가를 걸러 내는 <code>입틀막</code>, 사람 승인 게이트를 둔 <code>channel-voc-demo</code>, AI 스킬 관리 도구 <code>skillx-map</code>, 테스트 코드가 소스보다 많은 쉐도잉 앱 <code>NSQ</code>까지. 최근에는 콘텐츠 제작과 이커머스 자동화도 해 보고 있습니다. 모두 AI 결과는 검증을 거쳐야 믿을 수 있다는 같은 생각에서 나왔습니다.
        </p>
      </div>
    </section>
  )
}
