// компоненти, імпорти
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
import {useMatchHeight} from "@/utils/useMatchHeight/useMatchHeight.jsx";
import centralPhotoBig from "@/assets/images/Hotels-icons/central-photo-big.jpg";
import centralPhotoSmall from "@/assets/images/Hotels-icons/central-photo-small.jpg";

const HotelSection = () => {
  const patternRef = useRef(null); //висота для патерна
  const monoWrapperRef = useRef(null); //висота для контентної області
  const monoImageRef = useRef(null); //висота картинки
  const centralWrapperRef = useRef(null);
  const centralImageRef = useRef(null);


  useEffect(() => {
    const pattern = patternRef.current;
    const section = pattern.closest(".hotel-section");
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const relativeY = scrollY - sectionTop;

      if (relativeY >= 0 && relativeY <= sectionHeight) {
        pattern.style.transform = `translateY(${relativeY}px)`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);  // Рух патерну при скролі

  useMatchHeight(monoWrapperRef, monoImageRef);
  useMatchHeight(centralWrapperRef, centralImageRef);

  return (
    <section className="hotel-section">
      <div ref={patternRef} className="hotel-section__pattern-bg">
        <img src={patternHotel} alt="Hotel pattern" />

      </div> {/*патерн фон*/}
      <div className="hotel-section__content"> {/*контент поверх патерну*/}
        <div className="container">
          <div className="hotel-section__block--head">
            <div className="hotel-section__block--paragraph">
              <img src={textAddiction} alt="Quote decoration" />
              <p>
                Мережа готелів та ресторанів <span className="highlight">PAPA&MAMA</span>, створена для тих, хто
                цінує атмосферу і якість. <br />
                У нас ви знайдете затишні номери, смачну кухню та сервіс, що
                перевершує очікування.
              </p>
            </div> {/*мережа готелів*/}

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
            </div> {/*відпочинок , який хочеться + ico*/}

          </div> {/*//1*/}
          <div className="hotel-section__title">
            <HeadingSections
              title="Hotels"
              subtitle="Затишний відпочинок у самому центрі Рівного"
            />
          </div> {/*//2*/}
        </div> {/*1 , 2*/}

        <div className="hotel-section__hotels-wrapper">
          {/* Mono */}
          <div ref={monoWrapperRef} className="hotel-section__mono container">
            <div ref={monoImageRef} className="hotel-section__mono--image">
              <img src={monoPhotoBig} alt="Mono main" />
            </div> {/*absolute*/}

            <div className="hotel-section__content">
              <HotelInfo
                title="Mono"
                subtitle="вибір тих, хто цінує спокій"
                description="Стильний інтер’єр поєднується тут із сучасним комфортом та затишною атмосферою, створюючи ідеальні умови для відпочинку"
                imageSmall={monoPhotoSmall}
              />
            </div> {/*component MONO*/}
          </div> {/*MONO container*/}

          {/* Central */}
          <div ref={centralWrapperRef} className="hotel-section__central container">
            <div ref={centralImageRef} className="hotel-section__central--image">
              <img src={centralPhotoBig} alt="Central main" />
            </div> {/*absolute*/}
            <div className="hotel-section__content">
              <HotelInfo
                title="Central"
                subtitle="затишна атмосфера дому"
                description="Один з кращих готелів міста протягом багатьох років. Вишукані номери не залишать байдужим жодного гостя."
                imageSmall={centralPhotoSmall}
                reverse={true}
              />
            </div>  {/*component CENTRAL*/}
          </div> {/*CENTRAL container*/}
        </div> {/*3 , 4*/}
      </div>
    </section>
  );
};

export default HotelSection;
