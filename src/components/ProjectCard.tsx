import { ExternalLink } from "lucide-react";
import ElectricBorder from "./ElectricBorder";
import { useAnimations } from "@/hooks/use-animations";

interface ProjectCardProps {
  title: string;
  description: string | null;
  projectUrl: string | null;
  techStack: string[] | null;
  image?: string | null;
  type?: string | null;
  index: number;
}

const ProjectCard = ({ title, description, projectUrl, techStack, image, type, index }: ProjectCardProps) => {
  const { enabled } = useAnimations();

  const inner = (
    <a
      href={projectUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card border border-border rounded-sm card-hover-glow relative overflow-hidden w-full h-full"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-primary transition-all duration-500 z-10" />

      {/* Screenshot preview */}
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background">
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
          {type && (
            <span className="absolute top-3 left-3 px-2 py-0.5 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-sm font-mono text-[10px] text-primary uppercase tracking-wider">
              {type}
            </span>
          )}
        </div>
      )}

      <div className="p-6">
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
