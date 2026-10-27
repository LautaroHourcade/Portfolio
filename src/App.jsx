import { useEffect, useState } from 'react';
import { translations } from './i18n/translations.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import TechStack from './components/TechStack.jsx';
import CurrentlyExploring from './components/CurrentlyExploring.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const LANGUAGE_STORAGE_KEY = 'portfolio-language';
const DEFAULT_LANGUAGE = 'es';

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored in translations) return stored;
  } catch {
    // localStorage may be unavailable (private mode, blocked storage).
  }
  return DEFAULT_LANGUAGE;
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Persisting is a convenience; ignore failures.
    }
  }, [language]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <Navbar t={t.nav} language={language} onLanguageChange={setLanguage} />
      <main id="main">
        <Hero t={t.hero} />
        <Projects section={t.sections.work} t={t.projects} language={language} />
        <About section={t.sections.about} t={t.about} />
        <TechStack section={t.sections.stack} t={t.stack} />
        <CurrentlyExploring section={t.sections.exploring} items={t.stack.exploring} />
        <Contact section={t.sections.contact} t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}

export default App;
