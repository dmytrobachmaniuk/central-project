import Header from "@/components/Header/Header.jsx";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import patternHotel from "@/assets/images/Mono-Restaurant/pattern.svg";
import React, { useRef, useState } from "react";
import { useScrollPattern } from "@/utils/useScrollPattern/useScrollPattern.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import "./MonoRestaurantSection.scss";
import RestaurantTitle from "@/layouts/RestaurantTitle/RestaurantTitle.jsx";
import RestaurantDishes from "@/layouts/RestaurantDishes/RestaurantDishes.jsx";
import RestaurantInsertSection from "@/layouts/RestaurantInsertSection/RestaurantInsertSection.jsx";
import restaurantInterior from "@/assets/images/Mono-Restaurant/restaurantInterior.webp";
import RestaurantSection from "@/layouts/RestaurantSection/RestaurantSection.jsx";

import topImage from "@/assets/images/Mono-Restaurant/small1.webp";
import bottomImage from "@/assets/images/Mono-Restaurant/small2.webp";
import mainImage from "@/assets/images/Mono-Restaurant/big1.webp";
import pizza from "@/assets/images/Mono-Restaurant/pizza.webp";
import d1 from "@/assets/images/Mono-Restaurant/d1.webp";
import d2 from "@/assets/images/Mono-Restaurant/d2.webp";

import ContactPopup from "@/components/ContactPopup/ContactPopup.jsx";

const MonoRestaurantSection = () => {
  const headerStyle = useHeaderStop();
  const patternRef = useRef(null);
  useScrollPattern(patternRef, ".mono-restaurant-section");

  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <section className="mono-restaurant-section">
      {/* Header з динамічним стилем */}
      <Header page="restaurantMono" style={headerStyle}
              burgerColor="var(--color-olivia)"
              burgerOpenColor="var(--color-darkbeige)"
      />

      {/* Патерн */}
      <div ref={patternRef} className="mono-restaurant-section__pattern-bg">
        <img src={patternHotel} alt="Restaurant pattern" draggable={false} />
      </div>

      <div className="container">
        <div id="restaurant">
          <RestaurantTitle
            title="luogo unico"
            description="У нашому унікальному ресторані сучасний дизайн поєднується з атмосферою затишку та тепла Італії."
            buttonText="Резервація столика"
            onButtonClick={() => setIsReservationOpen(true)}
            textColor="var(--color-mono-dark)"
            descriptionColor="var(--color-olivia)"
            buttonProps={{
              textColor: "var(--color-white)",
              hoverTextColor: "var(--color-olivia)",
              borderColor: "rgba(218, 202, 182, 0.5)",
              hoverBorderColor: 'rgba(173, 160, 144, 0)',
              bgColor: "var(--color-olivia)",
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
                Найсмачніші традиції <br />
                італійської кухні <br />
                в одному меню
              </>
            }
            buttonText="Переглянути страви"
            onButtonClick={() => console.log("Переглянути страви")}
            buttonProps={{
              textColor: "var(--color-white)",
              hoverTextColor: "var(--color-olivia)",
              borderColor: "rgba(218, 202, 182, 0.5)",
              hoverBorderColor: 'rgba(173, 160, 144, 0)',
              bgColor: "var(--color-olivia)",
            }}
            image={{ src: pizza, alt: "pizza" }}
            imageOffset="-35vw"
          />
        </div>
      </div>

      <div className="mono-restaurant-section__content">
        <RestaurantInsertSection
          image={restaurantInterior}
          text="Стильний інтерʼєр поєднується тут із сучасним комфортом та затишною атмосферою,
                створюючи ідеальні умови для відпочинку."
        />
        <div className="container">
          <RestaurantSection
            title="cucina d’Italia"
            desc1="Наш італійський ресторан народився з любові до традиційної кухні та спогадів про сімейні вечері в маленькому містечку на узбережжі.
                   Ідея з’явилася під час подорожей Італією, коли кожен регіон відкривав нові смаки й кулінарні історії."
            desc2="Натхненням стала не лише їжа, а й філософія італійського життя — насолода моментом, простота та автентичність. Кожна страва в меню — це класичний рецепт з авторським акцентом шеф-кухаря,
                   щоб гості відчули Італію в кожній деталі."
            images={[
              { src: d1, alt: "Спагеті" },
              { src: d2, alt: "Напій" }
            ]}
            buttonText="Резервація столика"
            onButtonClick={() => setIsReservationOpen(true)}
            buttonProps={{
              textColor: "var(--color-white)",
              hoverTextColor: "var(--color-olivia)",
              borderColor: "rgba(218, 202, 182, 0.5)",
              hoverBorderColor: 'rgba(173, 160, 144, 0)',
              bgColor: "var(--color-olivia)",
            }}
          />
        </div>
        <div id="header-stop" className="mono-restaurant-section__header-stop" />
      </div>
      <div className="mono-restaurant-section_footer">
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
        <ContactPopup
          isOpen={isReservationOpen}
          onClose={() => setIsReservationOpen(false)}
          variant="light"
          text="Телефонуйте для бронювання столика"
          phone="+380 96 312 44 49"
          buttonProps={{
            textColor: "var(--color-white)",
            hoverTextColor: "var(--color-olivia)",
            borderColor: "rgba(218, 202, 182, 0.5)",
            hoverBorderColor: "rgba(173, 160, 144, 0)",
            bgColor: "var(--color-olivia)",
          }}
        />
      </div>
    </section>
  );
};

export default MonoRestaurantSection;
