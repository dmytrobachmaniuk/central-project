import { useEffect } from "react";

export const useMatchHeight = (
  wrapperRef,
  imageRef,
  { enabled = true, enableDebug = false } = {}
) => {
  useEffect(() => {
    if (!enabled) {
      if (enableDebug) console.log("useMatchHeight: disabled on this page");
      return;
    }

    const adjustHeight = () => {
      if (!wrapperRef?.current || !imageRef?.current) return;

      const content = wrapperRef.current.querySelector(".hotel-section__content");
      if (content && imageRef.current) {
        imageRef.current.style.height = `${content.offsetHeight}px`;
        if (enableDebug) console.log("useMatchHeight: height applied", content.offsetHeight);
      }
    };

    window.addEventListener("load", adjustHeight);
    window.addEventListener("resize", adjustHeight);

    if (document.fonts) document.fonts.ready.then(adjustHeight);

    let ro;
    try {
      if (wrapperRef.current) {
        ro = new ResizeObserver(adjustHeight);
        ro.observe(wrapperRef.current);
      }
    } catch (e) {
      if (enableDebug) console.warn("useMatchHeight: ResizeObserver not available", e);
    }

    // Виклик одразу після mount
    adjustHeight();

    return () => {
      window.removeEventListener("load", adjustHeight);
      window.removeEventListener("resize", adjustHeight);
      if (ro) ro.disconnect();
    };
  }, [wrapperRef, imageRef, enabled, enableDebug]);
};
