import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsapSetup.js'

const appLink = 'https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page'
const headlines = [
  'Assurance of Effortless Travel',
  'Luxury Trips with Comfort',
  'Your Journey Starts Here ...',
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6" fill="none" stroke="currentColor" strokeWidth="2.25">
      <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HeroSection() {
  const heroRef = useRef(null)
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [typedText, setTypedText] = useState('')

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      gsap.timeline()
        .from('[data-hero-copy]', {
          autoAlpha: 0,
          y: reduceMotion ? 0 : 28,
          duration: reduceMotion ? 0 : 0.7,
          ease: 'power2.out',
        }, '-=0.55')
        .from('[data-hero-cta]', {
          autoAlpha: 0,
          y: reduceMotion ? 0 : 18,
          duration: reduceMotion ? 0 : 0.55,
          ease: 'power2.out',
        }, '-=0.35')
    }, heroRef)

    return () => context.revert()
  }, [])

  useEffect(() => {
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const cursor = '[data-hero-cursor]'
      const headline = headlines[headlineIndex]
      const typing = { length: 0 }

      gsap.to(cursor, { autoAlpha: 0.2, duration: 0.55, repeat: -1, yoyo: true, ease: 'power1.inOut' })

      gsap.timeline({
        onComplete: () => setHeadlineIndex((index) => (index + 1) % headlines.length),
      })
        .to(typing, {
          length: headline.length,
          duration: reduceMotion ? 0 : headline.length * 0.06,
          ease: 'none',
          onUpdate: () => setTypedText(headline.slice(0, Math.round(typing.length))),
        })
        .to({}, { duration: reduceMotion ? 0 : 1.7 })
        .to(typing, {
          length: 0,
          duration: reduceMotion ? 0 : headline.length * 0.025,
          ease: 'none',
          onUpdate: () => setTypedText(headline.slice(0, Math.round(typing.length))),
        })
    }, heroRef)

    return () => context.revert()
  }, [headlineIndex])

  return (
    <section ref={heroRef} className="bg-white">
      <div className="mx-auto grid min-h-[295px] max-w-[1200px] grid-cols-1 gap-10 px-5 pb-12 pt-4 sm:px-8 lg:grid-cols-[600px_1fr] lg:gap-[100px] lg:px-0">
        <h1 aria-label={headlines[headlineIndex]} className="min-h-[150px] max-w-[600px] self-start text-[44px] font-bold leading-[1.28] tracking-[-1.7px] text-[#101010] sm:text-[58px]">
          {typedText}
          <span data-hero-cursor aria-hidden="true" className="mt-[0.18em] inline-block h-[0.82em] w-[4px] bg-[#0e52ff]" />
        </h1>

        <div className="pt-1 lg:pt-1.5">
          <p data-hero-copy className="max-w-[530px] text-[23px] leading-[1.07] tracking-[-0.65px] text-[#9c9c9c] sm:text-[29px]">
            Choose your city, pick your car and enjoy the journey with Garibook’s best drivers.
          </p>
          <a data-hero-cta href={appLink} className="mt-7 flex h-[74px] w-full max-w-[290px] items-center justify-between rounded-[14px] bg-[#ffd000] px-[29px] text-[20px] font-medium text-[#101010] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#ffc400] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0e52ff]">
            Download App
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
