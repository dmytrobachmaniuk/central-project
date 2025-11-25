import './AboutSection.scss'
import Header from "@/components/Header/Header.jsx";
import {useHeaderStop} from "@/utils/useHeaderStop/useHeaderStop.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import hotelImg from "@/assets/images/About/hotel.webp"
import fortissimo from "@/assets/images/About/fortissimosvg.svg"
import mono from "@/assets/images/About/monosvg.svg"
import central from "@/assets/images/About/centralsvg.svg"
import restImg from "@/assets/images/About/4x4.webp"
import {Link} from "react-router-dom";
import verticalDots from "@/assets/images/Hotels-icons/vertical_dots.svg";

const AboutSection = () => {
    const headerStyle = useHeaderStop();
      return (
        <section className="about-section">
            <Header page="about" style={headerStyle} />

            <div className="about-section__content container">
                <div id="about" className="about-section-block">
                  <div className="about-section--wrapper1">
                    <img src={hotelImg} alt="hotelImg" />
                    <p>«Central Hotels & Restaurants» – це комплекс готелів та ресторанів мережі «Papa&Mama»,
                      який знаходиться у центральній частині міста. Готелі «Централь» та «Моно» разом містять
                      62 зручні номери сучасного інтер’єру від одномісних до двомісних номерів, частина з яких виходить на центральну площу міста.
                      На території комплексу є електрозаправка для зручності гостей, які подорожують на електромобілях.</p>
                  </div>
                  <div className="about-section-logos">
                    <img src={fortissimo} alt="fortissimo" loading="lazy"/>
                    <img src={mono} alt="mono" loading="lazy"/>
                    <img src={central} alt="central" loading="lazy"/>
                  </div>
                  <div className="about-section--wrapper2">
                    <div className="about-section--wrapper2-text">
                      <p>Також мережа «Papa&Mama» пропонує відпочинок у готельно-ресторанному комплексі «4х4», що знаходиться на об’їзній дорозі Рівного.
                        Тут гості можуть насолодитися комфортним перебуванням у готелі «4х4», а також смачною кухнею ресторанів «Поршень» та «4х4».</p>
                      <Link to="https://www.hotel4x4.rv.ua/" className="hotel-section__adaptive--dots">
                        <h2>Дізнатися більше</h2>
                        <img
                          src={verticalDots}
                          alt="dots"
                          className="hotel-section__adaptive--dots__img"
                          loading="lazy"
                        />
                      </Link>
                    </div>
                    <div className="about-section--img">
                      <img src={restImg} alt="4x4" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div id="header-stop" className="conditions__header-stop"></div>
            </div>
            <Footer bgColor="#E5D9C1" textColor="var(--color-olivia)" isHomePage={true} />
        </section>
      )
    }

export default AboutSection