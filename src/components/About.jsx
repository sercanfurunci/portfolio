import { useTranslation } from 'react-i18next'

export function SectionLabel({ children }) {
  return (
    <span className="text-[#c084fc] text-sm font-mono tracking-widest uppercase">
      {children}
    </span>
  )
}

export default function About() {
  const { t } = useTranslation()

  const facts = [
    { label: t('about.facts.location_label'), value: t('about.facts.location_value') },
    { label: t('about.facts.education_label'), value: t('about.facts.education_value') },
    { label: t('about.facts.language_label'), value: t('about.facts.language_value') },
    { label: t('about.facts.phone_label'), value: '+90 544 745 57 08' },
  ]

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>{t('about.label')}</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f3f4f6] tracking-tight mt-3 mb-10">
          {t('about.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-[#9ca3af] leading-relaxed">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>

          <div className="bg-[#13131a] border border-[#1e1e2a] rounded-xl p-6 space-y-4">
            {facts.map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-xs text-[#c084fc] font-mono uppercase tracking-wider">{label}</span>
                <span className="text-[#d1d5db] text-sm">{value}</span>
              </div>
            ))}
            <div className="pt-4 border-t border-[#1e1e2a]">
              <a
                href="mailto:sercanfurunci41@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-[#c084fc] hover:text-[#a855f7] transition-colors"
              >
                sercanfurunci41@gmail.com
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
