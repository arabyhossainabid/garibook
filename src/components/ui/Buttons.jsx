function ArrowIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PrimaryButton({ href = '/', children, className = '', yellow = false }) {
  const colors = yellow
    ? 'bg-[#fdd300] text-black hover:bg-[#f3c800]'
    : 'bg-(--brand-blue) text-white hover:bg-(--brand-blue-dark)'

  return (
    <a
      href={href}
      className={'inline-flex h-16 min-w-[220px] items-center justify-between gap-6 rounded-[15px] px-7 text-[18px] font-semibold transition-transform duration-300 hover:-translate-y-1 sm:h-20 sm:text-[20px] ' + colors + ' ' + className}
    >
      <span>{children}</span>
      <ArrowIcon className="size-5 sm:size-6" />
    </a>
  )
}

export function ArrowLink({ href = '/', children, className = '' }) {
  return (
    <a href={href} className={'inline-flex items-center gap-2 text-[18px] font-bold text-(--brand-blue) ' + className}>
      {children}
      <ArrowIcon className="size-4" />
    </a>
  )
}

export { ArrowIcon }
