import './Footer.scss'
import { Link } from 'react-router-dom'
import { useState } from "react"
import ContactPopup from "@/components/ContactPopup/ContactPopup.jsx"

const Footer = ({
                  bgColor = "var(--color-darkbeige)",
                  textColor = "var(--color-olivia)",
                  title = "Central",
                  phone = "+380 96 312 44 49",
                  email = "info@central-rivne.com.ua",
                  address = "м. Рівне, вул. 16 липня, 7а",
                  instagram = "https://www.instagram.com/boutiquehotelcentral/",
                  facebook = "https://www.facebook.com/hotelcentralrivne/",
                  isHomePage = false,
                  popupTheme = "light",
                  popupButtonProps = {},
                }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <section id="contacts" className="footer" style={{ color: textColor }}>
        <div className="footer__wrapper" style={{ backgroundColor: bgColor }}>
          <div className="footer__text-background">
            <h1>{title}</h1>
          </div>

          <div className="footer__content container">
            <div className="footer__columns">
              <nav className="footer__column footer__left">
                <Link to={isHomePage ? "/" : "/about"} style={{ color: textColor }}>
                  {isHomePage ? "Головна" : "Хто ми"}
                </Link>
                <Link to="/#booking" style={{ color: textColor }}>Готелі</Link>
                <Link to="/#restaurants" style={{ color: textColor }}>Ресторани</Link>
              </nav>

              <address className="footer__column footer__center">
                <h2 className="headline" style={{ color: textColor }}>{title}</h2>
                <p className="muted" style={{ color: textColor }}>
                  Ми завжди на зв’язку та готові відповісти на ваші запитання.
                </p>
                <p
                  className="phone footer__phone-click"
                  style={{ color: textColor, cursor: "pointer" }}
                  onClick={() => setIsPopupOpen(true)}
                >
                  {phone}
                </p>
                {email && <p className="email-text" style={{ color: textColor }}>{email}</p>}
                <p className="address-line" style={{ color: textColor }}>{address}</p>
              </address>

              <nav className="footer__column footer__right">
                <Link to={instagram} style={{ color: textColor }}>Instagram</Link>
                <Link to={facebook} style={{ color: textColor }}>Facebook</Link>
              </nav>
            </div>

            <div className="footer__bottom">
              <p style={{ color: textColor }}>©2025 Papa&Mama. Усі права захищені</p>
              <Link to="/about" style={{ color: textColor }}>Privacy & Policy</Link>
              <Link to="/conditions" style={{ color: textColor }}>Умови проживання</Link>
            </div>
          </div>
        </div>
        <ContactPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          variant={popupTheme}
          text="Чекатимемо дзвінка в зручний для Вас час"
          phone={phone}
          buttonProps={popupButtonProps}
        />
      </section>
    </>
  )
}

export default Footer
