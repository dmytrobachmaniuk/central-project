import { useEffect } from "react";

export const useMatchHeight = (wrapperRef, imageRef) => {
  useEffect(() => {
    if (!wrapperRef.current || !imageRef.current) return;

    const adjustHeight = () => {
      const content = wrapperRef.current.querySelector(".hotel-section__content");
      if (content) {
        imageRef.current.style.height = `${content.offsetHeight}px`;
      }
    };

    // Виклик одразу після завантаження сторінки
    window.addEventListener("load", adjustHeight);

    // Перевірка при ресайзі
    window.addEventListener("resize", adjustHeight);

    // Перевірка після завантаження шрифтів
    if (document.fonts) {
      document.fonts.ready.then(() => adjustHeight());
    }

    // Додатковий цикл через requestAnimationFrame, щоб врахувати динамічні зміни
    let frame;
    const rafLoop = () => {
      adjustHeight();
      frame = requestAnimationFrame(rafLoop);
    };
    frame = requestAnimationFrame(rafLoop);

    return () => {
      window.removeEventListener("load", adjustHeight);
      window.removeEventListener("resize", adjustHeight);
      cancelAnimationFrame(frame);
    };
  }, [wrapperRef, imageRef]);
};
