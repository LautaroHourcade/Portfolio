import { contactLinks, profile } from '../data/profile.js';
import Section from './Section.jsx';
import ContactIcon from './ContactIcon.jsx';
import './Contact.css';

function Contact({ section, t }) {
  return (
    <Section id="contact" eyebrow={section.eyebrow} title={section.title} description={section.description}>
      <div className="contact">
        <div className="contact__cta">
          <a href={`mailto:${profile.email}`} className="btn btn--primary contact__button">
            <ContactIcon id="email" />
            {t.cta}
          </a>
        </div>

        <ul className="contact__links" aria-label={t.linksLabel}>
          {contactLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="contact-link"
                {...(link.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': `${link.label} — ${link.value} (${t.opensInNewTab})`,
                })}
              >
                <ContactIcon id={link.id} />
                <span className="contact-link__text">
                  <span className="contact-link__label">{link.label}</span>
                  <span className="contact-link__value">{link.value}</span>
                </span>
                <span className="contact-link__arrow" aria-hidden="true">
                  {link.external ? '↗' : '→'}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Contact;
