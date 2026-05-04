import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { label: "role", value: "Freelance Full Stack Web Developer", highlight: "primary" },
    { label: "specialty", value: "Prompt Engineer · Updated on Latest AI Tools", highlight: "secondary" },
    { label: "frontend", value: "React · TypeScript · Tailwind · Next.js · shadcn/ui", highlight: "default" },
    { label: "backend", value: "Supabase · PostgreSQL · Edge Functions", highlight: "default" },
    { label: "ai stack", value: "OpenAI · Claude · Gemini", highlight: "secondary" },
    { label: "builders", value: "Cursor · Copilot · Windsurf · Codex", highlight: "secondary" },
    { label: "hardware", value: "PC Assembly · Troubleshooting · Diagnostics", highlight: "default" },
    { label: "infra", value: "Vercel · Cloudflare · Docker", highlight: "default" },
    { label: "superpower", value: "ideas → systems → shipped products ✓", highlight: "green" },
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
              The <span className="text-secondary text-glow-pink">engineer</span> behind the systems
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base">
                I'm <span className="text-foreground font-semibold">Marlone Troy Dominguiano</span> — Fresh graduate with growing experience in prompt engineering and full-stack web development, currently focused on improving skills by building practical projects such as landing pages for small and large businesses, as well as system development. Keeps up with AI tools and workflows and continues learning through hands-on exploration and iteration.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                With solid experience in <span className="text-foreground">React, TypeScript, Next.js, and PostgreSQL</span>, I pair traditional web development with AI-assisted workflows using <span className="text-primary">Claude, Gemini, and OpenAI</span>. I leverage tools like <span className="text-primary">Cursor, Copilot, Windsurf, and Codex</span> to build and ship production-ready applications fast.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Beyond software, I'm skilled in <span className="text-foreground">hardware — PC assembly, disassembly, and troubleshooting</span>. I turn ideas into prompts — and prompts into shipped products. I deploy on <span className="text-foreground">Vercel, Cloudflare Workers, and Docker</span> because production means infrastructure, not just code.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-4 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary font-mono text-xs tracking-wider uppercase hover:bg-primary/10 transition-all"
                >
                  Let's build together →
                </a>
                
                <div className="flex items-center gap-3">
                  <motion.a
                    href="/Resumè (1).pdf"
                    download="Marlone-Troy-Dominguiano-Resume.pdf"
                    className="relative inline-flex items-center gap-2 px-4 py-3 border border-primary/30 text-primary font-mono text-xs tracking-wider uppercase transition-all group overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg 
                      className="w-4 h-4 transition-transform group-hover:scale-110" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                    Resume
                    {/* Glowing border animation */}
                    <motion.div
                      className="absolute inset-0 rounded-sm"
                      style={{
                        background: "linear-gradient(45deg, transparent, hsl(174 100% 50% / 0.3), transparent)",
                        backgroundSize: "200% 200%",
                      }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    {/* Pulsing glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-sm border border-primary"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 hsl(174 100% 50% / 0.4)",
                          "0 0 0 8px hsl(174 100% 50% / 0)",
                          "0 0 0 0 hsl(174 100% 50% / 0.4)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.a>
                  
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="font-mono text-[10px] text-muted-foreground/60 tracking-wider"
                  >
                    PDF • 124KB • (not updated)
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-1 bg-card border border-border rounded-sm p-6">
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-4">
                // system_matrix
              </div>
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className={`grid grid-cols-[1fr,1fr] gap-4 py-3 items-start ${i < skills.length - 1 ? "border-b border-border/50" : ""}`}>
                    <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">{skill.label}</span>
                    <span className={`font-mono text-xs sm:text-sm text-right ${highlightColor[skill.highlight as keyof typeof highlightColor]}`}>
                      {skill.value}
                    </span>
                  </div>
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
