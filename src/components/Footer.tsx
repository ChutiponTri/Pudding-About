import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { APP_URL, CONTACT_EMAIL, INSTITUTION } from '../constants.ts'
import { PuddingLogo } from './ui.tsx'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="group inline-flex items-center gap-3">
              <PuddingLogo />
              <span className="text-lg font-black tracking-tight text-white">Pudding</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              แพลตฟอร์มจัดการ Assignment & Quiz ผ่าน LINE ภายใต้โครงการวิจัยระดับปริญญาเอก {INSTITUTION.nameTh}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">ลิงก์</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-amber-400">นโยบายความเป็นส่วนตัว (Privacy Policy)</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-amber-400">ข้อกำหนดการใช้งาน (Terms of Service)</Link>
              </li>
              <li>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
                  เข้าสู่ระบบ (www.pudding-p.com)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">ติดต่อ</h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 text-sm break-all hover:text-amber-400"
            >
              <Mail className="h-4 w-4 shrink-0 text-amber-400" />
              {CONTACT_EMAIL}
            </a>
            <p className="mt-2 text-sm text-slate-400">{INSTITUTION.address}</p>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © 2026 Pudding Project by Chutipon Trirattananurak (SIIT Thammasat University). All rights reserved.
        </p>
      </div>
    </footer>
  )
}
