import React, { useRef } from "react";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import { useScrollPattern } from "@/utils/useScrollPattern/useScrollPattern.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import HeadingSections from "@/components/HeadingSections/HeadingSections.jsx";
import HotelBlock from "@/layouts/HotelBlock/HotelBlock.jsx";
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";

import patternHotel from "@/assets/images/Mono-Hotels/pattern.svg";
import monoBlock from "@/assets/images/Mono-Hotels/mono-block1.webp";
import iconHotel from "@/assets/images/Hotels-icons/restaurants-svg-mono.svg";

import "./BookMonoSection.scss";
import {useNavigate} from "react-router-dom";

const BookMonoSection = () => {
  const patternRef = useRef(null);
  const headerStyle = useHeaderStop();
  const navigate = useNavigate();
  useScrollPattern(patternRef, ".book-mono-section");

  return (
    <section className="book-mono-section">
      <Header page="monoHotel" style={headerStyle} />

      <div ref={patternRef} className="book-mono-section__pattern-bg">
        <img src={patternHotel} alt="Mono pattern" />
      </div>

      <div className="book-mono-section__content">
        <div className="book-mono-section--payout">

        </div>
        <div id="restaurants">
          <HeadingSections
            title="Mono Restaurant"
            subtitle="Резервуйте столик у новому ресторані Mono"
            variant="variant1"
            showPattern={true}
            dotsType="alt"
            bgColor="var(--color-mono-dark)"
            textColor="var(--color-beige)"
          />
        </div>
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

        <div id="header-stop" className="book-mono-section__header-stop"></div>
      </div>

      <Footer
        bgColor="var(--color-mono-brown)"
        textColor="var(--color-beige)"
        isHomePage={false}
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

export default BookMonoSection;
