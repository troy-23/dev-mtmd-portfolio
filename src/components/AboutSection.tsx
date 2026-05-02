import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { label: "role", value: "Full Stack AI Web Engineer", highlight: "primary" },
    { label: "specialty", value: "AI Systems · RAG · Production LLM Apps", highlight: "secondary" },
    { label: "frontend", value: "React · TypeScript · Tailwind · Next.js · shadcn/ui", highlight: "default" },
    { label: "backend", value: "Supabase · PostgreSQL · Edge Functions · tRPC", highlight: "default" },
    { label: "ai stack", value: "OpenAI · Claude · Gemini · LangChain · LlamaIndex · Pinecone", highlight: "secondary" },
    { label: "builders", value: "Cursor · Copilot · Windsurf · Continue.dev · Supermaven · Codeium", highlight: "secondary" },
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
                I'm <span className="text-foreground font-semibold">Marlone Troy Dominguiano</span> — a full stack AI web engineer who builds production-grade systems, not just prototypes. I architect end-to-end solutions from retrieval pipelines to deployed applications.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                With deep experience in <span className="text-foreground">React, TypeScript, Next.js, and PostgreSQL</span>, I pair traditional engineering with AI-native workflows. I build with <span className="text-primary">LangChain, LlamaIndex, Pinecone</span> for RAG systems, and leverage <span className="text-primary">Claude, Gemini, and OpenAI</span> for production LLM applications with streaming responses, tool calling, and agent orchestration.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Every project I ship proves that modern development is about building intelligent systems — RAG pipelines, vector search, real-time AI features — not just wiring up APIs. I deploy on <span className="text-foreground">Vercel, Cloudflare Workers, and Docker</span> because production means infrastructure, not just code.
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
                  Let's build together →
                </a>
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
                  className={`flex justify-between items-center py-3 ${i < skills.length - 1 ? "border-b border-border/50" : ""}`}
                >
                  <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">{skill.label}</span>
                  <span className={`font-mono text-xs sm:text-sm text-right ${highlightColor[skill.highlight as keyof typeof highlightColor]}`}>
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
