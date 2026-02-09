import { useEffect, useState } from "react";
import "./ContactPopup.scss";
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";
import { useTranslation } from "react-i18next";

const isMobileDevice = () =>
  /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(
    navigator.userAgent
  );

export default function ContactPopup({
                                       isOpen,
                                       onClose,
                                       text,
                                       phone,
                                       variant = "light",
                                       buttonProps = {},
                                     }) {
  const [render, setRender] = useState(false);
  const [opened, setOpened] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      setIsMobile(isMobileDevice());
      setRender(true);
      setClosing(false);

      requestAnimationFrame(() => {
        setOpened(true);
      });
    }
  }, [isOpen]);

  if (!render) return null;

  const closePopup = () => {
    setOpened(false);
    setClosing(true);

    setTimeout(() => {
      setRender(false);
      onClose();
    }, 300);
  };

  const handleAction = async () => {
    if (!phone) return;

    const cleanPhone = phone.replace(/\s+/g, "");

    if (isMobile) {
      window.location.href = `tel:${cleanPhone}`;
    } else {
      try {
        await navigator.clipboard.writeText(cleanPhone);
        console.log("Номер скопійовано");
      } catch {
        console.error("Clipboard error");
      }
    }

    closePopup();
  };

  return (
    <div
      className={`contact-popup-overlay ${
        opened ? "is-open" : ""
      } ${closing ? "is-closing" : ""}`}
      onClick={closePopup}
    >
      <div
        className={`contact-popup contact-popup--${variant} ${
          opened ? "is-open" : ""
        } ${closing ? "is-closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {phone && <p className="contact-popup__phone">{phone}</p>}
        <p className="contact-popup__text">{text}</p>

        <ButtonAnimate
          text={isMobile ? t("popup.call") : t("popup.copy")}
          onClick={handleAction}
          className="contact-popup__button"
          {...buttonProps}
        />
      </div>
    </div>
  );
}
