import { contactLinks, profile } from '../data/profile.js';
import profilePhoto from '../assets/profile.jpeg';
import ContactIcon from './ContactIcon.jsx';
import './Hero.css';

const HERO_LINK_ORDER = ['github', 'linkedin', 'email'];
const heroLinks = HERO_LINK_ORDER.map((id) => contactLinks.find((link) => link.id === id));

function Hero({ t }) {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow fade-up">
            <span className="hero__status-dot" aria-hidden="true" />
            {t.role}
          </p>
          <h1 id="hero-title" className="hero__title fade-up">
            {profile.name}
          </h1>
          <p className="hero__description fade-up">{t.description}</p>
          <div className="hero__actions fade-up">
            <a href="#work" className="btn btn--primary">
              {t.primaryCta}
            </a>
            <ul className="hero__socials" aria-label={t.socialLabel}>
              {heroLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="btn btn--secondary hero__social-link"
                    title={link.label}
                    aria-label={link.external ? `${link.label} (${t.opensInNewTab})` : `${link.label}: ${link.value}`}
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    <ContactIcon id={link.id} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="hero__photo fade-up">
          <img src={profilePhoto} alt={t.photoAlt} width="400" height="400" fetchPriority="high" />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
