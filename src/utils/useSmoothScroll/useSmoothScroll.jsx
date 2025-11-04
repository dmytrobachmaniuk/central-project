import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollTo = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Елемент з id="${id}" не знайдено`);
    }
  }, []);

  return { scrollTo };
};
