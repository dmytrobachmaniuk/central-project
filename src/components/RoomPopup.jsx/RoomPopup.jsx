import { useEffect } from "react";
import "./RoomPopup.scss";

const OPTIONS = {
  bed: { label: "Ліжко 120x200см", icon: "🛏️" },
  wardrobe: { label: "Шафа", icon: "🧥" },
  desk: { label: "Робочий стіл", icon: "💼" },
  ac: { label: "Кондиціонер", icon: "❄️" },
  tv: { label: "Смарт ТВ", icon: "📺" },
  phone: { label: "Телефон", icon: "📞" },
  safe: { label: "Сейф електронний", icon: "🔐" },
  nonSmoking: { label: "Номер для некурців", icon: "🚭" },
  elevator: { label: "Ліфт у готелі", icon: "🛗" },
  towels: { label: "Набір рушників", icon: "🧺" },
  slippers: { label: "Капці", icon: "🥿" },
  toothbrush: { label: "Зубний набір", icon: "🪥" },
  cosmetic: { label: "Косметичний набір", icon: "🧴" },
  proCosmetic: { label: "Професійна косметика", icon: "💄" },
  dryer: { label: "Фен", icon: "💨" },
  shower: { label: "Душева кабіна", icon: "🚿" }
};

export default function RoomPopup({ isOpen, onClose, title = "", options = [], price = "", image }) {
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <div className={`room-popup-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="room-popup" onClick={(e) => e.stopPropagation()}>
        <div className="image" style={{ backgroundImage: `url(${image})` }} />
        <div className="content">
          <h2>{title}</h2>
          {price && <p className="price">{price}</p>}
          <div className="options-block">
            {options.map((id) => {
              const opt = OPTIONS[id];
              if (!opt) return null;
              return (
                <div key={id} className="option-item">
                  <span className="icon">{opt.icon}</span>
                  {opt.label}
                </div>
              );
            })}
          </div>
          <button className="close-btn" onClick={onClose}>Закрити</button>
        </div>
      </div>
    </div>
  );
}
