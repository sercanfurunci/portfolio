import { useTranslation } from 'react-i18next'
import { SectionLabel } from './About'

const contactLinks = [
  { key: 'Email', value: 'sercanfurunci41@gmail.com', href: 'mailto:sercanfurunci41@gmail.com' },
  { key: 'LinkedIn', value: 'linkedin.com/in/sercanfurunci', href: 'https://linkedin.com/in/sercanfurunci' },
  { key: 'GitHub', value: 'github.com/sercanfurunci', href: 'https://github.com/sercanfurunci' },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>{t('contact.label')}</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f3f4f6] tracking-tight mt-3 mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-[#9ca3af] mb-12 max-w-lg">
          {t('contact.description')}
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {contactLinks.map(({ key, value, href }) => (
            <a
              key={key}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group bg-[#13131a] border border-[#1e1e2a] rounded-xl p-5 hover:border-[#c084fc]/40 transition-colors"
            >
              <p className="text-[#c084fc] text-xs font-mono uppercase tracking-wider mb-2">{key}</p>
              <p className="text-[#d1d5db] text-sm group-hover:text-[#f3f4f6] transition-colors break-all">
                {value}
              </p>
            </a>
          ))}
        </div>

        <a
          href="mailto:sercanfurunci41@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#c084fc] text-[#0d0d12] font-semibold rounded-lg hover:bg-[#a855f7] transition-colors"
        >
          {t('contact.cta')}
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
