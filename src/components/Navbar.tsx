import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { APP_URL, NAV_LINKS } from '../constants.ts'
import ThemeToggle from './ThemeToggle.tsx'
import { PuddingLogo } from './ui.tsx'

const ctaClass =
  'items-center gap-1.5 rounded-full bg-amber-500 font-bold text-slate-950 shadow-sm shadow-amber-500/30 transition-all hover:bg-amber-400 active:scale-[0.98]'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 pt-[env(safe-area-inset-top)] backdrop-blur-xl transition-colors supports-[backdrop-filter]:bg-white/65 dark:border-slate-800/80 dark:bg-slate-950/75 dark:supports-[backdrop-filter]:bg-slate-950/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)}>
          <PuddingLogo />
          <span className="min-w-0">
            <span className="flex items-center gap-1.5">
              <span className="truncate text-base font-black tracking-tight text-ink sm:text-lg">Pudding</span>
              <span className="hidden rounded-md border border-brand-line bg-brand-soft px-1.5 py-0.5 text-[10px] font-bold text-amber-800 sm:inline-block sm:text-[11px] dark:text-amber-300">
                Platform
              </span>
            </span>
            <span className="line-clamp-1 hidden text-[11px] font-medium text-muted min-[420px]:block">
              ระบบจัดการ Assignment & Quiz
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                to={`/#${link.id}`}
                onClick={handleSectionClick(link.id)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-body transition-colors hover:bg-subtle hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <ThemeToggle />
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden px-4 py-2 text-xs sm:inline-flex sm:text-sm ${ctaClass}`}
          >
            เข้าสู่ระบบการทำงาน
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="cursor-pointer rounded-xl p-2 text-body transition-colors hover:bg-subtle hover:text-ink xl:hidden"
            aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            className="overflow-hidden border-t border-line xl:hidden"
          >
            <ul className="space-y-1 px-3 py-4 sm:px-6">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={`/#${link.id}`}
                    onClick={handleSectionClick(link.id)}
                    className="block rounded-xl px-3 py-2.5 font-medium text-body hover:bg-subtle hover:text-ink"
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
                  className={`flex justify-center px-4 py-3 ${ctaClass}`}
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
