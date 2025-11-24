import './BookCentralSection.scss'
import React, { useRef } from "react";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import { useScrollPattern } from "@/utils/useScrollPattern/useScrollPattern.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import HeadingSections from "@/components/HeadingSections/HeadingSections.jsx";
import HotelBlock from "@/layouts/HotelBlock/HotelBlock.jsx";
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";

import patternHotel from "@/assets/images/pattern-hotel-section.svg";
import iconHotel from "@/assets/images/Hotels-icons/restaurants-svg-mono.svg";
import centralBlock from "@/assets/images/Central-Hotels/central_block1.webp";

const BookCentralSection = () => {
    const patternRef = useRef(null);
    const headerStyle = useHeaderStop();
    useScrollPattern(patternRef, ".book-central-section");

  return (
    <section className="book-central-section">
        <Header page="centralHotel" style={headerStyle} />
        <div ref={patternRef} className="book-central-section__pattern-bg">
            <img src={patternHotel} alt="Mono pattern" />
        </div>

        <div className="book-central-section__content">
            <div className="book-central-section--payout">

            </div>
            <div id="restaurants">
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

            <div id="header-stop" className="book-central-section__header-stop"></div>
        </div>

        <Footer bgColor="#554A40" textColor="var(--color-beige)" isHomePage={false} />
    </section>
  )
}

export default BookCentralSection