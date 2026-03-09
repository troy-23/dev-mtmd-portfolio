import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Zap, ZapOff } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useAnimations } from "@/hooks/use-animations";

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Stacks", href: "#stacks" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const { enabled: animEnabled, toggle: toggleAnim } = useAnimations();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["profile", "projects", "stacks"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-[0_0_30px_hsl(174_100%_50%/0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#profile"
          onClick={(e) => { e.preventDefault(); scrollTo("#profile"); }}
          className="font-mono text-lg font-bold group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-primary text-glow-cyan group-hover:animate-glitch">v</span>
          <span className="text-foreground">c</span>
          <span className="text-secondary text-glow-pink">_</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`relative px-4 py-2 font-mono text-sm tracking-wider uppercase transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-2 right-2 h-px bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}

          {/* Animations toggle */}
          <motion.button
            onClick={toggleAnim}
            className={`ml-1 p-2 transition-colors ${animEnabled ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle animations"
            title={animEnabled ? "Animations ON" : "Animations OFF"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={animEnabled ? "on" : "off"}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {animEnabled ? <Zap className="w-4 h-4" /> : <ZapOff className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            className="ml-1 p-2 text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -10, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 10, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <motion.button
            onClick={toggleAnim}
            className={`p-2 transition-colors ${animEnabled ? "text-primary" : "text-muted-foreground"}`}
            whileTap={{ scale: 0.9 }}
          >
            {animEnabled ? <Zap className="w-4 h-4" /> : <ZapOff className="w-4 h-4" />}
          </motion.button>
          <motion.button
            onClick={toggle}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>
          <motion.button
            className="text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(item.href)}
                className={`block w-full text-left px-6 py-4 font-mono text-sm tracking-wider uppercase border-b border-border/50 transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground"
                }`}
              >
                <span className="text-primary/50 mr-3">0{i + 1}</span>
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
