import Section from './Section.jsx';
import './TechStack.css';

function CurrentlyExploring({ section, items }) {
  return (
    <Section
      id="exploring"
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
      secondary
    >
      <ul className="exploring">
        {items.map((item) => (
          <li key={item} className="exploring__item">
            <span className="exploring__dot" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default CurrentlyExploring;
