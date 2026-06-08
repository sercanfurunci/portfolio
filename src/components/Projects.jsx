import { useTranslation } from 'react-i18next'
import { SectionLabel } from './About'

const projectMeta = [
  {
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    url: 'https://birik.furunci.tech',
    github: null,
  },
  {
    tags: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'Docker', 'Backtrader'],
    url: null,
    github: 'https://github.com/sercanfurunci',
  },
  {
    tags: ['React.js', 'Spring Boot', 'Java', 'MySQL'],
    url: null,
    github: 'https://github.com/sercanfurunci',
  },
  {
    tags: ['React 19', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    url: 'https://tribun.furunci.tech',
    github: 'https://github.com/sercanfurunci/tribun',
  },
]

function Tag({ label }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full bg-[#c084fc]/10 text-[#c084fc] border border-[#c084fc]/20 font-mono">
      {label}
    </span>
  )
}

export default function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true })

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>{t('projects.label')}</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f3f4f6] tracking-tight mt-3 mb-12">
          {t('projects.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((project, i) => {
            const meta = projectMeta[i]
            return (
              <div
                key={project.name}
                className="bg-[#13131a] border border-[#1e1e2a] rounded-xl p-6 flex flex-col gap-4 hover:border-[#c084fc]/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[#f3f4f6] font-semibold text-lg">{project.name}</h3>
                  <div className="flex gap-3 shrink-0">
                    {meta.github && (
                      <a
                        href={meta.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#6b7280] hover:text-[#c084fc] transition-colors"
                        aria-label="GitHub"
                      >
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {meta.url && (
                      <a
                        href={meta.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#6b7280] hover:text-[#c084fc] transition-colors"
                        aria-label="Live site"
                      >
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-[#9ca3af] leading-relaxed flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {meta.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
