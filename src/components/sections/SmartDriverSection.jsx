import { useLayoutEffect, useRef } from 'react'
import useGsapReveal from '../../hooks/useGsapReveal.js'
import { gsap, ScrollTrigger } from '../../lib/gsapSetup.js'
import PlaceholderImage from '../ui/PlaceholderImage.jsx'
import { PrimaryButton } from '../ui/Buttons.jsx'

export default function SmartDriverSection() {
  const sectionRef = useRef(null)
  useGsapReveal(sectionRef)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const image = sectionRef.current.querySelector('[data-driver-image]')
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      gsap.fromTo(image,
        { autoAlpha: 0, scale: reduceMotion ? 1 : 0.55 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: reduceMotion ? 0 : 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            end: 'bottom 22%',
            toggleActions: 'play reverse play reverse',
          },
        },
      )
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-[70px]">
      <div className="page-container">
        <h2 data-reveal="up" className="section-title">Be a Smart Driver</h2>
        <div data-reveal="up" data-reveal-delay="120" className="mt-12 overflow-hidden rounded-2xl bg-[#fdd300]">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="px-8 py-12 sm:px-14">
              <h3 className="text-[40px] font-bold leading-[1.1] text-(--brand-blue) sm:text-[52px]">
                0% Commission<br />100% Freedom
              </h3>
              <PrimaryButton href="https://play.google.com/store/search?q=garibook%20smart%20driver&c=apps" className="mt-8">
                Download Smart Driver App
              </PrimaryButton>
            </div>
            <div data-driver-image className="origin-bottom">
              <PlaceholderImage src="https://garibook.com/assets/images/app-screen/no_commission_app_screen.png" alt="Garibook Smart Driver app" className="h-[320px] w-full lg:h-[420px]" imgClassName="h-full w-full object-contain object-bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
