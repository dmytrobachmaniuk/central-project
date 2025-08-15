// компоненти
import { useEffect, useRef } from "react";
import './HotelSection.scss';
import HeadingSections from "@/components/HeadingSections/HeadingSections.jsx";
import HotelInfo from "@/layouts/HotelInfo/HotelInfo.jsx";

// іконки
import iconBad from '@/assets/images/Hotels-icons/bad.svg';
import iconFork from '@/assets/images/Hotels-icons/fork.svg';
import iconKnife from '@/assets/images/Hotels-icons/knife.svg';
import iconCocktail from '@/assets/images/Hotels-icons/cocktail.svg';
import patternHotel from '@/assets/images/pattern-hotel-section.svg';
import textAddiction from '@/assets/images/Hotels-icons/text-addiction.svg';
import monoPhotoBig from "@/assets/images/Hotels-icons/mono-photo-big.jpg";
import monoPhotoSmall from "@/assets/images/Hotels-icons/mono-photo-small.jpg";
import centralPhotoBig from "@/assets/images/Hotels-icons/central-photo-big.jpg";
import centralPhotoSmall from "@/assets/images/Hotels-icons/central-photo-small.jpg";

const HotelSection = () => {
  const patternRef = useRef(null);

  useEffect(() => {
    const pattern = patternRef.current;
    const section = pattern.closest(".hotel-section");
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const relativeY = scrollY - sectionTop;

      // рух патерна тільки в межах секції
      if (relativeY >= 0 && relativeY <= sectionHeight) {
        pattern.style.transform = `translateY(${relativeY}px)`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []); /*стікі-ефект через скрол*/

  return (
    <section className="hotel-section">
      <div ref={patternRef} className="hotel-section__pattern-bg">
        <img src={patternHotel} alt="Hotel pattern" />
      </div> {/* Патерн */}

      {/* Контент */}

      <div className="hotel-section__content">
          <div className="container">
            <div className="hotel-section__block--head">
              <div className="hotel-section__block--paragraph">
                <img
                  src={textAddiction}
                  alt="Quote decoration"
                />
                <p>
                  Мережа готелів та ресторанів <span className="highlight">PAPA&MAMA</span>, створена для тих, хто
                  цінує атмосферу і якість. <br />
                  У нас ви знайдете затишні номери, смачну кухню та сервіс, що
                  перевершує очікування.
                </p> {/*мережа готелів та ресторанів..*/}
              </div> {/*мережа готелів та ресторанів + 99*/}

              <div className="hotel-section__block--headline">
                <h1>
                  Відпочинок, який <br />
                  <span className="highlight">хочеться повторити.</span>
                </h1>
                <div className="hotel-section__block--icons">
                  <img src={iconBad} alt="Table" />
                  <img src={iconFork} alt="Fork" />
                  <img src={iconKnife} alt="Knife" />
                  <img src={iconCocktail} alt="Cocktail" />
                </div>
              </div> {/*відпочинок, який..*/}
            </div> {/*блок текста без компонента зразу під хіро*/}

            {/* Заголовок */}
            <div className="hotel-section__title">
              <HeadingSections
                title="Hotels"
                subtitle="Затишний відпочинок у самому центрі Рівного"
              />
            </div>
            {/* Mono */}
            <div className="hotel-section__hotel--mono">
              <HotelInfo
                title="Mono"
                subtitle="вибір тих, хто цінує спокій"
                description="Стильний інтер’єр поєднуються тут із сучасним комфортом та затишною атмосферою, створюючи ідеальні умови для відпочинку."
                images={[monoPhotoBig, monoPhotoSmall]}
              />
            </div>

            {/* Централь */}
            <div className="hotel-section__hotel--central">
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
