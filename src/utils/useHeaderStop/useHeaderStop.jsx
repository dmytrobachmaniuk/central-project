import { useEffect, useState } from "react";

export const useHeaderStop = () => {
  const [style, setStyle] = useState({
    position: "fixed",
    bottom: "44px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "auto",
    transition: "none",
  });

  useEffect(() => {
    const header = document.querySelector(".header");
    const stopDiv = document.querySelector("#header-stop");
    if (!header || !stopDiv) return;

    const originalParent = header.parentElement;
    const fixedBottom = 44;
    const transitionDistance = 5; // зона активації transition на мобільних

    let ticking = false;

    const isMobile = () => window.innerWidth <= 768;

    const updateHeader = () => {
      const headerRect = header.getBoundingClientRect();
      const stopRect = stopDiv.getBoundingClientRect();
      const distanceToStop = stopRect.top - (window.innerHeight - fixedBottom);

      if (isMobile()) {
        // --- мобільні ---
        if (distanceToStop <= transitionDistance) {
          if (header.parentElement !== stopDiv) {
            stopDiv.appendChild(header);
          }

          setStyle({
            position: "absolute",
            bottom: "0px",
            left: "50%",
            transform: "translateX(-50%)",
            width: `${headerRect.width}px`,
            transition: "bottom 0.3s ease", // плавний перехід
          });
        } else {
          if (header.parentElement !== originalParent) {
            originalParent.appendChild(header);
          }

          setStyle({
            position: "fixed",
            bottom: `${fixedBottom}px`,
            left: "50%",
            transform: "translateX(-50%)",
            width: "auto",
            transition: "bottom 0.3s ease-out",
          });
        }
      } else {
        // --- десктоп ---
        const maxBottom = window.innerHeight - stopRect.bottom;
        const newBottom = Math.max(fixedBottom, maxBottom);

        setStyle({
          position: "fixed",
          bottom: `${newBottom}px`,
          top: "auto",
          left: "50%",
          transform: "translateX(-50%)",
          width: "auto",
          transition: "none", // без анімації
        });
      }

      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateHeader);
      }
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("touchmove", requestUpdate, { passive: true });
    window.addEventListener("pointermove", requestUpdate, { passive: true });

    updateHeader(); // початковий виклик

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("touchmove", requestUpdate);
      window.removeEventListener("pointermove", requestUpdate);
    };
  }, []);

  return style;
};
