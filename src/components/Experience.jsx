import { useTranslation } from 'react-i18next'
import { SectionLabel } from './About'

export default function Experience() {
  const { t } = useTranslation()
  const jobs = t('experience.jobs', { returnObjects: true })

  return (
    <section id="experience" className="py-28 px-6 bg-[#13131a]/50">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>{t('experience.label')}</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f3f4f6] tracking-tight mt-3 mb-12">
          {t('experience.title')}
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1e1e2a] hidden md:block" />

          <div className="space-y-10">
            {jobs.map((exp, i) => (
              <div key={i} className="md:pl-10 relative">
                <div className="hidden md:block absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#c084fc]" />

                <div className="bg-[#13131a] border border-[#1e1e2a] rounded-xl p-6 hover:border-[#c084fc]/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-[#f3f4f6] font-semibold text-lg">{exp.role}</h3>
                      <p className="text-[#c084fc] text-sm mt-0.5">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="text-xs text-[#6b7280] font-mono bg-[#0d0d12] px-3 py-1 rounded-full border border-[#1e1e2a]">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#9ca3af]">
                        <span className="text-[#c084fc] mt-0.5 shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
