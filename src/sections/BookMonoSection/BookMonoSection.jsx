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

const BookMonoSection = () => {
  const patternRef = useRef(null);
  const headerStyle = useHeaderStop();

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
            bgColor="#554A40"
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
              onClick={() => console.log("ok")}
              textColor="var(--color-white)"
              hoverTextColor="var(--color-darkbeige)"
              borderColor="rgba(255,255,255,0.2)"
              hoverBorderColor="rgba(255,255,255,0)"
            />
          }
        />

        <div id="header-stop" className="book-mono-section__header-stop"></div>
      </div>

      <Footer bgColor="#554A40" textColor="var(--color-beige)" isHomePage={false} />
    </section>
  );
};

export default BookMonoSection;
