import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

const ScrollContext = createContext();

export const useScrollContext = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      if (!sections || sections.length === 0) return;

      // Use a smaller offset for more accurate detection
      const scrollPosition = window.scrollY + 100;

      let currentSection = 0;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Check if scroll position is within section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = index;
        }

        // Also find the closest section for edge cases
        const distanceToTop = Math.abs(scrollPosition - sectionTop);
        if (distanceToTop < minDistance) {
          minDistance = distanceToTop;
          if (distanceToTop < 150) {
            currentSection = index;
          }
        }
      });

      setActiveIndex(currentSection);

      // Clear scrolling flag after scroll ends
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };

    // Initial call to set correct section on mount
    handleScroll();

    // Throttle scroll events for better performance
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

    // Cleanup
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll(".section");
    if (!sections || !sections[index]) return;

    isScrollingRef.current = true;
    const targetSection = sections[index];
    const offsetTop = targetSection.offsetTop;

    // Immediately update active index for instant feedback
    setActiveIndex(index);

    window.scrollTo({
      top: offsetTop,
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
