import './HotelSection.scss';
import patternHotel from '@/assets/images/pattern-hotel-section.svg';
import textAddiction from '@/assets/images/Hotels-icons/text-addiction.svg'

//іконоки
import iconBad from '@/assets/images/Hotels-icons/bad.svg';
import iconFork from '@/assets/images/Hotels-icons/fork.svg';
import iconKnife from '@/assets/images/Hotels-icons/knife.svg';
import iconCocktail from '@/assets/images/Hotels-icons/cocktail.svg';
import ButtonAnimate from "@/components/ButtonAnimate/ButtonAnimate.jsx";

const HotelSection = () => {
  return (
    <section className="hotel-section">
      <div className="hotel-section__wrapper">
        <div className="hotel-section__pattern">
          <img src={patternHotel} alt="Hotel pattern" />
        </div>

        <div className="hotel-section__content hotel-section__content--flex">
          {/* Ліва колонка */}
          <div className="hotel-section__text-block">
            <img
              className="hotel-section__quote"
              src={textAddiction}
              alt="Quote decoration"
            />
            <p>
              Мережа готелів та ресторанів <span className="highlight">PAPA&MAMA</span>, створена для тих, хто
              цінує атмосферу і якість. <br />
              У нас ви знайдете затишні номери, смачну кухню та сервіс, що
              перевершує очікування.
            </p>
          </div>

          {/* Права колонка */}
          <div className="hotel-section__headline-block">
            <h1>
              Відпочинок, який <br />
              <span className="highlight">хочеться повторити.</span>
            </h1>
            <div className="hotel-section__icons">
              <img src={iconBad} alt="Table" />
              <img src={iconFork} alt="Fork" />
              <img src={iconKnife} alt="Cocktail" />
              <img src={iconCocktail} alt="Cocktail" />
            </div>
          </div>
        </div>
        {/*<ButtonAnimate text="Привіт" />*/}
        </div>
    </section>
  );
};

export default HotelSection;
