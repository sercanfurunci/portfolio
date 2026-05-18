import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-[#0d0d12]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-[#1e1e2a] py-8 px-6 text-center">
        <p className="text-[#4b5563] text-sm">
          © {new Date().getFullYear()} {t('footer.rights')}
        </p>
      </footer>
    </div>
  )
}
