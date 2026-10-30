import { BrainCircuit, ClipboardList, ListChecks } from 'lucide-react'
import { swipeItem, swipeRow } from './swipe.ts'
import { Reveal, SectionHeading } from './ui.tsx'

const FEATURES = [
  {
    icon: ClipboardList,
    title: 'Easy Assignment Management',
    description: 'สร้างงานใน Web UI แล้วบอทประกาศในกลุ่ม LINE ให้อัตโนมัติ ไม่ต้องโหลดแอปเพิ่ม',
    points: [
      'ครูสร้างงาน กำหนดวันส่ง และเช็กชื่อเข้าเรียนได้ในไม่กี่ขั้นตอน',
      'นักเรียนกดปุ่มจากบอทในกลุ่ม แล้วทำและส่งงานผ่าน LINE LIFF',
    ],
    accent: 'bg-brand-soft text-brand-strong',
  },
  {
    icon: ListChecks,
    title: 'Interactive Quiz System',
    description: 'ทำแบบทดสอบและประเมินผลได้อย่างรวดเร็ว',
    points: ['ทำแบบทดสอบในหน้า LIFF ภายในแอป LINE รองรับปรนัยและคำตอบสั้น', 'คำตอบส่งกลับไปที่ Web UI ให้ครูตรวจและให้คะแนน'],
    accent: 'bg-linear-to-tr from-amber-600 via-amber-500 to-yellow-400 text-white',
  },
  {
    icon: BrainCircuit,
    title: 'Research-Backed AI',
    badge: 'Under Development',
    description: 'เตรียมพร้อมรองรับการตรวจข้อสอบข้อเขียนอัตโนมัติด้วย AI',
    points: ['พัฒนาจากงานวิจัย ASAG ภาษาไทย', 'ออกแบบให้ครูเป็นผู้ตัดสินผลขั้นสุดท้าย'],
    accent: 'bg-slate-900 text-amber-400 dark:bg-slate-800',
  },
]

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ฟีเจอร์"
          title="เครื่องมือการเรียนรู้ที่อยู่ใน LINE ของคุณ"
          description="ออกแบบให้ครูและนักเรียนใช้งานได้ทันทีผ่านช่องทางที่คุ้นเคย"
        />
        <div className={`${swipeRow('md')} md:grid-cols-3 md:gap-6`}>
          {FEATURES.map(({ icon: Icon, title, badge, description, points, accent }, i) => (
            <Reveal key={title} delay={i * 0.08} className={swipeItem('md')}>
              <article className="group h-full rounded-3xl border border-line bg-canvas p-7 transition hover:-translate-y-1 hover:border-amber-300 dark:hover:border-amber-700 hover:bg-surface hover:shadow-xl hover:shadow-amber-500/10">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                {badge && (
                  <span className="mt-2 inline-block rounded-full border border-brand-line bg-brand-soft px-2.5 py-0.5 text-xs font-bold text-brand-strong">
                    {badge}
                  </span>
                )}
                <p className="mt-3 text-body">{description}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm text-body">
                  {points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
