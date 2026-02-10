import Header from "@/components/Header/Header.jsx";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import "./FortissimoRestaurantSection.scss";
import React, { useRef, useState } from "react";
import { useScrollPattern } from "@/utils/useScrollPattern/useScrollPattern.jsx";
import patternHotel from "@/assets/images/Fortissimo-Restaurant/patternBg.svg";
import RestaurantTitle from "@/layouts/RestaurantTitle/RestaurantTitle.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import topImage from "@/assets/images/Fortissimo-Restaurant/small1.webp";
import bottomImage from "@/assets/images/Fortissimo-Restaurant/small2.webp";
import mainImage from "@/assets/images/Fortissimo-Restaurant/big1.webp";
import RestaurantDishes from "@/layouts/RestaurantDishes/RestaurantDishes.jsx";
import cup from "@/assets/images/Fortissimo-Restaurant/cup.webp";
import RestaurantInsertSection from "@/layouts/RestaurantInsertSection/RestaurantInsertSection.jsx";
import restaurantInterior from "@/assets/images/Fortissimo-Restaurant/restaurantInterior.webp";
import RestaurantSection from "@/layouts/RestaurantSection/RestaurantSection.jsx";
import d1 from "@/assets/images/Fortissimo-Restaurant/burger.webp";
import d2 from "@/assets/images/Fortissimo-Restaurant/nuggets.webp";
import ContactPopup from "@/components/ContactPopup/ContactPopup.jsx";
import { useTranslation } from "react-i18next";

const FortissimoRestaurantSection = () => {
  const headerStyle = useHeaderStop();
  const { t } = useTranslation();
  const patternRef = useRef(null);
  useScrollPattern(patternRef, ".fortissimo-restaurant-section");
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <section className="fortissimo-restaurant-section">
      <Header page="restaurantFortissimo" style={headerStyle} />

      <div ref={patternRef} className="fortissimo-restaurant-section__pattern-bg">
        <img src={patternHotel} alt="Restaurant pattern" draggable={false} />
      </div>

      <div className="container">
        {/* Restaurant Title Section */}
        <div id="restaurant">
          <RestaurantTitle
            title={t("fortissimoRestaurantPage.title")}
            description={t("fortissimoRestaurantPage.description")}
            buttonText={t("fortissimoRestaurantPage.reserveButton")}
            onButtonClick={() => setIsReservationOpen(true)}
            textColor="var(--color-white)"
            descriptionColor="var(--color-beige)"
            buttonProps={{
              textColor: "var(--color-fortissimo-red)",
              hoverTextColor: "var(--color-fortissimo-red)",
              borderColor: "rgba(218, 202, 182, 0.3)",
              hoverBorderColor: "rgba(173, 160, 144, 0)",
            }}
            smallImageTop={{ src: topImage, alt: "Top image" }}
            smallImageBottom={{ src: bottomImage, alt: "Bottom image" }}
            mainImageRight={{ src: mainImage, alt: "Main image" }}
          />
        </div>

        {/* Restaurant Dishes Section */}
        <div id="menu">
          <RestaurantDishes
            title={t("fortissimoRestaurantPage.dishesTitle")}
            buttonText={t("fortissimoRestaurantPage.viewMenuButton")}
            onButtonClick={() =>
              window.location.href =
                "https://fortissimo.choiceqr.com/menu/section:kuhnya/snidanki-do-12-00"
            }
            buttonProps={{
              textColor: "var(--color-fortissimo-red)",
              hoverTextColor: "var(--color-fortissimo-red)",
              borderColor: "rgba(218, 202, 182, 0.2)",
              hoverBorderColor: "rgba(173, 160, 144, 0)",
            }}
            image={{ src: cup, alt: "cup" }}
            imageOffset="-15vw"
            textColor="var(--color-beige)"
          />
        </div>
      </div>

      {/* Interior & Street Bar Section */}
      <div className="fortissimo-restaurant-section__content">
        <RestaurantInsertSection
          image={restaurantInterior}
          text={t("fortissimoRestaurantPage.interiorDescription")}
        />

        <div className="container">
          <RestaurantSection
            title={t("fortissimoRestaurantPage.streetBarTitle")}
            desc1={t("fortissimoRestaurantPage.streetBarDesc1")}
            desc2={t("fortissimoRestaurantPage.streetBarDesc2")}
            images={[
              { src: d1, alt: "Бургер" },
              { src: d2, alt: "Нагетс" },
            ]}
            titleColor="var(--color-white)"
            textColor="var(--color-beige)"
            buttonText={t("fortissimoRestaurantPage.reserveButton")}
            onButtonClick={() => setIsReservationOpen(true)}
            buttonProps={{
              textColor: "var(--color-fortissimo-red)",
              hoverTextColor: "var(--color-fortissimo-red)",
              borderColor: "rgba(218, 202, 182, 0.2)",
              hoverBorderColor: "rgba(173, 160, 144, 0)",
            }}
          />
        </div>
        <div id="header-stop" className="fortissimo-restaurant-section__header-stop" />
      </div>

      {/* Footer & Reservation Popup */}
      <div className="fortissimo-restaurant-section__header__footer">
        <Footer
          bgColor="#3D3D3D"
          textColor="var(--color-white)"
          popupTheme="dark"
          popupButtonProps={{
            textColor: "var(--color-fortissimo-red)",
            hoverTextColor: "var(--color-fortissimo-red)",
            borderColor: "rgba(218, 202, 182, 0.2)",
            hoverBorderColor: "rgba(173, 160, 144, 0)",
          }}
        />
        <ContactPopup
          isOpen={isReservationOpen}
          onClose={() => setIsReservationOpen(false)}
          variant="dark"
          text={t("fortissimoRestaurantPage.contactText")}
          phone="+380 97 898 15 51"
          buttonProps={{
            textColor: "var(--color-fortissimo-red)",
            hoverTextColor: "var(--color-fortissimo-red)",
            borderColor: "rgba(218, 202, 182, 0.2)",
            hoverBorderColor: "rgba(173, 160, 144, 0)",
          }}
        />
      </div>
    </section>
  );
};

export default FortissimoRestaurantSection;
