import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

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
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
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
