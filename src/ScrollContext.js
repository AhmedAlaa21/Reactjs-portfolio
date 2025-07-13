import React, { createContext, useContext, useState, useEffect } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      if (!sections || sections.length === 0) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = 0;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = index;
        }
      });

      setActiveIndex(currentSection);
    };

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

    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll(".section");
    if (!sections || !sections[index]) return;

    const targetSection = sections[index];
    const offsetTop = targetSection.offsetTop;
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
