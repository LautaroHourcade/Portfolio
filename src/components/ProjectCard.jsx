function ProjectCover({ project, label }) {
  if (project.image) {
    return (
      <div className="project-card__cover">
        <img src={project.image} alt="" loading="lazy" />
      </div>
    );
  }

  return (
    <div className="project-card__cover project-card__cover--placeholder" aria-hidden="true">
      {project.featured && (
        <div className="project-card__cover-bar">
          <span />
          <span />
          <span />
        </div>
      )}
      <span className="project-card__cover-title">{project.title}</span>
      <span className="project-card__cover-label">{label}</span>
    </div>
  );
}

function ProjectCard({ project, index, language, t }) {
  const academicLabel = {
    group: t.groupAcademic,
    individual: t.academic,
  }[project.academic];

  const className = project.featured ? 'project-card project-card--featured' : 'project-card';
  const linkClassName = project.featured ? 'btn' : 'project-card__link';
  const titleId = `project-${project.id}-title`;

  return (
    <article className={className} aria-labelledby={titleId}>
      <ProjectCover project={project} label={t.coverPending} />

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__index">{String(index + 1).padStart(2, '0')}</span>
          {project.featured && <span className="project-card__badge project-card__badge--accent">{t.featured}</span>}
          {academicLabel && <span className="project-card__badge">{academicLabel}</span>}
        </div>

        <h3 id={titleId} className="project-card__title">
          {project.title}
        </h3>
        <p className="project-card__description">{project.description[language]}</p>

        <ul className="project-card__technologies" aria-label={t.technologiesLabel}>
          {project.technologies.map((technology) => (
            <li key={technology} className="project-card__technology">
              {technology}
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          {project.live && (
            <a
              href={project.live}
              className={project.featured ? `${linkClassName} btn--primary` : linkClassName}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.liveDemo} — ${project.title} (${t.opensInNewTab})`}
            >
              {t.liveDemo}
              <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className={project.featured ? `${linkClassName} btn--secondary` : linkClassName}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.code} — ${project.title} (${t.opensInNewTab})`}
            >
              {t.code}
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
