import { motion } from 'framer-motion'
import { CheckCheck, ChevronLeft, ClipboardList, FileCheck2, ListChecks } from 'lucide-react'

const bubble = (delay: number) => ({
  initial: { opacity: 0, y: 12, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-pudding-200/70 via-pudding-100/40 to-siit-blue-light/60 blur-2xl" />

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-siit-blue/10">
        {/* Chat header */}
        <div className="flex items-center gap-3 bg-siit-blue-dark px-4 py-3 text-white">
          <ChevronLeft className="h-5 w-5 opacity-70" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pudding-300 text-base">🍮</div>
          <div className="flex-1 leading-tight">
            <p className="text-sm font-semibold">Pudding</p>
            <p className="text-[11px] text-blue-200">LINE Official Account</p>
          </div>
          <span className="rounded-full bg-line-green px-2 py-0.5 text-[10px] font-semibold">LINE</span>
        </div>

        {/* Chat body */}
        <div className="space-y-3 bg-[#EEF2F7] px-4 py-5 text-sm">
          <motion.div {...bubble(0.3)} className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white p-3 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-caramel">
              <ClipboardList className="h-4 w-4" /> Assignment ใหม่
            </div>
            <p className="font-semibold text-slate-900">แบบฝึกหัดบทที่ 3: การอ่านจับใจความ</p>
            <p className="mt-1 text-xs text-slate-500">วิชาภาษาไทย ม.2/1 · กำหนดส่ง 5 พ.ย. 23:59 น.</p>
            <div className="mt-3 rounded-lg bg-siit-blue py-1.5 text-center text-xs font-semibold text-white">
              เปิดดูงาน
            </div>
          </motion.div>

          <motion.div {...bubble(0.9)} className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-line-green p-3 text-white shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <FileCheck2 className="h-4 w-4" /> ส่งงานเรียบร้อย
            </div>
            <p className="mt-1 text-xs opacity-90">คำตอบ 5 ข้อ · ส่งเมื่อ 20:14 น.</p>
            <div className="mt-1 flex justify-end">
              <CheckCheck className="h-3.5 w-3.5 opacity-80" />
            </div>
          </motion.div>

          <motion.div {...bubble(1.5)} className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white p-3 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-siit-blue">
              <ListChecks className="h-4 w-4" /> Quiz ประจำสัปดาห์
            </div>
            <p className="text-slate-800">คำใดเป็นคำนามทั้งหมด?</p>
            <div className="mt-2 space-y-1.5 text-xs">
              {['ก. วิ่ง เดิน นั่ง', 'ข. โรงเรียน ครู หนังสือ', 'ค. สวย ดี เร็ว'].map((choice, i) => (
                <div
                  key={choice}
                  className={`rounded-lg border px-2.5 py-1.5 ${
                    i === 1 ? 'border-siit-blue bg-siit-blue-light/60 font-semibold text-siit-blue' : 'border-slate-200'
                  }`}
                >
                  {choice}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="absolute -right-3 bottom-10 hidden rounded-2xl border border-pudding-200 bg-white px-4 py-3 shadow-lg sm:block lg:-right-10"
      >
        <p className="text-[11px] text-slate-500">ส่งงานแล้ววันนี้</p>
        <p className="text-xl font-bold text-siit-blue">
          28<span className="text-sm font-medium text-slate-400"> / 32 คน</span>
        </p>
      </motion.div>
    </div>
  )
}
