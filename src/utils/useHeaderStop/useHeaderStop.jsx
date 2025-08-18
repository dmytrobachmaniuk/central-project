import { useEffect, useState } from "react";

export const useHeaderStop = () => {
  const [style, setStyle] = useState({
    position: "fixed",
    bottom: "44px",
    top: "auto",
  });

  useEffect(() => {
    const header = document.querySelector(".header"); /*пошук за селектрами вони в різних Sections*/
    const stopDiv = document.querySelector("#header-stop");
    if (!header || !stopDiv) return;

    const updateStyle = () => {
      const isMobile = window.innerWidth <= 640; // breakpoint для мобільних
      if (isMobile) {
        // на мобільних хедер не плаває
        setStyle({});
        return;
      }

      const stopRect = stopDiv.getBoundingClientRect();
      const maxBottom = window.innerHeight - stopRect.bottom;
      const newBottom = Math.max(44, maxBottom);

      setStyle({
        position: "fixed",
        bottom: `${newBottom}px`,
        top: "auto",
      });
    }; //для адаптива вертаються стилі з звичайного .header(адаптив)

    // слухаємо скрол і ресайз
    window.addEventListener("scroll", updateStyle);
    window.addEventListener("resize", updateStyle);

    updateStyle(); // початковий виклик

    return () => {
      window.removeEventListener("scroll", updateStyle);
      window.removeEventListener("resize", updateStyle);
    };
  }, []);

  return style;
};
