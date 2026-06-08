import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  // Use a lazy initializer so matchMedia only runs once on mount
  const [matches, setMatches] = useState(() => {
    // Check if window is defined (prevents errors during Server-Side Rendering)
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    // Initial check to keep state in sync
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMatches(media.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]); // Only re-run if the query string changes

  return matches;
}
