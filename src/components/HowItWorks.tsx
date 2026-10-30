import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  FilePlus2,
  Link2,
  LogIn,
  Megaphone,
  RefreshCw,
  Smartphone,
  UserCheck,
  UserPlus,
  type LucideIcon,
} from 'lucide-react'
import { Fragment } from 'react'
import { Reveal, SectionHeading } from './ui.tsx'

type Place = 'LINE' | 'กลุ่ม LINE' | 'Web UI' | 'LINE LIFF'

type Step = { icon: LucideIcon; place: Place[]; title: string; body: string; actor?: string }

const PLACE_STYLES: Record<Place, string> = {
  LINE: 'bg-line-green/10 text-green-700 dark:text-green-400',
  'กลุ่ม LINE': 'bg-line-green/10 text-green-700 dark:text-green-400',
  'Web UI': 'bg-brand-soft text-brand-strong',
  'LINE LIFF': 'bg-subtle text-ink',
}

const SETUP: Step[] = [
  { icon: UserPlus, place: ['LINE'], title: 'เพิ่มเพื่อน Pudding Bot', body: 'ครูเพิ่ม LINE Official Account ของ Pudding เป็นเพื่อน' },
  { icon: LogIn, place: ['Web UI'], title: 'ลงทะเบียนบนเว็บไซต์', body: 'สมัครและเข้าสู่ระบบที่ www.pudding-p.com' },
  { icon: BookOpen, place: ['Web UI'], title: 'สร้างรายวิชาและห้องเรียน', body: 'สร้างรายวิชา (Course) และห้องเรียน (Classroom) ของแต่ละชั้นเรียน' },
  {
    icon: Link2,
    place: ['กลุ่ม LINE', 'Web UI'],
    title: 'เชื่อมห้องเรียนกับกลุ่ม LINE',
    body: 'เชิญบอทเข้ากลุ่ม LINE ของชั้นเรียน แล้วเชื่อมกลุ่มกับห้องเรียนใน Web UI',
  },
]

const LOOP: Step[] = [
  { icon: FilePlus2, actor: 'ครู', place: ['Web UI'], title: 'สร้างงาน', body: 'สร้าง Assignment, Quiz หรือเช็กชื่อเข้าเรียน' },
  { icon: Megaphone, actor: 'อัตโนมัติ', place: ['กลุ่ม LINE'], title: 'บอทประกาศในกลุ่ม', body: 'Pudding Bot ส่งประกาศพร้อมปุ่มเข้าทำงานในกลุ่ม LINE ทันที' },
  { icon: Smartphone, actor: 'นักเรียน', place: ['LINE LIFF'], title: 'ทำและส่งงาน', body: 'กดปุ่มจากบอทเพื่อทำงาน ควิซ หรือเช็กชื่อในหน้า LIFF' },
  { icon: ClipboardCheck, actor: 'ครู', place: ['Web UI'], title: 'ตรวจและรับผล', body: 'คำตอบและการเข้าเรียนส่งกลับมาที่ Web UI ให้ครูประเมินผล' },
]

function Places({ places }: { places: Place[] }) {
  return (
    <span className="flex flex-wrap gap-1">
      {places.map((p) => (
        <span key={p} className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${PLACE_STYLES[p]}`}>
          {p}
        </span>
      ))}
    </span>
  )
}

function PhaseTitle({ n, title, who }: { n: number; title: string; who: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 font-black text-slate-950">{n}</span>
      <div className="leading-tight">
        <h3 className="font-bold">{title}</h3>
        <p className="text-xs text-muted">{who}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ขั้นตอนการใช้งาน"
          title="จาก Web UI สู่กลุ่ม LINE และกลับมาที่ครู"
          description="ครูจัดการทุกอย่างบนเว็บไซต์ ส่วนนักเรียนรับประกาศและทำงานได้ภายในแอป LINE ที่ใช้อยู่ทุกวัน"
        />

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <article className="h-full rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-8">
              <PhaseTitle n={1} title="ตั้งค่าห้องเรียน" who="ครูทำครั้งแรกครั้งเดียว" />
              <ol className="grid gap-4 sm:grid-cols-2">
                {SETUP.map(({ icon: Icon, place, title, body }, i) => (
                  <li key={title} className="flex gap-3 rounded-2xl bg-canvas p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-brand shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-muted">ขั้นที่ {i + 1}</p>
                      <p className="font-semibold text-ink">{title}</p>
                      <p className="mt-1 text-sm text-body">{body}</p>
                      <div className="mt-2">
                        <Places places={place} />
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="flex h-full flex-col rounded-3xl border border-brand-line bg-gradient-to-br from-brand-wash to-surface p-6 shadow-sm sm:p-8">
              <PhaseTitle n={2} title="นักเรียนเข้าห้องเรียน" who="นักเรียนทำครั้งเดียว" />
              <div className="flex flex-1 flex-col justify-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-tr from-amber-600 via-amber-500 to-yellow-400 text-white shadow-md shadow-amber-500/25">
                  <UserCheck className="h-6 w-6" />
                </div>
                <p className="text-lg font-semibold text-ink">กดลิงก์ LIFF ที่บอทส่งในกลุ่ม LINE</p>
                <p className="text-body">ระบบจะเพิ่มนักเรียนเข้าห้องเรียนใน Web UI ให้โดยอัตโนมัติ ครูไม่ต้องเพิ่มรายชื่อเอง</p>
                <Places places={['กลุ่ม LINE', 'LINE LIFF']} />
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <article className="mt-6 rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <PhaseTitle n={3} title="สั่งงานและส่งงาน" who="ครูและนักเรียน · ใช้งานประจำ" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-subtle px-3 py-1 text-xs font-medium text-body">
                <RefreshCw className="h-3.5 w-3.5 text-brand" /> วนซ้ำทุกครั้งที่สั่งงาน
              </span>
            </div>
            <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
              {LOOP.map(({ icon: Icon, actor, place, title, body }, i) => (
                <Fragment key={title}>
                  {i > 0 && (
                    <li aria-hidden="true" className="flex justify-center text-amber-500">
                      <ArrowDown className="h-5 w-5 lg:hidden" />
                      <ArrowRight className="hidden h-5 w-5 lg:block" />
                    </li>
                  )}
                  <li className="flex-1 rounded-2xl bg-canvas p-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-brand shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-muted">{actor}</span>
                    </div>
                    <p className="mt-3 font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-sm text-body">{body}</p>
                    <div className="mt-2">
                      <Places places={place} />
                    </div>
                  </li>
                </Fragment>
              ))}
            </ol>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
