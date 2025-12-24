import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useHeaderHeight } from "@/utils/useHeaderHeight/useHeaderHeight.jsx";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import { useSmoothScroll } from "@/utils/useSmoothScroll/useSmoothScroll.jsx";
import { headerConfigs } from "@/data/headerConfigs.js";
import RoomPopup from "@/components/RoomPopup.jsx/RoomPopup.jsx";
import "./Header.scss";

const Header = ({ page = "home", buttonTarget ,  burgerColor,
                  burgerOpenColor}) => {
  const config = headerConfigs[page];
  const { scrollTo } = useSmoothScroll();
  const headerStyle = useHeaderStop();
  useHeaderHeight();

  const navigate = useNavigate();
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transition = "opacity 0s";

    requestAnimationFrame(() => {
      el.style.transition = "opacity 1.2s ease";
      requestAnimationFrame(() => {
        el.style.opacity = "1";
      });
    });
  }, []);

  const handleClick = (target) => {
    if (!target) return;

    target.startsWith("/")
      ? navigate(target)
      : scrollTo(target);

    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="header" ref={headerRef} style={{
        ...headerStyle,
        "--burger-color": burgerColor || "var(--color-darkbeige)",
        "--burger-open-color": burgerOpenColor || "var(--color-olivia)",
      }}>
        <div className="header__wrapper">

          <nav className="header__menu">
            {config.menu.map(item =>
              item.type === "route" ? (
                <Link
                  key={item.title}
                  to={item.id}
                  className="header__menu-link"
                >
                  <span>{item.title}</span>
                </Link>
              ) : (
                <div
                  key={item.title}
                  className="header__menu-link"
                  onClick={() => handleClick(item.id)}
                >
                  <span>{item.title}</span>
                </div>
              )
            )}
          </nav>


        </div>
        {/* ACTIONS */}
        <div className="header__adaptive-header">
          <div className="header__actions">
            <div className={`header__burger__wrapper ${isMenuOpen ? "open" : ""}`}>
              <div
                className={`header__burger ${isMenuOpen ? "open" : ""}`}
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div
            className="header__booking-btn"
            onClick={() => handleClick(buttonTarget || config.buttonAction.id)}
            style={{
              backgroundColor: config.buttonColor,
              color: config.textColor,
              cursor: "pointer",
              userSelect: "none",
              transition: "background-color .3s ease, color .3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = config.buttonHover;
              e.currentTarget.style.color = config.textHover || config.textColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = config.buttonColor;
              e.currentTarget.style.color = config.textColor;
            }}
          >
            {config.buttonText}
          </div>
        </div>
      </div>

      {/* POPUP */}
      {isMenuOpen && (
        <RoomPopup
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          options={config.menu.map(item => ({
            id: item.id,
            title: item.title,
            type: item.type,
          }))}
          isMenuPopup
          onOptionClick={handleClick}
        />
      )}
    </>
  );
};

export default Header;
