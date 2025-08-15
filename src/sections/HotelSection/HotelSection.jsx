import './HotelSection.scss';
import patternHotel from '@/assets/images/pattern-hotel-section.svg';
import textAddiction from '@/assets/images/Hotels-icons/text-addiction.svg'
import HeadingSections from "@/components/HeadingSections/HeadingSections.jsx";
import HotelInfo from "@/layouts/HotelInfo/HotelInfo.jsx";

//іконки
import iconBad from '@/assets/images/Hotels-icons/bad.svg';
import iconFork from '@/assets/images/Hotels-icons/fork.svg';
import iconKnife from '@/assets/images/Hotels-icons/knife.svg';
import iconCocktail from '@/assets/images/Hotels-icons/cocktail.svg';

import monoPhotoBig from "@/assets/images/Hotels-icons/mono-photo-big.jpg";
import monoPhotoSmall from "@/assets/images/Hotels-icons/mono-photo-small.jpg"
import centralPhotoBig from "@/assets/images/Hotels-icons/central-photo-big.jpg"
import centralPhotoSmall from "@/assets/images/Hotels-icons/central-photo-small.jpg"



const HotelSection = () => {
  return (
    <section className="hotel-section">
      <div className="hotel-section__wrapper">
        {/* Патерн sticky */}
        <div className="hotel-section__pattern">
          <img src={patternHotel} alt="Hotel pattern" style={{userSelect: 'none'}} />
        </div>

        {/* Абсолютна контент-область (тепер колоною) */}
        <div className="hotel-section__content">
          <div className="hotel-section__content-row">
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
                <img src={iconKnife} alt="Knife" />
                <img src={iconCocktail} alt="Cocktail" />
              </div>
            </div>
          </div>

          <div className="hotel-section__heading--hotels">
            <HeadingSections
              title="Hotels"
              subtitle="Затишний відпочинок у самому центрі Рівного"
            />
          </div>
          <div className="hotel-section__heading--hotels"> {/*як утилітарний*/}
            <HotelInfo
              title="Mono"
              subtitle="вибір тих, хто цінує спокій"
              description="Стильний інтер’єр поєднуються тут із сучасним комфортом та затишною атмосферою, створюючи ідеальні умови для відпочинку."
              images={[monoPhotoBig, monoPhotoSmall]}
            />
          </div>
          <div className="hotel-section__heading--hotels"> {/*як утилітарний*/}
            <HotelInfo
              title="Централь"
              subtitle="затишна атмосфера дому"
              description="Один з кращих готелів міста протягом багатьох років. Вишукані номери не залишать байдужим жодного гостя."
              images={[centralPhotoBig, centralPhotoSmall]}
              reverse
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
