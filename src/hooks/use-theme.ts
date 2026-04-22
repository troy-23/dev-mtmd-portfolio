import { useEffect, useCallback } from "react";

// Dark mode only — theme is locked
export function useTheme() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  const toggle = useCallback(() => {
    // no-op: dark mode is enforced
  }, []);

  return { theme: "dark" as const, toggle };
}
