import './Header.scss';
import { Link } from 'react-router-dom';
import { useHeaderHeight } from "@/utils/useHeaderHeight/useHeaderHeight.jsx";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import { useSmoothScroll } from "@/utils/useSmoothScroll/useSmoothScroll.jsx";
import { headerConfigs } from "@/data/headerConfigs.js";

const Header = ({ page = "home" }) => {
  const config = headerConfigs[page];
  const { scrollTo } = useSmoothScroll();
  const headerStyle = useHeaderStop();
  useHeaderHeight();

  return (
    <div className="header" style={headerStyle}>
      <div className="header__wrapper">
        <nav className="header__menu">
          {config.menu.map(item => (
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
                onClick={() => scrollTo(item.id)}
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
        onClick={() => config.menu[0].type === "route"
          ? null
          : scrollTo("booking")
        }
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
