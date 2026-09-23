import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsapSetup.js'
import logo from '../../assets/icons/gaibook-logo.svg'

const navItems = [
  ['About Us', '/about-us'],
  ['Earn With Garibook', '/earn-with-garibook'],
  ['Garibook Business', '/business'],
  ['Garibook Club', '/club'],
  ['Campaign', '/campaign'],
  ['Blogs', '/blogs'],
]

function LanguageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M8 9h3m-1.5-1.5v3M14 15h4m-2-2v4" strokeLinecap="round" />
    </svg>
  )
}

function MenuIcon({ close = false }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d={close ? 'm6 6 12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} strokeLinecap="round" />
    </svg>
  )
}

function NavLink({ label, href }) {
  const animateLine = (event, scaleX) => {
    gsap.to(event.currentTarget.lastElementChild, {
      scaleX,
      duration: 0.62,
      ease: 'power2.inOut',
      overwrite: true,
    })
  }

  return (
    <a
      data-header-item
      href={href}
      onMouseEnter={(event) => animateLine(event, 1)}
      onMouseLeave={(event) => animateLine(event, 0)}
      onFocus={(event) => animateLine(event, 1)}
      onBlur={(event) => animateLine(event, 0)}
      className="relative inline-block py-3 text-lg font-medium text-black transition-[transform,color] duration-300 ease-out hover:-translate-y-0.5 hover:text-(--brand-blue) active:translate-y-0 active:scale-95 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--brand-blue)"
    >
      {label}
      <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-center scale-x-0 bg-(--brand-blue)" />
    </a>
  )
}

function LanguageButton({ language, onClick }) {
  return (
    <button
      data-header-item
      type="button"
      onClick={onClick}
      className="brand-button inline-flex h-10 items-center justify-center gap-1.5 rounded-lg px-3 text-base font-medium transition-[transform,background-color] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--brand-blue)"
      aria-label="Change language"
    >
      <LanguageIcon />
      {language}
    </button>
  )
}

export default function Header() {
  const headerRef = useRef(null)
  const drawerRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('English')

  const toggleLanguage = () => setLanguage((value) => (value === 'English' ? 'বাংলা' : 'English'))

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from('[data-header-item]', {
        autoAlpha: 0,
        y: -12,
        stagger: 0.06,
        duration: 0.45,
        ease: 'power2.out',
        clearProps: 'all',
      })
    }, headerRef)

    return () => context.revert()
  }, [])

  useEffect(() => {
    const drawer = drawerRef.current
    if (!drawer) return undefined

    const panel = drawer.firstElementChild
    const links = drawer.querySelectorAll('[data-mobile-link]')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    gsap.killTweensOf([drawer, panel, links])

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      gsap.set(drawer, { autoAlpha: 1, pointerEvents: 'auto' })
      gsap.fromTo(panel, { xPercent: 100 }, { xPercent: 0, duration: reduceMotion ? 0 : 0.4, ease: 'power3.out' })
      gsap.fromTo(links, { autoAlpha: 0, x: 14 }, { autoAlpha: 1, x: 0, duration: reduceMotion ? 0 : 0.3, stagger: reduceMotion ? 0 : 0.04, delay: reduceMotion ? 0 : 0.1 })
    } else {
      document.body.style.overflow = ''
      gsap.to(panel, { xPercent: 100, duration: reduceMotion ? 0 : 0.2, ease: 'power2.in' })
      gsap.to(drawer, { autoAlpha: 0, duration: reduceMotion ? 0 : 0.2, onComplete: () => gsap.set(drawer, { pointerEvents: 'none' }) })
    }

    return () => {
      gsap.killTweensOf([drawer, panel, links])
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header ref={headerRef} className="relative z-50 h-(--header-height) bg-white">
      <nav className="mx-auto flex h-full w-full container items-center gap-6 px-4 sm:px-6" aria-label="Main navigation">
        <a data-header-item href="/" aria-label="Garibook home" className="shrink-0 rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--brand-blue)">
          <img src={logo} alt="Garibook" className="h-10 w-auto" />
        </a>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          {navItems.map(([label, href]) => <NavLink key={label} label={label} href={href} />)}
          <a data-header-item href="/" className="brand-button inline-flex h-10 items-center justify-center rounded-lg px-5 text-lg font-medium transition-[transform,background-color] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--brand-blue)">login</a>
          <LanguageButton language={language} onClick={toggleLanguage} />
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <LanguageButton language={language} onClick={toggleLanguage} />
          <button data-header-item type="button" onClick={() => setIsMenuOpen(true)} className="inline-grid size-10 place-items-center rounded-lg border border-(--brand-blue) text-(--brand-blue) transition-[transform,background-color,color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-(--brand-blue) hover:text-white active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--brand-blue)" aria-label="Open navigation menu" aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
            <MenuIcon />
          </button>
        </div>
      </nav>

      <div ref={drawerRef} className="invisible fixed inset-0 z-50 bg-black/35 opacity-0 lg:hidden" onMouseDown={(event) => event.target === event.currentTarget && setIsMenuOpen(false)}>
        <aside id="mobile-navigation" className="ml-auto flex h-full w-full max-w-sm flex-col bg-white px-6 pb-8 pt-6 shadow-2xl" aria-label="Mobile navigation">
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <img src={logo} alt="Garibook" className="h-10 w-auto transition-transform duration-300 ease-out hover:scale-105" />
            <button type="button" onClick={() => setIsMenuOpen(false)} className="inline-grid size-10 place-items-center rounded-lg text-(--brand-blue) transition-[transform,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-50 active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--brand-blue)" aria-label="Close navigation menu">
              <MenuIcon close />
            </button>
          </div>

          <div className="flex flex-1 flex-col py-7">
            {navItems.map(([label, href]) => <a data-mobile-link key={label} href={href} onClick={() => setIsMenuOpen(false)} className="border-b border-slate-100 py-4 text-lg font-medium text-slate-900 transition-[transform,color] duration-300 ease-out hover:translate-x-1 hover:text-(--brand-blue)">{label}</a>)}
          </div>

          <a data-mobile-link href="/" className="brand-button rounded-lg py-3.5 text-center text-lg font-medium transition-[transform,background-color] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95">login</a>
        </aside>
      </div>
    </header>
  )
}
