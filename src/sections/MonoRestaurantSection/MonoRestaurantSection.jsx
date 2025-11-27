  import Header from "@/components/Header/Header.jsx";
  import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
  import patternHotel from "@/assets/images/Mono-Restaurant/pattern.svg";
  import React, {useRef} from "react";
  import {useScrollPattern} from "@/utils/useScrollPattern/useScrollPattern.jsx";
  import Footer from "@/components/Footer/Footer.jsx";
  import "./MonoRestaurantSection.scss"
  import RestaurantTitle from "@/layouts/RestaurantTitle/RestaurantTitle.jsx";
  import RestaurantDishes
    from "@/layouts/RestaurantDishes/RestaurantDishes.jsx";

  import topImage from "@/assets/images/Mono-Restaurant/small1.webp"
  import bottomImage from "@/assets/images/Mono-Restaurant/small2.webp"
  import mainImage from "@/assets/images/Mono-Restaurant/big1.webp"
  import pizza from "@/assets/images/Mono-Restaurant/pizza.png"


  const MonoRestaurantSection = () => {
    const headerStyle = useHeaderStop();
    const patternRef = useRef(null);
    useScrollPattern(patternRef, ".mono-restaurant-section");

    return (
      <section className="mono-restaurant-section">
        {/* Header з динамічним стилем */}
        <Header page="restaurantMono" style={headerStyle} />

        {/* Патерн */}
        <div ref={patternRef} className="mono-restaurant-section__pattern-bg">
          <img src={patternHotel} alt="Restaurant pattern" draggable={false} />
        </div>

        {/* Контейнер основного контенту */}
        <div className="container">
            <div id="restaurant">
              <RestaurantTitle
                title="luogo unico"
                description="У нашому унікальному ресторані сучасний дизайн поєднується з атмосферою затишку та тепла Італії."
                buttonText="Резервація столика"
                onButtonClick={() => console.log('Button clicked')}
                textColor="#312826"
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
              onButtonClick={() => console.log('Button clicked')}
              buttonProps={{
                textColor: "var(--color-white)",
                hoverTextColor: "var(--color-olivia)",
                borderColor: "rgba(218, 202, 182, 0.5)",
                hoverBorderColor: 'rgba(173, 160, 144, 0)',
                bgColor: "var(--color-olivia)",
              }}
              image={{src: pizza, alt: "pizza"}}
            />
          </div>
        </div>

        {/* Контент, стоп-хедер і футер */}
        <div className="mono-restaurant-section__content">
          <div id="header-stop" className="mono-restaurant-section__header-stop" />
          <Footer
            bgColor="var(--color-darkbeige)"
            textColor="var(--color-olivia)"
            isHomePage={true}
          />
        </div>
      </section>

    );
  };

  export default MonoRestaurantSection;
