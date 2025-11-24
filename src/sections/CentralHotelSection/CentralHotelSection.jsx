import React, { useRef } from "react";
import { useScrollPattern } from "@/utils/useScrollPattern/useScrollPattern.jsx";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import {useNavigate} from "react-router-dom";
import './CentralHotelSection.scss'
import Header from "@/components/Header/Header.jsx";
import patternHotel from "@/assets/images/pattern-hotel-section.svg";
import RoomCard from "@/components/RoomCard/RoomCard.jsx";
import HeadingSections from "@/components/HeadingSections/HeadingSections.jsx";
import HotelBlock from "@/layouts/HotelBlock/HotelBlock.jsx";
import centralBlock from "@/assets/images/Central-Hotels/central_block1.webp"
import iconHotel from "@/assets/images/Hotels-icons/restaurants-svg-fortissimo.svg";
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";
import Footer from "@/components/Footer/Footer.jsx";

import logo from "@/assets/images/Mono-Hotels/svg-central-black.svg"
import sr1 from "@/assets/images/Central-Hotels/sr1.webp";
import sr2 from "@/assets/images/Central-Hotels/sr2.webp";
import sr3 from "@/assets/images/Central-Hotels/sr3.webp";
import sr4 from "@/assets/images/Central-Hotels/sr4.webp";
import sr5 from "@/assets/images/Central-Hotels/sr5.webp";
import sr6 from "@/assets/images/Central-Hotels/sr6.webp";
import sr7 from "@/assets/images/Central-Hotels/sr7.webp";
import sr8 from "@/assets/images/Central-Hotels/sr8.webp";
import sr9 from "@/assets/images/Central-Hotels/sr9.webp";
import sr10 from "@/assets/images/Central-Hotels/sr10.webp";

const CentralHotelSection = () => {
  const patternRef = useRef(null);
  const headerStyle = useHeaderStop(); // хук для стоп-хедера
  const navigate = useNavigate();

  useScrollPattern(patternRef, ".central-hotel-section");

  return (
    <section className="central-hotel-section">
      <Header page="centralHotel" style={headerStyle} />

      <div ref={patternRef} className="central-hotel-section__pattern-bg">
        <img src={patternHotel} alt="Central Hotel pattern" />
      </div>

      <div className="container">
        <div className="central-hotel-section__roomcard">
          <RoomCard
            title="Single Standart"
            size="12м²"
            sizeDescription={
              <>
                одномісний номер <br /> з видом на кафедральний собор
              </>
            }
            mainImage={sr1}
            secondaryImage={sr2}
            hoverColor="var(--color-darkbeige)"
            services={["До послуг гостей"]}
            included={["У ціну включено"]}
            onBookClick={() => navigate("/central-book")}
            popupConfig={{
              services: {
                title: "Single Standard",
                image: logo,
                options: ["bed" , "shelf" , "workspace" , "air" , "smart" , "phone" , "safe" , "nonsmoking" , "lift" , "towel" ,
                  "slippers2" , "tooth" , "cosmetic" , "cosmetic2" , "fen" , "bath2"],
              },
              included: {
                title: "Single Standard",
                image: logo,
                options: ["breakfast", "park"],
              },
            }}
          />
          <RoomCard
            title="Single Superior"
            size="14м²"
            sizeDescription={
              <>
                покращений номер з великим ліжком<br />
                з видом на тихий внутрішній дворик
              </>
            }
              mainImage={sr3}
              secondaryImage={sr4}
              hoverColor="var(--color-darkbeige)"
              services={["До послуг гостей"]}
              included={["У ціну включено"]}
              onBookClick={() => navigate("/central-book")}
              reverse
              popupConfig={{
              services: {
                title: "Single Standard",
                image: logo,
                options: ["bed" , "shelf" , "workspace" , "air" , "smart" , "phone" , "safe" , "nonsmoking" , "lift" , "towel" ,
                  "slippers2" , "tooth" , "cosmetic" , "cosmetic2" , "fen" , "bath2"],
              },
              included: {
                title: "Single Standard",
                image: logo,
                options: ["breakfast", "park"],
              },
            }}
          />
          <RoomCard
            title="Double Room"
            size="18м²"
            sizeDescription=
              <>
              двомісний номер для одного або двох гостей
              з видом<br /> на внутрішній дворик чи центральну площу міста
              </>
              mainImage={sr5}
              secondaryImage={sr6}
              hoverColor="var(--color-darkbeige)"
              services={["До послуг гостей"]}
              included={["У ціну включено"]}
              onBookClick={() => navigate("/central-book")}
              popupConfig={{
              services: {
                title: "Single Standard",
                image: logo,
                options: ["bed" , "shelf" , "workspace" , "air" , "smart" , "phone" , "safe" , "nonsmoking" , "lift" , "towel" ,
                  "slippers2" , "tooth" , "cosmetic" , "cosmetic2" , "fen" , "bath2"],
              },
              included: {
                title: "Single Standard",
                image: logo,
                options: ["breakfast", "park"],
              },
            }}
          />
          <RoomCard
            title="Twin Room"
            size="25м²"
            sizeDescription=
              <>
                двомісний номер з двома ліжками<br/>
                з видом на внутрішній дворик
              </>
              mainImage={sr7}
              secondaryImage={sr8}
              hoverColor="var(--color-darkbeige)"
              services={["До послуг гостей"]}
              included={["У ціну включено"]}
              onBookClick={() => navigate("/central-book")}
              reverse
              popupConfig={{
              services: {
                title: "Single Standard",
                image: logo,
                options: ["bed" , "shelf" , "workspace" , "air" , "smart" , "phone" , "safe" , "nonsmoking" , "lift" , "towel" ,
                  "slippers2" , "tooth" , "cosmetic" , "cosmetic2" , "fen" , "bath2"],
              },
              included: {
                title: "Single Standard",
                image: logo,
                options: ["breakfast", "park"],
              },
            }}
          />
          <RoomCard
            title="Deluxe"
            size="25м²"
            sizeDescription=
              <>
                номер делюкс з широким ліжком<br />
                з видом на центральну площу міста
              </>
              mainImage={sr9}
              secondaryImage={sr10}
              hoverColor="var(--color-darkbeige)"
              services={["До послуг гостей"]}
              included={["У ціну включено"]}
              onBookClick={() => navigate("/central-book")}
              popupConfig={{
              services: {
                title: "Single Standard",
                image: logo,
                options: ["bed" , "shelf" , "workspace" , "air" , "smart" , "phone" , "safe" , "nonsmoking" , "lift" , "towel" ,
                  "slippers2" , "tooth" , "cosmetic" , "cosmetic2" , "fen" , "bath2"],
              },
              included: {
                title: "Single Standard",
                image: logo,
                options: ["breakfast", "park"],
              },
            }}
          />
        </div>
      </div>
      <div className="central-hotel-section__content">
        <div id="restaurants" className="central-hotel-section--titles">
          <HeadingSections
            title="Fortissimo Street Bar"
            subtitle="Вулична кухня на будь-який смак"
            variant="variant1"
            showPattern={true}
            dotsType="alt"
            bgColor="#191919"
            textColor="var(--color-beige)"
          />
        </div>

        <div className="central-hotel-section--block">
          <HotelBlock
            background={centralBlock}
            icon={iconHotel}
            title="Fortissimo"
            subtitle="Стильний інтер’єр поєднується тут із сучасним комфортом та затишною атмосферою, створюючи ідеальні умови для відпочинку."
            button={
              <ButtonAnimate
                text="Меню Fortissimo"
                onClick={() => console.log("ok")}
                textColor="var(--color-white)"
                hoverTextColor="var(--color-darkbeige)"
                borderColor="rgba(255,255,255,0.2)"
                hoverBorderColor="rgba(255,255,255,0)"
              />
            }
          />
        </div>

        <div id="header-stop" className="central-hotel-section__header-stop"></div>
          <Footer
            bgColor="#554A40"
            textColor="var(--color-beige)"
            isHomePage={true}
          />
      </div>
    </section>
  )
}

export default CentralHotelSection