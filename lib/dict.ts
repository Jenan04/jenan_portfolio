import { T } from "./tokens";

// ─── Types ────────────────────────────────────────────────────────────────────
export type ProjectStatus = "shipped" | "inprogress" | "capstone";

export interface ProjectLink {
  label: string;
  href: string;
  primary: boolean;
}

export interface ProjectContent {
  summary: string;
  motivation: string;
  challenge: string;
  architecture?: string;
  outcome: string;
}

export interface Project {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  plain: ProjectContent;
  tech: ProjectContent;
  stack: string[];
  color: string;
  links: ProjectLink[];
}

export interface Principle {
  title: string;
  code: string;
  note: string;
}

export interface LangDict {
  lang: string;
  dir: "ltr" | "rtl";
  navLinks: string[];
  navLabels: Record<string, string>;
  heroGreeting: string;
  heroBadge: string;
  heroQuote: string;
  heroTyped: string[];
  heroNeofetchCaption: string;
  sectionProjects: string;
  sectionProjectsTitle: string;
  sectionPrinciples: string;
  sectionPrinciplesTitle: string;
  togglePlain: string;
  toggleTech: string;
  statusShipped: string;
  statusInProgress: string;
  statusCapstone: string;
  labelMotivation: string;
  labelChallenge: string;
  labelArchitecture: string;
  labelOutcome: string;
  labelStack: string;
  labelLinks: string;
  linkLiveDemo: string;
  linkRepo: string;
  linkCaseStudy: string;
  linkLiveApp: string;
  linkDemoVideo: string;
  linkStaging: string;
  contactEyebrow: string;
  contactTitle: string;
  contactSubtitle: string;
  contactCopyEmail: string;
  contactCopied: string;
  footerMade: string;
  footerStack: string;
  projects: Project[];
  principles: Principle[];
}

// ─── Dictionary ───────────────────────────────────────────────────────────────
export const dict: Record<"en" | "ar", LangDict> = {
  en: {
    lang: "en",
    dir: "ltr",
    navLinks: ["about", "projects", "principles", "contact"],
    navLabels: {
      about: "About",
      projects: "Projects",
      principles: "Principles",
      contact: "Contact",
    },
    // heroGreeting: "Hi, I'm Jenan.",
    heroBadge: "Full-Stack Engineer",
    // heroQuote:
      // "Just as the sea reflects the shifting skies, code is a reflection of our thoughts.",
    heroTyped: [
      "$ whoami",
      "Jenan Y. AbuHasanein | Full-Stack Engineer",
      "$ uname -a",
      // "Gaza, Palestine · PHP · TypeScript · React · Laravel · Next.js",
      "Linux jenan-core 6.12.0 #1 SMP PREEMPT x86_64 · [PHP · Laravel · TypeScript · Next.js]",
      "$ cat philosophy.txt",
      "Just as the sea reflects the shifting skies, code is a reflection of our thoughts.",
      "Syntax is secondary to strong core concepts & logic.",
      // "Clean architecture. SOLID principles. Ship real things.",
      "$ _",
    ],
    heroNeofetchCaption: "My system specs — the dev version.",
    sectionProjects: "WHAT I'VE BUILT",
    sectionProjectsTitle: "Projects",
    sectionPrinciples: "HOW I THINK",
    sectionPrinciplesTitle: "Engineering Principles",
    togglePlain: "Plain English",
    toggleTech: "Under the Hood",
    statusShipped: "LIVE",
    statusInProgress: "IN PROGRESS",
    statusCapstone: "CAPSTONE",
    labelMotivation: "MOTIVATION",
    labelChallenge: "HARD PART",
    labelArchitecture: "ARCHITECTURE",
    labelOutcome: "OUTCOME",
    labelStack: "STACK",
    labelLinks: "LINKS",
    linkLiveDemo: "Live Demo",
    linkRepo: "Repository",
    linkCaseStudy: "Case Study",
    linkLiveApp: "Live App",
    linkDemoVideo: "Demo Video",
    linkStaging: "Live Staging",
    contactEyebrow: "OPEN TO WORK",
    contactTitle: "Let's build something worth building.",
    // contactSubtitle:
    //   "I'm looking for teams where engineering quality actually matters. If you're solving real problems, I'd love to talk.",
    contactCopyEmail: "Copy Email",
    contactCopied: "Copied!",
    footerMade: "Built with care Palestine.",
    footerStack: "Next.js · Tailwind CSS · Clean Architecture",
    projects: [
      {
        id: "muraqib",
        badge: "GRADUATION · CAPSTONE",
        name: "Muraqib",
        tagline: "AI-Driven DevSecOps CLI Tool",
        status: "capstone",
        plain: {
          summary:
            "An intelligent AI assistant for engineering teams that acts as a gatekeeper — automatically scanning code and dependencies for security risks before deployment. Like a security engineer who never sleeps.",
          motivation:
            "Most teams treat security as the last checklist item before shipping. Muraqib makes it impossible to skip: it runs inside your terminal, pre-commit, alongside the tools you're already using.",
          challenge:
            "Making it useful without being annoying. Security tools that cry wolf on every line get ignored. The challenge was tuning signal-to-noise so every flag actually matters.",
          outcome:
            "Developers ship with confidence, knowing their dependencies and environment have been scanned before a single line reaches production.",
        },
        tech: {
          summary:
            "AI-Driven DevSecOps CLI Tool built with Node.js/TypeScript, featuring custom environment parsing logic, automated dependency scanning engines, and AST analysis for security compliance enforcement.",
          motivation:
            "Existing SAST tools are either CI-only or too noisy for local dev use. Muraqib targets the earliest intervention point: the developer's own terminal, pre-commit.",
          challenge:
            "Cross-ecosystem dependency graph resolution (npm, Maven, pip) and reducing false-positive rates using AI-assisted triage on vulnerability findings.",
          architecture:
            "CLI Entry → Environment Parser → Dependency Graph Resolver → AST Analyzer → Security Engine → AI Remediation Layer → Structured Report Emitter",
          outcome:
            "Validates against CVE databases with AI-assisted context. Runs in watch mode for continuous enforcement. Validated academically and on live codebases.",
        },
        stack: ["TypeScript", "Node.js", "CLI Frameworks", "AI APIs", "AST Parser", "CVE Engine"],
        color: T.amber,
        links: [
          { label: "linkRepo", href: "https://github.com/Jenan04/muraqib", primary: true },
          { label: "linkCaseStudy", href: "#muraqib", primary: false },
        ],
      },
      {
        id: "medki",
        badge: "SAAS · EDTECH · MEDICAL",
        name: "Medki",
        tagline: "Universal Medical Study Tool & AI Flashcard Converter",
        status: "inprogress",
        plain: {
          summary:
            "A specialized study platform for medical students that instantly converts messy clinical handwritten notes, slides, and PDFs into structured Anki flashcard decks using AI — so students spend their time learning, not formatting.",
          motivation:
            "Active recall is the most evidence-backed study technique, but making flashcard decks manually from clinical notes is brutally tedious. Medki removes that friction entirely.",
          challenge:
            "Making file upload feel instant even when AI processing takes time. Nobody wants to stare at a spinner wondering if it broke.",
          outcome:
            "Students upload their notes and get a study-ready Anki deck in seconds. Less prep, more learning.",
        },
        tech: {
          summary:
            "Full-stack decoupled system: Next.js 15 (App Router), Laravel 13 (PHP 8.4-FPM), Gemini API for OCR/AI parsing, Cloudinary async media pipeline, PostgreSQL 15, Nginx Alpine, Docker Compose.",
          motivation:
            "The differentiator is an automated file→structured-deck pipeline powered by LLM extraction and CSV normalization — no manual input required.",
          challenge:
            "Async job queue architecture for large file processing without blocking the UI. Graceful error handling and partial result streaming were the hard engineering problems.",
          architecture:
            "Upload → Async Queue → Gemini OCR → AI Extraction → CSV Normalizer → Deck Builder → Anki Export → Spaced Repetition Scheduler",
          outcome:
            "Sub-10s deck generation from raw PDFs, slides, and handwritten notes. Cloudinary handles media variants. Clean separation between ingestion, processing, and study layers.",
        },
        stack: [
          "Next.js 15",
          "Laravel 13",
          "PHP 8.4",
          "Gemini API",
          "Cloudinary",
          "PostgreSQL 15",
          "Docker",
          "Nginx",
        ],
        color: T.blue,
        links: [
          { label: "linkRepo", href: "https://github.com/Jenan04/medki", primary: true },
        ],
      },
      {
        id: "taskly",
        badge: "PRODUCTIVITY · LIVE",
        name: "Taskly",
        tagline: "Task Management Application",
        status: "shipped",
        plain: {
          summary:
            "A sleek, responsive productivity and task tracking application designed for smooth user interaction and organized workflows. Clean UI, no clutter — just the features you actually use.",
          motivation:
            "Most task apps are either too complex or too basic. Taskly finds the productive middle: intuitive enough to use immediately, structured enough to stay organized.",
          challenge:
            "Building a fluid, responsive experience that works across all devices without sacrificing functionality or UX quality.",
          outcome:
            "A deployed, live task management app that users can start using immediately with zero onboarding friction.",
        },
        tech: {
          summary:
            "Next.js 15 (App Router), TypeScript, Tailwind CSS 3.3, React Hooks for state management, ESLint, pnpm.",
          motivation:
            "App Router gives file-based routing and server components out of the box, keeping the bundle lean. TypeScript enforces contract at the component boundary.",
          challenge:
            "Managing optimistic UI updates and local state sync without a backend. React Hooks + careful state architecture handles it cleanly.",
          architecture:
            "Next.js App Router → React Components → Local State (React Hooks) → Tailwind UI Layer",
          outcome:
            "Deployed to Vercel. Responsive across all viewports. Zero runtime errors in production.",
        },
        stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "React Hooks", "ESLint", "pnpm"],
        color: T.teal,
        links: [
          {
            label: "linkLiveDemo",
            href: "https://tasklyrafiq.vercel.app/",
            primary: true,
          },
          {
            label: "linkRepo",
            href: "https://github.com/Jenan-AbuHasanein/tm01.git",
            primary: false,
          },
        ],
      },
      {
        id: "rickmorty",
        badge: "FRONTEND · LIVE",
        name: "Rick & Morty Explorer",
        tagline: "Interactive Character & Episode Directory",
        status: "shipped",
        plain: {
          summary:
            "An interactive directory app allowing fans to search, filter, and explore characters and episode appearances instantly. Snappy, responsive, and fun to use.",
          motivation:
            "A technical exercise in real-world API integration, server state management, and building a polished user experience from a public REST API.",
          challenge:
            "Debounced search that feels instant without hammering the API. Filtering across multiple dimensions simultaneously without UI jank.",
          outcome:
            "A live, deployed app with smooth filtering, instant search, and character detail views across the full Rick and Morty universe.",
        },
        tech: {
          summary:
            "React + TypeScript, TanStack Query for server state management, React Router for navigation, Tailwind CSS, REST API integration with debounced search.",
          motivation:
            "TanStack Query handles caching, background refetching, and loading/error states automatically — removing a lot of boilerplate from API-heavy UIs.",
          challenge:
            "Combining client-side filtering with paginated server state. TanStack Query's cache invalidation strategy was the key architectural decision.",
          architecture:
            "React Router → Page Components → TanStack Query Cache → REST API → Debounced Search Filter Layer",
          outcome:
            "Deployed on Render. Smooth paginated exploration, instant character search, episode cross-reference. No unnecessary re-fetches.",
        },
        stack: [
          "React",
          "TypeScript",
          "TanStack Query",
          "React Router",
          "Tailwind CSS",
          "REST API",
        ],
        color: T.green,
        links: [
          {
            label: "linkLiveDemo",
            href: "https://gsg-technical-task.onrender.com/",
            primary: true,
          },
        ],
      },
      {
        id: "sharespace",
        badge: "SAAS · CONTENT",
        name: "ShareSpace",
        tagline: "Digital Asset Management & Blog Platform",
        status: "inprogress",
        plain: {
          summary:
            "A private content and digital asset platform enabling pseudo-authenticated users to store, publish, and manage personal files and articles securely — no more hunting through Slack threads for 'the final version.'",
          motivation:
            "Content teams lose enormous time on asset chaos. ShareSpace gives everything a home: searchable, permissioned, and connected to publishing.",
          challenge:
            "Building something flexible enough for different teams but structured enough to actually stay organized over time.",
          outcome:
            "Teams find, approve, and publish assets without leaving the platform. Live staging environment already deployed.",
        },
        tech: {
          summary:
            "Next.js 15, TypeScript, Tailwind CSS, GraphQL API (@graphql-yoga/node), Prisma ORM + SQLite, Jest unit testing.",
          motivation:
            "GraphQL lets the client request exactly what it needs — critical for a multi-content-type DAM where over-fetching kills performance. Prisma gives type-safe DB access.",
          challenge:
            "Schema flexibility for versioned assets without running migrations on every content-type addition. Permission layering across roles and asset types.",
          architecture:
            "Next.js App Router → GraphQL Yoga API → Prisma ORM → SQLite → CDN Delivery → Audit Log",
          outcome:
            "Full-stack platform with reusable component system, GraphQL schema, typed DB access, and Jest coverage. Live staging deployed.",
        },
        stack: [
          "Next.js 15",
          "TypeScript",
          "GraphQL",
          "Prisma",
          "SQLite",
          "Tailwind CSS",
          "Jest",
        ],
        color: T.purple,
        links: [
          {
            label: "linkStaging",
            href: "https://sharespace-staging.vercel.app/",
            primary: true,
          },
        ],
      },
      {
        id: "levelup",
        badge: "SAAS · HRTECH",
        name: "LevelUp",
        tagline: "Engineer Competency & Recruitment Platform",
        status: "inprogress",
        plain: {
          summary:
            "An AI-backed evaluation platform that measures developers' real technical skills and problem-solving abilities fairly — based on how they actually think, not how well they perform under whiteboard pressure.",
          motivation:
            "Technical hiring is broken. The best engineers often fail interviews that reward anxiety-management over real skill. LevelUp tries to fix that.",
          challenge:
            "Designing assessments that feel like real work, not trick questions — and making AI scoring transparent enough that both candidates and recruiters trust it.",
          outcome:
            "Recruiters get a skill-mapped profile per candidate. Engineers get evaluated on reasoning quality, not memorized syntax.",
        },
        tech: {
          summary:
            "Full-stack system with automated evaluation algorithms, dynamic competency analytics dashboard, LLM-graded code review exercises, and a structured competency matrix.",
          motivation:
            "LLM-graded code review exercises that assess reasoning depth, not just correctness. Assessment categories mapped to real engineering competency frameworks.",
          challenge:
            "Prompt engineering for consistent, fair scoring across diverse code styles. Preventing prompt injection from candidates and ensuring evaluation reproducibility.",
          architecture:
            "Candidate Portal → Assessment Engine → LLM Evaluator → Competency Matrix Mapper → Score Normalizer → Recruiter Dashboard",
          outcome:
            "End-to-end evaluation flow. AI scores code review exercises with rationale. Skill-mapped output feeds directly into recruiter-facing dashboards.",
        },
        stack: ["React", "Spring Boot", "LLM APIs", "PostgreSQL", "JWT Auth", "Docker"],
        color: T.cyan,
        links: [{ label: "linkDemoVideo", href: "#levelup", primary: true }],
      },
    ],
    principles: [
      {
        title: "Clean Architecture",
        code: `// Dependency rule: outer layers depend on inner.
// Business rules never know UI or DB exist.

domain/
  entities/        // Pure business objects
  use-cases/       // Application logic only

infrastructure/
  repositories/    // Implements domain ports
  api/             // HTTP adapter layer

// The domain doesn't know Express or Laravel exists.`,
        note: "I learned this the hard way: controllers that talk directly to databases make every feature a complete rewrite.",
      },
      {
        title: "SOLID in Practice",
        code: `// Single Responsibility: one reason to change
class UserRegistrationService {
  register(dto: RegisterDto) { ... }
  // NOT: sendEmail(), hashPassword() here
}

// Dependency Inversion: depend on abstractions
interface SecurityScanner {
  scan(deps: Dependency[]): Finding[]
}
// Muraqib's scanner is pluggable — swap engines.`,
        note: "SOLID isn't a checklist. It's a pressure test: 'if this changed, how much breaks?'",
      },
      {
        title: "Scrum as Communication",
        code: `Sprint Planning ──► Daily Sync ──► Review
       │                                   │
       └─────── Retrospective ◄────────────┘

// What actually matters:
// · Backlog sized to shippable units
// · PRs that tell a story
// · Retros that change something (not theater)`,
        note: "Process only earns its overhead when it removes ambiguity. Otherwise, cut it.",
      },
    ],
  },

  ar: {
    lang: "ar",
    dir: "rtl",
    navLinks: ["about", "projects", "principles", "contact"],
    navLabels: {
      about: "عن جنان",
      projects: "المشاريع",
      principles: "منهجيتي",
      contact: "التواصل",
    },
    heroGreeting: "مرحباً، أنا جنان.",
    heroBadge: "مهندسة برمجيات",
    heroQuote: "كما تعكس البحار السماء المتغيرة، الكود هو انعكاس لأفكارنا.",
    heroTyped: [
      "$ whoami",
      "جنان أبو حسنين — مهندسة برمجيات .",
      "$ uname -a",
      "Linux jenan-core 6.12.0 #1 SMP PREEMPT x86_64 · [PHP · Laravel · TypeScript · Next.js]",      "$ cat philosophy.txt",
      "كما يعكس البحر تحولات السماء، فإن الكود هو انعكاس لأفكارنا.",
      "السنتاكس مجرد أداة ثانوية أمام المفاهيم الجوهرية والمنطق المتين.",
      "$ _",
    ],
    heroNeofetchCaption: "مواصفات نظامي — النسخة التقنية.",
    sectionProjects: "ما بنيته",
    sectionProjectsTitle: "المشاريع",
    sectionPrinciples: "كيف أفكر",
    sectionPrinciplesTitle: "مبادئ هندسية",
    togglePlain: "بلغة بسيطة",
    toggleTech: "التفاصيل التقنية",
    statusShipped: "مباشر",
    statusInProgress: "قيد التطوير",
    statusCapstone: "مشروع تخرج",
    labelMotivation: "الدافع",
    labelChallenge: "التحدي",
    labelArchitecture: "المعمارية",
    labelOutcome: "النتيجة",
    labelStack: "التقنيات",
    labelLinks: "الروابط",
    linkLiveDemo: "تجربة مباشرة",
    linkRepo: "كود المشروع",
    linkCaseStudy: "دراسة الحالة",
    linkLiveApp: "التطبيق المباشر",
    linkDemoVideo: "فيديو تجريبي",
    linkStaging: "بيئة الاختبار",
    contactEyebrow: "متاحة للعمل",
    contactTitle: "لنبني شيئاً يستحق أن يُبنى.",
    // contactSubtitle:
      // "أبحث عن فرق يهمها جودة الكود فعلاً. إذا كنت تحل مشاكل حقيقية، أودّ التحدث.",
    contactCopyEmail: "نسخ الإيميل",
    contactCopied: "تم النسخ!",
    footerMade: "صُنع بعناية فلسطين.",
    footerStack: "Next.js · Tailwind CSS · Clean Architecture",
    projects: [
      {
        id: "muraqib",
        badge: "مشروع التخرج · أمن برمجيات",
        name: "مراقب",
        tagline: "أداة DevSecOps مدعومة بالذكاء الاصطناعي",
        status: "capstone",
        plain: {
          summary:
            "مساعد ذكي لفرق الهندسة يعمل كحارس بوابة — يفحص الكود والتبعيات تلقائياً بحثاً عن ثغرات أمنية قبل النشر. كمهندس أمن لا ينام.",
          motivation:
            "معظم الفرق تتعامل مع الأمان كآخر بند في قائمة المهام. مراقب يجعله حاضراً دائماً داخل الطرفية، قبل الـ commit.",
          challenge:
            "أن يكون مفيداً دون أن يكون مزعجاً. أدوات الأمان التي تصرخ عند كل سطر تُتجاهل. التحدي كان ضبط الإشارة مقابل الضوضاء.",
          outcome:
            "المطورون يشحنون بثقة، مع علمهم أن التبعيات والبيئة فُحصت قبل أي سطر كود.",
        },
        tech: {
          summary:
            "أداة CLI للـ DevSecOps مبنية بـ Node.js/TypeScript، تتضمن منطق تحليل البيئة المخصص، محركات فحص التبعيات الآلية، وتحليل AST لفرض الامتثال الأمني.",
          motivation:
            "أدوات SAST الموجودة إما محصورة في CI أو مزعجة جداً. مراقب يستهدف أقرب نقطة تدخل: طرفية المطور نفسها.",
          challenge:
            "تحليل شجرة التبعيات عبر أنظمة متعددة (npm, Maven, pip) وتقليل الإيجابيات الكاذبة باستخدام AI.",
          architecture:
            "CLI → محلل البيئة → محرك التبعيات → محلل AST → محرك الأمان → طبقة AI للإصلاح → مُصدِر التقارير",
          outcome:
            "يتحقق من قواعد CVE مع سياق مدعوم بالذكاء الاصطناعي. يعمل في وضع المراقبة المستمرة. تم التحقق أكاديمياً.",
        },
        stack: ["TypeScript", "Node.js", "CLI Frameworks", "AI APIs", "AST Parser", "CVE Engine"],
        color: T.amber,
        links: [
          { label: "linkRepo", href: "https://github.com/Jenan04/muraqib", primary: true },
          { label: "linkCaseStudy", href: "#muraqib", primary: false },
        ],
      },
      {
        id: "medki",
        badge: "SaaS · تعليمي · طبي",
        name: "ميدكي",
        tagline: "أداة دراسة طبية وتحويل ملاحظات بالذكاء الاصطناعي",
        status: "inprogress",
        plain: {
          summary:
            "منصة دراسة متخصصة لطلاب الطب تحوّل الملاحظات السريرية المكتوبة بخط اليد والشرائح وملفات PDF فوراً إلى بطاقات Anki منظمة باستخدام AI.",
          motivation:
            "الاسترجاع النشط هو الأسلوب الأكثر فاعلية علمياً في الحفظ، لكن إنشاء البطاقات من الملاحظات السريرية مرهق للغاية.",
          challenge:
            "جعل رفع الملفات يبدو فورياً حتى عندما تستغرق معالجة AI وقتاً. لا أحد يريد أن يحدق في شاشة تحميل.",
          outcome: "يرفع الطلاب ملاحظاتهم ويحصلون على بطاقات Anki خلال ثوانٍ. تعلم أكثر، تنسيق أقل.",
        },
        tech: {
          summary:
            "نظام كامل مفصول: Next.js 15 (App Router)، Laravel 13 (PHP 8.4-FPM)، Gemini API للـ OCR والذكاء الاصطناعي، Cloudinary، PostgreSQL 15، Nginx Alpine، Docker Compose.",
          motivation:
            "الفارق هو خط أتمتة ملف→بطاقة مبني على استخراج LLM وتطبيع CSV — بدلاً من الإدخال اليدوي.",
          challenge:
            "معمارية قائمة على طوابير انتظار غير متزامنة لمعالجة الملفات الكبيرة دون تجميد الواجهة.",
          architecture:
            "رفع → قائمة انتظار → Gemini OCR → استخراج AI → تطبيع CSV → بناء البطاقات → تصدير Anki",
          outcome:
            "توليد بطاقات في أقل من 10 ثوانٍ من ملفات PDF والشرائح والملاحظات المكتوبة بخط اليد.",
        },
        stack: [
          "Next.js 15",
          "Laravel 13",
          "PHP 8.4",
          "Gemini API",
          "Cloudinary",
          "PostgreSQL 15",
          "Docker",
        ],
        color: T.blue,
        links: [
          { label: "linkRepo", href: "https://github.com/Jenan04/medki", primary: true },
        ],
      },
      {
        id: "taskly",
        badge: "إنتاجية · مباشر",
        name: "تاسكلي",
        tagline: "تطبيق إدارة المهام",
        status: "shipped",
        plain: {
          summary:
            "تطبيق إنتاجية وتتبع مهام سلس ومتجاوب، مصمم لتجربة مستخدم سلسة وسير عمل منظم. واجهة نظيفة بلا فوضى.",
          motivation:
            "معظم تطبيقات المهام إما معقدة جداً أو بسيطة جداً. تاسكلي يجد المنتصف المنتج.",
          challenge:
            "بناء تجربة متجاوبة وسلسة تعمل على جميع الأجهزة دون التضحية بجودة الوظائف.",
          outcome:
            "تطبيق مُنشر ومباشر يمكن للمستخدمين البدء به فوراً دون أي احتكاك في عملية التهيئة.",
        },
        tech: {
          summary:
            "Next.js 15 (App Router)، TypeScript، Tailwind CSS 3.3، React Hooks لإدارة الحالة، ESLint، pnpm.",
          motivation:
            "App Router يوفر routing مبني على الملفات و server components جاهزة، مما يُبقي الحزمة خفيفة.",
          challenge:
            "إدارة تحديثات واجهة المستخدم التفاؤلية ومزامنة الحالة المحلية بدون backend.",
          architecture:
            "Next.js App Router → React Components → React Hooks State → Tailwind UI",
          outcome: "منشور على Vercel. متجاوب على جميع الشاشات. صفر أخطاء في الإنتاج.",
        },
        stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "React Hooks", "ESLint", "pnpm"],
        color: T.teal,
        links: [
          { label: "linkLiveDemo", href: "https://tasklyrafiq.vercel.app/", primary: true },
          {
            label: "linkRepo",
            href: "https://github.com/Jenan-AbuHasanein/tm01.git",
            primary: false,
          },
        ],
      },
      {
        id: "rickmorty",
        badge: "واجهة أمامية · مباشر",
        name: "Rick & Morty Explorer",
        tagline: "دليل تفاعلي للشخصيات والحلقات",
        status: "shipped",
        plain: {
          summary:
            "تطبيق دليل تفاعلي يتيح للمعجبين البحث والتصفية واستكشاف الشخصيات وظهوراتهم في الحلقات فوراً.",
          motivation:
            "تمرين تقني في تكامل API الحقيقي وإدارة حالة الخادم وبناء تجربة مستخدم متقنة.",
          challenge: "بحث مُؤخر يبدو فورياً دون إرهاق الـ API. تصفية متعددة الأبعاد في آن واحد بدون تأخر.",
          outcome: "تطبيق مُنشر ومباشر مع تصفية سلسة وبحث فوري وعروض تفصيلية للشخصيات.",
        },
        tech: {
          summary:
            "React + TypeScript، TanStack Query لإدارة حالة الخادم، React Router، Tailwind CSS، تكامل REST API مع بحث مُؤخر.",
          motivation:
            "TanStack Query تتعامل مع caching وإعادة الجلب في الخلفية وحالات التحميل/الخطأ تلقائياً.",
          challenge:
            "دمج التصفية من جانب العميل مع حالة الخادم المرقّمة. استراتيجية إبطال cache في TanStack Query.",
          architecture:
            "React Router → Page Components → TanStack Query Cache → REST API → Debounced Search",
          outcome: "منشور على Render. استكشاف مرقّم سلس، بحث فوري، مرجع متقاطع للحلقات.",
        },
        stack: [
          "React",
          "TypeScript",
          "TanStack Query",
          "React Router",
          "Tailwind CSS",
          "REST API",
        ],
        color: T.green,
        links: [
          {
            label: "linkLiveDemo",
            href: "https://gsg-technical-task.onrender.com/",
            primary: true,
          },
        ],
      },
      {
        id: "sharespace",
        badge: "SaaS · محتوى",
        name: "شيرسبيس",
        tagline: "إدارة الأصول الرقمية ومنصة نشر",
        status: "inprogress",
        plain: {
          summary:
            "منصة محتوى وأصول رقمية خاصة تتيح للمستخدمين تخزين الملفات والمقالات ونشرها وإدارتها بأمان.",
          motivation: "تضيع فرق المحتوى وقتاً هائلاً في فوضى الأصول. ShareSpace يمنح كل شيء منزلاً.",
          challenge:
            "تصميم مخطط مرن لإدارة الأصول الإصدارية دون ترحيلات مع كل نوع محتوى جديد.",
          outcome:
            "تجد الفرق الأصول وتوافق عليها وتنشرها دون مغادرة المنصة. بيئة اختبار مباشرة.",
        },
        tech: {
          summary:
            "Next.js 15، TypeScript، Tailwind CSS، GraphQL API (@graphql-yoga/node)، Prisma ORM + SQLite، اختبار Jest.",
          motivation:
            "GraphQL يتيح للعميل طلب ما يحتاجه فقط — ضروري لـ DAM متعدد أنواع المحتوى.",
          challenge:
            "مرونة المخطط للأصول الإصدارية بدون ترحيلات. طبقة صلاحيات عبر الأدوار وأنواع الأصول.",
          architecture:
            "Next.js App Router → GraphQL Yoga → Prisma ORM → SQLite → CDN → Audit Log",
          outcome:
            "منصة كاملة مع نظام مكونات قابل لإعادة الاستخدام وتغطية Jest. بيئة اختبار مُنشرة.",
        },
        stack: [
          "Next.js 15",
          "TypeScript",
          "GraphQL",
          "Prisma",
          "SQLite",
          "Tailwind CSS",
          "Jest",
        ],
        color: T.purple,
        links: [
          {
            label: "linkStaging",
            href: "https://sharespace-staging.vercel.app/",
            primary: true,
          },
        ],
      },
      {
        id: "levelup",
        badge: "SaaS · توظيف",
        name: "ليفل أب",
        tagline: "منصة تقييم المهندسين والتوظيف",
        status: "inprogress",
        plain: {
          summary:
            "منصة تقييم مدعومة بالذكاء الاصطناعي تقيس المهارات التقنية الحقيقية لقدرات حل المشكلات لدى المطورين بعدالة.",
          motivation:
            "التوظيف التقني مكسور. أفضل المهندسين يفشلون في مقابلات تكافئ إدارة القلق لا المهارة الحقيقية.",
          challenge: "تصميم تقييمات تبدو كعمل حقيقي، وجعل تقييم AI شفافاً بما يكفي.",
          outcome:
            "المسؤولون عن التوظيف يحصلون على ملف مهارات مفصّل. المهندسون يُقيَّمون على جودة التفكير.",
        },
        tech: {
          summary:
            "نظام كامل مع خوارزميات تقييم آلية ولوحة تحليلات كفاءة ديناميكية وتمارين مراجعة كود تُصنّفها LLM ومصفوفة كفاءات منظمة.",
          motivation:
            "تمارين مراجعة كود تُصنّفها LLM لتقييم عمق التفكير، لا الصحة فحسب.",
          challenge:
            "هندسة prompt للتصنيف المتسق والعادل. منع حقن prompt ضمان قابلية استنساخ التقييم.",
          architecture:
            "بوابة مرشح → محرك تقييم → مقيّم LLM → مصفوفة كفاءات → لوحة توظيف",
          outcome: "تدفق تقييم شامل. AI تُقيّم مع منطق التقييم. مرتبط بلوحات توظيف.",
        },
        stack: ["React", "Spring Boot", "LLM APIs", "PostgreSQL", "JWT Auth", "Docker"],
        color: T.cyan,
        links: [{ label: "linkDemoVideo", href: "#levelup", primary: true }],
      },
    ],
    principles: [
      {
        title: "العمارة النظيفة",
        code: `// قاعدة التبعية: الطبقات الخارجية تعتمد على الداخلية.
// قواعد العمل لا تعرف شيئاً عن الواجهة أو قاعدة البيانات.

domain/
  entities/      // كائنات العمل الصافية
  use-cases/     // منطق التطبيق فقط

infrastructure/
  repositories/  // تنفيذ منافذ الـ domain
  api/           // طبقة تكيّف HTTP`,
        note: "تعلمت هذا بالطريقة الصعبة: controllers تتحدث مباشرة إلى قواعد البيانات تجعل كل ميزة إعادة كتابة كاملة.",
      },
      {
        title: "SOLID في الواقع",
        code: `// مسؤولية واحدة: سبب واحد للتغيير
class UserRegistrationService {
  register(dto: RegisterDto) { ... }
  // ليس هنا: sendEmail(), hashPassword()
}

// عكس التبعية: اعتمد على التجريدات
interface SecurityScanner {
  scan(deps: Dependency[]): Finding[]
}
// محرك مراقب قابل للتبديل بحرية.`,
        note: "SOLID ليست قائمة مراجعة. إنها اختبار ضغط: 'لو تغير هذا، كم شيء سينكسر؟'",
      },
      {
        title: "Scrum كتواصل",
        code: `تخطيط السبرنت ──► متابعة يومية ──► مراجعة
          │                                    │
          └────── استرجاع الدروس ◄─────────────┘

// ما يهم فعلاً:
// · عناصر backlog قابلة للشحن
// · Pull Requests تحكي قصة
// · استرجاعات تُغيّر شيئاً (لا مسرح فارغ)`,
        note: "العملية تستحق تكلفتها فقط عندما تزيل الغموض. وإلا، احذفها.",
      },
    ],
  },
};