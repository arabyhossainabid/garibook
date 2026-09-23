import { useLayoutEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../../lib/gsapSetup.js'

const stats = [
  { value: 300000, suffix: '+', label: 'Trip Requests' },
  { value: 850000, suffix: '+', label: 'Total Customers' },
  { value: 35000, suffix: '+', label: 'Active Drivers' },
  { value: 64, suffix: '', label: 'District Covered' },
]

function Counter({ value, suffix, runId }) {
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    if (!runId) return undefined
    const number = { value: 0 }
    setCount(0)
    const animation = gsap.to(number, {
      value,
      duration: 1.45,
      ease: 'power2.out',
      onUpdate: () => setCount(Math.floor(number.value)),
    })
    return () => animation.kill()
  }, [runId, value])

  return (
    <strong className="block text-[34px] font-bold leading-none tracking-[-1.4px] text-[#fdd300] sm:text-[40px]">
      {count.toLocaleString()}{suffix}
    </strong>
  )
}

function Skyline() {
  return (
    <svg viewBox="0 0 1440 140" className="absolute inset-x-0 bottom-0 h-[110px] w-full text-white/70" preserveAspectRatio="none" aria-hidden="true">
      <path fill="currentColor" d="M0 140V92h28v-28h18v28h22V70h14v22h18V48h12v18h16V36h22v56h24V64h18v28h20V80h16v12h22V54h28v38h18V72h14v20h26V44h20v48h18V86h16v6h24V60h22v32h18V78h14v14h30V50h20v42h24V68h18v24h28V40h16v52h20V84h18v8h22V58h26v34h18V76h14v16h40V48h22v44h18V70h16v22h28V52h20v40h24V88h18v4h40V60h22v32h26V44h18v48h30V72h16v20h28V56h22v36h40V48h24v44h18V80h16v12h28V64h20v28h40V92h80v48z" />
      <rect x="40" y="104" width="90" height="22" rx="8" fill="#fff" />
    </svg>
  )
}

export default function StatsSection() {
  const sectionRef = useRef(null)
  const [runId, setRunId] = useState(0)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const title = section.querySelector('[data-stats-title]')
      const items = section.querySelectorAll('[data-stat-label]')

      gsap.set(title, { autoAlpha: 0, y: reduceMotion ? 0 : 80 })
      gsap.set(items, { autoAlpha: 0, y: reduceMotion ? 0 : 40, scale: reduceMotion ? 1 : 0.92 })

      const reset = () => {
        gsap.set(title, { autoAlpha: 0, y: reduceMotion ? 0 : 80 })
        gsap.set(items, { autoAlpha: 0, y: reduceMotion ? 0 : 40, scale: reduceMotion ? 1 : 0.92 })
      }

      const play = () => {
        setRunId((id) => id + 1)
        gsap.to(title, { autoAlpha: 1, y: 0, duration: reduceMotion ? 0 : 1, ease: 'power3.out', overwrite: true })
        gsap.to(items, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: reduceMotion ? 0 : 0.6,
          stagger: reduceMotion ? 0 : 0.12,
          delay: reduceMotion ? 0 : 0.2,
          ease: 'back.out(1.4)',
          overwrite: true,
        })
      }

      ScrollTrigger.create({
        trigger: section,
        start: 'top 70%',
        end: 'bottom 25%',
        onEnter: play,
        onEnterBack: play,
        onLeave: reset,
        onLeaveBack: reset,
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative -mt-px min-h-[620px] overflow-hidden bg-[#0e52ff] pb-28 pt-[120px] text-white">
      <div className="page-container">
        <h2 data-stats-title className="max-w-[1100px] text-[42px] font-bold leading-[1.18] tracking-[-1.4px] sm:text-[62px]">
          From Everyday Rides to Meaningful<br className="hidden lg:block" /> Journeys
        </h2>

        <div className="mt-28 grid grid-cols-2 gap-x-8 gap-y-10 md:ml-auto md:max-w-[840px] md:grid-cols-4">
          {stats.map((stat) => (
            <article data-stat-label key={stat.label}>
              <Counter value={stat.value} suffix={stat.suffix} runId={runId} />
              <span className="mt-2 block text-[18px] font-semibold leading-none sm:text-[21px]">{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
      <Skyline />
    </section>
  )
}
