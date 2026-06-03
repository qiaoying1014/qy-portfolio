import Image from "next/image";
import { JourneyRoadmap } from "./components/JourneyRoadmap";
import { ProjectShowcaseTabs, type ProjectShowcase } from "./components/ProjectShowcaseTabs";

const journey = [
  {
    label: "Oct 2022 - Sep 2026",
    title: "Bachelor of Software Engineering (Data Engineering) with Honours",
    description:
      "Studying at Universiti Teknologi Malaysia with a 3.90 CGPA and coursework across databases, ETL, big data, agile delivery, and software architecture.",
  },
  {
    label: "Sep 2025 - Jun 2026",
    title: "Software Developer Intern",
    description:
      "Building real-time fleet monitoring features for autonomous mobile robots at DF Automation & Robotics, across SvelteKit, Cordova, Django REST APIs, WebSockets, Redis-adjacent workflows, and FCM.",
  },
  {
    label: "Nov 2025 - Present",
    title: "Freelance Web Developer",
    description:
      "Delivering production-ready web systems with Next.js, TypeScript, Tailwind CSS, Supabase, authentication, CRUD workflows, cloud storage, SEO, and Vercel deployment.",
  },
];

const projects = [
  {
    name: "DFleet Mobile App",
    type: "AMR Fleet Management System",
    description:
      "Developed a cross-platform mobile application for monitoring and managing Autonomous Mobile Robots (AMRs) within industrial environments. The application provides real-time robot tracking, task monitoring, cart handling confirmation, push notifications, geofence management, and live operational updates through WebSocket communication. Integrated with an existing Django backend and enterprise fleet management infrastructure to support efficient warehouse and logistics operations.",
    tags: [
      "SvelteKit",
      "TypeScript",
      "Apache Cordova",
      "Django REST Framework",
      "WebSocket Communication",
      "Redis Cache",
      "REST APIs",
      "Firebase Cloud Messaging (FCM)"
    ],
  },
  {
    name: "Spaceo",
    type: "Service Marketplace Mobile Application",
    description:
      "Developing a scalable cross-platform service marketplace mobile application with role-based workflows for customers, service providers, and administrators. The system is structured around reusable SvelteKit components, mobile-ready Capacitor builds, NestJS API modules, Prisma-managed relational data, and Supabase authentication/database services. Core work includes service categorization, booking flows, frontend-backend integration, and maintainable full-stack architecture for future marketplace expansion.",
    tags: ["SvelteKit", "TypeScript", "Capacitor", "NestJS", "Supabase", "Prisma"],
  },
  {
    name: "International Marathon Sentiment Analysis",
    type: "Research Collaboration",
    description:
      "Contributing to an international research collaboration between Universiti Teknologi Malaysia and the University of Melbourne to analyze public sentiment around marathon events. Work focuses on collecting and preparing textual datasets, cleaning noisy social/media content, applying NLP techniques, and performing exploratory analysis to identify engagement patterns, public opinion trends, and potential factors that influence audience perception.",
    tags: ["Python", "NLP", "Data Analysis", "Research"],
  },
  {
    name: "AI-Powered Real-Time Sentiment Analytics Platform",
    type: "Real-Time Analytics Platform",
    description:
      "Engineered a scalable sentiment analytics platform for ingesting, processing, and visualizing streaming text data in real time. The platform uses Kafka and Zookeeper for data streaming, Spark/PySpark for distributed processing, and an NLP classification pipeline using TF-IDF, Logistic Regression, and transformer-based tooling. Processed results are indexed into Elasticsearch and visualized through Kibana dashboards, with Docker used to make the full stack reproducible across development environments.",
    tags: [
      "Python",
      "Apache Kafka",
      "Apache Spark",
      "Elasticsearch",
      "Kibana",
      "Docker",
      "Hugging Face",
      "REST APIs",
    ],
  },
  {
    name: "FYP Proposal Management System",
    type: "RBAC Workflow Web Application",
    description:
      "Developed a web-based Final Year Project (FYP) Proposal Management System to streamline proposal submission, supervision, evaluation, and approval workflows within a university environment. The system supports multiple user roles including Admin, Student, Supervisor, Evaluator, and Committee members with role-based access control, online proposal forms, PDF generation, evaluator assignment, and proposal tracking features.",
    tags: [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework Core",
      "Microsoft SQL Server",
      "Bootstrap",
      "ASP.NET Core Identity",
      "Razor Pages / Razor Views",
    ],
  },
];

const projectShowcases: ProjectShowcase[] = [
  {
    name: "DFleet Mobile App",
    focus: "Core mobile app functionality",
    description:
      "Screens from the AMR fleet management mobile app, covering home monitoring, operational statistics, and task tracking flows.",
    screenshots: [
      {
        src: "/dfleet-app/home/home-collapsed-sheet.webp",
        alt: "DFleet mobile app home screen with collapsed AMR details sheet",
        caption: "Home view with collapsed AMR details sheet",
        display: "mobile",
      },
      {
        src: "/dfleet-app/home/home-expanded-sheet.webp",
        alt: "DFleet mobile app home screen with expanded AMR details sheet",
        caption: "Home view with expanded AMR details sheet",
        display: "mobile",
      },
      {
        src: "/dfleet-app/statistics/statistics-1.webp",
        alt: "DFleet mobile app statistics overview screen",
        caption: "Statistics",
        display: "mobile",
      },
      {
        src: "/dfleet-app/task/task.webp",
        alt: "DFleet mobile app active task monitoring screen",
        caption: "Active Task monitoring",
        display: "mobile",
      },
    ],
  },
  {
    name: "Diamond Golf Zon",
    focus: "Responsive interface design",
    description:
      "Device views showing how the interface adapts across mobile, tablet, and laptop screen sizes.",
    screenshots: [
      {
        src: "/diamond-golf-zon/mobile.webp",
        alt: "Diamond Golf Zon mobile interface",
        caption: "Mobile interface",
        display: "mobile",
      },
      {
        src: "/diamond-golf-zon/tablet.webp",
        alt: "Diamond Golf Zon tablet interface",
        caption: "Tablet interface",
        display: "tablet",
      },
      {
        src: "/diamond-golf-zon/laptop.webp",
        alt: "Diamond Golf Zon laptop interface",
        caption: "Laptop interface",
        display: "desktop",
      },
    ],
  },
  {
    name: "Han Patisserie",
    focus: "Client admin CRUD workflow",
    description:
      "Admin-focused screens built around the client's CRUD requirements for managing patisserie operations and product content.",
    screenshots: [
      {
        src: "/han-patisserie/dashboard.webp",
        alt: "Han Patisserie admin dashboard",
        caption: "Admin dashboard",
        display: "desktop",
      },
      {
        src: "/han-patisserie/flavour-management.webp",
        alt: "Han Patisserie flavour management CRUD interface",
        caption: "Flavour CRUD management",
        display: "desktop",
      },
    ],
  },
];

const techStack = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    group: "Frontend",
    items: ["SvelteKit", "Next.js", "Tailwind CSS", "HTML", "CSS", "Figma"],
  },
  {
    group: "Backend",
    items: ["Django REST Framework", "NestJS", "REST APIs", "WebSocket"],
  },
  {
    group: "Database & Cloud",
    items: ["PostgreSQL", "Supabase", "Prisma ORM", "Redis", "AWS", "Vercel"],
  },
  {
    group: "Tools",
    items: ["Git", "Linux", "Firebase Cloud Messaging", "Apache Spark", "Apache Kafka"],
  },
  {
    group: "Concepts",
    items: ["Full Stack Development", "Real-Time Systems", "System Design", "SEO", "Agile"],
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/qiaoying1014",
    icon: "/github.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/qiao-ying-wong-6701b4181/",
    icon: "/linkedin.svg",
  },
  {
    label: "Email",
    href: "mailto:wongqiaoying@gmail.com",
    icon: "/email.svg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section
        id="intro"
        className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-16"
      >
        <div className="max-w-3xl">
          <p className="reveal text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
            Portfolio
          </p>
          <h1 className="reveal mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
            Wong Qiao Ying
          </h1>
          <p className="reveal mt-5 text-xl font-medium text-zinc-700 sm:text-2xl">
            Software Engineering • Data Engineering • Full Stack Development
          </p>
          <p className="reveal mt-7 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            Computer Science graduate with experience in full-stack software
            development, real-time systems, and backend integration through
            internship and freelance projects. Skilled in building scalable web
            and mobile applications using TypeScript, Django, REST APIs, Redis,
            and cloud technologies.
          </p>
          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
              Get in touch
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-12 w-12 items-center justify-center border border-zinc-300 bg-white transition hover:-translate-y-0.5 hover:border-zinc-950 hover:bg-zinc-50"
                >
                  <Image src={link.icon} alt="" width={22} height={22} />
                </a>
              ))}
              <a
                href="/Resume_WongQiaoYing.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center border border-zinc-950 px-4 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-zinc-950 hover:text-white"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="reveal profile-card relative mx-auto w-full max-w-86.25">
          <div
            className="absolute left-1/2 -top-4.5 z-10 h-10 w-28 -translate-x-1/2 -rotate-3 border border-zinc-300 bg-white/80 shadow-[0_6px_18px_rgba(0,0,0,0.08)] backdrop-blur-sm"
            aria-hidden="true"
          />
          <div className="relative rounded-sm border border-zinc-950 bg-white p-3 shadow-[12px_12px_0_#111111]">
            <div className="relative aspect-4/5 overflow-hidden border border-zinc-950 bg-zinc-100">
              <Image
                src="/qiaoying.jpg"
                alt="Portrait of Wong Qiao Ying"
                fill
                priority
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-end justify-between gap-4 border-t border-zinc-200 pt-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Portfolio ID
                </p>
                <p className="mt-2 text-xl font-semibold leading-tight">
                  Wong Qiao Ying
                </p>
              </div>
              <span className="border border-zinc-950 px-3 py-2 text-sm font-semibold">
                QY
              </span>
            </div>
          </div>
        </div>
      </section>

      <JourneyRoadmap items={journey} />

      <section id="projects" className="border-t border-zinc-200 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
            Project Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Selected work with product and research depth.
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article className="border border-zinc-200 bg-white p-6" key={project.name}>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  {project.type}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{project.name}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      className="border border-zinc-200 px-3 py-1 text-xs text-zinc-600"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="project-screenshots"
        className="border-t border-zinc-200 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
            Project Screenshots
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            A closer look at selected project interfaces.
          </h2>
          <ProjectShowcaseTabs projects={projectShowcases} />
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
            Tech Stack
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Tools I use to build and ship.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((stack) => (
              <article className="border border-zinc-200 bg-white p-5" key={stack.group}>
                <h3 className="text-base font-semibold">{stack.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span className="bg-zinc-100 px-3 py-1 text-xs text-zinc-700" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
