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
      <p className="mb-3 text-sm font-semibold tracking-wider text-caramel uppercase">{eyebrow}</p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-slate-600">{description}</p>}
    </Reveal>
  )
}

export function PuddingLogo({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#1E3A8A" />
      <path d="M14 46h36l-4-22a6 6 0 0 0-6-5H24a6 6 0 0 0-6 5z" fill="#FCD34D" />
      <path
        d="M18 24a6 6 0 0 1 6-5h16a6 6 0 0 1 6 5l.6 3.4c-3 2.4-5.6-.6-8.2 1.2-2.6 1.8-4.8-1.6-7.4.4-2.6 2-5-1.6-7.6.2-2.2 1.5-4.6.4-6-1.6z"
        fill="#92400E"
      />
      <rect x="10" y="45" width="44" height="5" rx="2.5" fill="#FFFBEB" />
      <circle cx="32" cy="15" r="3" fill="#DC2626" />
    </svg>
  )
}
