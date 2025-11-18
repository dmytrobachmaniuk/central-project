import React, { useRef } from "react";
import { useMatchWidth } from "@/utils/useMatchWidth/useMatchWidth.jsx";
import "./HotelInfo.scss";
import textAddiction from "@/assets/images/Hotels-icons/text-addiction.svg";
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";

const HotelInfo = ({ title, subtitle, description, imageSmall, reverse = false, onClick }) => {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);

  useMatchWidth(wrapperRef, imageRef);

  return (
    <section ref={wrapperRef} className={`hotel-info ${reverse ? "reverse" : ""}`}>
      <div className="hotel-info__content">
        <h2 className="hotel-info__title">{title}</h2>

        <div className="hotel-info__subtitle-wrap">
          <img src={textAddiction} alt="icon" className="hotel-info__icon" />
          <p className="hotel-info__subtitle">{subtitle}</p>
        </div>

        <div className="hotel-info__small-image" ref={imageRef}>
          <img src={imageSmall} alt={`${title} small`} />
        </div>

        <p className="hotel-info__description">{description}</p>

        <ButtonAnimate text="Переглянути номери" onClick={onClick} />
      </div>
    </section>
  );
};

export default HotelInfo;
