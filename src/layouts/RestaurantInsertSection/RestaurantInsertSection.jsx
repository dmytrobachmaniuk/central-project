import "./RestaurantInsertSection.scss";

export default function RestaurantInsertSection({ image, text }) {
  return (
    <section
      className="restaurant-insert"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="restaurant-insert__overlay">
        <p className="restaurant-insert__text">{text}</p>
      </div>
    </section>
  );
}
