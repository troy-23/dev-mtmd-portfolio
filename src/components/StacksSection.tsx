import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stacks = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"], color: "primary" },
  { category: "Backend", items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "Edge Functions"], color: "secondary" },
  { category: "Tools", items: ["Lovable", "Cursor", "VS Code", "Git", "Figma"], color: "neon-green" },
  { category: "Vibes", items: ["AI-Assisted Dev", "Rapid Prototyping", "Clean UI", "Dark Mode", "Ship Fast"], color: "primary" },
];

const colorMap: Record<string, string> = {
  primary: "border-primary/30 text-primary hover:border-primary hover:shadow-[0_0_15px_hsl(174_100%_50%/0.2)]",
  secondary: "border-secondary/30 text-secondary hover:border-secondary hover:shadow-[0_0_15px_hsl(330_100%_60%/0.2)]",
  "neon-green": "border-neon-green/30 text-neon-green hover:border-neon-green hover:shadow-[0_0_15px_hsl(150_100%_50%/0.2)]",
};

const headingColorMap: Record<string, string> = {
  primary: "text-primary text-glow-cyan",
  secondary: "text-secondary text-glow-pink",
  "neon-green": "text-neon-green",
};

const StacksSection = () => {
  return (
    <section id="stacks" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // tech stack
            </span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mt-2">
              My <span className="text-primary text-glow-cyan">arsenal</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stacks.map((stack, si) => (
            <ScrollReveal key={stack.category} delay={si * 0.12} direction={si % 2 === 0 ? "left" : "right"}>
              <div className="bg-card border border-border rounded-sm p-6 card-hover-glow">
                <h3 className={`font-mono text-lg font-bold mb-4 ${headingColorMap[stack.color]}`}>
                  {`{${stack.category}}`}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-3 py-1.5 text-xs font-mono border rounded-sm cursor-default transition-all duration-300 ${colorMap[stack.color]}`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StacksSection;
