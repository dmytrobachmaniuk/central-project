import React from "react";
import "./HotelInfo.scss";
import textAddiction from "@/assets/images/Hotels-icons/text-addiction.svg";
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";

const HotelInfo = ({ title, subtitle, description, images, reverse = false }) => {
  return (
    <section className={`hotel-info ${reverse ? "reverse" : ""}`}>
      <div className="hotel-info__main-image">
        <img src={images[0]} alt={`${title} main`} />
      </div>

      <div className="hotel-info__container">
        <div className="hotel-info__content-wrap">
          <div className="hotel-info__content">
            <h2 className="hotel-info__title">{title}</h2>

            <div className="hotel-info__subtitle-wrap">
              <img src={textAddiction} alt="icon" className="hotel-info__icon" />
              <p className="hotel-info__subtitle">{subtitle}</p>
            </div>

            <div className="hotel-info__small-image">
              <img src={images[1]} alt={`${title} small`} />
            </div>

            <p className="hotel-info__description">{description}</p>
            <ButtonAnimate text="Переглянути номери" />
          </div>
        </div>
      </div>
    </section>

  );
};

export default HotelInfo;
