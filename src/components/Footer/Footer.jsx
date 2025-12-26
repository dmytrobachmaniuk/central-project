import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = ({
                  bgColor = "var(--color-darkbeige)",
                  textColor = "var(--color-olivia)",
                  title = "Central",
                  phone = "+380 96 312 44 49",
                  email = "info@central-rivne.com.ua",
                  address = "м. Рівне, вул. 16 липня, 7а",
                  instagram = "/instagram",
                  facebook = "/facebook",
                  isHomePage = false
                }) => {
  return (
    <section
      id="contacts"
      className="footer"
      style={{ color: textColor }}
    >
      <div
        className="footer__wrapper"
        style={{ backgroundColor: bgColor }}
      >
        {/* Фоновий великий текст */}
        <div className="footer__text-background">
          <h1>{title}</h1>
        </div>

        <div className="footer__content container">
          <div className="footer__columns">

            {/* Лівий блок */}
            <nav className="footer__column footer__left">
              <Link
                to={isHomePage ? "/" : "/about"}
                style={{ color: textColor }}
              >
                {isHomePage ? "Головна" : "Хто ми"}
              </Link>
              <Link to="/#booking" style={{ color: textColor }}>Готелі</Link>
              <Link to="/#restaurants" style={{ color: textColor }}>Ресторани</Link>
            </nav>

            {/* Центр */}
            <address className="footer__column footer__center">
              <h2 className="headline" style={{ color: textColor }}>{title}</h2>

              <p className="muted" style={{ color: textColor }}>
                Ми завжди на зв’язку та готові відповісти на ваші запитання.
              </p>

              <p className="phone" style={{ color: textColor }}>{phone}</p>
              {email && <p className="email-text" style={{ color: textColor }}>{email}</p>}

              <p className="address-line" style={{ color: textColor }}>{address}</p>
            </address>

            {/* Правий блок */}
            <nav className="footer__column footer__right">
              <Link to={instagram} style={{ color: textColor }}>Instagram</Link>
              <Link to={facebook} style={{ color: textColor }}>Facebook</Link>
            </nav>
          </div>

          {/* Нижній блок */}
          <div className="footer__bottom">
            <p style={{ color: textColor }}>©2025 Papa&Mama. Усі права захищені</p>
            <Link to="/about" style={{ color: textColor }}>Privacy & Policy</Link>
            <Link to="/conditions" style={{ color: textColor }}>Умови проживання</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
