import { motion } from 'framer-motion'
import { ChevronLeft, ClipboardList, LayoutDashboard, MousePointerClick, Send, Users, X } from 'lucide-react'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 12, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] as const },
})

const CHOICES = ['ก. วิ่ง เดิน นั่ง', 'ข. โรงเรียน ครู หนังสือ', 'ค. สวย ดี เร็ว']

export default function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-amber-300/60 via-amber-200/40 to-yellow-200/50 blur-2xl dark:from-amber-500/20 dark:via-amber-600/10 dark:to-yellow-500/10" />

      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface shadow-2xl shadow-amber-900/10">
        {/* LINE chat header */}
        <div className="flex items-center gap-3 bg-slate-900 px-4 py-3 text-white dark:bg-slate-950">
          <ChevronLeft className="h-5 w-5 opacity-70" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700">
            <Users className="h-4 w-4 text-slate-200" />
          </div>
          <div className="flex-1 leading-tight">
            <p className="text-sm font-semibold">ภาษาไทย ม.2/1</p>
            <p className="text-[11px] text-slate-400">กลุ่ม LINE · 33 สมาชิก</p>
          </div>
          <span className="rounded-full bg-line-green px-2 py-0.5 text-[10px] font-semibold">LINE</span>
        </div>

        {/* Step 1: the link message arrives in LINE chat */}
        <div className="h-[470px] space-y-3 bg-[#EEF2F7] px-4 pt-5 text-sm dark:bg-slate-800/60">
          <motion.div {...rise(0.3)} className="flex gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-tr from-amber-600 via-amber-500 to-yellow-400 text-sm">
              🍮
            </div>
            <div className="min-w-0 flex-1">
              <p className="mb-1 text-[10px] text-muted">Pudding Bot</p>
              <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-surface p-3 shadow-sm">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-brand-strong">
                  <ClipboardList className="h-4 w-4" /> 📢 ประกาศงานใหม่จากครู
                </div>
                <p className="font-semibold text-ink">แบบฝึกหัดบทที่ 3: ชนิดของคำ</p>
                <p className="mt-1 text-xs text-muted">วิชาภาษาไทย ม.2/1 · กำหนดส่ง 5 พ.ย. 23:59 น.</p>
                <div className="relative mt-3 flex items-center justify-center gap-1.5 rounded-full bg-amber-500 py-1.5 text-xs font-bold text-slate-950">
                  เปิดทำงาน
                  <motion.span
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: [0, 1, 1, 0], scale: [0.6, 1, 0.9, 0.9] }}
                    transition={{ duration: 0.9, delay: 1.1, times: [0, 0.3, 0.6, 1] }}
                    className="absolute right-6 -bottom-2"
                  >
                    <MousePointerClick className="h-5 w-5 text-slate-900 drop-shadow dark:text-white" />
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.p {...rise(0.6)} className="text-center text-[10px] text-muted">
            บอทประกาศในกลุ่มอัตโนมัติเมื่อครูสร้างงานใน Web UI
          </motion.p>
        </div>

        {/* Step 2: the LIFF page opens over the chat, where the work is done and submitted */}
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 bottom-0 h-[290px] rounded-t-3xl border-t border-line bg-surface shadow-[0_-12px_30px_-12px_rgb(0_0_0/0.25)]"
        >
          <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-line" />
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
            <div className="leading-tight">
              <p className="text-xs font-bold text-ink">Pudding · Quiz</p>
              <p className="text-[10px] text-muted">LINE LIFF · pudding-p.com</p>
            </div>
            <X className="h-4 w-4 text-muted" />
          </div>
          <div className="space-y-2.5 px-4 py-3 text-sm">
            <div className="flex items-center justify-between text-[11px] text-muted">
              <span>ข้อ 2 จาก 5</span>
              <span className="h-1.5 w-24 overflow-hidden rounded-full bg-subtle">
                <span className="block h-full w-2/5 rounded-full bg-amber-500" />
              </span>
            </div>
            <p className="font-medium text-ink">คำใดเป็นคำนามทั้งหมด?</p>
            <div className="space-y-1.5 text-xs">
              {CHOICES.map((choice, i) => (
                <div
                  key={choice}
                  className={`rounded-xl border px-3 py-1.5 ${
                    i === 1 ? 'border-amber-400 bg-brand-soft/60 font-semibold text-brand' : 'border-line text-body'
                  }`}
                >
                  {choice}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-1.5 rounded-full bg-amber-500 py-2 text-xs font-bold text-slate-950">
              <Send className="h-3.5 w-3.5" /> ส่งคำตอบ
            </div>
          </div>
        </motion.div>
      </div>

      {/* Flow caption */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-[11px] font-medium text-body">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1">
          <Users className="h-3.5 w-3.5 text-line-green" /> 1. บอทประกาศ
        </span>
        <span className="text-muted">→</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-brand-soft px-2.5 py-1 text-brand-strong">
          <ClipboardList className="h-3.5 w-3.5" /> 2. ทำใน LIFF
        </span>
        <span className="text-muted">→</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1">
          <LayoutDashboard className="h-3.5 w-3.5 text-brand" /> 3. ครูตรวจใน Web
        </span>
      </div>
    </div>
  )
}
