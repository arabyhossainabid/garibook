import { useRef } from 'react'
import useGsapReveal from '../../hooks/useGsapReveal.js'
import PlaceholderImage from '../ui/PlaceholderImage.jsx'

const cards = [
  ['Airport Rentals', 'https://garibook.com/assets/images/services/Airport%20Rental_Webp.webp'],
  ['Family Trips', 'https://garibook.com/assets/images/services/family_trips.webp'],
  ['Long Tours', 'https://garibook.com/assets/images/services/Group%20Tour_Webp.webp'],
]

export default function PeopleTogetherSection() {
  const sectionRef = useRef(null)
  useGsapReveal(sectionRef)

  return (
    <section ref={sectionRef} className="bg-white py-[70px]">
      <div className="page-container">
        <h2 data-reveal="up" className="section-title max-w-[640px]">More Than Miles —<br />We Bring People Together</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map(([title, src], index) => (
            <article key={title} data-reveal="up" data-reveal-delay={200 + index * 100} className="relative overflow-hidden rounded-2xl">
              <PlaceholderImage src={src} alt={title} className="h-[340px] w-full" />
              <h3 className="absolute left-6 top-8 text-[26px] font-bold text-white drop-shadow">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
