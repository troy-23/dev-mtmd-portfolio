import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

const ProjectsSection = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data;
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
