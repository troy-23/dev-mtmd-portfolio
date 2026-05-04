import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Hide loading screen after content is loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-background z-[9999] flex items-center justify-center overflow-hidden"
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 grid-bg opacity-20" />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.08] blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/[0.08] blur-[100px] animate-pulse delay-1000" />
          
          {/* Main loading content */}
          <div className="relative z-10 text-center px-6">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full"
                />
                <div className="font-mono text-2xl font-bold">
                  <span className="text-primary">MTD</span>
                  <span className="text-secondary">_</span>
                </div>
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-2">
                Initializing Portfolio
              </div>
              
              {/* Progress bar */}
              <div className="w-64 h-1 bg-border rounded-full overflow-hidden mx-auto mb-4">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: "0%" }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              
              <div className="font-mono text-xs text-muted-foreground">
                {Math.round(loadingProgress)}%
              </div>
            </motion.div>

            {/* Loading dots animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            
            {/* Glitch effect text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.8, 1] }}
              transition={{ duration: 2, delay: 1.2 }}
              className="mt-8 font-mono text-[10px] text-primary/60 uppercase tracking-widest"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px hsl(174 100% 50% / 0.5)",
                    "0 0 20px hsl(174 100% 50% / 0.8)",
                    "0 0 10px hsl(174 100% 50% / 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                // systems.loading();
              </motion.span>
            </motion.div>
          </div>

          {/* Scanline effect */}
          <div className="absolute inset-0 scanline pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
