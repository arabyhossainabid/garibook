import logo from '../../assets/icons/gaibook-logo.svg'
import { PrimaryButton } from '../ui/Buttons.jsx'
import PlaceholderImage from '../ui/PlaceholderImage.jsx'

const appLink = 'https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page'

const columns = [
  {
    title: 'garibook',
    links: [
      ['About Us', '/about-us'],
      ['Customer Reviews', '/passenger-speak'],
      ['Career', '/'],
      ['Newsroom', '/newsrooms'],
      ['Garibook Map', 'https://map.garibook.com/'],
    ],
  },
  {
    title: 'Services',
    links: [
      ['Intercity Rental', '/'],
      ['Airport Pick and Drop', '/'],
      ['Hourly Rental', '/'],
      ['Vehicle Management System (VMS)', '/vehicle-management-system'],
    ],
  },
  {
    title: 'Become Our Partner',
    links: [
      ['Become a Smart Driver', '/earn-with-garibook'],
      ['Become a member of Garibook Club', '/club'],
      ['Garibook Business for Corporate Travel', '/business'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="page-container py-[70px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h6 className="mb-5 text-[18px] font-semibold">{column.title}</h6>
              <ul className="space-y-3">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-[16px] text-white/80 transition hover:text-white">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h6 className="mb-5 text-[18px] font-semibold">Contacts</h6>
            <ul className="space-y-3 text-[16px] text-white/80">
              <li><a href="mailto:support@garibook.com" className="hover:text-white">support@garibook.com</a></li>
              <li>Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road- 144, Gulshan, Dhaka-1212</li>
              <li><a href="tel:09678112233" className="hover:text-white">+88 09 678 11 22 33</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-[36px] font-bold leading-[1.2] sm:text-[44px]">
              Download Our<br />Garibook Mobile App
            </h2>
            <PrimaryButton href={appLink} className="mt-7">Download App</PrimaryButton>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[22px] font-bold">A Product By</p>
              <PlaceholderImage className="mt-4 h-16 w-16 rounded-full" imgClassName="h-full w-full object-cover" />
              <p className="mt-3 font-semibold">NRB Solution Ltd.</p>
              <a href="/" className="mt-1 inline-flex items-center gap-1 font-semibold text-[#fdd300]">Visit Website →</a>
            </div>
            <div>
              <p className="text-[22px] font-bold">Powered By</p>
              <PlaceholderImage className="mt-4 h-12 w-24 rounded-md" />
              <p className="mt-3 font-semibold">Link 3 Technologies</p>
              <a href="/" className="mt-1 inline-flex items-center gap-1 font-semibold text-[#fdd300]">Visit Website →</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="page-container flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            <img src={logo} alt="Garibook" className="h-9 w-auto brightness-0 invert" />
            <a href="/" className="text-white/80 hover:text-white">Terms & Conditions</a>
            <a href="/" className="text-white/80 hover:text-white">Privacy Policy</a>
          </div>
          <p className="text-white/70">Trade license number: TRAD/DNCC/013806/2024</p>
          <p className="text-white/70">© 2026 Garibook.com</p>
        </div>
      </div>

      <div className="overflow-hidden bg-white">
        <div className="flex w-max gap-3 px-4 py-3">
          {Array.from({ length: 28 }).map((_, index) => (
            <PlaceholderImage key={index} className="h-8 w-14 rounded-md border border-slate-200" />
          ))}
        </div>
      </div>
    </footer>
  )
}
