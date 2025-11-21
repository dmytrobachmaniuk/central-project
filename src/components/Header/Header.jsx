// Header.jsx
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useHeaderHeight } from "@/utils/useHeaderHeight/useHeaderHeight.jsx";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import { useSmoothScroll } from "@/utils/useSmoothScroll/useSmoothScroll.jsx";
import { headerConfigs } from "@/data/headerConfigs.js";
import './Header.scss';

const Header = ({ page = "home", buttonTarget }) => {
  const config = headerConfigs[page];
  const { scrollTo } = useSmoothScroll();
  const headerStyle = useHeaderStop();
  useHeaderHeight();

  const navigate = useNavigate();
  const headerRef = useRef(null);

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

  // універсальна логіка для кнопки та меню
  const handleClick = (target) => {
    if (!target) return;
    if (target.startsWith("/")) {
      navigate(target);          // route
    } else {
      scrollTo(target);          // anchor
    }
  };

  return (
    <div className="header" ref={headerRef} style={headerStyle}>
      <div className="header__wrapper">
        <nav className="header__menu">
          {config.menu.map(item => (
            item.type === "route" ? (
              <Link key={item.title} to={item.id} className="header__menu-link">
                <span>{item.title}</span>
              </Link>
            ) : (
              <div
                key={item.title}
                className="header__menu-link"
                onClick={() => handleClick(item.id)}
                style={{ cursor: "pointer" }}
              >
                <span>{item.title}</span>
              </div>
            )
          ))}
        </nav>
      </div>

      <div
        className="header__booking-btn"
        onClick={() => handleClick(buttonTarget || config.buttonAction.id)}
        style={{
          backgroundColor: config.buttonColor,
          color: config.textColor,
          cursor: "pointer",
          userSelect: "none"
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = config.buttonHover}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = config.buttonColor}
      >
        {config.buttonText}
      </div>
    </div>
  );
};

export default Header;
