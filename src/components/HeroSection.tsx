import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import StatusBadge from "./StatusBadge";

const HeroSection = () => {
  const [displayed, setDisplayed] = useState("");
  const fullText = "I turn ideas into systems — and systems into shipped products.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="profile" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <ParticleField />
      <div className="absolute inset-0 scanline" style={{ zIndex: 2 }} />

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <StatusBadge />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-mono text-xs md:text-sm text-muted-foreground tracking-[0.3em] uppercase mb-6"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-[0.95] tracking-tight"
        >
          <span className="text-glow-cyan text-primary">Marlone Troy</span>
          <br />
          <span className="text-foreground">Dominguiano</span>
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-glow-pink text-secondary"
          >
            _
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.img
              src="/ai-mtmd.png"
              alt="Marlone Troy Dominguiano - AI Generated Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/30 shadow-[0_0_40px_hsl(174_100%_50%/0.15)] object-cover"
              whileHover={{ scale: 1.05, borderColor: "hsl(174 100% 50% / 0.6)" }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-neon-green rounded-full border-2 border-background"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span className="px-4 py-1.5 border border-primary/40 rounded-full font-mono text-xs tracking-wider text-primary uppercase">
            Freelance Full Stack Web Developer
          </span>
          <span className="text-muted-foreground/40 font-mono text-xs">×</span>
          <span className="px-4 py-1.5 border border-secondary/40 rounded-full font-mono text-xs tracking-wider text-secondary uppercase">
            Prompt Engineer
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-mono text-sm md:text-base text-muted-foreground mb-14 h-8 max-w-2xl mx-auto"
        >
          <span>{displayed}</span>
          <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(174 100% 50% / 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-primary text-primary-foreground font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#stacks"
            onClick={(e) => { e.preventDefault(); document.querySelector("#stacks")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.05, backgroundColor: "hsl(174 100% 50% / 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-primary/30 text-primary font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300"
          >
            My Stacks
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.05, backgroundColor: "hsl(330 100% 60% / 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-secondary/30 text-secondary font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300"
          >
            Hire Me
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ height: [100, 180, 100] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
      />
      <motion.div
        animate={{ height: [100, 180, 100] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-px bg-gradient-to-b from-transparent via-secondary/20 to-transparent"
      />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse delay-1000" />

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
