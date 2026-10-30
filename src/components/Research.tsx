import { FileImage, GraduationCap, Languages } from 'lucide-react'
import { INSTITUTION } from '../constants.ts'
import { Reveal, SectionHeading } from './ui.tsx'

const PILLARS = [
  {
    icon: GraduationCap,
    title: 'วิทยานิพนธ์ระดับปริญญาเอก',
    body: `แพลตฟอร์ม Pudding เป็นส่วนหนึ่งของวิทยานิพนธ์และงานวิจัยระดับปริญญาเอก ณ ${INSTITUTION.nameTh} โดยใช้เป็นเครื่องมือภาคสนามสำหรับเก็บข้อมูลการเรียนการสอนจริง`,
  },
  {
    icon: Languages,
    title: 'Automated Short Answer Grading (ASAG) ภาษาไทย',
    body: 'มุ่งเน้นการวิจัยและพัฒนาอัลกอริทึมตรวจคำตอบสั้นอัตโนมัติสำหรับภาษาไทย ซึ่งมีความท้าทายเฉพาะ เช่น การตัดคำ การใช้คำพ้องความหมาย และรูปแบบการเขียนที่หลากหลาย',
  },
  {
    icon: FileImage,
    title: 'ขยายผลสู่ภาพถ่ายและไฟล์ PDF',
    body: 'ในเฟสถัดไป งานวิจัยจะต่อยอดไปสู่การตรวจแบบฝึกหัดจากไฟล์ภาพถ่ายและ PDF เพื่อรองรับงานเขียนด้วยลายมือและเอกสารที่ใช้ในห้องเรียนจริง',
  },
]

export default function Research() {
  return (
    <section id="research" className="scroll-mt-20 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="โครงงานวิจัย SIIT"
          title="ที่มาของโครงการวิจัย"
          description="การวิจัยที่เชื่อมโยงเทคโนโลยีปัญญาประดิษฐ์เข้ากับการประเมินผลการเรียนรู้ในบริบทของประเทศไทย"
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-amber-600 via-amber-500 to-yellow-400 p-8 text-slate-950 shadow-lg shadow-amber-500/20">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/20" />
              <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-surface/5" />
              <div className="relative">
                <p className="text-sm font-bold text-amber-950/70">Research Objective</p>
                <blockquote className="mt-4 text-xl leading-relaxed font-semibold sm:text-2xl">
                  “ลดภาระการตรวจงานของครู และให้ผลป้อนกลับแก่นักเรียนได้รวดเร็วขึ้น
                  ด้วย AI ที่เข้าใจภาษาไทย”
                </blockquote>
                <div className="mt-8 border-t border-slate-950/15 pt-6 text-sm text-amber-950/80">
                  <p className="font-bold text-slate-950">{INSTITUTION.nameEn}</p>
                  <p className="mt-1">{INSTITUTION.nameTh}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            {PILLARS.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <article className="flex gap-5 rounded-3xl border border-line bg-surface p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand-strong">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-2 text-body">{body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
