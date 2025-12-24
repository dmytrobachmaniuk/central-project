import './RestaurantInfo.scss';
import React, { useRef } from "react";
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";

const RestaurantInfo = ({ svg, title, subtitle, buttonText, modifier, onClick }) => {
  const wrapperRef = useRef(null);

  return (
    <section ref={wrapperRef} className={`restaurant-info ${modifier || ''}`}>
      <div className={`restaurant-info__content ${modifier ? 'restaurant-info__content--right' : ''}`}>
        <div className="restaurant-info__svg">
          <img src={svg} alt={`${title} small`} />
        </div> {/* svg */}
        <div className="restaurant-info__wrapper">
          <h2 className="restaurant-info__title">{title}</h2>
          <p className="restaurant-info__subtitle">{subtitle}</p>
          <ButtonAnimate
            className={`button--white-hover ${modifier ? 'restaurant-info__button--alt' : ''}`}
            text={buttonText}
            textColor="var(--color-white)"
            hoverTextColor="var(--color-darkbeige)"
            onClick={onClick}
          />
        </div> {/* text content */}
      </div>
    </section>
  );
};

export default RestaurantInfo;
