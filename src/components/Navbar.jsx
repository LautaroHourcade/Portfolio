import { useEffect, useState } from 'react';
import { profile } from '../data/profile.js';
import LanguageToggle from './LanguageToggle.jsx';
import './Navbar.css';

const SCROLL_THRESHOLD = 16;

function Navbar({ t, language, onLanguageChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: '#work', label: t.work },
    { href: '#about', label: t.about },
    { href: '#stack', label: t.stack },
    { href: '#contact', label: t.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navbarClassName = ['navbar', isScrolled && 'navbar--scrolled', isMenuOpen && 'navbar--open']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={navbarClassName}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo" aria-label={profile.name} onClick={closeMenu}>
          {profile.initials}
        </a>

        <button
          type="button"
          className="navbar__menu-button"
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="navbar__menu-icon" aria-hidden="true" />
        </button>

        <div id="navbar-menu" className="navbar__menu">
          <nav aria-label={t.label}>
            <ul className="navbar__links">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="navbar__link" onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageToggle language={language} onChange={onLanguageChange} label={t.languageLabel} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
