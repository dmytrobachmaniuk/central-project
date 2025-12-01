import React from "react";
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";
import './RestaurantSection.scss';

export default function RestaurantSection({
                                            title = "Назва ресторану",
                                            desc1 = "Перший абзац опису...",
                                            desc2 = "Другий абзац опису...",
                                            images = [],
                                            buttonText = "Переглянути страви",
                                            onButtonClick = () => {},
                                            titleColor = "var(--color-dark)",
                                            textColor = "var(--color-olivia)",
                                            buttonProps = {}
                                          }) {
  return (
    <section className="restaurant-section container"
             style={{
               '--title-color': titleColor,
               '--text-color': textColor
             }}>
      <div className="restaurant-section__content">
        <div className="restaurant-section__images">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt || `restaurant-img-${index}`}
              className="restaurant-section__image"
            />
          ))}
        </div>
        <div className="restaurant-section__text">
          <h2>{title}</h2>
          <p className="restaurant-section__desc1">{desc1}</p>
          <p className="restaurant-section__desc2">{desc2}</p>
          <ButtonAnimate
            text={buttonText}
            onClick={onButtonClick}
            {...buttonProps}
          />
        </div>
      </div>
    </section>
  );
}
