import './HotelSection.scss';
import patternHotel from '@/assets/images/pattern-hotel-section.svg';

// Заглушки для іконок
import iconBad from '@/assets/images/Hotels-icons/bad.svg';
import iconFork from '@/assets/images/Hotels-icons/fork.svg';
import iconKnife from '@/assets/images/Hotels-icons/knife.svg';
import iconCocktail from '@/assets/images/Hotels-icons/cocktail.svg';

const HotelSection = () => {
  return (
    <section className="hotel-section">
      <div className="hotel-section__pattern-wrapper">
        <div className="hotel-section__pattern">
          <img src={patternHotel} alt="Hotel pattern" />
        </div>

        <div className="hotel-section__content hotel-section__content--flex">
          {/* Ліва колонка */}
          <div className="hotel-section__text-block">
            <span className="hotel-section__quote">99</span>
            <p>
              Мережа готелів та ресторанів <em>PAPA&amp;MAMA</em>, створена для тих, хто
              цінує атмосферу і якість. <br />
              У нас ви знайдете затишні номери, смачну кухню та сервіс, що
              перевершує очікування.
            </p>
          </div>

          {/* Права колонка */}
          <div className="hotel-section__headline-block">
            <h2>
              Відпочинок, який <br />
              <em>хочеться повторити.</em>
            </h2>
            <div className="hotel-section__icons">
              <img src={iconBad} alt="Table" />
              <img src={iconFork} alt="Fork" />
              <img src={iconKnife} alt="Cocktail" />
              <img src={iconCocktail} alt="Cocktail" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
