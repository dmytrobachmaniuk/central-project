import './Header.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHeaderHeight } from "@/utils/useHeaderHeight/useHeaderHeight.jsx";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";

const Header = () => {
  const [visible, setVisible] = useState(false);

  useHeaderHeight();
  const headerStyle = useHeaderStop(); // хук на стоп хедера

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []); // js анімація появи хедера

  return (
    <div className={`header ${visible ? "visible" : ""}`} style={headerStyle}>
      <div className="header__wrapper">
        <nav className="header__menu">
          <Link to="/about" className="header__menu-link"><span>Про нас</span></Link>
          <Link to="/hotels" className="header__menu-link"><span>Готелі</span></Link>
          <Link to="/restaurants" className="header__menu-link"><span>Ресторани</span></Link>
          <Link to="/contacts" className="header__menu-link"><span>Контакти</span></Link>
        </nav> {/*нав панель*/}
      </div>
      <button className="header__booking-btn">Бронювання</button>
    </div>
  ); /*стилі тягнуться з хука*/
};

export default Header;
