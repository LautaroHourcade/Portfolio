import { projects } from '../data/projects.js';
import Section from './Section.jsx';
import ProjectCard from './ProjectCard.jsx';
import './Projects.css';

function Projects({ section, t, language }) {
  return (
    <Section id="work" eyebrow={section.eyebrow} title={section.title} description={section.description}>
      <ul className="projects">
        {projects.map((project, index) => (
          <li key={project.id} className={project.featured ? 'projects__item projects__item--featured' : 'projects__item'}>
            <ProjectCard project={project} index={index} language={language} t={t} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Projects;
