// hooks/useScrollPattern.js
import { useEffect } from "react";

export function useScrollPattern(ref) {
  useEffect(() => {
    const pattern = ref.current;
    if (!pattern) return;

    const section = pattern.closest(".hotel-section");
    if (!section) return;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const relativeY = scrollY - sectionTop;

      if (relativeY >= 0 && relativeY <= sectionHeight) {
        pattern.style.transform = `translateY(${relativeY}px)`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);
}
