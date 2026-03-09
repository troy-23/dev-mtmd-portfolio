import { ExternalLink } from "lucide-react";
import ElectricBorder from "./ElectricBorder";
import { useAnimations } from "@/hooks/use-animations";

interface ProjectCardProps {
  title: string;
  description: string | null;
  projectUrl: string | null;
  techStack: string[] | null;
  index: number;
}

const ProjectCard = ({ title, description, projectUrl, techStack, index }: ProjectCardProps) => {
  const { enabled } = useAnimations();

  const inner = (
    <a
      href={projectUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card border border-border rounded-sm p-6 card-hover-glow relative overflow-hidden w-full h-full"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-primary transition-all duration-500" />

      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      <h3 className="font-mono text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        {description || "No description yet."}
      </p>

      <div className="flex flex-wrap gap-2">
        {techStack?.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs font-mono border border-border text-muted-foreground rounded-sm group-hover:border-primary/30 group-hover:text-primary/70 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom corner accent */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
    </a>
  );

  if (!enabled) return inner;

  return (
    <ElectricBorder
      color="hsl(174, 100%, 50%)"
      speed={0.8}
      chaos={0.1}
      borderRadius={2}
      style={{ width: "100%", height: "100%" }}
    >
      {inner}
    </ElectricBorder>
  );
};

export default ProjectCard;
