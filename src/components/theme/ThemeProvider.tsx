"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

export type Theme = "signature" | "neo";

export const THEME_STORAGE_KEY = "tanvi-theme";
const THEME_EVENT = "tanvi-theme-change";

/**
 * Inlined in <head> and run before first paint, so the stored theme is on the
 * document from the very first frame — no flash of the wrong palette.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});if(t==="neo"){document.documentElement.setAttribute("data-theme","neo");}}catch(e){}})();`;

/* The document element is the source of truth; the init script has already
   written to it, so React reads from there rather than re-deriving it. */
function subscribe(onChange: () => void) {
  window.addEventListener(THEME_EVENT, onChange);
  return () => window.removeEventListener(THEME_EVENT, onChange);
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "neo"
    ? "neo"
    : "signature";
}

/** SSR always renders the default; the client corrects itself on hydration. */
function getServerSnapshot(): Theme {
  return "signature";
}

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    const root = document.documentElement;
    if (next === "neo") root.setAttribute("data-theme", "neo");
    else root.removeAttribute("data-theme");
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* non-fatal: storage blocked, the choice just won't persist */
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === "neo" ? "signature" : "neo"),
    }),
    [theme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
