import { useEffect, useState } from 'react';
import { translations } from './i18n/translations.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
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
        <Section id="work" eyebrow={t.sections.work.eyebrow} title={t.sections.work.title}>
          <p className="section__placeholder">{t.sections.comingSoon}</p>
        </Section>
        <Section id="about" eyebrow={t.sections.about.eyebrow} title={t.sections.about.title}>
          <p className="section__placeholder">{t.sections.comingSoon}</p>
        </Section>
        <Section id="stack" eyebrow={t.sections.stack.eyebrow} title={t.sections.stack.title}>
          <p className="section__placeholder">{t.sections.comingSoon}</p>
        </Section>
        <Section
          id="exploring"
          eyebrow={t.sections.exploring.eyebrow}
          title={t.sections.exploring.title}
          secondary
        >
          <p className="section__placeholder">{t.sections.comingSoon}</p>
        </Section>
        <Section id="contact" eyebrow={t.sections.contact.eyebrow} title={t.sections.contact.title}>
          <p className="section__placeholder">{t.sections.comingSoon}</p>
        </Section>
      </main>
      <Footer t={t.footer} />
    </>
  );
}

export default App;
