import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { label: "focus", value: "Prompt Engineering" },
    { label: "frontend", value: "React / TypeScript" },
    { label: "styling", value: "Tailwind CSS" },
    { label: "backend", value: "Supabase / Node" },
    { label: "tools", value: "Lovable / Cursor", isSecondary: true },
    { label: "mindset", value: "AI-first ✓", isGreen: true },
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
              The <span className="text-secondary text-glow-pink">story</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Hey, I'm <span className="text-foreground font-semibold">Marlone Troy Dominguiano</span> — an aspiring prompt engineer and AI-first developer. My journey started with curiosity about how AI can transform the way we build software, and it quickly became a passion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in crafting precise prompts and leveraging AI tools like Lovable and Cursor to turn ideas into fully functional web applications — faster and smarter. I believe the future of development is collaborative: humans guiding AI to create remarkable things.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every project I build is a step deeper into the AI development landscape — from e-commerce platforms to fitness apps, I'm constantly exploring what's possible when creativity meets intelligent tooling.
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
