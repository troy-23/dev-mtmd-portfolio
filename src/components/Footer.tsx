import { Github, Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">MTD</span>
          <span className="text-secondary">_</span>
          <span className="ml-4 text-xs">© {new Date().getFullYear()} Marlone Troy Dominguiano</span>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/troy-23" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/yertmontalla" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="mailto:marlonetroy00@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/lone.yort/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <div className="font-mono text-xs text-muted-foreground">
          built with <span className="text-primary">precision</span> & <span className="text-secondary">AI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
