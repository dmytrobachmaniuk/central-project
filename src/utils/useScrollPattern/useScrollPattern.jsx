// hooks/useScrollPattern.js
import { useEffect } from "react";

export function useScrollPattern(ref, sectionClass = ".hotel-section") {
  useEffect(() => {
    const pattern = ref.current;
    if (!pattern) return;

    const section = pattern.closest(sectionClass);
    if (!section) return;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    let currentY = 0;
    let targetY = 0;
    let rafId;

    const isMobile = () => window.innerWidth <= 768;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const relativeY = scrollY - sectionTop;

      if (relativeY >= 0 && relativeY <= sectionHeight) {
        targetY = relativeY;

        if (isMobile()) {
          if (!rafId) animate();
        } else {
          pattern.style.transform = `translateY(${relativeY}px)`;
        }
      }
    };

    const animate = () => {
      currentY += (targetY - currentY) * 0.2;
      pattern.style.transform = `translateY(${currentY}px)`;

      if (Math.abs(targetY - currentY) > 0.5) {
        rafId = requestAnimationFrame(animate);
      } else {
        currentY = targetY;
        pattern.style.transform = `translateY(${currentY}px)`;
        rafId = null;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [ref, sectionClass]);
}
