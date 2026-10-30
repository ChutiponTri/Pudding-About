import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { APP_URL, NAV_LINKS } from '../constants.ts'
import { PuddingLogo } from './ui.tsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On the home page, scroll in place instead of routing so repeat clicks still work.
  const handleSectionClick = (id: string) => (e: React.MouseEvent) => {
    setOpen(false)
    if (pathname !== '/') return
    const target = document.getElementById(id)
    if (!target) return
    e.preventDefault()
    target.scrollIntoView({ behavior: 'smooth' })
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-slate-200 bg-white/90 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-white/60 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <PuddingLogo />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-siit-blue">Pudding</span>
            <span className="text-[11px] text-slate-500 sm:text-xs">ระบบจัดการ Assignment & Quiz</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                to={`/#${link.id}`}
                onClick={handleSectionClick(link.id)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-pudding-50 hover:text-siit-blue"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-xl bg-siit-blue px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-siit-blue-dark sm:inline-flex"
          >
            เข้าสู่ระบบการทำงาน
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <ul className="space-y-1 px-4 py-4 sm:px-6">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={`/#${link.id}`}
                    onClick={handleSectionClick(link.id)}
                    className="block rounded-lg px-3 py-2.5 font-medium text-slate-700 hover:bg-pudding-50 hover:text-siit-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-siit-blue px-4 py-3 font-semibold text-white"
                >
                  เข้าสู่ระบบการทำงาน
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
