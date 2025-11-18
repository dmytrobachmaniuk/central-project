import './Header.scss';
import { useHeaderHeight } from "@/utils/useHeaderHeight/useHeaderHeight.jsx";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import { useSmoothScroll } from "@/utils/useSmoothScroll/useSmoothScroll.jsx";

const Header = ({ buttonColor = 'var(--color-olivia)', buttonText = 'Бронювання' }) => {
  const { scrollTo } = useSmoothScroll();
  useHeaderHeight();
  const headerStyle = useHeaderStop();

  const menuItems = [
    { title: "Про нас", id: "about" },
    { title: "Готелі", id: "booking" },
    { title: "Ресторани", id: "restaurants" },
    { title: "Контакти", id: "contacts" },
  ];

  return (
    <div className="header" style={headerStyle}>
      <div className="header__wrapper">
        <nav className="header__menu">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="header__menu-link"
              onClick={() => scrollTo(item.id)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <span>{item.title}</span>
            </div>
          ))}
        </nav>
      </div>

      <div
        className="header__booking-btn"
        onClick={() => scrollTo("booking")}
        style={{
          cursor: 'pointer',
          userSelect: 'none',
          backgroundColor: buttonColor
        }}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default Header;
