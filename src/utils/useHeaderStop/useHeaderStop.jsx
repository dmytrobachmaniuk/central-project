import { useEffect, useState } from "react";

export const useHeaderStop = () => {
  const [style, setStyle] = useState({
    position: "fixed",
    bottom: "44px",
    top: "auto",
    left: "50%",
    transform: "translateX(-50%)",
    width: "auto",
  });

  useEffect(() => {
    const header = document.querySelector(".header");
    const stopDiv = document.querySelector("#header-stop");
    if (!header || !stopDiv) return;

    const originalParent = header.parentElement;

    let ticking = false;

    const updateHeader = () => {
      const stopRect = stopDiv.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();

      const stopBottom = stopRect.bottom;
      const fixedBottom = 44; // відступ при fixed

      if (stopBottom >= window.innerHeight - fixedBottom) {
        // До стоп-блоку — fixed
        if (header.parentElement !== originalParent) {
          originalParent.appendChild(header);
        }
        setStyle({
          position: "fixed",
          bottom: `${fixedBottom}px`,
          top: "auto",
          left: "50%",
          transform: "translateX(-50%)",
          width: "auto",
        });
      } else {
        // Досяг стоп-блоку — absolute
        if (header.parentElement !== stopDiv) {
          stopDiv.appendChild(header);
        }
        setStyle({
          position: "absolute",
          bottom: "0px",
          top: "auto",
          left: "50%",
          transform: "translateX(-50%)",
          width: `${headerRect.width}px`, // зберігаємо ширину
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
