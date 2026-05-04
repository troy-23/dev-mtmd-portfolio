import { motion } from "framer-motion";
import { Instagram, Brain, Server, Globe, Wrench, Cloud, Play } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type Tier = {
  key: string;
  label: string;
  title: string;
  blurb: string;
  color: "primary" | "secondary" | "neon-green";
  icon: typeof Brain;
  items: { name: string; note: string }[];
};

const tiers: Tier[] = [
  {
    key: "ai-systems",
    label: "tier_01",
    title: "AI & LLM Tools",
    blurb: "The AI models and tools I use for prompt engineering and generative workflows.",
    color: "primary",
    icon: Brain,
    items: [
      { name: "OpenAI / Claude / Gemini", note: "Multi-model prompting for diverse AI tasks." },
      { name: "ElevenLabs", note: "Voice synthesis for AI-powered audio pipelines." },
    ],
  },
  {
    key: "fullstack",
    label: "tier_02",
    title: "Full Stack Web Dev (AI-Assisted)",
    blurb: "Modern web development powered by AI tools — landing pages shipped in 24 hours.",
    color: "secondary",
    icon: Server,
    items: [
      { name: "React 19 · TypeScript · Next.js", note: "Production frontend with SSR, ISR, and app router." },
      { name: "Tailwind CSS v4 · shadcn/ui · Framer Motion", note: "Design systems with interaction quality." },
      { name: "GSAP · ScrollTrigger", note: "Advanced scroll-driven animations and transitions." },
      { name: "Supabase · PostgreSQL", note: "Auth, realtime, edge functions, and raw SQL." },
      { name: "Vite 6", note: "Lightning-fast dev server and optimized production builds." },
    ],
  },
  {
    key: "infra",
    label: "tier_03",
    title: "Infra & Dev Tools",
    blurb: "Deployment, edge compute, and the AI-native development toolkit.",
    color: "neon-green",
    icon: Cloud,
    items: [
      { name: "Vercel", note: "Production deployments with edge middleware and analytics." },
      { name: "Cloudflare Workers", note: "Edge compute, KV storage, and global distribution." },
      { name: "Docker", note: "Containerized deployments and reproducible environments." },
      { name: "Cursor · Copilot · Windsurf · Codex", note: "AI-native IDEs for rapid development." },
    ],
  },
];

const colorMap = {
  primary: {
    border: "border-primary/30",
    text: "text-primary",
    glow: "text-glow-cyan",
    chip: "border-primary/30 text-primary hover:border-primary hover:shadow-[0_0_15px_hsl(174_100%_50%/0.25)]",
    dot: "bg-primary",
  },
  secondary: {
    border: "border-secondary/30",
    text: "text-secondary",
    glow: "text-glow-pink",
    chip: "border-secondary/30 text-secondary hover:border-secondary hover:shadow-[0_0_15px_hsl(330_100%_60%/0.25)]",
    dot: "bg-secondary",
  },
  "neon-green": {
    border: "border-neon-green/30",
    text: "text-neon-green",
    glow: "",
    chip: "border-neon-green/30 text-neon-green hover:border-neon-green hover:shadow-[0_0_15px_hsl(150_100%_50%/0.25)]",
    dot: "bg-neon-green",
  },
} as const;

const StacksSection = () => {
  return (
    <section id="stacks" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // technical stack
            </span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mt-2">
              Stack for <span className="text-primary text-glow-cyan">AI Engineering</span> &{" "}
              <span className="text-secondary text-glow-pink">Production Systems</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
              The tools and systems I use daily — always updated on the latest AI tools and workflows.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, ti) => {
            const c = colorMap[tier.color];
            const Icon = tier.icon;
            return (
              <ScrollReveal key={tier.key} delay={ti * 0.12} direction={ti === 0 ? "left" : ti === 2 ? "right" : "up"}>
                <div className={`relative h-full bg-card border ${c.border} rounded-sm p-6 card-hover-glow overflow-hidden`}>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-40" />
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                      {tier.label}
                    </span>
                    <Icon className={`w-4 h-4 ${c.text}`} />
                  </div>
                  <h3 className={`font-mono text-lg font-bold mb-2 ${c.text} ${c.glow}`}>
                    {tier.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-5 leading-relaxed">{tier.blurb}</p>
                  <ul className="space-y-3">
                    {tier.items.map((it, i) => (
                      <motion.li
                        key={it.name}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ti * 0.05 + i * 0.04 }}
                        className="flex gap-3"
                      >
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${c.dot} shrink-0`} />
                        <div className="text-sm">
                          <span className="font-mono text-foreground">{it.name}</span>
                          <span className="text-muted-foreground"> — {it.note}</span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Architecture Philosophy card */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 relative bg-card border border-primary/30 rounded-sm p-8 overflow-hidden card-hover-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            <div className="relative grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  // methodology
                </span>
                <h3 className="font-mono text-xl font-bold text-foreground mt-2">
                  How I <span className="text-primary text-glow-cyan">Develop</span>
                </h3>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  Every system follows a clear pipeline: architecture → implementation → deployment → iteration. No prototypes without production plans.
                </p>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                {[
                  { k: "Architecture", v: "Design data flow, pick the right models, define retrieval strategy and evaluation criteria." },
                  { k: "Implementation", v: "Type-safe full stack — React + Next.js frontend, PostgreSQL + edge functions backend, LLM orchestration layer." },
                  { k: "Deployment", v: "Vercel for web, Cloudflare for edge, Docker for services. CI/CD with zero-downtime deploys." },
                  { k: "Iteration", v: "Monitor, measure, improve. Analytics, error tracking, and user feedback loops built in from day one." },
                ].map((step) => (
                  <div key={step.k} className="border border-border rounded-sm p-4 bg-background/40">
                    <div className="font-mono text-xs text-primary mb-1">{step.k}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{step.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Generative media highlight */}
        <ScrollReveal delay={0.3}>
          <a
            href="https://www.instagram.com/yortycollects/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card border border-secondary/30 rounded-sm p-6 card-hover-glow"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 border border-secondary/30 rounded-sm">
                <Instagram className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  // generative media
                </div>
                <h4 className="font-mono text-base font-bold text-foreground mt-1">
                  AI-generated content for <span className="text-secondary text-glow-pink">@yortycollects</span>
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed max-w-xl">
                  Production AI media — Veo 3.1 visualizations, ElevenLabs voice synthesis, and Gemini-powered product animations deployed for a real business.
                </p>
              </div>
            </div>
            <span className="font-mono text-xs text-secondary group-hover:translate-x-1 transition-transform">
              view samples →
            </span>
          </a>
        </ScrollReveal>

        {/* Maritime AI Video Demo */}
        <ScrollReveal delay={0.4}>
          <a
            href="https://youtu.be/a_zTLaGDxvg?si=OKo6bnXAQLrJRye_"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card border border-primary/30 rounded-sm p-6 card-hover-glow"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 border border-primary/30 rounded-sm">
                <Play className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  // video demo
                </div>
                <h4 className="font-mono text-base font-bold text-foreground mt-1">
                  Maritime <span className="text-primary text-glow-cyan">AI Video Demo</span>
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed max-w-xl">
                  Complete AI-powered video production workflow — from concept planning to final editing using modern AI tools and platforms.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/[0.1] border border-primary/20 rounded font-mono text-[10px] text-primary/80 uppercase tracking-wider">
                    CapCut
                  </span>
                  <span className="px-2 py-1 bg-primary/[0.1] border border-primary/20 rounded font-mono text-[10px] text-primary/80 uppercase tracking-wider">
                    ElevenLabs
                  </span>
                  <span className="px-2 py-1 bg-primary/[0.1] border border-primary/20 rounded font-mono text-[10px] text-primary/80 uppercase tracking-wider">
                    Pika Art
                  </span>
                  <span className="px-2 py-1 bg-primary/[0.1] border border-primary/20 rounded font-mono text-[10px] text-primary/80 uppercase tracking-wider">
                    ChatGPT (Script)
                  </span>
                  <span className="px-2 py-1 bg-primary/[0.1] border border-primary/20 rounded font-mono text-[10px] text-primary/80 uppercase tracking-wider">
                    Gemini (Planning)
                  </span>
                </div>
              </div>
            </div>
            <span className="font-mono text-xs text-primary group-hover:translate-x-1 transition-transform">
              watch demo →
            </span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StacksSection;
