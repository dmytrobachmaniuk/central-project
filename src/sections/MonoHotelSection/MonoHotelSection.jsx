import React, { useRef } from "react";
import {useNavigate} from "react-router-dom";
import { useScrollPattern } from "@/utils/useScrollPattern/useScrollPattern.jsx";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import patternHotel from "@/assets/images/Mono-Hotels/pattern.svg";
import RoomCard from "@/components/RoomCard/RoomCard.jsx";
import HeadingSections from "@/components/HeadingSections/HeadingSections.jsx";
import HotelBlock from "@/layouts/HotelBlock/HotelBlock.jsx";
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import "./MonoHotelSection.scss";

import sr1 from "@/assets/images/Mono-Hotels/sr1.webp";
import sr2 from "@/assets/images/Mono-Hotels/sr2.webp";
import sr3 from "@/assets/images/Mono-Hotels/sr3.webp";
import sr4 from "@/assets/images/Mono-Hotels/sr4.webp";
import sr5 from "@/assets/images/Mono-Hotels/sr5.webp";
import sr6 from "@/assets/images/Mono-Hotels/sr6.webp";
import monoBlock from "@/assets/images/Mono-Hotels/mono-block1.webp";
import iconHotel from "@/assets/images/Hotels-icons/restaurants-svg-mono.svg";

const MonoHotelSection = () => {
  const patternRef = useRef(null);
  const headerStyle = useHeaderStop(); // хук для стоп-хедера
  const navigate = useNavigate();

  useScrollPattern(patternRef, ".mono-hotel-section");

  return (
    <section className="mono-hotel-section">
      {/* Header з динамічними стилями */}
      <Header page="monoHotel" style={headerStyle} />

      <div ref={patternRef} className="mono-hotel-section__pattern-bg">
        <img src={patternHotel} alt="Mono Hotel pattern" />
      </div>

      <div className="container">
        <div className="mono-hotel-section__roomcard">
          <RoomCard
            title="Standard Room"
            size="25м²"
            sizeDescription="номер з двоспальним ліжком"
            mainImage={sr1}
            secondaryImage={sr2}
            hoverColor="var(--color-darkbeige)"
            services={["До послуг гостей"]}
            included={["У ціну включено"]}
            onBookClick={() => navigate("/mono-book")}
            popupConfig={{
              services: {
                title: "Standard Room",
                subtitle: "Mono Hotel",
                options: ["iron" , "bath" , "bar" , "slippers" , "air" , "wifi" , "tv"],
              },
              included: {
                title: "Standard Room",
                subtitle: "Mono Hotel",
                options: ["breakfast", "park"],
              },
            }}
          />
          <RoomCard
            title="Deluxe Room"
            size="32м²"
            sizeDescription="покращений номер з двоспальним ліжком"
            mainImage={sr3}
            secondaryImage={sr4}
            hoverColor="var(--color-darkbeige)"
            services={["До послуг гостей"]}
            included={["У ціну включено"]}
            onBookClick={() => navigate("/mono-book")}
            reverse
            popupConfig={{
              services: {
                title: "Deluxe Room",
                subtitle: "Mono Hotel",
                options: ["iron" , "bath" , "bar" , "slippers" , "air" , "wifi" , "tv"],
              },
              included: {
                title: "Deluxe Room",
                subtitle: "Mono Hotel",
                options: ["breakfast", "park"],
              },
            }}
          />
          <RoomCard
            title="Suite"
            size="47м²"
            sizeDescription="номер люкс"
            mainImage={sr5}
            secondaryImage={sr6}
            hoverColor="var(--color-darkbeige)"
            services={["До послуг гостей"]}
            included={["У ціну включено"]}
            onBookClick={() => navigate("/mono-book")}
            popupConfig={{
              services: {
                title: "Suite",
                subtitle: "Mono Hotel",
                options: ["iron" , "bath" , "bar" , "slippers" , "air" , "wifi" , "tv"],
              },
              included: {
                title: "Suite",
                subtitle: "Mono Hotel",
                options: ["breakfast", "park"],
              },
            }}
          />
        </div>
      </div> {/*щоб бути вище по з-індексу*/}

      <div className="mono-hotel-section__content">
        <div id="restaurants" className="mono-hotel-section--titles">
          <HeadingSections
            title="Mono Restaurant"
            subtitle="Резервуйте столик у новому ресторані Mono"
            variant="variant1"
            showPattern={true}
            dotsType="alt"
            bgColor="var(--color-mono-brown)"
            textColor="var(--color-beige)"
          />
        </div>

        <div className="mono-hotel-section--block">
          <HotelBlock
            background={monoBlock}
            icon={iconHotel}
            title="Mono"
            subtitle="Стильний інтер’єр поєднується тут із сучасним комфортом та затишною атмосферою, створюючи ідеальні умови для відпочинку."
            button={
              <ButtonAnimate
                text="Меню Моно"
                onClick={() => navigate("/mono-restaurant")}
                textColor="var(--color-white)"
                hoverTextColor="var(--color-darkbeige)"
                borderColor="var(--color-border-opacity)"
                hoverBorderColor="var(--color-hover-border-opacity)"
              />
            }
          />
        </div>

        {/* Стоп-блок для хедера */}
        <div id="header-stop" className="mono-hotel-section__header-stop"></div>
        <Footer
          bgColor="var(--color-mono-brown)"
          textColor="var(--color-beige)"
          isHomePage={true}
        />
      </div>
    </section>
  );
};

export default MonoHotelSection;
