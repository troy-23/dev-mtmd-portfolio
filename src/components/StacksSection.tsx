import { motion } from "framer-motion";
import { Instagram, Sparkles, Cpu, Workflow } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type Tier = {
  key: string;
  label: string;
  title: string;
  blurb: string;
  color: "primary" | "secondary" | "neon-green";
  icon: typeof Sparkles;
  items: { name: string; note: string }[];
};

const tiers: Tier[] = [
  {
    key: "mastered",
    label: "tier_01",
    title: "Mastered Stack",
    blurb: "Production-ready tools I use daily for cinematic AI output.",
    color: "primary",
    icon: Sparkles,
    items: [
      { name: "Google Veo 3.1", note: "High-fidelity technical & maritime visualizations." },
      { name: "CapCut AI", note: "Editing, captions, and AI-assisted post-production." },
      { name: "Topaz Video AI", note: "4K upscaling and frame interpolation." },
      { name: "ElevenLabs", note: "High-authority corporate voice synthesis." },
      { name: "Pika.art", note: "Fast iterative motion concepts." },
      { name: "Gemini", note: "Multimodal reasoning & creative direction." },
    ],
  },
  {
    key: "active",
    label: "tier_02",
    title: "Active Specializations",
    blurb: "In-progress workflows I'm refining for production-grade narratives.",
    color: "secondary",
    icon: Cpu,
    items: [
      { name: "Higgsfield", note: "High-motion cinematic sequence pipelines." },
      { name: "HeyGen", note: "AI-avatar integration for technical maritime decks." },
      { name: "NotebookLM", note: "Grounding scripts in decarbonization & smart-port docs." },
      { name: "LTX Studio", note: "Scene foundation & multi-shot character consistency." },
    ],
  },
  {
    key: "web",
    label: "tier_03",
    title: "AI-Integrated Web",
    blurb: "Shipping AI features inside real web products.",
    color: "neon-green",
    icon: Workflow,
    items: [
      { name: "Lovable + Supabase", note: "Full-stack AI apps with auth, DB, and edge functions." },
      { name: "Lovable AI Gateway", note: "LLM calls without managing keys." },
      { name: "RAG Foundations", note: "Chunking, retrieval, and source attribution patterns." },
      { name: "Prompt-driven UX", note: "Embedding generative flows directly in product UI." },
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
              Stack for <span className="text-primary text-glow-cyan">Prompt Engineering</span> &{" "}
              <span className="text-secondary text-glow-pink">Generative Workflows</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
              A tiered view of the tools I've mastered, the workflows I'm actively specializing in, and the
              methodology behind every shipped narrative.
            </p>
          </div>
        </ScrollReveal>

        {/* Tiered grid */}
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

        {/* MTMD Methodology card */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 relative bg-card border border-primary/30 rounded-sm p-8 overflow-hidden card-hover-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            <div className="relative grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  // methodology
                </span>
                <h3 className="font-mono text-xl font-bold text-foreground mt-2">
                  The <span className="text-primary text-glow-cyan">MTMD</span> Framework
                </h3>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  Model · Task · Methodology · Deployment — my repeatable system for turning a brief into a
                  production-ready generative output.
                </p>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                {[
                  { k: "Model", v: "Pick the right engine for the job — Veo, Gemini, ElevenLabs, etc." },
                  { k: "Task", v: "Define narrative goals, constraints, and evaluation criteria up front." },
                  { k: "Methodology", v: "Scene Foundation first — generate world & lighting before subjects for 100% environmental consistency across a 1-minute story." },
                  { k: "Deployment", v: "Upscale, post-process, and ship inside web or social pipelines." },
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

        {/* Yorty / Gemini real-world use */}
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
                  // real-world use
                </div>
                <h4 className="font-mono text-base font-bold text-foreground mt-1">
                  Gemini in my <span className="text-secondary text-glow-pink">toy business</span>
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed max-w-xl">
                  I use Gemini to generate product animations and short-form content for{" "}
                  <span className="text-foreground">@yortycollects</span> — turning static collectibles into
                  scroll-stopping motion.
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
