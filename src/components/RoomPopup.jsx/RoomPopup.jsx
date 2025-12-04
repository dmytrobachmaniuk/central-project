import { useState, useEffect } from "react";
import "./RoomPopup.scss";
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";

//icons
import iron from "@/assets/images/Mono-Hotels/svg-popup/iron.svg";
import bath from "@/assets/images/Mono-Hotels/svg-popup/bath.svg";
import bar from "@/assets/images/Mono-Hotels/svg-popup/bar.svg";
import slippers from "@/assets/images/Mono-Hotels/svg-popup/slippers.svg";
import air from "@/assets/images/Mono-Hotels/svg-popup/air.svg";
import tv from "@/assets/images/Mono-Hotels/svg-popup/tv.svg";
import wifi from "@/assets/images/Mono-Hotels/svg-popup/wifi.svg";
import breakfast from "@/assets/images/Mono-Hotels/svg-popup/breakfast.svg";
import park from "@/assets/images/Mono-Hotels/svg-popup/park.svg";

import bed from "@/assets/images/Central-Hotels/svg-popup/bed.svg"
import shelf from "@/assets/images/Central-Hotels/svg-popup/shelf.svg"
import workspace from "@/assets/images/Central-Hotels/svg-popup/workspace.svg"
import phone from "@/assets/images/Central-Hotels/svg-popup/phone.svg"
import safe from "@/assets/images/Central-Hotels/svg-popup/safe.svg"
import nonsmoking from "@/assets/images/Central-Hotels/svg-popup/nonsmoking.svg"
import lift from "@/assets/images/Central-Hotels/svg-popup/lift.svg"
import towel from "@/assets/images/Central-Hotels/svg-popup/towel.svg"
import tooth from "@/assets/images/Central-Hotels/svg-popup/tooth.svg"
import cosmetic from "@/assets/images/Central-Hotels/svg-popup/cosmetic.svg"
import cosmetic2 from "@/assets/images/Central-Hotels/svg-popup/cosmetic2.svg"
import fen from "@/assets/images/Central-Hotels/svg-popup/fen.svg"

const OPTIONS = {
  iron: { label: "Праска", icon: iron },
  bath: { label: "Халати та рушники", icon: bath },
  bar: { label: "Міні-бар", icon: bar },
  air: { label: "Кондиціонер", icon: air },
  slippers: { label: "Капці х2", icon: slippers },
  tv: { label: "Телевізор", icon: tv },
  wifi: { label: "Wi-fi", icon: wifi },
  breakfast: { label: "Сніданок", icon: breakfast },
  park: { label: "Паркінг", icon: park },
  bed: { label: "Ліжко 120х200см", icon: bed },
  shelf: { label: "Шафа", icon: shelf },
  workspace: { label: "Робочий стіл", icon: workspace },
  smart: { label: "Смарт ТВ", icon: tv },
  phone: { label: "Телефон", icon: phone },
  safe: { label: "Сейф електронний", icon: safe },
  nonsmoking: { label: "Номер для некурців", icon: nonsmoking },
  lift: { label: "Ліфт у готелі", icon: lift },
  towel: { label: "Набір рушників", icon: towel },
  slippers2: { label: "Капці", icon: slippers },
  tooth: { label: "Зубний набір", icon: tooth },
  cosmetic: { label: "Косметичний набір", icon: cosmetic },
  cosmetic2: { label: "Професійна косметика", icon: cosmetic2 },
  fen: { label: "Фен", icon: fen },
  bath2: { label: "Душева кабіна", icon: bath },
}; /*варіації у поп-апі*/

export default function RoomPopup({
                                    isOpen,
                                    title,
                                    subtitle,
                                    image,
                                    options = [],
                                    onClose
                                  }) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) setClosing(false);
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => onClose(), 500);
  };

  if (!isOpen && !closing) return null;

  const showSubtitle = subtitle && !image;
  const showImage = image && !subtitle;

  return (
    <div className="room-popup-overlay" onClick={handleClose}>
      <div
        className={`room-popup ${closing ? "is-closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="room-popup__content--wrapper">
          <div className="room-popup__headline--wrapper">
            <h2 className="room-popup__title">{title}</h2>
            {showSubtitle && <p className="room-popup__subtitle">{subtitle}</p>}
            {showImage && <img src={image} alt="" className="room-popup__image" />}
          </div>
          {options.length > 0 && (
            <div className="room-popup__options">
              {options.map((id) => {
                const item = OPTIONS[id];
                if (!item) return null;
                return (
                  <div key={id} className="room-popup__option">
                    <img src={item.icon} alt={item.label} className="room-popup__option-icon" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="room-popup__btn">
          <ButtonAnimate
            text="Закрити"
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
