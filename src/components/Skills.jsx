import { useTranslation } from 'react-i18next'
import { SectionLabel } from './About'

const skillData = [
  ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Redux', 'SASS/SCSS', 'Tailwind CSS'],
  ['Java', 'Spring Boot', 'Node.js', 'REST API', 'MySQL', 'PostgreSQL'],
  ['Git', 'GitHub', 'Docker', 'Python', 'TensorFlow', 'Firebase'],
]

export default function Skills() {
  const { t } = useTranslation()
  const groups = t('skills.groups', { returnObjects: true })
  const education = t('skills.education', { returnObjects: true })

  return (
    <section id="skills" className="py-28 px-6 bg-[#13131a]/50">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>{t('skills.label')}</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f3f4f6] tracking-tight mt-3 mb-12">
          {t('skills.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((group, i) => (
            <div
              key={group.title}
              className="bg-[#13131a] border border-[#1e1e2a] rounded-xl p-6 hover:border-[#c084fc]/30 transition-colors"
            >
              <h3 className="text-[#f3f4f6] font-semibold mb-5">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skillData[i].map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-[#0d0d12] text-[#9ca3af] border border-[#1e1e2a] hover:border-[#c084fc]/40 hover:text-[#d1d5db] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-[#f3f4f6] font-semibold text-lg mb-6">{t('skills.education_title')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div key={i} className="bg-[#13131a] border border-[#1e1e2a] rounded-xl p-6">
                <p className="text-[#c084fc] text-xs font-mono uppercase tracking-wider mb-2">{edu.period}</p>
                <h4 className="text-[#f3f4f6] font-semibold">{edu.degree}</h4>
                <p className="text-[#9ca3af] text-sm mt-1">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
