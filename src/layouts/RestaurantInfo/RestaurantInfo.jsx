  import './RestaurantInfo.scss'
  import React from "react";
  import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";

  const RestaurantInfo = ({ svg, title, subtitle, buttonText, modifier }) => {
    return (
      <div className={`restaurant-info ${modifier || ''}`}>
        <div className={`restaurant-info__content ${modifier ? 'restaurant-info__content--right' : ''}`}>
          <div className="restaurant-info__svg">
            <img
              src={svg}
              alt={`${title} small`}
            />
          </div> {/*svg*/}
          <div className="restaurant-info__wrapper">
            <h1 className="restaurant-info__title">{title}</h1>
            <p className="restaurant-info__subtitle">{subtitle}</p>
            <ButtonAnimate
              className={`button--white-hover ${modifier ? 'restaurant-info__button--alt' : ''}`}
              text={buttonText}
            />
          </div> {/*text content*/}
        </div>
      </div>
    )
  }

  export default RestaurantInfo;
