import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsapSetup.js'
import useGsapReveal from '../../hooks/useGsapReveal.js'
import PlaceholderImage from '../ui/PlaceholderImage.jsx'
import { PrimaryButton } from '../ui/Buttons.jsx'
import { AirportRentalIcon, HourlyRentalIcon, IntercityCarIcon, RideShareIcon } from '../ui/Icons.jsx'
import intercityCarRental from '../../assets/images/intercity_car_rental.svg'

const tabs = [
  { id: 'rides', label: 'Rides' },
  { id: 'business', label: 'Garibook Business' },
  { id: 'club', label: 'Garibook Club' },
  { id: 'vms', label: 'VMS' },
]

const rideCards = [
  { title: 'Intercity Car Rental', copy: 'Travel between cities with comfort and confidence.', icon: IntercityCarIcon },
  { title: 'Ride share', copy: 'Go anywhere in the city, quickly and easily.', icon: RideShareIcon },
  { title: 'Airport Rental', copy: 'Whether you’re flying abroad or returning home, enjoy a comfortable and worry-free airport journey.', icon: AirportRentalIcon },
  { title: 'Hourly Rental', copy: 'Rent a car by the hour, tailored to your needs.', icon: HourlyRentalIcon },
]

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const [tab, setTab] = useState('rides')
  const [activeCard, setActiveCard] = useState(3)
  useGsapReveal(sectionRef)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(contentRef.current, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out' })
    }, sectionRef)
    return () => context.revert()
  }, [tab])

  return (
    <section ref={sectionRef} className="bg-white py-[70px]">
      <div className="page-container">
        <h2 data-reveal="up" className="section-title">Our Services</h2>

        <div data-reveal="up" data-reveal-delay="120" className="mt-8 flex flex-wrap gap-3">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={'rounded-xl px-6 py-3.5 text-[18px] font-semibold transition sm:px-12 sm:text-[20px] ' + (tab === item.id ? 'bg-(--brand-blue) text-white' : 'bg-[#e9e9e9] text-[#121212] hover:bg-[#dedede]')}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div ref={contentRef} className="mt-12">
          {tab === 'rides' && (
            <>
              <h2 className="section-title mb-10 max-w-[520px]">Every Ride<br />One Platform</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {rideCards.map((card, index) => {
                  const active = activeCard === index
                  return (
                    <article
                      key={card.title}
                      onMouseEnter={() => setActiveCard(index)}
                      className={'cursor-pointer rounded-xl p-9 transition-colors duration-300 ' + (active ? 'bg-(--brand-blue) text-white' : 'bg-[#f5f8ff] text-[#212529]')}
                    >
                      <img src={intercityCarRental} alt="" aria-hidden="true" className="h-[72px] w-auto object-contain" />
                      <h3 className="mt-6 text-[22px] font-bold">{card.title}</h3>
                      <p className={'mt-3 text-[16px] leading-6 ' + (active ? 'text-white/90' : 'text-[#5b5b5b]')}>{card.copy}</p>
                    </article>
                  )
                })}
              </div>
            </>
          )}

          {tab === 'business' && (
            <ServiceSplit
              title={<>Modern Car Rentals<br />for Business</>}
              copy="Simplify your corporate transportation, ensure on-time team mobility, and gain control with our VMS."
              image="https://garibook.com/assets/images/ services/garibook_business.jpg"
            />
          )}

          {tab === 'club' && (
            <ServiceSplit
              title={<>Turn Your Car into<br />Earnings with Garibook Club</>}
              copy="Garibook Club is more than just a community. Join a vibrant network of car enthusiasts, all fueled by the same passion: the open road and the thrill of making money doing what they love."
              image="https://garibook.com/assets/images/services/garibook_club.jpg"
            />
          )}

          {tab === 'vms' && (
            <ServiceSplit
              title={<>Vehicle Management<br />System - VMS</>}
              copy="Just like Garibook Business makes traveling easy for your team, our Vehicle Management System (VMS) helps you take care of your own cars. VMS is a great tool that works with Garibook Business to make sure your vehicles are used the best way possible."
              framed
              image="https://garibook.com/assets/images/vms/Frame_1000001473.png"
            />
          )}
        </div>
      </div>
    </section>
  )
}

function ServiceSplit({ title, copy, image, framed = false }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <h2 className="section-title">{title}</h2>
        <p className="mt-5 max-w-[520px] text-[18px] leading-8 text-[#6b6b6b]">{copy}</p>
        <PrimaryButton href="/" className="mt-8">Learn More</PrimaryButton>
      </div>
      <div className={framed ? 'relative' : ''}>
        {framed && <div className="absolute inset-x-8 bottom-0 top-16 rounded-2xl bg-(--brand-blue)" />}
        <PlaceholderImage src={image} alt="Garibook service" className={'relative z-10 h-[340px] w-full rounded-2xl sm:h-[420px] ' + (framed ? 'mx-auto max-w-[560px]' : '')} />
      </div>
    </div>
  )
}
