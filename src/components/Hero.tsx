import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { APP_URL } from '../constants.ts'
import HeroMockup from './HeroMockup.tsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pudding-50 via-white to-soft-bg">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)',
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
          <p className="inline-flex items-start gap-2 rounded-2xl border border-pudding-200 bg-pudding-100/80 px-4 py-2 text-xs leading-relaxed font-medium text-caramel sm:text-sm">
            <span aria-hidden="true">🎓</span>
            <span>โครงการวิจัยระดับปริญญาเอก - สถาบันเทคโนโลยีนานาชาติสิรินธร (SIIT) มหาวิทยาลัยธรรมศาสตร์</span>
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.2]">
            <span className="text-siit-blue">Pudding</span> — แพลตฟอร์มอัจฉริยะ
            <br className="hidden sm:block" /> เพื่อการจัดการเรียนรู้ผ่าน{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">LINE</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded bg-pudding-300/70" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            ยกระดับการสั่งการบ้าน ควิซ และการประเมินผลสำหรับครูและนักเรียน สะดวก รวดเร็ว
            เชื่อมต่อผ่าน LINE Official Account
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-siit-blue px-6 py-3.5 font-semibold text-white shadow-lg shadow-siit-blue/20 transition hover:-translate-y-0.5 hover:bg-siit-blue-dark"
            >
              เริ่มใช้งานระบบ (สำหรับครู/นักเรียน)
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <a
              href="#research"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-siit-blue hover:text-siit-blue"
            >
              ดูข้อมูลโครงการวิจัย
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-slate-200 pt-6 text-sm">
            <div>
              <dt className="text-slate-500">เวอร์ชัน</dt>
              <dd className="font-semibold text-slate-900">v0.0.1</dd>
            </div>
            <div>
              <dt className="text-slate-500">ช่องทาง</dt>
              <dd className="font-semibold text-slate-900">LINE OA</dd>
            </div>
            <div>
              <dt className="text-slate-500">สถาบัน</dt>
              <dd className="font-semibold text-slate-900">SIIT มธ.</dd>
            </div>
          </dl>
        </motion.div>

        <HeroMockup />
      </div>
    </section>
  )
}
