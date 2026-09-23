export function IntercityCarIcon() {
  return (
    <svg viewBox="0 0 120 72" className="h-[72px] w-auto" aria-hidden="true">
      <rect x="18" y="28" width="78" height="26" rx="10" fill="#1C58F9" />
      <path d="M34 28c4-14 48-14 52 0" fill="#3D75FF" />
      <rect x="40" y="18" width="18" height="12" rx="3" fill="#9EC4FF" />
      <rect x="62" y="18" width="18" height="12" rx="3" fill="#9EC4FF" />
      <circle cx="38" cy="54" r="8" fill="#111" />
      <circle cx="38" cy="54" r="3.5" fill="#d1d5db" />
      <circle cx="82" cy="54" r="8" fill="#111" />
      <circle cx="82" cy="54" r="3.5" fill="#d1d5db" />
      <rect x="8" y="36" width="12" height="10" rx="3" fill="#F59E0B" />
    </svg>
  )
}

export function RideShareIcon() {
  return (
    <svg viewBox="0 0 120 72" className="h-[72px] w-auto" aria-hidden="true">
      <rect x="28" y="30" width="70" height="24" rx="10" fill="#2563EB" />
      <path d="M42 30c4-12 38-12 42 0" fill="#60A5FA" />
      <circle cx="48" cy="54" r="7" fill="#111" />
      <circle cx="84" cy="54" r="7" fill="#111" />
      <circle cx="22" cy="42" r="8" fill="#F8D7A4" />
      <rect x="16" y="48" width="12" height="14" rx="4" fill="#1F2937" />
    </svg>
  )
}

export function AirportRentalIcon() {
  return (
    <svg viewBox="0 0 120 72" className="h-[72px] w-auto" aria-hidden="true">
      <path d="M28 22 92 38l-18 6 8 14-10 4-8-14-22 8z" fill="#F59E0B" />
      <rect x="26" y="42" width="68" height="18" rx="8" fill="#2563EB" />
      <circle cx="44" cy="60" r="6" fill="#111" />
      <circle cx="80" cy="60" r="6" fill="#111" />
    </svg>
  )
}

export function HourlyRentalIcon() {
  return (
    <svg viewBox="0 0 120 72" className="h-[72px] w-auto" aria-hidden="true">
      <circle cx="28" cy="22" r="14" fill="#FDE68A" />
      <circle cx="28" cy="22" r="10" fill="#fff" />
      <path d="M28 16v7l5 3" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="34" y="32" width="70" height="22" rx="9" fill="#DBEAFE" />
      <path d="M48 32c4-12 36-12 40 0" fill="#93C5FD" />
      <circle cx="52" cy="54" r="7" fill="#111" />
      <circle cx="88" cy="54" r="7" fill="#111" />
    </svg>
  )
}

export function FeatureIcon({ name }) {
  const wrap = 'grid size-14 place-items-center rounded-full'
  if (name === 'car') {
    return (
      <span className={wrap + ' bg-[#0e52ff]'}>
        <svg viewBox="0 0 24 24" className="size-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 16h14l-1.3-5.4a2 2 0 0 0-2-1.5H8.3a2 2 0 0 0-2 1.5L5 16Z" />
          <path d="M7 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        </svg>
      </span>
    )
  }
  if (name === 'driver') {
    return (
      <span className={wrap + ' bg-[#fdd300]'}>
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="#111" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </span>
    )
  }
  return (
    <span className={wrap + ' bg-[#16a34a]'}>
      <svg viewBox="0 0 24 24" className="size-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12h16M12 4v16" strokeLinecap="round" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    </span>
  )
}

export function PlayIcon() {
  return (
    <span className="grid size-14 place-items-center rounded-full bg-[#ef4444] text-white shadow-lg">
      <svg viewBox="0 0 24 24" className="ml-0.5 size-6" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  )
}
