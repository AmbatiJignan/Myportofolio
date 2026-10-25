/**
 * Central portfolio data for Ambati Jignan.
 * Every component reads from this file — edit it here and the whole site follows.
 * Content is taken from Jignan's updated resume (Oct 2026). Empty / optional fields are hidden by the UI.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Ambati Jignan',
  displayName: 'Ambati Jignan',
  firstName: 'JIGNAN',
  /** Optional line shown under the name in the intro and hero. Leave empty to hide. */
  tagLine: '',
  /** Title card shown at the very start of the opening sequence. */
  originalLabel: 'AMBATI JIGNAN PRESENTS',
  role: 'Web Developer',
  tagline: ['Web Developer', 'Data Analyst', 'Problem Solver'],
  intro:
    "A motivated Computer Science undergraduate with a keen interest in programming and problem-solving, building skills in C, Python, JavaScript and Java through projects and certifications — eager to contribute to real-world development challenges.",
  about: [
    "Hello! I'm Jignan, a B.Tech Computer Science student at LakiReddy BaliReddy College of Engineering (2024–2028) with a strong interest in software development and problem-solving.",
    'I build responsive web applications with HTML, CSS and JavaScript, create GUI tools in Python, and work on data analysis with Pandas, NumPy and scikit-learn.',
    'Beyond code, I coordinate events, speak publicly and lead teams — from the Quantum Hackathon to the college fest — and I am always learning something new.',
  ],
  /** Enables the "Let's Build" and Email buttons. */
  email: 'jignanambati@gmail.com',
  location: 'Gannavaram, Andhra Pradesh',
  links: {
    linkedin: 'https://www.linkedin.com/in/ambati-jignan-362496378',
    github: 'https://github.com/AmbatiJignan',
  },
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Ambati Jignan',
  },
  interests: ['Web Development', 'Data Analysis', 'Programming', 'Problem Solving'],
};

export const education = [
  { school: 'LakiReddy BaliReddy College of Engineering', detail: 'B.Tech, Computer Science Engineering', period: '2024–2028', score: 'Sem 1: 7.55 · Sem 2: 7.57 · Sem 3: 8.03 · Sem 4: 8.71' },
  { school: 'Sri Sarada Junior College', detail: 'Class XII', period: '2022–2024', score: '81.9%' },
  { school: 'Sravanthi High School', detail: 'Class X (SSC)', period: '2021–2022', score: '79.4%' },
];

export const certifications = [
  'Infosys Springboard — Basics of Python',
  'ServiceNow University — Fundamentals',
  'Programming Fundamentals using Python — Parts 1 & 2',
  'Python Foundation Certification',
  'CISCO Networking Academy — C Essentials',
  'CISCO Networking Academy — JavaScript Essentials',
  'TCS iON Career Edge — Young Professional Course',
];

export const achievements = [
  'Participated in the 24-hour hackathon by NRI',
  'Event Coordinator — Quantum Hackathon (LBRCE)',
  'Event Coordinator — Srujana, Lakshya college fest (LBRCE)',
  'Student committee member — Prakruthi Club (LBRCE)',
  'Department Ambassador — Climate Action Unit',
];

export const softSkills = ['Leadership', 'Teamwork', 'Public Speaking', 'Time Management', 'Problem-Solving', 'Willingness to Learn'];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when there is no public repository — the GitHub button is hidden. */
  github?: string;
  /** Deployed site — shown as a "Live Demo" button on the card and in the project details. */
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'franchise-ai',
    title: 'Agentic AI for Franchise Management',
    genre: 'Data Analysis • AI • Team Project',
    logline: 'Data-analyst module of an agentic AI system that turns franchise outlet sales into KPIs, trends and recommendations.',
    stack: ['Python', 'Pandas', 'NumPy', 'scikit-learn'],
    build: [
      'Responsible for the Data Analysis module of an Agentic AI for Franchise Management System, analyzing franchise outlet sales and performance data using Python, Pandas, NumPy and scikit-learn.',
      'Performed data preprocessing, KPI calculation, performance scoring, trend analysis and underperforming-outlet detection to identify business insights.',
      "Developed data visualizations and analytical outputs that support the team's AI agents and enable data-driven performance monitoring and recommendations.",
    ],
    features: ['Data preprocessing', 'KPI calculation & performance scoring', 'Trend analysis', 'Underperforming outlet detection', 'Visual analytics for AI agents'],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'transport-booking',
    title: 'Transport Management Website',
    genre: 'Frontend • Booking • Responsive',
    logline: 'A multi-page, responsive website for booking bus and train tickets, including the payment flow.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    build: [
      'Developed a multi-page, responsive website for booking bus and train tickets, including a payment flow.',
      'Built a booking form with validation, a confirmation modal and a mobile-first responsive layout using HTML, CSS and JavaScript.',
      'A pure frontend implementation with a real-time, image-driven UI and hover animations — no backend.',
    ],
    features: ['Bus & train ticket booking', 'Form validation & confirmation modal', 'Payment flow', 'Mobile-first responsive layout', 'Hover animations'],
    metrics: [],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'quiz-app',
    title: 'Quiz Application',
    genre: 'Python GUI • Team Project',
    logline: 'A GUI-based quiz app in Python with an interactive question flow and automated scoring.',
    stack: ['Python', 'GUI'],
    build: [
      'Developed a GUI-based quiz application in Python with an interactive question flow and score evaluation.',
      'Implemented user interaction handling and automated scoring logic.',
      'Led a team of peers through planning, development and testing phases.',
    ],
    features: ['Interactive question flow', 'Automated scoring', 'Score evaluation', 'Team-led delivery'],
    metrics: [],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'fd-calculator',
    live: 'https://ambatijignan.github.io/FD-CALCULATOR/',
    title: 'FD Calculator',
    genre: 'Fintech • Web Tool • Individual',
    logline: 'A fixed deposit calculator that estimates maturity value and returns from principal, tenure and rate.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    build: [
      'Built a web-based fixed deposit calculator to help users estimate maturity value and returns on investment.',
      'Implemented interest calculation logic based on principal, tenure and interest-rate inputs.',
      'Designed a clean, form-based interface with real-time result display.',
    ],
    features: ['Maturity value estimate', 'Principal, tenure & rate inputs', 'Real-time results', 'Clean form-based UI'],
    metrics: [],
    palette: { from: '#04170f', via: '#0c5a3d', to: '#05090a', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'products-app',
    live: 'https://ambatijignan.github.io/PRODUCTS-APP/',
    title: 'Products App',
    genre: 'E-Commerce • Catalog • Individual',
    logline: 'A multi-category e-commerce style product catalog showcasing accessories and listings.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    build: [
      'Developed a multi-category, e-commerce style product catalog showcasing accessories and listings.',
      'Built responsive product cards and layout grids using HTML, CSS and JavaScript.',
      'Focused on clean UI presentation and an organized product browsing experience.',
    ],
    features: ['Multi-category catalog', 'Responsive product cards', 'Layout grids', 'Organized browsing'],
    metrics: [],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Programming & data',
    skills: [
      { name: 'C', mono: 'C' },
      { name: 'Python', mono: 'Py' },
      { name: 'Java', mono: 'Jv' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'PL/SQL', mono: 'Pl' },
    ],
  },
  {
    id: 'web',
    title: 'Web',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    subtitle: 'Analysis & machine learning',
    skills: [
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'scikit-learn', mono: 'Sk' },
      { name: 'Data Structures', mono: 'Ds', note: 'Implemented in C and Python' },
    ],
  },
  {
    id: 'strengths',
    title: 'Strengths',
    subtitle: 'How I work',
    skills: softSkills.map((n) => ({ name: n, mono: n.slice(0, 2) })),
  },
];

/** Where a skill shows up — hovering/tapping a skill card reveals this. Only true cross-references. */
export const skillEvidence: Record<string, string[]> = {
  HTML: ['Transport Management Website', 'FD Calculator', 'Products App'],
  CSS: ['Transport Management Website', 'FD Calculator', 'Products App'],
  JavaScript: ['Transport Management Website', 'FD Calculator', 'Products App'],
  Python: ['Quiz Application', 'Agentic AI for Franchise Management'],
  Pandas: ['Agentic AI for Franchise Management'],
  NumPy: ['Agentic AI for Franchise Management'],
  'scikit-learn': ['Agentic AI for Franchise Management'],
};

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Who',
    title: 'Ambati Jignan',
    lines: ['B.Tech CSE student · LBRCE', 'Web Developer · Data Analyst · Problem Solver'],
  },
  {
    kicker: 'Skills',
    title: 'The toolkit',
    lines: ['C · Python · Java · SQL', 'HTML · CSS · JavaScript · Pandas · NumPy'],
    chips: ['Python', 'JavaScript', 'HTML', 'CSS', 'Pandas', 'scikit-learn'],
  },
  {
    kicker: 'Projects',
    title: 'Five Projects',
    lines: ['Agentic AI for Franchise Management', 'Transport Management · Quiz App · FD Calculator · Products App'],
  },
  {
    kicker: 'Mindset',
    title: 'Lifelong learner',
    lines: ['Hackathons, event coordination and a lot of certifications'],
  },
];

export type ProfileId = 'jignan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'originals' | 'skills' | 'gallery';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  { id: 'jignan', name: 'Jignan', blurb: 'The full story, in order', color: '#e5132b', order: ['about', 'originals', 'skills', 'gallery'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Skills & projects first', color: '#4cc9ff', order: ['skills', 'originals', 'about', 'gallery'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects & stack first', color: '#46e3a8', order: ['originals', 'skills', 'about', 'gallery'] },
  { id: 'creative', name: 'Creative', blurb: 'The story first', color: '#ffb547', order: ['about', 'originals', 'skills', 'gallery'] },
];

const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const ember: Palette = { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };

export const gallery = [
  { id: 'festival', label: 'Festival Day', src: '/assets/gallery-festival-900.webp', srcSet: '/assets/gallery-festival-480.webp 480w, /assets/gallery-festival-900.webp 900w', alt: 'Ambati Jignan smiling in a white shirt on campus' },
  { id: 'campus', label: 'On Campus', src: '/assets/gallery-campus-900.webp', srcSet: '/assets/gallery-campus-480.webp 480w, /assets/gallery-campus-900.webp 900w', alt: 'Ambati Jignan sitting on a car on campus' },
  { id: 'orchard', label: 'The Orchard Road', src: '/assets/gallery-orchard-900.webp', srcSet: '/assets/gallery-orchard-480.webp 480w, /assets/gallery-orchard-900.webp 900w', alt: 'Ambati Jignan standing on a road lined with trees' },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Who I am', palette: violet },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Projects`, palette: crimson },
  gallery: { nav: 'Gallery', card: 'Behind the Scenes', meta: `${gallery.length} Stills`, palette: ember },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
};
