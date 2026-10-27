// To add a cover, import the image here and set it as `image`
// (e.g. import devCompassCover from '../assets/projects/devcompass.webp').
export const projects = [
  {
    id: 'devcompass',
    title: 'DevCompass',
    description: {
      es: 'Una plataforma web para descubrir y explorar repositorios de GitHub. Desarrollada desde la arquitectura inicial hasta su puesta en producción, integrando la API de GitHub con una interfaz web moderna y almacenamiento persistente de datos.',
      en: 'A web platform for discovering and exploring GitHub repositories. Built from the initial architecture to the deployed product, integrating the GitHub API with a modern web interface and persistent data.',
    },
    technologies: ['React', 'JavaScript', 'GitHub API', 'Supabase'],
    image: null,
    github: 'https://github.com/LautaroHourcade/DevCompass',
    live: 'https://dev-compass-five.vercel.app',
    featured: true,
    academic: null,
  },
  {
    id: 'martinventario',
    title: 'MartInventario',
    description: {
      es: 'Una aplicación web para la gestión de inventario desarrollada como proyecto académico utilizando Angular.',
      en: 'A web-based inventory management application developed as an academic project using Angular.',
    },
    technologies: ['Angular', 'JavaScript', 'HTML', 'CSS'],
    image: null,
    github: 'https://github.com/ThomasEfernandez/Martinventario',
    live: null,
    featured: false,
    academic: 'group',
  },
  {
    id: 'kalendar-bar',
    title: 'Kalendar-Bar',
    description: {
      es: 'Un sistema de gestión de sueldos para empleados desarrollado en C como proyecto académico, enfocado en la aplicación de fundamentos de programación y resolución de problemas.',
      en: 'A C-based employee payroll management system developed as an academic project, focused on applying programming fundamentals and problem-solving.',
    },
    technologies: ['C'],
    image: null,
    github: 'https://github.com/LautaroHourcade/Kalendar-Bar',
    live: null,
    featured: false,
    academic: 'individual',
  },
];
