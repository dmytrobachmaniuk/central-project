import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.scss";

const LanguageSwitcher = ({
                            topTextColor = "var(--color-olivia)",
                            topBgColor = "var(--color-darkbeige)",
                            topBorderColor = "transparent",

                            bottomTextColor = "var(--color-black-custom)",
                            bottomBgColor = "transparent",
                            bottomBorderColor = "rgba(173,160,144,0.6)",
                          }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!i18n.language || i18n.language.startsWith("en")) {
      i18n.changeLanguage("ua");
    }
  }, []);

  const [topLang, setTopLang] = useState("ua");
  const bottomLang = topLang === "ua" ? "en" : "ua";

  const handleMainClick = () => setOpen((prev) => !prev);

  const handleBottomClick = () => {
    i18n.changeLanguage(bottomLang);
    setTopLang(bottomLang);
    setOpen(false);
  };

  const topStyle = {
    color: topTextColor,
    background: topBgColor,
    border: `1px solid ${topBorderColor}`,
  };

  const bottomStyle = {
    color: bottomTextColor,
    background: bottomBgColor,
    border: `1px solid ${bottomBorderColor}`,
  };

  return (
    <div className="language-switcher">
      <button
        className="circle active"
        style={topStyle}
        onClick={handleMainClick}
      >
        {topLang}
      </button>

      <button
        className={`circle secondary ${open ? "show" : ""}`}
        style={bottomStyle}
        onClick={handleBottomClick}
      >
        {bottomLang}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
