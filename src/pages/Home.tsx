import Features from '../components/Features.tsx'
import Hero from '../components/Hero.tsx'
import HowItWorks from '../components/HowItWorks.tsx'
import LegalSection from '../components/LegalSection.tsx'
import PlatformStatus from '../components/PlatformStatus.tsx'
import Research from '../components/Research.tsx'
import Team from '../components/Team.tsx'

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformStatus />
      <Features />
      <HowItWorks />
      <Research />
      <Team />
      <LegalSection />
    </>
  )
}
