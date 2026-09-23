import { useLayoutEffect } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsapSetup.js'

export default function useGsapReveal(scopeRef) {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const items = gsap.utils.toArray('[data-reveal]')

      items.forEach((element) => {
        const type = element.dataset.reveal || 'up'
        const delay = Number(element.dataset.revealDelay || 0) / 1000
        const from = type === 'zoom'
          ? { autoAlpha: 0, scale: 0.88 }
          : type === 'left'
            ? { autoAlpha: 0, x: -36 }
            : type === 'right'
              ? { autoAlpha: 0, x: 36 }
              : { autoAlpha: 0, y: 50 }

        gsap.fromTo(element, from, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: reduceMotion ? 0 : type === 'zoom' ? 1.05 : 0.82,
          delay: reduceMotion ? 0 : delay,
          ease: type === 'zoom' ? 'power3.out' : 'power4.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 86%',
            end: 'bottom 14%',
            toggleActions: 'play reverse play reverse',
          },
        })
      })
    }, scopeRef)

    ScrollTrigger.refresh()
    return () => context.revert()
  }, [scopeRef])
}
