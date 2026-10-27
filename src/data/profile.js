export const profile = {
  name: 'Lautaro Hourcade',
  initials: 'LH',
  email: 'lautaro13dejulio@gmail.com',
  githubUrl: 'https://github.com/LautaroHourcade',
  linkedinUrl: 'https://www.linkedin.com/in/lautaro-hourcade/',
};

// Platform names and addresses are not translated.
export const contactLinks = [
  { id: 'email', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/lautaro-hourcade',
    href: profile.linkedinUrl,
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/LautaroHourcade',
    href: profile.githubUrl,
    external: true,
  },
];
