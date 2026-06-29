import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import type { ScrollContextValue } from "./types";

const ScrollContext = createContext<ScrollContextValue | undefined>(undefined);

export const useScrollContext = (): ScrollContextValue => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within ScrollProvider");
  }
  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>(".section");
      if (!sections || sections.length === 0) return;

      const scrollPosition = window.scrollY + 100;
      let currentSection = 0;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = index;
        }

        const distanceToTop = Math.abs(scrollPosition - sectionTop);
        if (distanceToTop < minDistance) {
          minDistance = distanceToTop;
          if (distanceToTop < 150) {
            currentSection = index;
          }
        }
      });

      setActiveIndex(currentSection);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {}, 150);
    };

    handleScroll();

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll<HTMLElement>(".section");
    if (!sections || !sections[index]) return;

    setActiveIndex(index);
    window.scrollTo({
      top: sections[index].offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <ScrollContext.Provider
      value={{ activeIndex, setActiveIndex, scrollToSection }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
