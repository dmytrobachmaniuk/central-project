import { useRef } from "react";
import './HotelSection.scss';
import { Link, useNavigate } from "react-router-dom";
import HeadingSections from "@/components/HeadingSections/HeadingSections.jsx";
import HotelInfo from "@/layouts/HotelInfo/HotelInfo.jsx";
import RestaurantInfo from "@/layouts/RestaurantInfo/RestaurantInfo.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Header from "@/components/Header/Header.jsx";

import { useScrollPattern } from "@/utils/useScrollPattern/useScrollPattern.jsx";
import { useMatchHeight } from "@/utils/useMatchHeight/useMatchHeight.jsx";
import { useTranslation } from "react-i18next";

import iconBad from '@/assets/images/Hotels-icons/bad.svg';
import iconFork from '@/assets/images/Hotels-icons/fork.svg';
import iconKnife from '@/assets/images/Hotels-icons/knife.svg';
import iconCocktail from '@/assets/images/Hotels-icons/cocktail.svg';
import patternHotel from '@/assets/images/pattern-hotel-section.svg';
import textAddiction from '@/assets/images/Hotels-icons/text-addiction.svg';
import monoPhotoBig from "@/assets/images/Hotels-icons/mono-photo-big.webp";
import monoPhotoSmall from "@/assets/images/Hotels-icons/mono-photo-small.webp";
import centralPhotoBig from "@/assets/images/Hotels-icons/central-photo-big.webp";
import centralPhotoSmall from "@/assets/images/Hotels-icons/central-photo-small.webp";
import svgMono from "@/assets/images/Hotels-icons/restaurants-svg-mono.svg";
import svgFortissimo from "@/assets/images/Hotels-icons/restaurants-svg-fortissimo.svg";
import complexMono from "@/assets/images/complex-mono.webp";
import complexFortissimo from "@/assets/images/complex-fortissimo.webp";
import verticalDots from "@/assets/images/Hotels-icons/vertical_dots.svg";

const HotelSection = () => {
  const patternRef = useRef(null);
  const monoWrapperRef = useRef(null);
  const monoImageRef = useRef(null);
  const centralWrapperRef = useRef(null);
  const centralImageRef = useRef(null);

  const navigate = useNavigate();
  const { t } = useTranslation();

  useScrollPattern(patternRef);
  useMatchHeight(monoWrapperRef, monoImageRef, { enabled: true });
  useMatchHeight(centralWrapperRef, centralImageRef, { enabled: true });

  return (
    <section className="hotel-section">
      <Header configKey="home" />

      {/* Патерн */}
      <div ref={patternRef} className="hotel-section__pattern-bg">
        <img src={patternHotel} alt={t('homePage.hotelsTitle')} />
      </div>

      {/* Контент */}
      <div className="hotel-section__content" id="about">
        <div className="container">
          <div className="hotel-section__block--head">
            <div className="hotel-section__text-dots">
              <div className="hotel-section__block--paragraph">
                <img src={textAddiction} alt="Quote decoration" />
                <h1>{t('homePage.introPart1')}</h1>
              </div>

              <Link to="/about" className="hotel-section__adaptive--dots">
                <h2>{t('aboutPage.more')}</h2>
                <img
                  src={verticalDots}
                  alt="dots"
                  className="hotel-section__adaptive--dots__img"
                  loading="lazy"
                />
              </Link>
            </div>

            <div className="hotel-section__block--headline">
              <h2>
                {t('homePage.repeatVacation1')} <br />
                <span className="highlight">{t('homePage.repeatVacation2')}</span>
              </h2>
              <div className="hotel-section__block--icons">
                <img src={iconBad} alt="Table" />
                <img src={iconFork} alt="Fork" />
                <img src={iconKnife} alt="Knife" />
                <img src={iconCocktail} alt="Cocktail" />
              </div>
            </div>
          </div>

          <div className="hotel-section__title">
            <HeadingSections
              title={t('homePage.hotelsTitle')}
              subtitle={t('homePage.hotelsSubtitle')}
            />
          </div>
        </div>

        {/* Hotels */}
        <div className="hotel-section__hotels-wrapper">
          {/* Mono */}
          <div ref={monoWrapperRef} className="hotel-section__mono container">
            <div ref={monoImageRef} className="hotel-section__mono--image">
              <img src={monoPhotoBig} alt={t('homePage.monoAlt')} />
            </div>
            <div className="hotel-section__content">
              <HotelInfo
                title={t('homePage.monoTitle')}
                subtitle={t('homePage.monoSubtitle')}
                description={t('homePage.monoDescription')}
                imageSmall={monoPhotoSmall}
                buttonText={<span style={{ fontWeight: 600 }}>{t('homePage.comingSoon')}</span>}
              />
            </div>
          </div>

          {/* Central */}
          <div ref={centralWrapperRef} className="hotel-section__central container">
            <div ref={centralImageRef} className="hotel-section__central--image">
              <img src={centralPhotoBig} alt={t('homePage.centralAlt')} />
            </div>
            <div id="booking" className="hotel-section__content">
              <HotelInfo
                title={t('homePage.centralTitle')}
                subtitle={t('homePage.centralSubtitle')}
                description={t('homePage.centralDescription')}
                imageSmall={centralPhotoSmall}
                buttonText={t('homePage.viewRooms')}
                onClick={() => navigate("/central-hotel")}
                reverse
              />
            </div>
          </div>
        </div>

        {/* Restaurants */}
        <div id="restaurants" className="hotel-section__restaurant--wrapper">
          <div className="hotel-section__restaurant--title container">
            <HeadingSections
              title={t('homePage.restaurantsTitle')}
              subtitle={t('homePage.restaurantsSubtitle')}
              dotsType="alt"
              textColor="var(--color-beige)"
            />
          </div>
        </div>

        <div className="hotel-section__complex">
          <div className="hotel-section__complex--wrapper">
            <div className="hotel-section__complex--images">
              <img src={complexMono} alt={t('homePage.complexMonoAlt')} className="hotel-section__complex--left" />
              <img src={complexFortissimo} alt={t('homePage.complexFortissimoAlt')} className="hotel-section__complex--right" />
            </div>

            <div className="hotel-section__complex--content container">
              <RestaurantInfo
                svg={svgMono}
                title={t('homePage.monoTitle')}
                subtitle={t('homePage.monoRestaurantDescription')}
                buttonText={<span style={{ fontWeight: 600 }}>{t('homePage.comingSoon')}</span>}
              />
              <RestaurantInfo
                svg={svgFortissimo}
                title={t('homePage.fortissimoTitle')}
                subtitle={t('homePage.fortissimoRestaurantDescription')}
                buttonText={t('homePage.fortissimoMenu')}
                modifier="restaurant-info__content--right"
                onClick={() => navigate("/fortissimo-restaurant")}
              />
            </div>
          </div>
        </div>

        <div id="header-stop" className="hotel-section__header-stop"></div>
      </div>

      <Footer
        bgColor="var(--color-darkbeige)"
        textColor="var(--color-olivia)"
        popupTheme="light"
        popupButtonProps={{
          textColor: "var(--color-white)",
          hoverTextColor: "var(--color-olivia)",
          borderColor: "rgba(218, 202, 182, 0.5)",
          hoverBorderColor: "rgba(173, 160, 144, 0)",
          bgColor: "var(--color-olivia)",
        }}
      />
    </section>
  );
};

export default HotelSection;
