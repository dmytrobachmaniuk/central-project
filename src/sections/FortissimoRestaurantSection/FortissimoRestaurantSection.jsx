import Header from "@/components/Header/Header.jsx";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import "./FortissimoRestaurantSection.scss"
import React, {useRef, useState} from "react";
import {useScrollPattern} from "@/utils/useScrollPattern/useScrollPattern.jsx";
import patternHotel from "@/assets/images/Fortissimo-Restaurant/patternBg.svg";
import RestaurantTitle from "@/layouts/RestaurantTitle/RestaurantTitle.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import topImage from "@/assets/images/Fortissimo-Restaurant/small1.webp";
import bottomImage from "@/assets/images/Fortissimo-Restaurant/small2.webp";
import mainImage from "@/assets/images/Fortissimo-Restaurant/big1.webp";
import RestaurantDishes from "@/layouts/RestaurantDishes/RestaurantDishes.jsx";
import cup from "@/assets/images/Fortissimo-Restaurant/cup.webp";
import RestaurantInsertSection
  from "@/layouts/RestaurantInsertSection/RestaurantInsertSection.jsx";
import restaurantInterior
  from "@/assets/images/Fortissimo-Restaurant/restaurantInterior.webp";
import RestaurantSection
  from "@/layouts/RestaurantSection/RestaurantSection.jsx";
import d1 from "@/assets/images/Fortissimo-Restaurant/burger.webp";
import d2 from "@/assets/images/Fortissimo-Restaurant/nuggets.webp";
import ContactPopup from "@/components/ContactPopup/ContactPopup.jsx";


const FortissimoRestaurantSection = () => {
    const headerStyle = useHeaderStop();
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
          <div id="restaurant">
          <RestaurantTitle
            title="food & drinks"
            description="Сучасний стріт-бар у центрі Рівного, який створений для тих, хто цінує поєднання стильного інтер’єру, яскравих смаків та живої атмосфери"
            buttonText="Резервація столика"
            onButtonClick={() => setIsReservationOpen(true)}
            textColor="var(--color-white)"
            descriptionColor="var(--color-beige)"
            buttonProps={{
              textColor: "var(--color-fortissimo-red)",
              hoverTextColor: "var(--color-fortissimo-red)",
              borderColor: "rgba(218, 202, 182, 0.3)",
              hoverBorderColor: 'rgba(173, 160, 144, 0)',
            }}
            smallImageTop={{ src: topImage, alt: 'Top image' }}
            smallImageBottom={{ src: bottomImage, alt: 'Bottom image' }}
            mainImageRight={{ src: mainImage, alt: 'Main image' }}
          />
          </div>
          <div id="menu">
          <RestaurantDishes
            title={
              <>
                Місце, де зустрічі, <br />
                емоції та моменти<br />
                стають спогадами
              </>
            }
            buttonText="Переглянути страви"
            onButtonClick={() =>
              window.location.href =
                "https://fortissimo.choiceqr.com/menu/section:kuhnya/snidanki-do-12-00"
            }
            buttonProps={{
              textColor: "var(--color-fortissimo-red)",
              hoverTextColor: "var(--color-fortissimo-red)",
              borderColor: "rgba(218, 202, 182, 0.2)",
              hoverBorderColor: 'rgba(173, 160, 144, 0)',
            }}
            image={{src: cup, alt: "pizza"}}
            imageOffset="-15vw"
            textColor="var(--color-beige)"
          />
        </div>

        </div>

        <div className="fortissimo-restaurant-section__content">
          <RestaurantInsertSection
            image={restaurantInterior}
            text="Fortissimo відомий своєю атмосферністю, уважним сервісом та особливою енергетикою, яка робить кожен візит незабутнім."
          />
          <div className="container">
            <RestaurantSection
              title="street bar"
              desc1="Fortissimo — це сучасний стріт-бар у самому серці Рівного, який поєднує стильний індустріальний дизайн із теплою та затишною атмосферою.
                     Усередині на гостей чекає гармонія цегляних стін та темних металевих елементів, що створює особливий настрій для дружніх зустрічей або вечірнього відпочинку. "
              desc2="Меню закладу пропонує оригінальні страви, які поєднують авторські рецепти та популярні вуличні хіти, а коктейльна карта приємно здивує навіть досвідчених гурманів."
              images={[
                { src: d1, alt: "Бургер" },
                { src: d2, alt: "Нагетс" }
              ]}
              titleColor="var(--color-white)"
              textColor ="var(--color-beige)"
              buttonText="Резервація столика"
              onButtonClick={() => setIsReservationOpen(true)}
              buttonProps={{
                textColor: "var(--color-fortissimo-red)",
                hoverTextColor: "var(--color-fortissimo-red)",
                borderColor: "rgba(218, 202, 182, 0.2)",
                hoverBorderColor: 'rgba(173, 160, 144, 0)',
              }}
            />
          </div>
          <div id="header-stop" className="fortissimo-restaurant-section__header-stop" />
          <Footer
            bgColor="#3D3D3D"
            textColor="var(--color-white)"
            isHomePage={true}
            email=""
          />
        </div>
        <ContactPopup
          isOpen={isReservationOpen}
          onClose={() => setIsReservationOpen(false)}
          variant="dark"
          text="Телефонуйте для бронювання столика"
          phone="+380 97 898 15 51"
          buttonProps={{
            textColor: "var(--color-fortissimo-red)",
            hoverTextColor: "var(--color-fortissimo-red)",
            borderColor: "rgba(218, 202, 182, 0.2)",
            hoverBorderColor: 'rgba(173, 160, 144, 0)',
          }}
        />
      </section>
    );
};

export default FortissimoRestaurantSection;
