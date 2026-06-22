import { Code, Zap, Globe, Cpu, ArrowRight, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    icon: Code,
    title: "AI-Assisted Web Development",
    description: "Complete web applications and business websites — built with React, Next.js, and TypeScript, or whatever stack the project actually needs. Because I work AI-first, I'm not locked to one toolset; I adapt to the right tools and ship fast without cutting corners.",
    features: ["Stack-Flexible", "API Development", "Database Design", "Rapid Prototyping"],
    delivery: "20+ days"
  },
  {
    id: 2,
    icon: Globe,
    title: "Landing Pages & Websites",
    description: "Landing pages and portfolio or business sites built to convert, with modern visuals, clear copy, and the kind of performance that keeps visitors around.",
    features: ["Responsive Design", "SEO Copy", "Fast Loading", "Analytics Integration"],
    delivery: "4-7 days"
  },
  {
    id: 3,
    icon: Zap,
    title: "AI Content & Automation",
    description: "AI-assisted content workflows covering scripts, visuals, voiceovers, product animations, and chatbots, plus automation for the repetitive tasks that eat up your time.",
    features: ["Prompt Systems", "AI Video Content", "Voice Synthesis", "Workflow Automation"],
    delivery: "1-2 weeks"
  },
  {
    id: 4,
    icon: Cpu,
    title: "Deployment & Technical Support",
    description: "Production deployment, troubleshooting, and performance cleanup, plus hands-on technical support across both software and PC hardware.",
    features: ["Cloud Deployment", "Performance Cleanup", "PC Diagnostics", "Monitoring Setup"],
    delivery: "1-3 weeks"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // services
            </span>
            <h2 className="font-mono text-3xl md:text-5xl font-bold text-foreground mt-3">
              What I <span className="text-primary text-glow-cyan">build</span> for clients
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
              Development and AI content services for businesses, creators, and teams — pairing
              real fundamentals with smart use of AI to solve practical problems, fast.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/[0.1] rounded-sm group-hover:bg-primary/[0.2] transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-lg font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, j) => (
                          <span
                            key={j}
                            className="px-2 py-1 bg-primary/[0.05] border border-primary/20 rounded font-mono text-[10px] text-primary/80 uppercase tracking-wider"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-border/50">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="font-mono text-xs text-muted-foreground">
                            {service.delivery}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="bg-card border border-border rounded-sm p-8">
            <div className="text-center mb-6">
              <h3 className="font-mono text-xl font-bold text-foreground mb-2">
                Ready to build your portfolio website?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Let's turn your idea into a site that actually ships. Landing pages in
                <span className="text-primary"> 4-7 days</span>, full builds in
                <span className="text-primary"> 20+ days</span> — timelines flex to fit what you need.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300"
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px hsl(174 100% 50% / 0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="/Update v1 resume.pdf"
                download="Marlone-Troy-Dominguiano-Resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-3 border border-primary/30 text-primary font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300"
                whileHover={{ scale: 1.03, backgroundColor: "hsl(174 100% 50% / 0.1)" }}
                whileTap={{ scale: 0.97 }}
              >
                Download Resume
              </motion.a>
            </div>
            
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available for projects
                </span>
                <span>•</span>
                <span>Fast turnaround</span>
                <span>•</span>
                <span>Clear scope &amp; updates</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
