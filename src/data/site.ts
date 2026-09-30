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
    linkedin: 'https://www.linkedin.com/in/jaeyeon-byun-046814326',
    scholar: 'https://scholar.google.com/citations?user=oITFr4IAAAAJ&hl=ko',
    cv: null as string | null, // Google Docs or PDF URL; the button appears once set
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
  /** one line, for the home card and the project list */
  blurb: string;
  /** one to two lines, for the project detail header */
  description: string;
  year: number;
  tags: readonly string[];
  featured?: boolean;
  /** Institutional context. Shown as small metadata so a team project is
      never presented as solo work. */
  organization?: string;
  team?: string;
  role?: string;
  github?: string;
  demo?: string;
  paper?: string;
  /** §28 — a detail page exists only where there is real content for it. */
  detail?: readonly { heading: string; body: string }[];
};

// Only projects that are public or have a real system behind them. Exploratory
// work is deliberately not listed here.
export const projects: readonly Project[] = [
  {
    slug: 'koni-forms',
    index: '01',
    title: 'KONI-Forms',
    subtitle: 'Document-grounded browser agent',
    blurb: 'Selective document access for real-world web forms.',
    description:
      'An in-browser agent that selectively retrieves information from attached documents and completes real-world web forms.',
    year: 2026,
    tags: ['Web Agents', 'Document AI', 'Browser Agents'],
    featured: true,
    organization: 'KISTI',
    github: 'https://github.com/Byun11/KONI-Forms',
    demo: 'https://github.com/Byun11/KONI-Forms/releases/latest',
    // paper: hidden until the EACL 2027 demo paper is public
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
        body: 'A value the document does not settle becomes a question to the user, not a guess. This user-intervention loop is what separates a transfer tool from a plausible-text generator.',
      },
    ],
  },
  {
    slug: 'dorea',
    index: '02',
    title: 'Dorea',
    subtitle: 'Interactive PDF intelligence',
    blurb: 'Talk to PDFs by selecting the exact region that matters.',
    description:
      'A layout-aware PDF analysis system for region-grounded question answering and document interaction.',
    year: 2025,
    tags: ['Document AI', 'RAG'],
    organization: 'KISTI',
    team: 'AI Platform Team',
    github: 'https://github.com/Byun11/Dorea-pdf-ai',
    detail: [
      {
        heading: 'Overview',
        body: 'Dorea is a layout-aware PDF analysis system for region-grounded question answering and document interaction.',
      },
      {
        heading: 'Key mechanism',
        body: 'The document is first parsed for layout; the reader then selects a specific region of the page, and that selection grounds the conversation. The answer is tied to the part of the document the reader pointed at, rather than to whatever a retriever happened to return.',
      },
    ],
  },
  {
    slug: 'kisti-mcp',
    index: '03',
    title: 'KISTI-MCP',
    subtitle: 'Scientific information tools for LLM agents',
    blurb: 'Connecting LLM agents to Korean science and R&D information.',
    description:
      'An MCP server that connects LLM clients to the KISTI ScienceON, NTIS and DataON OpenAPIs.',
    year: 2025,
    tags: ['MCP', 'ScienceON', 'NTIS'],
    organization: 'KISTI',
    team: 'AI Platform Team',
    github: 'https://github.com/ansua79/kisti-mcp',
    detail: [
      {
        heading: 'Overview',
        body: 'An MCP server that connects LLM clients to the OpenAPIs behind KISTI ScienceON, NTIS and DataON, exposing 32 tools in the current public version.',
      },
      {
        heading: 'Tools',
        body: 'Paper, patent and research-report search, citations, researcher and institution lookup over ScienceON; national R&D project and outcome search, classification codes and related-content recommendation over NTIS; and research-data search over DataON. NTIS project and outcome search fall back automatically from agency-level to public endpoints according to the key’s entitlement.',
      },
    ],
  },
];

export type PubIndex = 'SCIE' | 'Scopus' | 'KCI' | 'Conference';

export type Publication = {
  year: number;
  title: string;
  authors: readonly string[];
  venue: string;
  venueIndex: PubIndex;
  doi?: string;
  url?: string;
};

// Grouped by indexing rather than by year, so the SCIE article leads instead
// of being buried under the most recent domestic entry.
export const PUB_GROUPS: readonly { key: PubIndex; label: string; note?: string }[] = [
  { key: 'SCIE', label: 'SCIE' },
  { key: 'Scopus', label: 'Scopus' },
  { key: 'KCI', label: 'KCI' },
  { key: 'Conference', label: 'Domestic Conference' },
];

// Korean and English registrations of the same paper are merged into one
// entry each; Scholar lists both.
export const publications: readonly Publication[] = [
  {
    year: 2024,
    title:
      'Design and Implementation of an Interactive Question-Answering System with Retrieval-Augmented Generation for Personalized Databases',
    authors: ['Jaeyeon Byun', 'Bokyeong Kim', 'Kyung-Ae Cha', 'Eunhyung Lee'],
    venue: 'Applied Sciences 14(17), 7995',
    venueIndex: 'SCIE',
    doi: '10.3390/app14177995',
    url: 'https://doi.org/10.3390/app14177995',
  },
  {
    year: 2023,
    title: 'Development of Mobile-Device App Based on YOLOv7 for Safety Monitoring',
    authors: ['J. T. Ryu', 'Bokyeong Kim', 'Jaeyeon Byun', 'Kyung-Ae Cha'],
    venue: 'International Journal of Applied Engineering & Technology 5(4), 2419–2424',
    venueIndex: 'Scopus',
  },
  {
    year: 2025,
    title:
      '대규모 언어 모델의 신뢰성 강화를 위한 검색 증강 생성(RAG) 기반 질문 응답 시스템 설계와 성능 평가',
    authors: ['변재연', '김보경', '차경애'],
    venue: '멀티미디어학회논문지 28(4), 560–568',
    venueIndex: 'KCI',
  },
  {
    year: 2024,
    title: 'Mobile App for Detecting Canine Skin Diseases Using U-Net Image Segmentation',
    authors: ['Bokyeong Kim', 'Jaeyeon Byun', 'Kyung-Ae Cha'],
    venue: 'Journal of Korea Society of Industrial Information Systems 29(4), 25–34',
    venueIndex: 'KCI',
  },
  {
    year: 2024,
    title: 'Generating Sponsored Blog Texts through Fine-Tuning of Korean LLMs',
    authors: ['Bokyeong Kim', 'Jaeyeon Byun', 'Kyung-Ae Cha'],
    venue: 'Journal of Korea Society of Industrial Information Systems 29(3), 1–12',
    venueIndex: 'KCI',
  },
  {
    year: 2025,
    title: 'LLM 출력 구조 비교를 위한 공통 의미 기반 구성',
    authors: ['변재연', '구자현', '이경하', '이용'],
    venue: '한국정보과학회 학술발표논문집, 1114–1116',
    venueIndex: 'Conference',
  },
];

export const about = {
  bio: [
    'I am a student researcher at UST–KISTI working on AI systems that read documents and act on the web. My interest is the seam between the two: how an agent stays grounded in a source document instead of guessing, and what it should do when the document genuinely does not answer the question.',
    'Before that my work centred on retrieval-augmented generation — designing question-answering systems over personal and domain databases, and measuring where retrieval actually improves reliability rather than only fluency.',
  ],
  interests: ['Web Agents', 'Document AI', 'Multimodal AI', 'LLM Systems'],
  experience: [
    { org: 'KISTI', role: 'Student Researcher', note: 'Korea Institute of Science and Technology Information' },
    { org: 'UST', role: 'M.S., Applied AI', note: 'University of Science and Technology' },
  ],
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Publications', href: '/publications' },
  { label: 'About', href: '/about' },
] as const;
