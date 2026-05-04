import { Github, Facebook, Instagram, Mail, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/troy-23", handle: "@troy-23" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/yertmontalla", handle: "yertmontalla" },
  { icon: Mail, label: "Email", href: "mailto:marlonetroy00@gmail.com", handle: "marlonetroy00@gmail.com" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/lone.yort/", handle: "@lone.yort" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 border-t border-border relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // contact
            </span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mt-2">
              Let's <span className="text-primary text-glow-cyan">connect</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl">
            Ready to bring your project to life? I'm currently taking on new clients and can deliver your first prototype within 48 hours.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((social, i) => (
            <ScrollReveal key={social.label} delay={i * 0.08}>
              <motion.a
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-card border border-border rounded-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/[0.03]"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <div className="font-mono text-sm font-bold text-foreground">{social.label}</div>
                    <div className="font-mono text-xs text-muted-foreground">{social.handle}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <motion.a
              href="mailto:marlonetroy00@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300"
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px hsl(174 100% 50% / 0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="w-4 h-4" />
              Start Your Project
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
