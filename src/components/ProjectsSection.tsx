import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

const projectsData = [
  {
    id: "1",
    title: "Quinnfall Music",
    type: "Music App",
    image: "/screenshots/quinnfall.jpg",
    description: "A responsive music library where people can stream audio and video, with song details and play counts handled through Redis. I built the custom admin tools, secure server-side authentication, and graceful media fallbacks, then hardened everything for production.",
    project_url: "https://quinnfall-music.vercel.app/",
    tech_stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Redis/KV"],
  },
  {
    id: "2",
    title: "Kensei",
    type: "Product Mockup",
    image: "/screenshots/kensei.jpg",
    description: "A polished product mockup focused on clean UI, careful typography, and storytelling that makes the product feel real. I designed and built it from start to finish using AI-assisted workflows.",
    project_url: "https://kensei-v1-mockup.vercel.app/",
    tech_stack: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "3",
    title: "Hireyert",
    type: "Web App",
    image: "/screenshots/hireyert.jpg",
    description: "A hiring and recruiting app built on a modern Next.js stack. It pairs reusable Radix UI components with smooth form flows, clear charts, and subtle animation, all deployed on Vercel.",
    project_url: "https://hireyert.vercel.app/",
    tech_stack: ["Next.js 16.2.6", "React 19", "TypeScript", "Tailwind CSS v4", "Radix UI", "Framer Motion", "Recharts", "Vercel"],
  },
  {
    id: "4",
    title: "Kaelveyra",
    type: "Dashboard",
    image: "/screenshots/kaelveyra.jpg",
    description: "An analytics-focused Next.js app built with React 19 and TypeScript. It leans on clean charts, smooth motion, and shadcn-style components to make data easy to read at a glance.",
    project_url: "https://kaelveyra.vercel.app/",
    tech_stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Recharts", "Lucide React", "Radix UI"],
  },
  {
    id: "5",
    title: "YortyCollects",
    type: "E-commerce",
    image: "/screenshots/yortycollects.jpg",
    description: "An e-commerce storefront for a collectibles business, designed to show products at their best and turn browsers into buyers, with AI-assisted content shaping the direction.",
    project_url: "https://yorty-gems-collector.lovable.app/",
    tech_stack: ["React", "Tailwind CSS"],
  },
  {
    id: "6",
    title: "Hypertroyphy",
    type: "Fitness Platform",
    image: "/screenshots/hypertroyphy.jpg",
    description: "A health and fitness learning platform that brings together workouts, nutrition guidance, and personalized tracking to help people actually stick with their goals.",
    project_url: "https://hypertroyphy-fitness.lovable.app/",
    tech_stack: ["React", "Tailwind CSS"],
  },
  {
    id: "7",
    title: "Casimiro GPU Repair Shop",
    type: "Landing Page",
    image: "/screenshots/casimiro.jpg",
    description: "A landing page for a GPU repair shop with service-focused copy and responsive sections. GSAP scroll animations add a layer of polish, and it's deployed and ready for real customers.",
    project_url: "https://casimiro-gpu-repair-shop.vercel.app/",
    tech_stack: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS v4", "GSAP", "Framer Motion", "Lucide React", "Vercel"],
  },
  {
    id: "8",
    title: "2K26 Pilot Service",
    type: "Landing Page",
    image: "/screenshots/pilot.jpg",
    description: "A clean, modern landing page for a 2K26 pilot service. The layout keeps the offer front and center, and it ships fast on Vercel.",
    project_url: "https://izeinurveinzzz-pilotservice-modern.vercel.app/",
    tech_stack: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS v4", "Vercel"],
  },
  {
    id: "9",
    title: "RMC Collective Studio",
    type: "Portfolio",
    image: "/screenshots/rmc.jpg",
    description: "A creative studio portfolio with bold typography and fluid, Lenis-powered scrolling. Built on the latest Next.js and React for a fast, polished feel.",
    project_url: "https://rmc-collective-studio-portfolio.vercel.app/",
    tech_stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Lenis", "Vercel"],
  },
  {
    id: "10",
    title: "Ruth Yap — Writer",
    type: "Portfolio",
    image: "/screenshots/ruthyap.jpg",
    description: "A portfolio for a professional writer, designed around the writing itself with clean typography, smooth Lenis scrolling, and subtle Framer Motion touches.",
    project_url: "https://ruthyap-writer.vercel.app/",
    tech_stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Radix UI", "Lenis"],
  },
  {
    id: "11",
    title: "JCB Portfolio",
    type: "Portfolio",
    image: "/screenshots/jcb.jpg",
    description: "A personal portfolio hand-built in vanilla HTML, CSS, and JavaScript, with smooth GSAP scroll animations and a clean, content-first layout.",
    project_url: "https://jcb-portfolio-6.vercel.app/",
    tech_stack: ["HTML5", "CSS3", "JavaScript", "GSAP", "Vercel"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.01] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // featured work
            </span>
            <h2 className="font-mono text-3xl md:text-5xl font-bold text-foreground mt-3">
              What I've <span className="text-primary text-glow-cyan">shipped</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
              Real products that solve real problems — built on solid fundamentals, sharpened
              with AI, and shaped around what each client actually needs.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mb-12 bg-card border border-border rounded-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="font-mono text-2xl font-bold text-primary mb-1">11</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Live Projects</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-secondary mb-1">Days</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Not Weeks To Ship</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-green-500 mb-1">End-to-End</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Design to Deploy</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-foreground mb-1">Open</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">To Work</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <ProjectCard
                title={project.title}
                description={project.description}
                projectUrl={project.project_url}
                techStack={project.tech_stack}
                image={project.image}
                type={project.type}
                index={i}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
