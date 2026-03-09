import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import StatusBadge from "./StatusBadge";

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
    <section id="profile" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <ParticleField />
      <div className="absolute inset-0 scanline" style={{ zIndex: 2 }} />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-xs font-mono tracking-widest text-primary uppercase animate-flicker">
            vibecoder.dev
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight"
        >
          <span className="text-glow-cyan text-primary">vibe</span>
          <span className="text-foreground">coder</span>
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-glow-pink text-secondary"
          >
            _
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-mono text-lg md:text-xl text-muted-foreground mb-12 h-8"
        >
          <span>{displayed}</span>
          <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex gap-4 justify-center">
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(174 100% 50% / 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#stacks"
            onClick={(e) => { e.preventDefault(); document.querySelector("#stacks")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.05, backgroundColor: "hsl(174 100% 50% / 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-primary/40 text-primary font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300"
          >
            My Stacks
          </motion.a>
        </motion.div>
      </div>

      {/* Animated decorative elements */}
      <motion.div
        animate={{ height: [100, 160, 100] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
      />
      <motion.div
        animate={{ height: [100, 160, 100] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-px bg-gradient-to-b from-transparent via-secondary/20 to-transparent"
      />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse delay-1000" />

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-primary/30 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
