import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { label: "focus", value: "Prompt Engineering" },
    { label: "web", value: "HTML / CSS / JS basics" },
    { label: "frontend", value: "React / TypeScript" },
    { label: "styling", value: "Tailwind CSS" },
    { label: "ai tools", value: "Claude · Cursor · Grok · Copilot", isSecondary: true },
    { label: "builders", value: "Lovable · Gemini · ChatGPT", isSecondary: true },
    { label: "mindset", value: "ideas → prompts ✓", isGreen: true },
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
                Hey, I'm <span className="text-foreground font-semibold">Marlone Troy Dominguiano</span> — an aspiring web developer and prompt engineer. I already have the fundamentals of web development down, and I'm sharpening them every day while leaning hard into AI as my main craft.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I work fluently with the latest AI tools — <span className="text-foreground">Claude, Cursor, Grok, GitHub Copilot, Gemini, ChatGPT</span>, and builders like <span className="text-foreground">Lovable</span>. My specialty is turning raw ideas into precise prompts that ship real, working products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From e-commerce to fitness platforms, every project is a step deeper into AI-first development — where the edge isn't just writing code, it's knowing exactly what to ask, and how.
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
