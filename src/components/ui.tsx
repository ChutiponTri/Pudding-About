import { motion, type Variants } from 'framer-motion'
import { createContext, useContext, useSyncExternalStore, type ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

const BREAKPOINT_PX = { sm: 640, md: 768, lg: 1024 }

function useMinWidth(px: number) {
  const query = `(min-width: ${px}px)`
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
  )
}

const GRID_ITEM: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

// On mobile, cards slide in from the right and overshoot slightly, hinting that the row swipes.
const SWIPE_ITEM: Variants = {
  hidden: { opacity: 0, x: 72 },
  show: {
    opacity: 1,
    x: [72, -10, 0],
    transition: { duration: 0.9, ease: EASE, times: [0, 0.65, 1], opacity: { duration: 0.4 } },
  },
}

const RevealRowContext = createContext<Variants>(GRID_ITEM)

/*
 * Reveals a swipe row as one unit. Per-card Reveals would keep the peeking next card hidden on
 * mobile (it never counts as "in view"), so the row triggers once and staggers its RevealItems.
 */
export function RevealRow({
  bp,
  children,
  className,
}: {
  bp: keyof typeof BREAKPOINT_PX
  children: ReactNode
  className?: string
}) {
  const isGrid = useMinWidth(BREAKPOINT_PX[bp])
  return (
    <RevealRowContext.Provider value={isGrid ? GRID_ITEM : SWIPE_ITEM}>
      <motion.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ show: { transition: { staggerChildren: isGrid ? 0.08 : 0.12 } } }}
      >
        {children}
      </motion.div>
    </RevealRowContext.Provider>
  )
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={useContext(RevealRowContext)}>
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold tracking-wider text-brand-strong uppercase">{eyebrow}</p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-balance text-body">{description}</p>}
    </Reveal>
  )
}

export function PuddingLogo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const box = size === 'lg' ? 'h-11 w-11 text-2xl' : 'h-9 w-9 text-xl sm:h-10 sm:w-10 sm:text-2xl'
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-2xl bg-linear-to-tr from-amber-600 via-amber-500 to-yellow-400 shadow-md shadow-amber-500/25 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-3 ${box}`}
    >
      <span className="transition-transform select-none group-hover:scale-110">🍮</span>
    </span>
  )
}
