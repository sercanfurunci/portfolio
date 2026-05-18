import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const toggleLang = () => {
    const next = i18n.language === 'tr' ? 'en' : 'tr'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  const links = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.experience', href: '#experience' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.skills', href: '#skills' },
    { key: 'nav.contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d0d12]/90 backdrop-blur border-b border-[#1e1e2a]' : ''
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-[#f3f4f6] font-semibold tracking-tight text-lg">
          sf<span className="text-[#c084fc]">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map(({ key, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-[#9ca3af] hover:text-[#f3f4f6] transition-colors"
              >
                {t(key)}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLang}
              className="cursor-pointer flex items-center gap-1.5 text-xs font-mono text-[#6b7280] hover:text-[#c084fc] transition-colors group"
            >
              <span className={i18n.language === 'tr' ? 'text-[#f3f4f6]' : ''}>TR</span>
              <span className="text-[#2e2e3a]">/</span>
              <span className={i18n.language === 'en' ? 'text-[#f3f4f6]' : ''}>EN</span>
            </button>
          </li>
        </ul>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="cursor-pointer flex items-center gap-1 text-xs font-mono text-[#6b7280] hover:text-[#c084fc] transition-colors"
          >
            <span className={i18n.language === 'tr' ? 'text-[#f3f4f6]' : ''}>TR</span>
            <span className="text-[#2e2e3a]">/</span>
            <span className={i18n.language === 'en' ? 'text-[#f3f4f6]' : ''}>EN</span>
          </button>
          <button
            className="text-[#9ca3af] hover:text-[#f3f4f6]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l10 10M16 6l-10 10" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="19" y2="12" strokeLinecap="round" />
                  <line x1="3" y1="18" x2="19" y2="18" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#13131a] border-b border-[#1e1e2a] px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map(({ key, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-[#9ca3af] hover:text-[#f3f4f6] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
