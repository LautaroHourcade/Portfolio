import { stackCategories } from '../data/stack.js';
import Section from './Section.jsx';
import './TechStack.css';

function TechStack({ section, t }) {
  return (
    <Section id="stack" eyebrow={section.eyebrow} title={section.title} description={section.description}>
      <ul className="stack">
        {stackCategories.map((category, index) => {
          const title = t.categories[category.id];
          const titleId = `stack-${category.id}-title`;

          return (
            <li key={category.id} className="stack-card">
              <div className="stack-card__header">
                <span className="stack-card__index">{String(index + 1).padStart(2, '0')}</span>
                <h3 id={titleId} className="stack-card__title">
                  {title}
                </h3>
              </div>
              <ul className="stack-card__list" aria-labelledby={titleId}>
                {category.technologies.map((technology) => (
                  <li key={technology} className="stack-card__technology">
                    {technology}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

export default TechStack;
