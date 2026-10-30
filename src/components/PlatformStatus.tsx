import { BookOpen, BrainCircuit, CalendarCheck, CircleCheck, ClipboardList, Database, ListChecks, Megaphone, Smartphone } from 'lucide-react'
import { PLATFORM_VERSION } from '../constants.ts'
import { Reveal, SectionHeading } from './ui.tsx'

const CAPABILITIES = [
  { icon: BookOpen, label: 'สร้างรายวิชาและห้องเรียน' },
  { icon: ClipboardList, label: 'สร้าง Assignment' },
  { icon: ListChecks, label: 'สร้าง Quiz' },
  { icon: CalendarCheck, label: 'เช็กชื่อเข้าเรียน' },
  { icon: Megaphone, label: 'บอทประกาศงานในกลุ่ม LINE อัตโนมัติ' },
  { icon: Smartphone, label: 'ทำและส่งงานผ่าน LINE LIFF' },
]

const ROADMAP = [
  {
    phase: 'Phase 1',
    version: `v${PLATFORM_VERSION}`,
    title: 'ระบบจัดการงาน & เก็บรวบรวมข้อมูล',
    detail: 'ครูสั่งงาน ควิซ และเช็กชื่อผ่าน Web UI บอทประกาศในกลุ่ม LINE นักเรียนทำผ่าน LIFF พร้อมเก็บข้อมูลคำตอบเพื่อการวิจัย',
    active: true,
  },
  {
    phase: 'Phase 2',
    version: 'ถัดไป',
    title: 'ระบบตรวจคำตอบสั้นภาษาไทยด้วย AI',
    detail: 'นำโมเดล ASAG ที่พัฒนาจากข้อมูล Phase 1 มาช่วยครูตรวจคำตอบข้อเขียน',
    active: false,
  },
  {
    phase: 'Phase 3',
    version: 'อนาคต',
    title: 'ตรวจแบบฝึกหัดจากภาพถ่าย / PDF',
    detail: 'ขยายผลสู่การอ่านและตรวจลายมือหรือเอกสารที่นักเรียนอัปโหลด',
    active: false,
  },
]

export default function PlatformStatus() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="เกี่ยวกับโครงการ"
          title="สถานะแพลตฟอร์มและแผนการพัฒนา"
          description="Pudding พัฒนาขึ้นเพื่อช่วยครูและนักเรียนจัดการงานและแบบทดสอบผ่าน LINE ควบคู่กับการเก็บข้อมูลเพื่อพัฒนา AI ตรวจข้อสอบภาษาไทย"
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <article className="h-full rounded-3xl border border-brand-line bg-gradient-to-br from-brand-wash to-surface p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-slate-950">
                  Version {PLATFORM_VERSION}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/50 dark:text-emerald-300">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  Currently Active (Phase 1: Data Collection)
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">ความสามารถที่เปิดให้ใช้งานแล้ว</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {CAPABILITIES.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4">
                    <Icon className="h-5 w-5 shrink-0 text-brand" />
                    <span className="text-sm font-medium text-ink">{label}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-4 rounded-2xl border border-brand-line bg-brand-soft/50 p-5">
                <Database className="mt-1 h-6 w-6 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-brand">สถานะระบบ AI</p>
                  <p className="mt-1 text-sm text-body">
                    ขณะนี้ระบบอยู่ในช่วงประมวลผลและเก็บรวบรวมข้อมูลคำตอบ (Data Collection)
                    เพื่อนำไปเทรนอัลกอริทึม Machine Learning / Deep Learning
                    สำหรับระบบตรวจข้อสอบภาษาไทยอัตโนมัติในเวอร์ชันถัดไป
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="relative h-full space-y-6 rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-8">
              {ROADMAP.map((step, i) => (
                <li key={step.phase} className="relative flex gap-4">
                  {i < ROADMAP.length - 1 && (
                    <span className="absolute top-10 left-[19px] h-[calc(100%-1rem)] w-px bg-line" />
                  )}
                  <span
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      step.active ? 'bg-emerald-500 text-white' : 'bg-subtle text-muted'
                    }`}
                  >
                    {step.active ? <CircleCheck className="h-5 w-5" /> : <BrainCircuit className="h-5 w-5" />}
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-muted uppercase">
                      {step.phase} · {step.version}
                    </p>
                    <p className={`font-semibold ${step.active ? 'text-ink' : 'text-body'}`}>{step.title}</p>
                    <p className="mt-1 text-sm text-muted">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
