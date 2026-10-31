import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer.tsx'
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import TermsOfService from './pages/TermsOfService.tsx'

const PAGE_TITLES: Record<string, string> = {
  '/privacy': 'นโยบายความเป็นส่วนตัว | Pudding',
  '/terms': 'ข้อกำหนดและเงื่อนไขการใช้งาน | Pudding',
}
const DEFAULT_TITLE = 'Pudding - แพลตฟอร์มอัจฉริยะเพื่อการเรียนรู้ | SIIT มหาวิทยาลัยธรรมศาสตร์'

function useRouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? DEFAULT_TITLE
  }, [pathname])

  // Jump to the hashed section (e.g. /#research), otherwise start each page at the top.
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}

export default function App() {
  useRouteEffects()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
