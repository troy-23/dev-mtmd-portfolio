import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { label: "frontend", value: "React / TypeScript" },
    { label: "styling", value: "Tailwind CSS" },
    { label: "backend", value: "Supabase / Node" },
    { label: "tools", value: "Lovable / Cursor", isSecondary: true },
    { label: "vibes", value: "immaculate ✓", isGreen: true },
  ];

  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // about
            </span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mt-2">
              The <span className="text-secondary text-glow-pink">vibe</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a vibecoder — I build web apps by channeling creative energy into code.
                Every project starts with a feeling and ends with a product that moves people.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My stack is whatever gets the vibe right. React, TypeScript, Tailwind,
                and a healthy dose of AI-assisted development. The future is now.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-4">
              <div className="font-mono text-sm">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex justify-between items-center py-3 ${i < skills.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <span className="text-muted-foreground">{skill.label}</span>
                    <span className={skill.isGreen ? "text-neon-green" : skill.isSecondary ? "text-secondary" : "text-primary"}>
                      {skill.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
