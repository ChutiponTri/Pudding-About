import { Building2, Clock, Mail, MapPin } from 'lucide-react'
import { Fragment } from 'react'
import { INSTITUTION, TEAM } from '../constants.ts'
import { swipeItem, swipeRow } from './swipe.ts'
import { Reveal, SectionHeading } from './ui.tsx'

export default function Team() {
  return (
    <section id="team" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ทีมผู้พัฒนา"
          title="ทีมวิจัยและหน่วยงานต้นสังกัด"
          description="ผู้รับผิดชอบโครงการ อาจารย์ที่ปรึกษา และผู้ช่วยโครงการจากสถานศึกษาที่ร่วมทดลองใช้ระบบ"
        />

        <div className={`${swipeRow('lg')} lg:grid-cols-3 lg:gap-6`}>
          {TEAM.map((member, i) => (
            <Reveal key={member.email} delay={i * 0.08} className={swipeItem('lg')}>
              <article
                className={`flex h-full flex-col rounded-3xl border bg-surface p-7 shadow-sm ${
                  member.primary ? 'border-brand-line ring-1 ring-amber-400/30' : 'border-line'
                }`}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={member.photo}
                    alt={`${member.nameTh} (${member.nameEn})`}
                    width={400}
                    height={500}
                    loading="lazy"
                    className={`aspect-[4/5] w-24 shrink-0 rounded-2xl bg-subtle object-cover shadow-sm sm:w-28 ${
                      member.primary ? 'ring-2 ring-amber-400' : 'ring-1 ring-line'
                    }`}
                  />
                  <div className="min-w-0">
                    <span className="inline-block rounded-md border border-brand-line bg-brand-soft px-1.5 py-0.5 text-[11px] leading-tight font-bold text-brand-strong">
                      {member.badge}
                    </span>
                    <h3 className="mt-1.5 text-base font-bold sm:text-lg">
                      {/* Thai has no spaces between syllables, so keep each name word whole and wrap only at spaces. */}
                      {member.nameTh.split(' ').map((word, w) => (
                        <Fragment key={word}>
                          {w > 0 && ' '}
                          <span className="whitespace-nowrap">{word}</span>
                        </Fragment>
                      ))}
                    </h3>
                    <p className="text-sm text-muted">{member.nameEn}</p>
                    <p className="mt-2 text-sm font-semibold text-ink">{member.roleTh}</p>
                  </div>
                </div>

                <p className="mt-5 flex gap-2 text-sm text-body">
                  <Building2 className="mt-1 h-4 w-4 shrink-0 text-brand" />
                  <span>
                    {member.affiliationTh}
                    <span className="block text-xs text-muted">{member.affiliationEn}</span>
                  </span>
                </p>

                <ul className="mt-5 flex-1 space-y-2 border-t border-line pt-5 text-sm text-body">
                  {member.duties.map((duty) => (
                    <li key={duty} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      {duty}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:${member.email}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium break-all text-brand hover:underline"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {member.email}
                </a>
                {member.primary && (
                  <span className="mt-1 text-xs text-muted">ช่องทางติดต่อหลัก (Verification Primary Contact)</span>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <article className="mt-6 grid gap-6 rounded-3xl border border-line bg-surface p-7 shadow-sm md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-strong md:flex">
              <Building2 className="h-7 w-7" />
            </div>
            <div className="space-y-3">
              <p className="flex gap-2 text-ink">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" />
                <span>
                  <strong>
                    {INSTITUTION.nameTh} {INSTITUTION.campus}
                  </strong>
                  <br />
                  <span className="text-body">{INSTITUTION.address}</span>
                </span>
              </p>
              <p className="flex gap-2 text-sm text-body">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-brand" />
                เวลาทำการ: {INSTITUTION.hours}
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sirindhorn+International+Institute+of+Technology+Rangsit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-bold text-ink transition hover:border-amber-400 hover:text-brand"
            >
              <MapPin className="h-4 w-4" /> ดูแผนที่
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
