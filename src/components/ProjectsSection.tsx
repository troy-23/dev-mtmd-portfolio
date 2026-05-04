import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

const projectsData = [
  {
    id: "1",
    title: "Kensei",
    description: "Modern mockup concept exploring clean UI, refined typography, and immersive product storytelling — built end-to-end with AI-assisted workflows.",
    project_url: "https://kensei-v1-mockup.vercel.app/",
    tech_stack: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "2",
    title: "YortyCollects",
    description: "E-commerce platform for personal collectibles business.",
    project_url: "https://yorty-gems-collector.lovable.app/",
    tech_stack: ["React", "Tailwind CSS"],
  },
  {
    id: "3",
    title: "Hypertroyphy",
    description: "Complete platform for health & fitness education — workouts, nutrition, and personalized tracking.",
    project_url: "https://hypertroyphy-fitness.lovable.app/",
    tech_stack: ["React", "Tailwind CSS"],
  },
  {
    id: "4",
    title: "Casimiro GPU Repair Shop",
    description: "A professional landing page for a GPU repair shop — built with React 19, GSAP ScrollTrigger animations, and Tailwind CSS v4.",
    project_url: "https://casimiro-gpu-repair-shop.vercel.app/",
    tech_stack: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS v4", "GSAP", "Framer Motion", "Lucide React", "Vercel"],
  },
  {
    id: "5",
    title: "2K26 Pilot Service",
    description: "A modern landing page for a 2K26 game pilot/service platform — clean UI with React 19 and Tailwind CSS v4.",
    project_url: "https://izeinurveinzzz-pilotservice-modern.vercel.app/",
    tech_stack: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS v4", "Vercel"],
  },
];

const ProjectsSection = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return projectsData;
    },
  });

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
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
              Real products built with AI-first workflows — from concept to deployment.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mb-12 bg-card border border-border rounded-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="font-mono text-2xl font-bold text-primary mb-1">15+</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-secondary mb-1">48h</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Avg. Delivery Time</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-green-500 mb-1">100%</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-foreground mb-1">5★</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Average Rating</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-card border border-border rounded-sm p-6 h-56 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  projectUrl={project.project_url}
                  techStack={project.tech_stack}
                  index={i}
                />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
