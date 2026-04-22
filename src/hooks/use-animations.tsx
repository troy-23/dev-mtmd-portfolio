import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

interface AnimationsContextValue {
  enabled: boolean;
  toggle: () => void;
}

const AnimationsContext = createContext<AnimationsContextValue | undefined>(undefined);

export function AnimationsProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("animations");
      if (stored !== null) return stored === "on";
    }
    return false;
  });

  // Listen for system preference changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => {
      // Only auto-apply if user hasn't manually set a preference
      if (localStorage.getItem("animations") === null) {
        setEnabled(!e.matches);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("animations", next ? "on" : "off");
      return next;
    });
  }, []);

  return (
    <AnimationsContext.Provider value={{ enabled, toggle }}>
      {children}
    </AnimationsContext.Provider>
  );
}

export function useAnimations() {
  const ctx = useContext(AnimationsContext);
  if (!ctx) throw new Error("useAnimations must be used within AnimationsProvider");
  return ctx;
}
