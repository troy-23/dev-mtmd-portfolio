import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { useLoadingState } from "@/hooks/useLoadingState";

const LoadingScreen = () => {
  const { isLoading, loadingProgress } = useLoadingState();
  const audioContextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const lastProgressSoundRef = useRef(0);
  const completionPlayedRef = useRef(false);

  const setupAudio = useCallback(async () => {
    if (typeof window === "undefined") return null;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;

    if (!audioContextRef.current) {
      const context = new AudioContextClass();
      const masterGain = context.createGain();
      masterGain.gain.value = 0.035;
      masterGain.connect(context.destination);

      audioContextRef.current = context;
      masterGainRef.current = masterGain;
    }

    if (audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume().catch(() => undefined);
    }

    return audioContextRef.current;
  }, []);

  const playTone = useCallback((frequency: number, duration = 0.08, type: OscillatorType = "square") => {
    const context = audioContextRef.current;
    const masterGain = masterGainRef.current;

    if (!context || !masterGain || context.state !== "running") return;

    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const toneGain = context.createGain();
    const filter = context.createBiquadFilter();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(40, frequency * 0.72), now + duration);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1200, now);
    filter.frequency.exponentialRampToValueAtTime(420, now + duration);

    toneGain.gain.setValueAtTime(0.0001, now);
    toneGain.gain.exponentialRampToValueAtTime(0.8, now + 0.012);
    toneGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    oscillator.connect(filter);
    filter.connect(toneGain);
    toneGain.connect(masterGain);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    const unlockAudio = () => {
      setupAudio().then((context) => {
        if (context?.state === "running") playTone(170, 0.1, "sawtooth");
      });
    };

    setupAudio().catch(() => undefined);
    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });

    const pulse = window.setInterval(() => {
      playTone(110 + Math.random() * 45, 0.055, "square");
    }, 620);

    return () => {
      window.clearInterval(pulse);
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
  }, [isLoading, playTone, setupAudio]);

  useEffect(() => {
    if (!isLoading) return;

    if (loadingProgress >= 100 && !completionPlayedRef.current) {
      completionPlayedRef.current = true;
      playTone(330, 0.08, "triangle");
      window.setTimeout(() => playTone(520, 0.12, "triangle"), 90);
      return;
    }

    if (loadingProgress - lastProgressSoundRef.current >= 14) {
      lastProgressSoundRef.current = loadingProgress;
      playTone(220 + loadingProgress * 2.4, 0.045, "square");
    }
  }, [isLoading, loadingProgress, playTone]);

  useEffect(() => {
    return () => {
      audioContextRef.current?.close().catch(() => undefined);
      audioContextRef.current = null;
      masterGainRef.current = null;
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
