import { useRef } from 'react'
import useGsapReveal from '../../hooks/useGsapReveal.js'
import PlaceholderImage from '../ui/PlaceholderImage.jsx'
import { PrimaryButton } from '../ui/Buttons.jsx'

const appLink = 'https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page'

export default function BookingArrivalSection() {
  const sectionRef = useRef(null)
  useGsapReveal(sectionRef)

  return (
    <section ref={sectionRef} className="bg-black py-[70px] !text-white">
      <div className="page-container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h2 data-reveal="up" className="section-title max-w-[560px] !text-white">From Booking to Arrival It’s<br />All in Your Hands</h2>
          <div data-reveal="right" data-reveal-delay="200">
            <PrimaryButton href={appLink}>Download App</PrimaryButton>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-3">
          <PlaceholderImage src="https://garibook.com/assets/images/services/explore.jpeg" alt="Explore ride services" data-reveal="up" data-reveal-delay="100" className="col-span-2 h-[220px] rounded-t-xl sm:h-[360px]" />
          <PlaceholderImage src="https://garibook.com/assets/images/services/freedom.jpg" alt="Garibook freedom" data-reveal="up" data-reveal-delay="200" className="h-[220px] rounded-t-xl sm:h-[360px]" />
          <PlaceholderImage src="https://garibook.com/assets/images/services/safe_travel.svg" alt="Safe travel" data-reveal="up" data-reveal-delay="300" className="h-[240px] rounded-t-xl" />
          <PlaceholderImage src="https://garibook.com/assets/images/services/prefarred_car.jpg" alt="Preferred car" data-reveal="up" data-reveal-delay="400" className="h-[240px] rounded-t-xl" />
          <PlaceholderImage src="https://garibook.com/assets/images/services/smooth.jpg" alt="Smooth app experience" data-reveal="up" data-reveal-delay="500" className="h-[240px] rounded-t-xl" />
        </div>
      </div>
    </section>
  )
}
