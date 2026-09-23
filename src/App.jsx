import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import FloatingButtons from './components/layout/FloatingButtons.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import BookingSection from './components/sections/BookingSection.jsx'
import StatsSection from './components/sections/StatsSection.jsx'
import ServicesSection from './components/sections/ServicesSection.jsx'
import FreedomSection from './components/sections/FreedomSection.jsx'
import PeopleTogetherSection from './components/sections/PeopleTogetherSection.jsx'
import BookingArrivalSection from './components/sections/BookingArrivalSection.jsx'
import SmartDriverSection from './components/sections/SmartDriverSection.jsx'
import NewsSection from './components/sections/NewsSection.jsx'
import TestimonialsSection from './components/sections/TestimonialsSection.jsx'
import BlogsSection from './components/sections/BlogsSection.jsx'
import DownloadAppSection from './components/sections/DownloadAppSection.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BookingSection />
        <StatsSection />
        <ServicesSection />
        <FreedomSection />
        <PeopleTogetherSection />
        <BookingArrivalSection />
        <SmartDriverSection />
        <NewsSection />
        <TestimonialsSection />
        <BlogsSection />
        <DownloadAppSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
