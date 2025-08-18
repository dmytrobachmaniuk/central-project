import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__text-background">
          <h1>Central</h1>
        </div> {/*фоновий Central*/}

        <div className="footer__content container">
          <div className="footer__columns">

            <nav className="footer__column footer__left">
              <Link to="/about">Хто ми</Link>
              <Link to="/hotels">Готелі</Link>
              <Link to="/restaurants">Ресторани</Link>
            </nav>

            <address className="footer__column footer__center">
              <h1 className="headline">Central</h1>
              <p className="muted">
                Ми завжди на зв’язку та готові відповісти на ваші запитання. Зв’яжіться з нами будь-яким зручним способом!
              </p>
              <p className="phone">+380 99 777 66 66</p>
              <p className="address-line">м. Рівне, вул. 16 липня, 7а</p>
            </address>

            <nav className="footer__column footer__right">
              <Link to="/instagram">Instagram</Link>
              <Link to="/facebook">Facebook</Link>
            </nav>
          </div>

          <div className="footer__bottom">
            <p>©2025 Papa&Mama. All rights reserved</p>
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
