import './BookCentralSection.scss'
import React, { useRef, useEffect } from "react";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import { useScrollPattern } from "@/utils/useScrollPattern/useScrollPattern.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import HeadingSections from "@/components/HeadingSections/HeadingSections.jsx";
import HotelBlock from "@/layouts/HotelBlock/HotelBlock.jsx";
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";

import patternHotel from "@/assets/images/Central-Hotels/patternbg.svg";
import iconHotel from "@/assets/images/Hotels-icons/restaurants-svg-mono.svg";
import centralBlock from "@/assets/images/Central-Hotels/central_block1.webp";
import { useNavigate } from "react-router-dom";

const BookCentralSection = () => {
  const patternRef = useRef(null);
  const headerStyle = useHeaderStop();
  useScrollPattern(patternRef, ".book-central-section");
  const navigate = useNavigate();
  const companyKey = import.meta.env.VITE_SERVIO_COMPANY_KEY;


  // ✅ SERVIO RESERVATION v4 (QR BOOKING)
  useEffect(() => {
    if (window.__SERVIO_LOADED__) return;
    window.__SERVIO_LOADED__ = true;

    const script = document.createElement("script");
    script.id = "servioQRBookingScript";
    script.src = "https://serviobooking.com/ServioQR/js/bookingPage.js";
    script.setAttribute("companyKey", companyKey);
    script.setAttribute("isExport", "true");
    script.async = true;

    document.body.appendChild(script);
  }, [companyKey]);


  return (
    <section className="book-central-section">
      <Header page="centralHotel" style={headerStyle} />

      <div ref={patternRef} className="book-central-section__pattern-bg">
        <img src={patternHotel} alt="Mono pattern" />
      </div>

      <div className="book-central-section__content">
        <div className="book-central-section--payout">
          <section
            className="booking-page-container"
            id="bookingPageContainer"
            data-theme="light"
          />
        </div>

        <div id="restaurants">
          <HeadingSections
            title="Fortissimo Street Bar"
            subtitle="Вулична кухня на будь-який смак"
            variant="variant1"
            showPattern={true}
            dotsType="alt"
            bgColor="var(--color-fortissimo-black-bg)"
            textColor="var(--color-beige)"
          />
        </div>

        <HotelBlock
          background={centralBlock}
          icon={iconHotel}
          title="Fortissimo"
          subtitle="Стильний інтер’єр поєднується тут із сучасним комфортом."
          button={
            <ButtonAnimate
              text="Меню Fortissimo"
              onClick={() => navigate("/fortissimo-restaurant")}
              textColor="var(--color-white)"
              hoverTextColor="var(--color-darkbeige)"
              borderColor="var(--color-border-opacity)"
              hoverBorderColor="var(--color-hover-border-opacity)"
            />
          }
        />

        <div id="header-stop" className="book-central-section__header-stop"></div>
      </div>

      <Footer
        bgColor="var(--color-mono-brown)"
        textColor="var(--color-beige)"
        isHomePage={false}
      />
    </section>
  );
};

export default BookCentralSection;
