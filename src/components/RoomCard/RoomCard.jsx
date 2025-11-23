import { useState } from "react";
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
                    hoverColor = "black",
                    reverse = false,
                    onBookClick,
                    popupConfig = {}
                  }) => {
  const [popupData, setPopupData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (data) => {
    setPopupData(data);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setPopupData(null);
  };

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
            {/* Текстова частина */}
            <div className="room-card__text-wrapper">
              <div className="room-card__size">
                <span>{size}</span>
                <small>{sizeDescription}</small>
              </div>
            </div>

            {/* Друге зображення праворуч */}
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

            {/* Кнопки services / included */}
            <div className="room-card__info-buttons">
              {services.map((srv, idx) => (
                <button
                  key={idx}
                  className="room-card__info-btn"
                  onClick={() => openPopup(popupConfig.services)}
                >
                  {srv}
                  <svg className="arrow" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </button>
              ))}
              {included.map((inc, idx) => (
                <button
                  key={idx}
                  className="room-card__info-btn"
                  onClick={() => openPopup(popupConfig.included)}
                >
                  {inc}
                  <svg className="arrow" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Кнопка бронювання */}
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

      {/* Popup */}
      {popupData && (
        <RoomPopup
          isOpen={isOpen}
          title={popupData.title}
          subtitle={popupData.subtitle}
          image={popupData.image}
          options={popupData.options || []}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default RoomCard;
