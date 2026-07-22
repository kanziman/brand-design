import React from 'react'

export default function AboutSection() {
  return (
    <section aria-labelledby="section-about" className="fade-in delay-2">
      <h2 id="section-about" className="font-wordmark text-[13px] font-semibold tracking-[0.08em] uppercase text-text-secondary border-b border-border-subtle pb-2 m-0 mb-6">
        About & Philosophy
      </h2>
      
      <div className="flex flex-col gap-4 max-w-[650px]">
        <p className="text-[15px] text-text-secondary leading-[1.7] m-0 text-pretty">
          코드는 AI를 통해 그 어느 때보다 빠르게 찍어낼 수 있지만, 속도가 빨라질수록 관리해야 하는 지식과 도구의 복잡도는 기하급수적으로 늘어납니다.
        </p>
        <p className="text-[15px] text-text-secondary leading-[1.7] m-0 text-pretty">
          저는 AI 에이전트들을 적극적으로 활용하면서 오히려 시스템 곳곳에 난잡하게 불어나는 스킬들을 정돈할 관리 도구(<code>skillx-map</code>)와, 쏟아지는 고급 링크 속에서 정수만을 골라 아카이빙할 수 있는 파이프라인 도구(<code>zettlink</code>)의 필요성을 먼저 느꼈습니다.
        </p>
        <p className="text-[15px] text-text-secondary leading-[1.7] m-0 text-pretty">
          다국어 쉐도잉 서비스(<code>nsq</code>)를 구현하며 전체 코드의 절반을 테스트 코드로 채우는 엄격한 TDD 워크플로우와 체계적인 PRD/이슈 분할 관리를 적용했습니다. 이 신뢰성을 바탕으로 일관되며 높은 완성도를 구현했습니다.
        </p>
        <p className="text-[15px] text-text-secondary leading-[1.7] m-0 text-pretty">
          나아가 디자인의 한계가 프로덕트 완결성을 막지 않도록, 브랜드 아이덴티티부터 웹 앱, 랜딩페이지, 피칭덱에 이르는 모든 시각 자산을 관통하는 단 하나의 디자인 시스템(<code>brand-design</code>)을 직접 설계해보며 프로덕트에 대한 이해를 높이고 일관성을 확보했습니다.
        </p>
        <p className="text-[15px] text-text-secondary leading-[1.7] m-0 text-pretty">
          기술에 대한 이해를 바탕으로 시스템 아키텍처의 안정성, 파이프라인의 자동화, 그리고 디자인 토큰의 일관성을 추구합니다. 또한, AI 기술을 다양한 업무에 적용하기 위해 다양한 협업도구(JIRA, CONFLUENCE, EXCEL 등)에 대한 AI 기술의 적용 또한 탐구하고 있습니다.
        </p>
      </div>
    </section>
  )
}
