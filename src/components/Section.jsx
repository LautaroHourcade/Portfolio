function Section({ id, eyebrow, title, description, secondary = false, children }) {
  const headingId = `${id}-title`;
  const className = secondary ? 'section section--secondary' : 'section';

  return (
    <section id={id} className={className} aria-labelledby={headingId}>
      <div className="container">
        <header className="section__header">
          <span className="section__eyebrow">{eyebrow}</span>
          <h2 id={headingId} className="section__title">
            {title}
          </h2>
          {description && <p className="section__description">{description}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

export default Section;
