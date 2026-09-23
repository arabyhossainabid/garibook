import { useRef } from 'react'
import useGsapReveal from '../../hooks/useGsapReveal.js'
import useMobileCarousel from '../../hooks/useMobileCarousel.js'
import PlaceholderImage from '../ui/PlaceholderImage.jsx'
import { ArrowLink } from '../ui/Buttons.jsx'

const blogs = [
  {
    date: 'September 15, 2026',
    title: 'রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা',
    copy: 'রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা',
  },
  {
    date: 'September 20, 2026',
    title: 'সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা',
    copy: 'সিলেটের-দর্শনীয়-স্থান',
  },
  {
    date: 'September 20, 2026',
    title: 'নওগাঁর দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা',
    copy: 'নওগাঁর দর্শনীয় স্থান সমূ',
  },
]

export default function BlogsSection() {
  const sectionRef = useRef(null)
  const { trackRef } = useMobileCarousel(blogs.length)
  useGsapReveal(sectionRef)

  return (
    <section ref={sectionRef} className="bg-white py-[70px]">
      <div className="page-container">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div data-reveal="up" className="order-2 sm:order-1">
            <h2 className="section-title">Beyond Destinations</h2>
            <p className="mt-3 max-w-[640px] text-[18px] text-[#6b6b6b]">
              Discover travel hacks, guides, and inspirations for your next intercity trip with Garibook.
            </p>
          </div>
          <div className="order-1 sm:order-2">
            <ArrowLink href="/blogs">Show All Blogs</ArrowLink>
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <div ref={trackRef} className="flex gap-8 will-change-transform sm:grid sm:grid-cols-3">
          {blogs.map((blog, index) => (
            <article key={blog.title} data-reveal="up" data-reveal-delay={index * 120} className="w-full shrink-0 cursor-pointer sm:w-auto">
              <PlaceholderImage className="h-[240px] w-full rounded-2xl sm:h-[313px]" />
              <p className="mt-3 text-[15px] text-[#8a8a8a]">{blog.date}</p>
              <h3 className="mt-3 text-[20px] font-bold leading-7">{blog.title}</h3>
              <p className="mt-2 text-[15px] text-[#666]">{blog.copy}</p>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
