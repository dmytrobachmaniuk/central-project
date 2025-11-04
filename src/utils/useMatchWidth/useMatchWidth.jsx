import { useEffect } from "react";

export const useMatchWidth = (wrapperRef, targetRef, breakpoint = 740, enableDebug = false) => {
  useEffect(() => {
    if (!wrapperRef?.current || !targetRef?.current) {
      if (enableDebug) console.log("useMatchWidth: refs not ready");
      return;
    }

    let rafId = null;
    const wrapper = wrapperRef.current;
    const target = targetRef.current;

    const applyStretch = () => {
      const vw = window.innerWidth;
      if (vw > breakpoint) {
        target.style.position = "";
        target.style.width = "";
        target.style.maxWidth = "";
        target.style.transform = "";
        target.style.left = "";
        target.style.boxSizing = "";
        if (enableDebug) console.log("useMatchWidth: reset styles (desktop)");
        return;
      }

      const rect = wrapper.getBoundingClientRect();
      const offsetLeft = rect.left;

      target.style.position = "relative";
      target.style.boxSizing = "border-box";
      target.style.width = `${vw}px`;
      target.style.maxWidth = "none";

      if (enableDebug) {
        console.log("useMatchWidth: applied", {
          vw, offsetLeft, rectLeft: rect.left, targetWidth: target.style.width
        });
      }
    };

    const schedule = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(applyStretch);
    };

    schedule();

    window.addEventListener("resize", schedule);

    if (document.fonts) document.fonts.ready.then(schedule);

    const imgs = target.querySelectorAll ? target.querySelectorAll("img") : [];

    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", schedule);
    });

    let ro;
    try {
      ro = new ResizeObserver(schedule);
      ro.observe(wrapper);
    } catch (e) {
      if (enableDebug) console.warn("useMatchWidth: ResizeObserver not available", e);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", schedule);
      imgs.forEach((img) => {
        if (!img.complete) img.removeEventListener("load", schedule);
      });
      if (ro) ro.disconnect();
    };
  }, [wrapperRef, targetRef, breakpoint, enableDebug]);
};
