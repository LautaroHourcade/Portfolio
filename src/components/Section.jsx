function Section({ id, eyebrow, title, secondary = false, children }) {
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
        </header>
        {children}
      </div>
    </section>
  );
}

export default Section;
