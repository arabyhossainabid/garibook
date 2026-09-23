import { useRef } from 'react'
import useGsapReveal from '../../hooks/useGsapReveal.js'
import useMobileCarousel from '../../hooks/useMobileCarousel.js'
import PlaceholderImage from '../ui/PlaceholderImage.jsx'
import { PlayIcon } from '../ui/Icons.jsx'
import { CircleArrow } from './NewsSection.jsx'

const passengers = [
  { name: 'Atif Haider', role: 'Banker' },
  { name: 'Mohammad Habibur Rahman', role: 'Banker' },
  { name: 'Sadia Afrin', role: 'Service Holder' },
]

export default function TestimonialsSection() {
  const sectionRef = useRef(null)
  const { trackRef } = useMobileCarousel(passengers.length)
  useGsapReveal(sectionRef)

  return (
    <section ref={sectionRef} className="bg-[#f4f6fb] py-[70px]">
      <div className="page-container">
        <div className="flex items-end justify-between gap-6">
          <div data-reveal="up" className="max-w-[760px]">
            <h2 className="section-title">Our Passengers Speak For Us</h2>
            <p className="mt-4 text-[18px] leading-8 text-[#6b6b6b]">
              Our journey was seamless and enjoyable from start to finish. The booking process was straightforward, and the staff were incredibly attentive, ensuring we felt comfortable throughout the trip.
            </p>
          </div>
          <div className="hidden gap-3 lg:flex">
            <CircleArrow direction="prev" onClick={() => {}} />
            <CircleArrow onClick={() => {}} />
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <div ref={trackRef} className="flex gap-6 will-change-transform sm:grid sm:grid-cols-3">
          {passengers.map((person, index) => (
            <article key={person.name} data-reveal="up" data-reveal-delay={index * 120} className="w-full shrink-0 sm:w-auto">
              <div className="relative overflow-hidden rounded-2xl">
                <PlaceholderImage className="h-[240px] w-full" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0e52ff]/25 via-transparent to-white/10" />
                <div className="absolute left-4 top-10 max-w-[180px] text-[28px] font-bold leading-7 text-white">
                  Our passengers speak for us
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <PlayIcon />
                </div>
              </div>
              <h3 className="mt-4 text-[20px] font-bold">{person.name}</h3>
              <p className="text-[15px] text-[#7a7a7a]">{person.role}</p>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
