import { useRef } from 'react'
import useGsapReveal from '../../hooks/useGsapReveal.js'
import PlaceholderImage from '../ui/PlaceholderImage.jsx'
import { FeatureIcon } from '../ui/Icons.jsx'

const features = [
  { name: 'car', title: 'Choose the Car', copy: 'Pick what suits your comfort.' },
  { name: 'driver', title: 'Choose the Driver', copy: 'Based on ratings and reviews.' },
  { name: 'fare', title: 'Choose the Fare', copy: 'Select the bid that fits your budget.' },
]

export default function FreedomSection() {
  const sectionRef = useRef(null)
  useGsapReveal(sectionRef)

  return (
    <section ref={sectionRef} className="bg-black py-[70px] text-white">
      <div className="page-container">
        <h2 data-reveal="up" className="section-title !text-white">Freedom in Every Journey</h2>
        <PlaceholderImage src="https://garibook.com/assets/images/banner/garibook_freedom.webp" alt="Garibook freedom" data-reveal="zoom" data-reveal-delay="120" className="mt-12 h-[280px] w-full rounded-t-xl sm:h-[420px]" />
        <div className="mt-12 grid justify-start gap-10 xl:grid-cols-[1fr_1fr_1fr] xl:justify-items-end">
          {features.map((item, index) => (
            <article key={item.title} data-reveal="up" data-reveal-delay={200 + index * 200} className="max-w-[280px]">
              <FeatureIcon name={item.name} />
              <h3 className="mt-5 text-[22px] font-bold">{item.title}</h3>
              <p className="mt-2 text-[16px] text-white/70">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
