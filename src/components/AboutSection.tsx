import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { label: "role", value: "Full Stack Web Developer", highlight: "primary" },
    { label: "specialty", value: "Prompt Engineering & AI", highlight: "secondary" },
    { label: "frontend", value: "React · TypeScript · Tailwind", highlight: "default" },
    { label: "backend", value: "Supabase · Edge Functions", highlight: "default" },
    { label: "ai arsenal", value: "Claude · Cursor · Grok · Copilot", highlight: "secondary" },
    { label: "builders", value: "Lovable · Gemini · ChatGPT", highlight: "secondary" },
    { label: "superpower", value: "ideas → prompts → products ✓", highlight: "green" },
  ];

  const highlightColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    green: "text-neon-green",
    default: "text-foreground",
  };

  return (
    <section id="about" className="py-32 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // about me
            </span>
            <h2 className="font-mono text-3xl md:text-5xl font-bold text-foreground mt-3">
              The <span className="text-secondary text-glow-pink">developer</span> behind the prompts
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base">
                I'm <span className="text-foreground font-semibold">Marlone Troy Dominguiano</span> — a full stack web developer who happens to be exceptionally good at prompting. I don't just use AI tools — I master them to ship real products, fast.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                With a solid foundation in <span className="text-foreground">HTML, CSS, JavaScript, React, and TypeScript</span>, I combine traditional development skills with cutting-edge AI workflows. My toolkit includes <span className="text-primary">Claude, Cursor, Grok, GitHub Copilot, Gemini,</span> and <span className="text-primary">ChatGPT</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                From e-commerce platforms to fitness apps, every project I build is proof that the future of development isn't about choosing between code and AI — it's about mastering both.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary font-mono text-xs tracking-wider uppercase hover:bg-primary/10 transition-all"
                >
                  Let's work together →
                </a>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-1 bg-card border border-border rounded-sm p-6">
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-4">
                // skill_matrix
              </div>
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex justify-between items-center py-3 ${i < skills.length - 1 ? "border-b border-border/50" : ""}`}
                >
                  <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">{skill.label}</span>
                  <span className={`font-mono text-sm ${highlightColor[skill.highlight as keyof typeof highlightColor]}`}>
                    {skill.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
