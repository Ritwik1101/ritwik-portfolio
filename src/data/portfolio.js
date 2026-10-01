/**
 * All portfolio copy lives here. Edit this file to update the site.
 * Links and contact details live in src/config.js.
 *
 * Project fields that are empty or omitted are simply not rendered
 * (e.g. no liveUrl → no "Live demo" button; no caseStudy.outcome → no Outcome block).
 */
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../config'

export const links = {
  github: GITHUB_URL,
  linkedin: LINKEDIN_URL,
  resume: RESUME_URL,
  email: EMAIL,
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const profile = {
  name: 'Ritwik Sarade',
  role: 'Software Engineer',
  secondaryRole: 'Full Stack Engineer',
  location: 'Pune, Maharashtra, India',
  shortLocation: 'Pune, India',
  availability: 'Open to Software Engineering opportunities',
  experience: '1.5+ years',
  headline: {
    lead: 'Building Full-Stack Products with',
    emphasis: 'AI and Engineering Thinking.',
  },
  supporting:
    'Software Engineer focused on building production-ready backend systems, APIs, and user-facing applications with Python, FastAPI, React, SQL and AI.',
  quickFacts: [
    { label: 'Experience', value: '1.5+ years', detail: 'Production web, mobile, backend & AI' },
    { label: 'Currently', value: 'QBee', detail: 'Software Engineer, AI learning platform' },
    { label: 'Production scale', value: '6,000+ users', detail: 'Across student, teacher & admin apps' },
    { label: 'Core stack', value: 'Python · FastAPI', detail: 'React · React Native · PostgreSQL' },
  ],
}

export const about = {
  paragraphs: [
    'I am a Software Engineer with production-level full-stack development experience, focused on building backend APIs, scalable application workflows and modern React interfaces.',
    'My strongest areas are Python, FastAPI, React, JavaScript, SQL and API development.',
    'I enjoy taking features from idea to implementation and working across both backend and frontend systems.',
  ],
  coreTechnologies: [
    'Python',
    'FastAPI',
    'PostgreSQL',
    'React.js',
    'React Native',
    'JavaScript',
    'Node.js',
    'REST APIs',
    'LLM APIs',
    'Git/GitHub',
    'Docker',
  ],
  education: {
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    school: 'Marathwada Mitra Mandal’s Institute of Technology (MMIT), Pune',
    period: '2021 – 2025',
  },
}

export const engineeringThinking = {
  title: 'AI + Engineering Thinking',
  quote: {
    lead: "I don't just use AI.",
    emphasis: 'I engineer with it.',
  },
  body: 'AI shortens the distance between an idea and working code. It does not replace the decisions that make software hold up in production. I use it to move faster, and keep the engineering calls my own.',
  accelerates: {
    label: 'AI accelerates',
    items: [
      { title: 'Exploration', copy: 'Surveying approaches, libraries and unfamiliar code faster.' },
      { title: 'Debugging', copy: 'Narrowing down root causes and testing hypotheses quickly.' },
      { title: 'Development', copy: 'Turning well-defined designs into working code sooner.' },
      { title: 'Experimentation', copy: 'Prototyping alternatives cheaply before committing.' },
    ],
  },
  owns: {
    label: 'Engineering judgment decides',
    items: [
      { title: 'Architecture', copy: 'How the system is structured and where responsibilities live.' },
      { title: 'System design', copy: 'Data flow, APIs and how components fit together.' },
      { title: 'Technical decisions', copy: 'Which tools and patterns fit the problem.' },
      { title: 'Trade-offs', copy: 'Weighing simplicity, performance and maintainability.' },
      { title: 'Implementation quality', copy: 'Correctness, readability and production readiness.' },
    ],
  },
  closing: 'AI speeds up the loop. Engineering judgment decides what ships.',
}

export const experience = [
  {
    id: 'qbee',
    role: 'Software Engineer',
    company: 'QBee',
    companyDetail: 'AI-Powered Learning Platform · Product-based company',
    period: 'Oct 2025 – Present',
    current: true,
    stats: [
      { value: '6,000+', label: 'users' },
      { value: '25+', label: 'schools onboarded' },
      { value: '20,000+', label: 'quizzes served' },
      { value: '100,000+', label: 'question bank capacity' },
      { value: '1,200+', label: 'devices reached daily' },
    ],
    highlights: [
      'Built and shipped production features for a React Native learning application serving 6,000+ users across student, teacher, school and admin workflows.',
      'Developed Python, FastAPI, PostgreSQL and REST APIs powering quizzes, submissions, analytics, classrooms, homework, reporting and 20,000+ quizzes.',
      'Designed and developed the complete ReactJS Admin Console, providing centralised management and analytics for users, schools, classrooms, quizzes, content and reports.',
      'Built AI/LLM-powered quiz and content generation pipelines using PDF/JSON content, syllabus structures, question banks, subtopics and exam-specific targeting.',
      'Created an end-to-end school onboarding flow covering school, teacher, classroom and student setup, onboarding 25+ schools onto the platform.',
      'Designed a reusable question bank supporting 100,000+ questions, with shared question membership across tests and quiz generation optimised through caching.',
      'Implemented an end-to-end push notification service with APNs/Expo — device-token registration, backend delivery handling and React Native integration — reaching 1,200+ devices daily.',
      'Developed AI narration, flashcards, video/PDF learning, gamification, QPoints, streaks, leaderboards, deep linking, OTP and media workflows, managing production database changes through Alembic migrations.',
      'Developed dynamic banner management for admins and a secure user deletion flow across frontend, APIs and database.',
      'Owned features end to end — from requirement analysis and API/database design through frontend implementation, testing, debugging and production release.',
    ],
    visibleHighlights: 5,
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Alembic', 'React Native', 'Expo', 'ReactJS', 'LLM APIs', 'APNs'],
  },
  {
    id: 'datavave',
    role: 'Software Development Engineer Intern',
    company: 'Datavave.ai',
    companyDetail: 'Paid internship',
    period: 'May 2025 – Sep 2025',
    highlights: [
      'Developed interactive, responsive client dashboards with ReactJS, HTML, CSS and JavaScript, enabling NBFCs to visualise financial data, loan metrics and risk insights.',
      'Developed RESTful APIs with Python and FastAPI, ensuring secure data flow and high performance across multiple system components.',
      'Built backend algorithms for credit risk assessment and loan eligibility prediction, with reusable wrappers to streamline data processing and API integration.',
      'Contributed to the orchestration layer integrating frontend, backend and AI modules for seamless workflows and real-time loan processing.',
    ],
    stack: ['Python', 'FastAPI', 'ReactJS', 'JavaScript', 'HTML', 'CSS'],
  },
]

export const skillGroups = [
  { key: 'languages', title: 'Languages', items: ['Python', 'JavaScript', 'C++'] },
  {
    key: 'backend',
    title: 'Backend',
    items: ['FastAPI', 'REST APIs', 'Node.js', 'SQLAlchemy', 'Alembic'],
  },
  {
    key: 'frontend',
    title: 'Frontend & Mobile',
    items: ['React.js', 'React Native', 'Expo', 'HTML', 'CSS'],
  },
  {
    key: 'database',
    title: 'Databases & Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Pandas'],
  },
  {
    key: 'ai',
    title: 'AI / GenAI',
    items: ['LLM APIs', 'RAG', 'Prompt Engineering', 'NLP', 'AI content generation'],
  },
  {
    key: 'engineering',
    title: 'Engineering',
    items: ['API Design', 'DSA', 'OOP', 'Git/GitHub', 'Docker', 'Debugging'],
  },
]

export const technicalStack = [
  {
    layer: 'Interface',
    description: 'Web and mobile applications',
    items: [
      'React.js',
      'React Native',
      'Expo',
      'JavaScript',
      'HTML / CSS',
      'API integration',
      'Forms',
      'State management',
      'Responsive UI',
    ],
  },
  {
    layer: 'API',
    description: 'Services and business logic',
    items: [
      'Python',
      'FastAPI',
      'Node.js',
      'REST APIs',
      'Async programming',
      'Authentication',
      'RBAC',
      'Caching',
      'Push notifications',
    ],
  },
  {
    layer: 'Data',
    description: 'Storage, modelling and migrations',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'SQLAlchemy ORM',
      'Alembic migrations',
      'Relationships',
      'Transactions',
      'Indexing',
    ],
  },
  {
    layer: 'AI',
    description: 'LLM features and pipelines',
    items: ['LLM APIs', 'RAG', 'Prompt engineering', 'AI content generation', 'NLP'],
  },
  {
    layer: 'Workflow',
    description: 'How the work gets shipped',
    items: ['Git/GitHub', 'Docker', 'Cursor', 'Claude Code', 'Debugging', 'Production releases'],
  },
]

export const projects = [
  {
    id: 'qbee',
    name: 'QBee — AI Learning Platform',
    category: 'Production · Web, Mobile & AI',
    badge: 'In production',
    featured: true,
    context: 'Built as Software Engineer at QBee',
    shortDescription:
      'An AI-powered learning platform with a React Native app, a ReactJS admin console and FastAPI services, used by students, teachers, schools and admins.',
    metric: { value: '6,000+', label: 'users across 25+ schools' },
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'React Native', 'ReactJS', 'LLM APIs'],
    features: [
      'AI/LLM quiz and content generation pipelines',
      'Reusable question bank for 100,000+ questions',
      'Complete ReactJS admin console',
      'Push notifications to 1,200+ devices daily',
    ],
    flow: ['React Native app · Admin console', 'FastAPI REST APIs', 'PostgreSQL', 'LLM content pipelines'],
    githubUrl: '',
    liveUrl: '',
    caseStudy: {
      problem:
        'One platform had to serve four very different audiences — students, teachers, schools and admins — with quizzes, homework, classrooms, analytics and AI-generated learning content, all at production scale.',
      approach:
        'Built the product across every layer: FastAPI and PostgreSQL services behind a React Native learning app, a ReactJS admin console for operations, and LLM pipelines for generating quizzes and content.',
      architecture:
        'React Native (Expo) and ReactJS clients talk to Python/FastAPI REST APIs backed by PostgreSQL, with schema changes managed through Alembic migrations. LLM pipelines turn PDF/JSON content, syllabus structures and question banks into exam-targeted quizzes, and an APNs/Expo service handles push notifications.',
      contribution:
        'Owned features end to end, from requirement analysis and API/database design through frontend implementation, testing, debugging and production release. Designed and built the complete admin console, the school onboarding flow, the question bank and the push notification service.',
      details: [
        'APIs for quizzes, submissions, analytics, classrooms, homework and reporting',
        'AI/LLM quiz and content generation with subtopic and exam-specific targeting',
        'Question bank supporting 100,000+ questions with shared membership across tests, and caching for faster quiz generation',
        'End-to-end school onboarding: school, teacher, classroom and student setup',
        'Push notifications: device-token registration, backend delivery and React Native integration',
        'AI narration, flashcards, gamification (QPoints, streaks, leaderboards), deep linking and OTP',
        'Secure user deletion across frontend, APIs and database',
      ],
      outcome:
        'A production platform serving 6,000+ users, with 25+ schools onboarded, 20,000+ quizzes powered by the APIs, and notifications reaching 1,200+ devices daily.',
      note: 'Proprietary production codebase, so the source isn’t public.',
    },
  },
  {
    id: 'credit-risk',
    name: 'Credit Risk Scoring System',
    category: 'Python · ML · LLM',
    context: 'Datavave.ai SDE assignment',
    shortDescription:
      'A Python pipeline that processes bank CSV data, scores credit risk with logistic regression and generates PDF credit reports with LLM-written, banker-style summaries.',
    metric: { value: '1,000+', label: 'synthetic transactions evaluated' },
    technologies: ['Python', 'Logistic Regression', 'LLM', 'Data pipelines', 'PDF reports'],
    features: [
      '5+ engineered financial features',
      'Logistic regression risk scoring',
      'Automated PDF reports with LLM summaries',
    ],
    files: {
      modules: ['data_acquisition.py', 'pipeline.py', 'risk_model.py', 'report_generator.py'],
      outputs: ['final_score.txt', 'credit_report.pdf'],
    },
    githubUrl: 'https://github.com/Ritwik1101/Credit-Risk-Score-system',
    liveUrl: '',
    caseStudy: {
      problem:
        'Raw bank transaction data in CSV form needed to become a credit-risk score and a report a banker could actually read.',
      approach:
        'Built a modular Python pipeline: engineer financial features from the transactions, score risk with a logistic regression model, then generate a PDF report with an LLM-written, banker-style summary.',
      architecture:
        'Responsibilities are split across modules: data_acquisition.py, pipeline.py, risk_model.py and report_generator.py. The model writes its score to final_score.txt, and the report generator produces credit_report.pdf.',
      contribution:
        'Designed and implemented the pipeline end to end: data processing, feature engineering, risk modelling and report generation.',
      details: [
        'Evaluated 1,000+ synthetic transactions',
        'Engineered 5+ financial features',
        'Logistic regression model for the credit score',
        'PDF report generation with LLM-generated banker-style summaries',
      ],
      outcome:
        'An automated path from bank CSV data to a credit score and a readable PDF credit report.',
    },
  },
  {
    id: 'voice-chatbot',
    name: 'AI Voice-Interactive Chatbot',
    category: 'Python · NLP · Speech',
    shortDescription:
      'A real-time voice chatbot combining speech-to-text, OpenAI ChatGPT and text-to-speech for spoken conversations.',
    metric: { value: '85%+', label: 'transcription accuracy' },
    technologies: ['Python', 'NLP', 'OpenAI API', 'Google Speech-to-Text', 'Text-to-Speech'],
    features: ['Real-time voice input', 'ChatGPT-powered responses', 'Spoken replies via text-to-speech'],
    flow: ['Voice input', 'Speech-to-Text', 'OpenAI ChatGPT', 'Text-to-Speech'],
    githubUrl: '',
    liveUrl: '',
    caseStudy: {
      problem:
        'Typed-only chatbots can’t hold a natural spoken conversation; voice needs to go in, be understood and come back out as speech.',
      approach:
        'Chained Google Speech-to-Text, OpenAI ChatGPT and a Text-to-Speech API in Python, with NLP handling the conversational layer.',
      architecture:
        'Microphone audio → Google Speech-to-Text → OpenAI ChatGPT for the response → Text-to-Speech for the spoken reply.',
      contribution: 'Built the full voice loop, from speech recognition through response generation to spoken output.',
      details: [
        'Real-time speech recognition with Google Speech-to-Text',
        'Response generation with OpenAI ChatGPT',
        'Spoken replies through a Text-to-Speech API',
      ],
      outcome: 'A real-time voice chatbot with 85%+ transcription accuracy.',
    },
  },
  {
    id: 'nft-marketplace',
    name: 'NFT Marketplace',
    category: 'Web3 · Full Stack',
    shortDescription:
      'A full-stack Web3 NFT marketplace supporting buying, selling, auctions and wallet integration.',
    metric: { value: '~10%', label: 'reduction in gas costs' },
    technologies: ['React.js', 'Node.js', 'Solidity', 'Ethereum', 'Web3'],
    features: ['Buy and sell NFTs', 'Auction functionality', 'MetaMask / Web3 wallet integration'],
    flow: ['React frontend', 'Node.js backend', 'Web3 / MetaMask', 'Solidity on Ethereum'],
    githubUrl: 'https://github.com/Ritwik1101/Create-NFT-and-its-Marketpalce',
    liveUrl: '',
    caseStudy: {
      problem:
        'Trading NFTs needs more than a gallery: buyers and sellers need purchase, sale and auction flows that execute on-chain, and a web client that can talk to their wallet.',
      approach:
        'Built it as a full-stack Web3 application — Solidity smart contracts for marketplace operations, a Node.js backend, and a React frontend with MetaMask / Web3 wallet integration.',
      architecture:
        'A React client for the marketplace UI, a Node.js backend for application services, and Solidity smart contracts on Ethereum for buying, selling and auctions, connected through Web3 and the user’s wallet.',
      contribution:
        'Built the marketplace across the React frontend, Node.js backend and Solidity smart contracts, including wallet integration and auction functionality.',
      details: [
        'NFT buying and selling flows from the React client',
        'Auction functionality',
        'MetaMask / Web3 wallet integration',
        'Solidity smart contracts on Ethereum',
        'Node.js backend services',
      ],
      outcome:
        'A working NFT marketplace with buying, selling, auctions and wallet-connected trading. Reduced gas costs by approximately 10%.',
    },
  },
  {
    id: 'ipl-data-analysis',
    name: 'IPL Data Analysis',
    category: 'Python · Data Analysis',
    shortDescription:
      'Analysed IPL match data across 100+ matches to derive insights using Python, Pandas, visualisation and SQL.',
    metric: { value: '100+', label: 'matches analysed' },
    technologies: ['Python', 'Pandas', 'Matplotlib', 'SQL'],
    features: ['Data wrangling with Pandas', 'SQL querying', 'Matplotlib visualisation'],
    flow: ['Match data', 'Pandas', 'SQL', 'Matplotlib', 'Insights'],
    githubUrl: '',
    liveUrl: '',
    caseStudy: {
      problem:
        'Match-level IPL data is hard to reason about until it has been cleaned, queried and visualised.',
      approach:
        'Worked through data from 100+ IPL matches with Python and Pandas, used SQL for structured queries and Matplotlib for visualisation.',
      architecture: 'A Python analysis workflow: match data → Pandas → SQL queries → Matplotlib charts.',
      contribution: 'Carried out the analysis end to end — data handling, querying, visualisation and insights.',
      details: [
        'Coverage of 100+ matches',
        'Pandas for data processing',
        'SQL for querying',
        'Matplotlib for visualisation',
      ],
      outcome: 'Insights derived from IPL match data across 100+ matches.',
    },
  },
]
