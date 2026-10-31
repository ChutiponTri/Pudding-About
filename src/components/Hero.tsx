import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { APP_URL } from '../constants.ts'
import HeroMockup from './HeroMockup.tsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-wash via-surface to-canvas">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--dot) 1px, transparent 0)',
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:pt-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="inline-flex items-start gap-2 rounded-2xl border border-brand-line bg-brand-soft/80 dark:bg-brand-soft/60 px-4 py-2 text-xs leading-relaxed font-medium text-brand-strong sm:text-sm">
            <span aria-hidden="true">🎓</span>
            <span>โครงการวิจัยระดับปริญญาเอก - สถาบันเทคโนโลยีนานาชาติสิรินธร (SIIT) มหาวิทยาลัยธรรมศาสตร์</span>
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:leading-[1.25]">
            <span className="bg-linear-to-tr from-amber-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent">Pudding</span>
            <br /> แพลตฟอร์มอัจฉริยะเพื่อการจัดการเรียนรู้ผ่าน{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">LINE</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded bg-amber-400/70" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-body">
            ยกระดับการสั่งการบ้าน ควิซ และการประเมินผลสำหรับครูและนักเรียน สะดวก รวดเร็ว
            เชื่อมต่อผ่าน LINE Official Account และ LINE LIFF
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-amber-500 font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:-translate-y-0.5 hover:bg-amber-400 active:scale-[0.98]"
            >
              เริ่มใช้งานระบบ (สำหรับครู/นักเรียน)
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <a
              href="#research"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 font-bold text-ink transition hover:border-amber-400 hover:text-brand"
            >
              ดูข้อมูลโครงการวิจัย
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6 text-sm">
            <div>
              <dt className="text-muted">เวอร์ชัน</dt>
              <dd className="font-semibold text-ink">v0.0.1</dd>
            </div>
            <div>
              <dt className="text-muted">ช่องทาง</dt>
              <dd className="font-semibold text-ink">LINE OA</dd>
            </div>
            <div>
              <dt className="text-muted">สถาบัน</dt>
              <dd className="font-semibold text-ink">SIIT มธ.</dd>
            </div>
          </dl>
        </motion.div>

        <HeroMockup />
      </div>
    </section>
  )
}
