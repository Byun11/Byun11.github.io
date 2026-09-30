// Spec §37 — content lives here, never hardcoded in components.
// Anything set to an empty string is treated as "not available yet" and the
// corresponding UI is hidden rather than rendered as a dead link.

export const profile = {
  name: 'Jaeyeon Byun',
  nameLines: ['Jaeyeon', 'Byun'],
  title: 'AI Researcher',
  affiliation: 'UST–KISTI',
  fields: ['Web Agents', 'Document AI', 'Multimodal AI'],
  summary:
    'I build AI agents that work with documents and the web.',
  links: {
    github: 'https://github.com/Byun11',
    linkedin: '', // TODO: fill in
    scholar: 'https://scholar.google.com/citations?user=oITFr4IAAAAJ&hl=ko',
    cv: '', // TODO: Google Docs share link
    email: '',
  },
} as const;

export const seo = {
  title: 'Jaeyeon Byun — AI Researcher',
  description:
    'Research on web agents, document AI, and multimodal AI. UST–KISTI.',
  ogImage: '/og.png',
} as const;

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  blurb: string;       // one line, for the home card
  description: string; // full version, detail page only
  year: number;
  tags: readonly string[];
  featured?: boolean;
  exploration?: boolean; // spec §26 — kept off the home page
  links?: { code?: string; paper?: string; demo?: string };
  // §28 — a detail page is only generated when there is real content for it.
  // No placeholder case studies and no invented Results section.
  detail?: readonly { heading: string; body: string }[];
};

export const projects: readonly Project[] = [
  {
    slug: 'koni-forms',
    index: '01',
    title: 'KONI-Forms',
    subtitle: 'Document-grounded browser agent',
    blurb: 'Selective document access for real-world web forms.',
    description:
      'An in-browser AI agent that selectively retrieves information from attached documents and completes real-world web forms — and asks the user when the document does not settle a value, instead of fabricating one.',
    year: 2026,
    tags: ['Web Agents', 'Document AI', 'Browser Agents', 'Human-in-the-loop'],
    featured: true,
    links: {
      code: 'https://github.com/Byun11/KONI-Forms',
      demo: 'https://github.com/Byun11/KONI-Forms/releases/latest',
      // paper: hidden until the EACL 2027 demo paper is public (spec §15)
    },
    detail: [
      {
        heading: 'Overview',
        body: 'KONI-Forms is a Chrome extension (MV3) that fills a web form from a document you attach to it. You open the form, attach a DOCX or PDF, and tell the agent what to do; it reads the document inside the browser and completes the fields, leaving login and final submission to you.',
      },
      {
        heading: 'Problem',
        body: 'Filling a web form from a document is mostly transfer work: find the value, type it into the right field, repeat. A general browser agent does this badly for two reasons — it cannot see the document, and when a value is missing it invents a plausible one. The second failure is the dangerous one, because a fabricated field looks exactly like a correct one.',
      },
      {
        heading: 'System',
        body: 'The extension adds a document layer to the browser agent: attached files are parsed in-extension and retrieved selectively, so the agent works from the source rather than from memory of it. Planner and Navigator roles are configured separately, and the agent acts in the user’s own tab rather than a remote browser.',
      },
      {
        heading: 'Key mechanism',
        body: 'A value the document does not settle becomes a question to the user, not a guess. This user-intervention loop is what separates a transfer tool from a plausible-text generator, and it is the part of the design the evaluation is built around.',
      },
    ],
  },
  {
    slug: 'moe-expert-transplant',
    index: '02',
    title: 'MoE Expert Transplant',
    subtitle: 'Cross-model expert representation experiments',
    blurb: 'What survives when an expert moves between models.',
    description:
      'Transplanting capability-bearing experts between Mixture-of-Experts models, and measuring what survives the move across differing representation spaces.',
    year: 2026,
    tags: ['LLM Systems', 'Mixture of Experts', 'Representation'],
  },
  {
    slug: 'flyvl',
    index: '03',
    title: 'FlyVL',
    subtitle: 'Connectome-derived visual encoders',
    blurb: 'A fly brain wiring diagram, used as a vision encoder.',
    description:
      'Using the Drosophila MaleCNS connectome as a visual encoder — an ongoing set of experiments, controls, and negative results rather than a finished system.',
    year: 2026,
    tags: ['Multimodal AI', 'Neuro-inspired', 'Exploratory'],
    exploration: true,
  },
];

export type Publication = {
  year: number;
  title: string;
  authors: readonly string[];
  venue: string;
  first?: boolean;
  doi?: string;
  url?: string;
};

// Merged Korean/English duplicate registrations of the same paper into one
// entry each — Scholar lists both, but listing both here would pad the record.
export const publications: readonly Publication[] = [
  {
    year: 2025,
    title:
      '대규모 언어 모델의 신뢰성 강화를 위한 검색 증강 생성(RAG) 기반 질문 응답 시스템 설계와 성능 평가',
    authors: ['변재연', '김보경', '차경애'],
    venue: '멀티미디어학회논문지 28(4), 560–568',
    first: true,
  },
  {
    year: 2025,
    title: 'LLM 출력 구조 비교를 위한 공통 의미 기반 구성',
    authors: ['변재연', '구자현', '이경하', '이용'],
    venue: '한국정보과학회 학술발표논문집, 1114–1116',
    first: true,
  },
  {
    year: 2024,
    title:
      'Design and Implementation of an Interactive Question-Answering System with Retrieval-Augmented Generation for Personalized Databases',
    authors: ['Jaeyeon Byun', 'Bokyeong Kim', 'Kyung-Ae Cha', 'Eunhyung Lee'],
    venue: 'Applied Sciences 14(17), 7995',
    first: true,
    doi: '10.3390/app14177995',
    url: 'https://doi.org/10.3390/app14177995',
  },
  {
    year: 2024,
    title: 'Mobile App for Detecting Canine Skin Diseases Using U-Net Image Segmentation',
    authors: ['Bokyeong Kim', 'Jaeyeon Byun', 'Kyung-Ae Cha'],
    venue: 'Journal of Korea Society of Industrial Information Systems 29(4), 25–34',
  },
  {
    year: 2024,
    title: 'Generating Sponsored Blog Texts through Fine-Tuning of Korean LLMs',
    authors: ['Bokyeong Kim', 'Jaeyeon Byun', 'Kyung-Ae Cha'],
    venue: 'Journal of Korea Society of Industrial Information Systems 29(3), 1–12',
  },
];

export const about = {
  bio: [
    'I am a researcher at UST–KISTI working on AI systems that read documents and act on the web. My interest is the seam between the two: how an agent stays grounded in a source document instead of guessing, and what it should do when the document genuinely does not answer the question.',
    'Before that my work centred on retrieval-augmented generation — designing question-answering systems over personal and domain databases, and measuring where retrieval actually improves reliability rather than only fluency.',
  ],
  interests: ['Web Agents', 'Document AI', 'Multimodal AI', 'LLM Systems'],
  experience: [
    { org: 'KISTI', role: 'Researcher', note: 'Korea Institute of Science and Technology Information' },
    { org: 'UST', role: 'M.S., Applied AI', note: 'University of Science and Technology' },
  ],
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Publications', href: '/publications' },
  { label: 'About', href: '/about' },
] as const;
