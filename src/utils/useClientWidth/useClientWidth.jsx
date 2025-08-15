import { useEffect } from "react";

export const useViewportWidthNoScroll = () => {
  useEffect(() => {
    const updateWidth = () => {
      document.documentElement.style.setProperty(
        "--vw-nosb",
        `${document.documentElement.clientWidth}px`
      );
    };

    window.addEventListener("resize", updateWidth);
    updateWidth(); // викликаємо одразу при монтуванні

    return () => window.removeEventListener("resize", updateWidth);
  }, []);
}; // without scrollbar
