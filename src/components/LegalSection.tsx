import { ArrowRight, FileText, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CONTACT_EMAIL } from '../constants.ts'
import { swipeItem, swipeRow } from './swipe.ts'
import { Reveal, SectionHeading } from './ui.tsx'

const DOCS = [
  {
    to: '/privacy',
    icon: ShieldCheck,
    title: 'นโยบายความเป็นส่วนตัว',
    subtitle: 'Privacy Policy (PDPA)',
    summary: [
      'เก็บ LINE User ID, ชื่อที่แสดง งาน/คำตอบที่ส่ง และข้อมูลการเข้าเรียน',
      'ใช้เพื่อการตรวจงานและพัฒนาโมเดล AI ภายในขอบเขตงานวิจัยของ SIIT เท่านั้น',
      `ขอลบข้อมูลได้ทุกเมื่อทาง ${CONTACT_EMAIL}`,
    ],
  },
  {
    to: '/terms',
    icon: FileText,
    title: 'ข้อกำหนดและเงื่อนไขการใช้งาน',
    subtitle: 'Terms of Service',
    summary: [
      'สิทธิและหน้าที่ของครูและนักเรียนผู้ใช้งาน',
      'ฟีเจอร์ประเมินผลด้วย AI ใน v0.0.1 อยู่ในระยะวิจัย',
      'การใช้งานที่เหมาะสมและข้อจำกัดความรับผิดชอบ',
    ],
  },
]

export default function LegalSection() {
  return (
    <section id="legal" className="scroll-mt-20 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="นโยบายและข้อกำหนด"
          title="ความโปร่งใสและการคุ้มครองข้อมูล"
          description="เราให้ความสำคัญกับข้อมูลส่วนบุคคลของครูและนักเรียน ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)"
        />
        <div className="mx-auto max-w-5xl">
          <div className={`${swipeRow('md')} md:grid-cols-2 md:gap-6`}>
            {DOCS.map(({ to, icon: Icon, title, subtitle, summary }, i) => (
              <Reveal key={to} delay={i * 0.08} className={swipeItem('md')}>
                <Link
                  to={to}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-lg"
                >
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{title}</h3>
                      <p className="text-sm text-muted">{subtitle}</p>
                    </div>
                  </div>
                  <ul className="mt-6 flex-1 space-y-2 text-sm text-body">
                    {summary.map((item) => (
                      <li key={item} className="flex gap-2 break-words">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        <span className="min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand">
                    อ่านฉบับเต็ม
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
