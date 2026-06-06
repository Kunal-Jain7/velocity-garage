import type { Metadata } from 'next'
import CustomCursor from '@/components/ui/CustomCursor'
import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ExperienceStrip from '@/components/sections/ExperienceStrip'
import CollectionSection from '@/components/sections/CollectionSection'
import BrandsSection from '@/components/sections/BrandsSection'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Velocity Garage — Experience Automotive Excellence',
  description:
    'A curated sanctuary of the world\'s most extraordinary machines. Where engineering meets desire, and performance is a philosophy.',
}

export default function HomePage() {
  return (
    <main className="custom-cursor">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <ExperienceStrip />
      <CollectionSection />
      <BrandsSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
