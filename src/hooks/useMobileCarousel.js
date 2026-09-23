import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsapSetup.js'

export default function useMobileCarousel(length, delay = 4200) {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const update = () => {
      const isMobile = window.innerWidth < 640
      setMobile(isMobile)
      if (!isMobile) setIndex(0)
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const firstCard = track.firstElementChild
    const gap = Number.parseFloat(getComputedStyle(track).gap) || 0
    const width = firstCard ? firstCard.getBoundingClientRect().width + gap : track.parentElement.clientWidth
    const tween = gsap.to(track, {
      x: mobile ? -index * width : 0,
      duration: 0.85,
      ease: 'power4.inOut',
      overwrite: 'auto',
    })

    return () => tween.kill()
  }, [index, mobile])

  useEffect(() => {
    if (!mobile || length < 2) return undefined

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length)
    }, delay)

    return () => window.clearInterval(timer)
  }, [delay, length, mobile])

  return { trackRef }
}
