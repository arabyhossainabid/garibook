import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsapSetup.js'
import useGsapReveal from '../../hooks/useGsapReveal.js'
import PlaceholderImage from '../ui/PlaceholderImage.jsx'
import { ArrowLink } from '../ui/Buttons.jsx'

const news = [
  {
    date: 'December 05, 2024',
    title: 'গাড়িবুক: বাংলাদেশের ইন্টারসিটি ভ্রমণে স্বাধীনতার নতুন পথচলা',
    copy: 'বাংলাদেশে ইন্টারসিটি ভ্রমণ সহজ ও সাশ্রয়ী করার লক্ষ্যে একটি অনন্য উদ্যোগ নিয়ে এসেছে ‘গাড়িবুক’। কোনো কমিশন ছাড়াই ইন্টারসিটি কার রেন্টাল পরিষেবা দেওয়া গাড়িবুক দেশের প্রথম এবং একমাত্র অ্যাপ।',
    brand: 'প্রথম আলো',
  },
  {
    date: 'December 04, 2024',
    title: 'Digital App to offer "Chander Gari"',
    copy: 'For the first time in Bangladesh, tourists can now book the iconic Chander Gari through an online platform.',
    brand: 'DhakaTribune',
  },
  {
    date: 'December 04, 2024',
    title: 'বাংলাদেশে প্রথমবার ‘চান্দের গাড়ি’ গাড়িবুক অ্যাপে',
    copy: 'বাংলাদেশে পর্যটকদের জন্য জনপ্রিয় যানবাহন ‘চান্দের গাড়ি’ এবার যুক্ত হলো অনলাইন অ্যাপ ভিত্তিক প্ল্যাটফরমে। গাড়িবুক দেশের প্রথম অ্যাপ হিসেবে পর্যটকদের জন্য এই বিশেষ যানটি বুকিং সুবিধা নিয়ে এলো।',
    brand: 'কালের কণ্ঠ',
  },
  {
    date: 'December 03, 2024',
    title: 'গাড়িবুক ও সুখীর চুক্তি – স্মার্ট চালক ও পরিবারের জন্য উন্নত স্বাস্থ্যসেবা',
    copy: 'দেশের শীর্ষস্থানীয় অ্যাপভিত্তিক প্ল্যাটফর্ম গাড়িবুক স্মার্ট চালক ও তাদের পরিবারের উন্নত স্বাস্থ্যসেবা নিশ্চিত করতে ‘সুখী’-এর সঙ্গে একটি গুরুত্বপূর্ণ চুক্তি স্বাক্ষর করেছে।',
    brand: 'News',
  },
]

function CircleArrow({ direction = 'next', onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === 'next' ? 'Next' : 'Previous'}
      className="grid size-12 place-items-center rounded-full border border-[#d9d9d9] bg-white text-[#111] transition hover:-translate-y-0.5 hover:border-(--brand-blue) hover:text-(--brand-blue)"
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d={direction === 'next' ? 'M5 12h14m-7-7 7 7-7 7' : 'M19 12H5m7-7-7 7 7 7'} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export default function NewsSection() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)
  useGsapReveal(sectionRef)

  useEffect(() => {
    const updateSlides = () => {
      const nextSlidesPerView = window.innerWidth < 640 ? 1 : 3
      setSlidesPerView(nextSlidesPerView)
      setIndex((current) => Math.min(current, Math.max(0, news.length - nextSlidesPerView)))
    }

    updateSlides()
    window.addEventListener('resize', updateSlides)
    return () => window.removeEventListener('resize', updateSlides)
  }, [])

  useEffect(() => {
    if (slidesPerView !== 1) return undefined

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % news.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [slidesPerView])

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const track = trackRef.current
      const firstCard = track.firstElementChild
      const gap = Number.parseFloat(getComputedStyle(track).gap) || 0
      const step = firstCard.getBoundingClientRect().width + gap

      gsap.to(track, {
        x: -index * step,
        duration: 0.85,
        ease: 'power4.inOut',
        overwrite: 'auto',
      })
    }, sectionRef)
    return () => context.revert()
  }, [index])

  const max = Math.max(0, news.length - slidesPerView)
  const prev = () => setIndex((value) => Math.max(0, value - 1))
  const next = () => setIndex((value) => Math.min(max, value + 1))

  return (
    <section ref={sectionRef} className="bg-white py-[70px]">
      <div className="page-container">
        <div className="flex items-end justify-between gap-6">
          <h2 data-reveal="up" className="section-title max-w-[620px]">We Featured by Top news Platforms</h2>
          <div className="hidden gap-3 lg:flex">
            <CircleArrow direction="prev" onClick={prev} />
            <CircleArrow onClick={next} />
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <div ref={trackRef} className="flex gap-6 will-change-transform">
            {news.map((item) => (
              <article key={item.title} className="w-full shrink-0 lg:w-[calc((100%-48px)/3)]">
                <PlaceholderImage className="h-[190px] w-full rounded-2xl sm:h-[313px]" />
                <p className="mt-4 text-[15px] text-[#8a8a8a]">{item.date}</p>
                <h3 className="mt-3 text-[22px] font-bold leading-7 text-[#111]">{item.title}</h3>
                <p className="mt-3 line-clamp-3 text-[16px] leading-6 text-[#444]">{item.copy}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <strong className="text-[18px]">{item.brand}</strong>
                  <ArrowLink href="/">Read Article</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { CircleArrow }
