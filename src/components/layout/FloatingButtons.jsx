import { useEffect, useState } from 'react'

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
      {visible && (
        <button
          type="button"
          onClick={scrollTop}
          aria-label="Back to top"
          className="grid size-12 place-items-center rounded-lg bg-(--brand-blue) text-white shadow-lg transition hover:-translate-y-1"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M12 19V5m-7 7 7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      <button
        type="button"
        aria-label="Chat"
        className="grid size-12 place-items-center rounded-full bg-(--brand-blue) text-white shadow-lg transition hover:-translate-y-1"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 6h14v10H8l-3 3z" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
