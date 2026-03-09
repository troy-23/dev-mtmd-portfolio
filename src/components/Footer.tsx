import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">vibecoder</span>
          <span className="text-secondary">_</span>
          <span className="ml-4">© {new Date().getFullYear()}</span>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="font-mono text-xs text-muted-foreground">
          built with <span className="text-secondary">♥</span> and vibes
        </div>
      </div>
    </footer>
  );
};

export default Footer;
