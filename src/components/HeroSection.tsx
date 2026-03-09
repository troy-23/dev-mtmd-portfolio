import { useEffect, useState } from "react";

const HeroSection = () => {
  const [displayed, setDisplayed] = useState("");
  const fullText = "I build things with vibes.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute inset-0 scanline" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-xs font-mono tracking-widest text-primary uppercase animate-flicker">
            vibecoder.dev
          </span>
        </div>
        <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
          <span className="text-glow-cyan text-primary">vibe</span>
          <span className="text-foreground">coder</span>
          <span className="text-glow-pink text-secondary">_</span>
        </h1>
        <p className="font-mono text-lg md:text-xl text-muted-foreground mb-12 h-8">
          <span>{displayed}</span>
          <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-mono font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_30px_hsl(174_100%_50%_/_0.4)] transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-primary/40 text-primary font-mono font-bold text-sm tracking-wider uppercase hover:bg-primary/10 transition-all duration-300"
          >
            About Me
          </a>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-20 right-10 w-px h-40 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse delay-1000" />
    </section>
  );
};

export default HeroSection;
