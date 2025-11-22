import React, { useState } from "react";
import "./RoomCard.scss";
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";
import RoomPopup from "@/components/RoomPopup.jsx/RoomPopup.jsx";

const RoomCard = ({
                    title,
                    size,
                    sizeDescription,
                    mainImage,
                    secondaryImage,
                    services = [],
                    included = [],
                    onBookClick,
                    hoverColor = "black",
                    reverse = false
                  }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleServicesClick = () => setPopupOpen(true);
  const handlePopupClose = () => setPopupOpen(false);

  return (
    <>
      <div
        className={`room-card ${reverse ? "room-card--reverse" : ""}`}
        style={{ "--hover-color": hoverColor }}
      >
        <h3 className="room-card__title">{title}</h3>

        <div className="room-card__wrapper">
          <div className="room-card__left">
            {reverse ? (
              secondaryImage && (
                <div className="room-card__secondary">
                  <img src={secondaryImage} alt={`${title} secondary`} />
                </div>
              )
            ) : (
              mainImage && (
                <div className="room-card__main">
                  <img src={mainImage} alt={`${title} main`} />
                </div>
              )
            )}
          </div>

          <div className="room-card__right">
            <div className="room-card__text-wrapper">
              <div className="room-card__size">
                <span>{size}</span>
                <small>{sizeDescription}</small>
              </div>
            </div>

            {reverse ? (
              mainImage && (
                <div className="room-card__main">
                  <img src={mainImage} alt={`${title} main`} />
                </div>
              )
            ) : (
              secondaryImage && (
                <div className="room-card__secondary">
                  <img src={secondaryImage} alt={`${title} secondary`} />
                </div>
              )
            )}

            <div className="room-card__info-buttons">
              <button className="room-card__info-btn" onClick={handleServicesClick}>
                До послуг гостей
                <svg className="arrow" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </button>

              <button className="room-card__info-btn">
                У ціну включено
                <svg className="arrow" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="big-btn">
              <ButtonAnimate
                text="Забронювати"
                onClick={onBookClick}
                textColor="var(--color-white)"
                hoverTextColor="var(--color-darkbeige)"
                borderColor="rgba(255,255,255,0.2)"
                hoverBorderColor="rgba(255,255,255,0)"
                bgColor="#554A40"
              />
            </div>
          </div>
        </div>
      </div>

      <RoomPopup
        isOpen={popupOpen}
        onClose={handlePopupClose}
        title={title}
        options={services}
        image={mainImage}
      />
    </>
  );
};

export default RoomCard;
