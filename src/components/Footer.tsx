import { Github } from "lucide-react";
import ContactForm from "./ContactForm";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      {/* Work-with-me contact form */}
      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">MTD</span>
            <span className="text-secondary">_</span>
            <span className="ml-4 text-xs">© {new Date().getFullYear()} Marlone Troy Dominguiano</span>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/troy-23" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
