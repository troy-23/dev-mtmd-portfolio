import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface AnimationsContextValue {
  enabled: boolean;
  toggle: () => void;
}

const AnimationsContext = createContext<AnimationsContextValue | undefined>(undefined);

export function AnimationsProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("animations") !== "off";
    }
    return true;
  });

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
