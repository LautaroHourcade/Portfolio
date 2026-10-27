import { profile } from '../data/profile.js';
import profilePhoto from '../assets/profile.jpeg';
import './Hero.css';

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
            <a
              href={profile.githubUrl}
              className="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.secondaryCta}
              <span aria-hidden="true">↗</span>
            </a>
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
