import { useRef } from 'react'
import useGsapReveal from '../../hooks/useGsapReveal.js'
import PlaceholderImage from '../ui/PlaceholderImage.jsx'
import { PrimaryButton } from '../ui/Buttons.jsx'

const appLink = 'https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page'

export default function DownloadAppSection() {
  const sectionRef = useRef(null)
  useGsapReveal(sectionRef)

  return (
    <section ref={sectionRef} className="bg-white pb-[70px]">
      <div className="page-container">
        <div data-reveal="up" className="overflow-hidden rounded-2xl bg-(--brand-blue)">
          <div className="grid items-center lg:grid-cols-2">
            <div className="px-8 py-14 sm:px-16">
              <h2 className="text-[40px] font-bold leading-[1.15] text-white sm:text-[48px]">
                Download<br />Garibook Mobile App
              </h2>
              <p className="mt-4 max-w-[420px] text-[18px] text-white/90">
                Download our Customer, Smart Driver and Enterprise App
              </p>
              <PrimaryButton href={appLink} yellow className="mt-8">Download App</PrimaryButton>
            </div>
            <PlaceholderImage className="h-[320px] bg-transparent lg:h-[430px]" imgClassName="h-full w-full object-contain object-right" />
          </div>
        </div>
      </div>
    </section>
  )
}
