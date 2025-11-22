import React from "react";
import "./HotelBlock.scss";

export default function HotelBlock({
                                     background,
                                     title,
                                     subtitle,
                                     button,
                                     icon // ← SVG або картинка
                                   }) {
  return (
    <div
      className="hotel-block"
      style={background ? { backgroundImage: `url(${background})` } : {}}
    >
      <div className="hotel-block__content">
        <div className="hotel-block__icon">
        {icon && (
          <img src={icon} alt="icon" />
        )}
        </div>
        <div className="hotel-block__info--wrapper">
          <h1 className="hotel-block__title">{title}</h1>
          <p className="hotel-block__subtitle">{subtitle}</p>
          {button && (
            <div className="hotel-block__button">
              {button}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
