import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export const EFFECTIVE_DATE = '30 ตุลาคม 2569'

export function LegalLayout({
  title,
  subtitle,
  intro,
  children,
}: {
  title: string
  subtitle: string
  intro: ReactNode
  children: ReactNode
}) {
  return (
    <div className="bg-canvas">
      <div className="border-b border-brand-line bg-gradient-to-b from-brand-wash to-surface">
        <div className="mx-auto max-w-3xl px-4 pt-10 pb-12 sm:px-6">
          <Link to="/#legal" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline">
            <ArrowLeft className="h-4 w-4" /> กลับหน้าหลัก
          </Link>
          <p className="mt-8 text-sm font-semibold tracking-wider text-brand-strong uppercase">{subtitle}</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-muted">มีผลบังคับใช้ตั้งแต่วันที่ {EFFECTIVE_DATE} · Pudding v0.0.1</p>
          <div className="mt-6 text-body">{intro}</div>
        </div>
      </div>
      <article className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6">{children}</article>
    </div>
  )
}

export function LegalClause({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
      <h2 className="flex items-baseline gap-3 text-xl font-bold">
        <span className="text-brand">{number}.</span>
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-body [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </section>
  )
}
