import { useState, useEffect } from "react";
import "./RoomPopup.scss";
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";

// Іконки (твій список)
import iron from "@/assets/images/Mono-Hotels/svg-popup/iron.svg";
import bath from "@/assets/images/Mono-Hotels/svg-popup/bath.svg";
import bar from "@/assets/images/Mono-Hotels/svg-popup/bar.svg";
import slippers from "@/assets/images/Mono-Hotels/svg-popup/slippers.svg";
import air from "@/assets/images/Mono-Hotels/svg-popup/air.svg";
import tv from "@/assets/images/Mono-Hotels/svg-popup/tv.svg";
import wifi from "@/assets/images/Mono-Hotels/svg-popup/wifi.svg";
import breakfast from "@/assets/images/Mono-Hotels/svg-popup/breakfast.svg";
import park from "@/assets/images/Mono-Hotels/svg-popup/park.svg";
import bed from "@/assets/images/Central-Hotels/svg-popup/bed.svg";
import shelf from "@/assets/images/Central-Hotels/svg-popup/shelf.svg";
import workspace from "@/assets/images/Central-Hotels/svg-popup/workspace.svg";
import phone from "@/assets/images/Central-Hotels/svg-popup/phone.svg";
import safe from "@/assets/images/Central-Hotels/svg-popup/safe.svg";
import nonsmoking from "@/assets/images/Central-Hotels/svg-popup/nonsmoking.svg";
import lift from "@/assets/images/Central-Hotels/svg-popup/lift.svg";
import towel from "@/assets/images/Central-Hotels/svg-popup/towel.svg";
import tooth from "@/assets/images/Central-Hotels/svg-popup/tooth.svg";
import cosmetic from "@/assets/images/Central-Hotels/svg-popup/cosmetic.svg";
import cosmetic2 from "@/assets/images/Central-Hotels/svg-popup/cosmetic2.svg";
import fen from "@/assets/images/Central-Hotels/svg-popup/fen.svg";
import {useTranslation} from "react-i18next";

const OPTIONS = {
  iron: { labelKey: "popupHotel.iron", icon: iron },
  bath: { labelKey: "popupHotel.bath", icon: bath },
  bar: { labelKey: "popupHotel.bar", icon: bar },
  air: { labelKey: "popupHotel.air", icon: air },
  slippers: { labelKey: "popupHotel.slippers", icon: slippers },
  tv: { labelKey: "popupHotel.tv", icon: tv },
  wifi: { labelKey: "popupHotel.wifi", icon: wifi },
  breakfast: { labelKey: "popupHotel.breakfast", icon: breakfast },
  park: { labelKey: "popupHotel.park", icon: park },
  bed: { labelKey: "popupHotel.bed", icon: bed },
  shelf: { labelKey: "popupHotel.shelf", icon: shelf },
  workspace: { labelKey: "popupHotel.workspace", icon: workspace },
  phone: { labelKey: "popupHotel.phone", icon: phone },
  safe: { labelKey: "popupHotel.safe", icon: safe },
  nonsmoking: { labelKey: "popupHotel.nonsmoking", icon: nonsmoking },
  lift: { labelKey: "popupHotel.lift", icon: lift },
  towel: { labelKey: "popupHotel.towel", icon: towel },
  tooth: { labelKey: "popupHotel.tooth", icon: tooth },
  cosmetic: { labelKey: "popupHotel.cosmetic", icon: cosmetic },
  cosmetic2: { labelKey: "popupHotel.cosmetic2", icon: cosmetic2 },
  fen: { labelKey: "popupHotel.fen", icon: fen },
};

export default function RoomPopup({
                                    isOpen,
                                    title,
                                    subtitle,
                                    image,
                                    options = [],
                                    onClose,
                                    isMenuPopup = false,
                                    onOptionClick
                                  }) {
  const [closing, setClosing] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    if (isOpen) setClosing(false);
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => onClose(), 500);
  };

  if (!isOpen && !closing) return null;

  return (
    <div className="room-popup-overlay" onClick={handleClose}>
      <div
        className={`room-popup ${closing ? "is-closing" : ""} ${isMenuPopup ? "menu-popup" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {isMenuPopup ? (
          <nav className="menu-popup__nav">
            {options.map((item) => (
              <div
                key={item.id}
                className="menu-popup__link"
                onClick={() => {
                  onOptionClick(item.id);
                  handleClose();
                }}
              >
                {item.title}
              </div>
            ))}
          </nav>
        ) : (
          <div className="room-popup__content--wrapper">
            <div className="room-popup__headline--wrapper">
              <h2 className="room-popup__title">{title}</h2>
              {subtitle && !image && <p className="room-popup__subtitle">{subtitle}</p>}
              {image && !subtitle && <img src={image} alt="" className="room-popup__image" />}
            </div>

            {options.length > 0 && (
              <div className="room-popup__options">
                {options.map((id) => {
                  const item = OPTIONS[id];
                  if (!item) return null;
                  return (
                    <div key={id} className="room-popup__option">
                      <img src={item.icon} alt={t(item.labelKey)} className="room-popup__option-icon" />
                      <span>{t(item.labelKey)}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        <div className="room-popup__btn">
          <ButtonAnimate
            text={t("popupHotel.closebtn")}
            onClick={handleClose}
            textColor="var(--color-white)"
            hoverTextColor="var(--color-olivia)"
            borderColor="rgba(52, 49, 32, 0.1)"
            hoverBorderColor="rgba(52, 49, 32, 0.1)"
            bgColor="var(--color-olivia)"
          />
        </div>
      </div>
    </div>
  );
}
