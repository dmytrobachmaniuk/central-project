import Header from "@/components/Header/Header.jsx";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import "./FortissimoRestaurantSection.scss"
import React, {useRef} from "react";
import {useScrollPattern} from "@/utils/useScrollPattern/useScrollPattern.jsx";
import patternHotel from "@/assets/images/Fortissimo-Restaurant/patternBg.svg";
import RestaurantTitle from "@/layouts/RestaurantTitle/RestaurantTitle.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import topImage from "@/assets/images/Fortissimo-Restaurant/small1.webp";
import bottomImage from "@/assets/images/Fortissimo-Restaurant/small2.webp";
import mainImage from "@/assets/images/Fortissimo-Restaurant/big1.webp";
import RestaurantDishes from "@/layouts/RestaurantDishes/RestaurantDishes.jsx";
import cup from "@/assets/images/Fortissimo-Restaurant/cup.png";

const FortissimoRestaurantSection = () => {
    const headerStyle = useHeaderStop();
    const patternRef = useRef(null);
    useScrollPattern(patternRef, ".fortissimo-restaurant-section");

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
            onButtonClick={() => console.log('Button clicked')}
            textColor="var(--color-white)"
            descriptionColor="var(--color-beige)"
            buttonProps={{
              textColor: "#DA3738",
              hoverTextColor: "#DA3738",
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
            onButtonClick={() => console.log('Button clicked')}
            buttonProps={{
              textColor: "#DA3738",
              hoverTextColor: "#DA3738",
              borderColor: "rgba(218, 202, 182, 0.2)",
              hoverBorderColor: 'rgba(173, 160, 144, 0)',
            }}
            image={{src: cup, alt: "pizza"}}
            imageOffset="-8vw"
            textColor="var(--color-beige)"
          />
        </div>
        </div>

        <div className="fortissimo-restaurant-section__content">
          <div id="header-stop" className="fortissimo-restaurant-section__header-stop" />
          <Footer
            bgColor="#3D3D3D"
            textColor="var(--color-white)"
            isHomePage={true}
            email=""
          />
        </div>
      </section>
    );
};

export default FortissimoRestaurantSection;
