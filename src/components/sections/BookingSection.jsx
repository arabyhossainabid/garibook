import { useState } from 'react'

const cars = [
  ['Sedan Premium', '4 Seats'],
  ['Sedan', '4 Seats'],
  ['Noah', '7 Seats'],
  ['HiAce', '11 Seats'],
  ['Sedan Economy', '4 Seats'],
]

const airports = [
  'Hazrat Shahjalal International Airport, Dhaka (হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর, ঢাকা)',
  'Shah Amanat International Airport, Chattogram (শাহ আমানত আন্তর্জাতিক বিমানবন্দর, চট্টগ্রাম)',
]

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 12h16m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function FieldIcon({ type }) {
  const props = { viewBox: '0 0 24 24', className: 'size-4 shrink-0', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }
  if (type === 'car') return <svg {...props}><path d="M5 16h14l-1.2-5.2a2 2 0 0 0-2-1.55H8.2a2 2 0 0 0-2 1.55L5 16Z" /><path d="M4 16v2m16-2v2M7.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" strokeLinecap="round" /></svg>
  if (type === 'pickup') return <svg {...props} className="size-4 shrink-0 text-[#ffd000]" fill="currentColor"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.3" fill="white" stroke="white" /></svg>
  if (type === 'pin') return <svg {...props} className="size-4 shrink-0 text-[#1c58f9]" fill="currentColor"><path d="M12 21s6-5.17 6-11a6 6 0 1 0-12 0c0 5.83 6 11 6 11Z" /><circle cx="12" cy="10" r="2.1" fill="white" stroke="white" /></svg>
  if (type === 'calendar') return <svg {...props}><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4m8-4v4M4 10h16M8 14h.01M12 14h.01M16 14h.01" strokeLinecap="round" /></svg>
  return <svg {...props}><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function Field({ icon, label, children, className = '' }) {
  const iconType = label === 'Choose a Car' ? 'car' : label.includes('Pickup') && !label.includes('Date') ? 'pickup' : label.includes('Drop-off') ? 'pin' : label.includes('Hours') ? 'clock' : 'calendar'

  return <div className={'min-w-0 border-b border-[#e7e7e7] px-6 py-4 md:border-b-0 md:border-r xl:px-8 xl:py-1 ' + className}>
    <p className="mb-2 flex items-center gap-1.5 text-[17px] font-semibold leading-none tracking-[-0.2px] text-[#171717]"><FieldIcon type={iconType} />{label} <b className="text-[#ff4242]">*</b></p>
    {children}
  </div>
}

function RadioOption({ label, active, onClick }) {
  return <button type="button" onClick={onClick} className={'flex items-center gap-2 rounded-lg px-5 py-3 text-[17px] font-semibold transition ' + (active ? 'bg-[#f0f1ff]' : 'hover:bg-slate-50')}><span className={'size-[24px] rounded-full border-[5px] ' + (active ? 'border-[#1c58f9] bg-white' : 'border-[#e5e7eb] bg-[#e5e7eb]')} />{label}</button>
}

function TextInput({ placeholder }) {
  return <input aria-label={placeholder} placeholder={placeholder} className="w-full bg-transparent text-[15px] font-medium text-[#171717] outline-none placeholder:text-[#a4a4a4]" />
}

function AirportMenu({ onSelect }) {
  return <div className="absolute left-0 top-[78px] z-20 max-h-[190px] w-full overflow-y-auto border border-[#1c58f9] bg-white shadow-xl">{airports.map((name) => <button type="button" key={name} onClick={() => onSelect(name)} className="block w-full border-b border-slate-100 px-3 py-2 text-left text-[15px] leading-5 text-slate-700 hover:bg-[#dbeafe]">{name}</button>)}</div>
}

export default function BookingSection() {
  const [tab, setTab] = useState('car')
  const [tripType, setTripType] = useState('One Way')
  const [airportMode, setAirportMode] = useState('From Airport')
  const [carOpen, setCarOpen] = useState(false)
  const [airportOpen, setAirportOpen] = useState(false)
  const [car, setCar] = useState('')
  const [airport, setAirport] = useState('')
  const [hours, setHours] = useState(2)
  const carRental = tab === 'car'
  const fromAirport = airportMode === 'From Airport'

  const changeTab = (nextTab) => {
    setTab(nextTab)
    setCarOpen(false)
    setAirportOpen(false)
  }

  const setRoute = (route) => {
    setTripType(route)
    setCarOpen(false)
  }

  const mainFields = carRental
    ? [['🚗', 'Choose a Car'], ['●', 'Pickup Location'], ['📍', 'Drop-off Location'], ['▣', 'Pickup Date & Time']]
    : fromAirport
      ? [['🚗', 'Choose a Car'], ['●', 'Pickup Airport'], ['📍', 'Drop-off Location'], ['▣', 'Pickup Date & Time']]
      : [['🚗', 'Choose a Car'], ['●', 'Pickup Location'], ['📍', 'Drop-off Airport'], ['▣', 'Pickup Date & Time']]

  return <section className="relative z-10 bg-gradient-to-b from-white from-[28%] to-[#1048df] to-[28%] pb-14 pt-4 sm:pt-8 lg:pb-0">
    <div className="mx-auto max-w-[1390px] px-3 sm:px-8 xl:px-0">
      <div className="relative pt-[72px]">
        <div className="absolute left-0 top-0 flex rounded-t-xl bg-white p-3 shadow-[0_-14px_30px_rgba(0,0,0,0.025)]">
          <button type="button" onClick={() => changeTab('car')} className={'rounded-lg px-5 py-3 text-[15px] font-semibold transition sm:px-7 sm:text-[17px] ' + (carRental ? 'bg-[#151515] text-white' : 'text-[#151515] hover:bg-slate-50')}>Car Rental</button>
          <button type="button" onClick={() => changeTab('airport')} className={'rounded-lg px-5 py-3 text-[15px] font-semibold transition sm:px-7 sm:text-[17px] ' + (!carRental ? 'bg-[#151515] text-white' : 'text-[#151515] hover:bg-slate-50')}>Airport Rental</button>
        </div>

        <form onSubmit={(event) => event.preventDefault()} className="rounded-b-xl rounded-tr-xl bg-white px-7 py-10 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:px-9 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <Field icon={mainFields[0][0]} label={mainFields[0][1]} className="relative">
              <button type="button" onClick={() => { setCarOpen(!carOpen); setAirportOpen(false) }} className="flex w-full items-center justify-between text-left text-[15px] font-medium text-[#a4a4a4]">{car || 'Select Car Type'} <span className="text-2xl text-[#171717]">⌄</span></button>
              {carOpen && <div className="absolute left-0 top-[78px] z-20 max-h-[250px] w-full overflow-y-auto rounded-b-lg border border-slate-200 bg-white p-3 shadow-xl">
                {cars.map(([name, seats]) => <button type="button" key={name} onClick={() => { setCar(name); setCarOpen(false) }} className="mb-2 flex w-full items-center gap-3 rounded-lg bg-[#eef6ff] px-4 py-3 text-left transition hover:bg-[#dbeafe]"><span className="text-2xl">🚙</span><span><b className="block text-[18px]">{name}</b><small className="text-[#8d8d8d]">{seats}</small></span></button>)}
              </div>}
            </Field>

            <Field icon={mainFields[1][0]} label={mainFields[1][1]} className="relative">
              {carRental || !fromAirport ? <TextInput placeholder="Enter Pickup Location" /> : <><button type="button" onClick={() => { setAirportOpen(!airportOpen); setCarOpen(false) }} className="flex w-full items-center justify-between text-left text-[15px] font-medium text-[#a4a4a4]">{airport || 'Select Airport'} <span className="text-xl text-[#171717]">⌄</span></button>{airportOpen && <AirportMenu onSelect={(name) => { setAirport(name); setAirportOpen(false) }} />}</>}
            </Field>

            <Field icon={mainFields[2][0]} label={mainFields[2][1]} className="relative">
              {carRental || fromAirport ? <TextInput placeholder="Enter Drop-off Location" /> : <><button type="button" onClick={() => { setAirportOpen(!airportOpen); setCarOpen(false) }} className="flex w-full items-center justify-between rounded-md text-left text-[15px] font-medium text-[#a4a4a4]">{airport || 'Select Airport'} <span className="text-xl text-[#171717]">⌄</span></button>{airportOpen && <AirportMenu onSelect={(name) => { setAirport(name); setAirportOpen(false) }} />}</>}
            </Field>

            <Field icon={mainFields[3][0]} label={mainFields[3][1]} className="border-r-0"><TextInput placeholder="MM/DD/YYYY 00:00 PM" /></Field>

            {carRental && tripType === 'Round Way' && <Field icon="▣" label="Return Date & Time" className="border-r-0 xl:col-span-1"><TextInput placeholder="MM/DD/YYYY 00:00 PM" /></Field>}
            {carRental && tripType === 'Hourly' && <Field icon="◷" label="Select Hours" className="border-r-0 xl:col-span-1"><div className="flex items-center justify-between rounded-lg border border-slate-300 p-2 text-[16px]"><button type="button" onClick={() => setHours(Math.max(2, hours - 1))} className="size-8 rounded-md border border-slate-400">−</button>{hours} hours<button type="button" onClick={() => setHours(hours + 1)} className="size-8 rounded-md border border-slate-400">+</button></div><small className="mt-2 block text-[#ff5a5a]">Minimum 2 hours is required for an hourly trip.</small></Field>}
          </div>

          <div className="mt-9 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-1">
              {carRental ? ['One Way', 'Round Way', 'Hourly'].map((route) => <RadioOption key={route} label={route} active={tripType === route} onClick={() => setRoute(route)} />) : ['From Airport', 'From Home'].map((route) => <RadioOption key={route} label={route} active={airportMode === route} onClick={() => { setAirportMode(route); setAirportOpen(false) }} />)}
            </div>
            <button type="submit" className="flex h-[73px] w-full max-w-[276px] items-center justify-between rounded-[14px] bg-[#1c58f9] px-7 text-[19px] font-semibold text-white transition hover:-translate-y-1 hover:bg-[#1048df] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c58f9]">Continue <ArrowIcon /></button>
          </div>
        </form>
      </div>
    </div>
  </section>
}
