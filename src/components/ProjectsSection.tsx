import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import ProjectCard from "./ProjectCard";

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
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            // projects
          </span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mt-2">
            What I've <span className="text-primary text-glow-cyan">built</span>
          </h2>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-card border border-border rounded-sm p-6 h-48 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project, i) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                projectUrl={project.project_url}
                techStack={project.tech_stack}
                index={i}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
