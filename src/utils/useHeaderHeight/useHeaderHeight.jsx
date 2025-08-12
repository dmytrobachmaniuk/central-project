import { useEffect } from "react";

export const useHeaderHeight = () => {
    useEffect(() => {
        const updateHeight = () => {
            const headerEl = document.querySelector(".header");
            if (headerEl) {
                document.documentElement.style.setProperty(
                  "--header-height",
                  `${headerEl.offsetHeight}px`
                );
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);
};
