import Section from './Section.jsx';
import './About.css';

function About({ section, t }) {
  const [lead, ...paragraphs] = t.paragraphs;
  const { education } = t;

  const educationItems = [
    { label: education.degreeLabel, value: education.degree },
    { label: education.institutionLabel, value: education.institution },
    { label: education.campusLabel, value: education.campus },
  ];

  return (
    <Section id="about" eyebrow={section.eyebrow} title={section.title}>
      <div className="about">
        <div className="about__text">
          <p className="about__lead">{lead}</p>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="about__paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="education-card" aria-labelledby="education-title">
          <h3 id="education-title" className="education-card__title">
            <span className="education-card__dot" aria-hidden="true" />
            {education.title}
          </h3>
          <dl className="education-card__list">
            {educationItems.map((item) => (
              <div key={item.label} className="education-card__item">
                <dt className="education-card__label">{item.label}</dt>
                <dd className="education-card__value">{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  );
}

export default About;
