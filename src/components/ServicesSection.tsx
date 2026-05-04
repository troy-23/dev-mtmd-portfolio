import { Code, Zap, Globe, Cpu, ArrowRight, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    icon: Code,
    title: "Full-Stack Web Development",
    description: "End-to-end web applications using React, Next.js, TypeScript, and modern backend technologies.",
    features: ["React/Next.js Apps", "API Development", "Database Design", "Authentication"],
    delivery: "2-4 weeks",
    pricing: "Starting at $1,500"
  },
  {
    id: 2,
    icon: Globe,
    title: "Landing Pages & Websites",
    description: "High-converting landing pages and business websites with modern design and optimal performance.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Analytics Integration"],
    delivery: "24-72 hours",
    pricing: "Starting at $500"
  },
  {
    id: 3,
    icon: Zap,
    title: "AI Integration & Automation",
    description: "Integrate AI tools and workflows into your existing systems for enhanced productivity.",
    features: ["AI Tool Integration", "Workflow Automation", "Custom Chatbots", "Process Optimization"],
    delivery: "1-2 weeks",
    pricing: "Starting at $800"
  },
  {
    id: 4,
    icon: Cpu,
    title: "System Architecture & DevOps",
    description: "Scalable system design, deployment strategies, and infrastructure optimization.",
    features: ["System Design", "Cloud Deployment", "Performance Optimization", "Monitoring Setup"],
    delivery: "1-3 weeks",
    pricing: "Starting at $1,200"
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
              // services & pricing
            </span>
            <h2 className="font-mono text-3xl md:text-5xl font-bold text-foreground mt-3">
              What I <span className="text-primary text-glow-cyan">build</span> for clients
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
              Professional services with transparent pricing and guaranteed delivery timelines.
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
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-muted-foreground" />
                            <span className="font-mono text-xs text-muted-foreground">
                              {service.delivery}
                            </span>
                          </div>
                          <span className="font-mono text-xs text-primary font-bold">
                            {service.pricing}
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
                Ready to start your project?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Get a free consultation and detailed proposal within 24 hours.
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
                href="/Resumè (1).pdf"
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
                <span>24h response time</span>
                <span>•</span>
                <span>Satisfaction guaranteed</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
