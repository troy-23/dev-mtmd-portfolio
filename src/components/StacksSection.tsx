import { motion } from "framer-motion";
import { Instagram, Brain, Server, Globe, Wrench, Cloud } from "lucide-react";
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
    title: "AI & LLM Systems",
    blurb: "Production AI — RAG pipelines, streaming, tool calling, and agent orchestration.",
    color: "primary",
    icon: Brain,
    items: [
      { name: "OpenAI / Claude / Gemini", note: "Multi-model orchestration for production LLM apps." },
      { name: "LangChain & LlamaIndex", note: "RAG frameworks — retrieval, chunking, and source attribution." },
      { name: "Pinecone / Weaviate / Chroma", note: "Vector search and semantic retrieval at scale." },
      { name: "Streaming & Tool Calling", note: "Real-time responses with function-calling agents." },
      { name: "ElevenLabs", note: "Voice synthesis for AI-powered audio pipelines." },
    ],
  },
  {
    key: "fullstack",
    label: "tier_02",
    title: "Full Stack Engineering",
    blurb: "End-to-end web development with modern frameworks and type-safe backends.",
    color: "secondary",
    icon: Server,
    items: [
      { name: "React · TypeScript · Next.js", note: "Production frontend with SSR, ISR, and app router." },
      { name: "Tailwind · shadcn/ui · Framer Motion", note: "Design systems with interaction quality." },
      { name: "Supabase · PostgreSQL", note: "Auth, realtime, edge functions, and raw SQL." },
      { name: "tRPC · Prisma", note: "End-to-end type safety from DB to client." },
      { name: "TanStack Query", note: "Server state management with caching and optimistic updates." },
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
      { name: "Cursor · Copilot · Windsurf", note: "AI-native IDEs for 10x development velocity." },
      { name: "Continue.dev · Supermaven · Codeium", note: "Code intelligence and AI pair programming." },
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
              Not just tools — systems built with them. From RAG pipelines and vector search to 
              deployed full-stack applications on edge infrastructure.
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
                  How I <span className="text-primary text-glow-cyan">Ship</span>
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
      </div>
    </section>
  );
};

export default StacksSection;
