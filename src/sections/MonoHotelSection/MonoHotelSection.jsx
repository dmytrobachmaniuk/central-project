  import { useRef } from "react";
  import { useScrollPattern } from "@/utils/useScrollPattern/useScrollPattern.jsx";
  import patternHotel from "@/assets/images/Mono-Hotels/pattern.svg";
  import RoomCard from "@/components/RoomCard/RoomCard.jsx";
  import "./MonoHotelSection.scss";
  import sr1 from "@/assets/images/Mono-Hotels/sr1.webp"
  import sr2 from "@/assets/images/Mono-Hotels/sr2.webp"
  import sr3 from "@/assets/images/Mono-Hotels/sr3.webp"
  import sr4 from "@/assets/images/Mono-Hotels/sr4.webp"
  import sr5 from "@/assets/images/Mono-Hotels/sr5.webp"
  import sr6 from "@/assets/images/Mono-Hotels/sr6.webp"
  import HeadingSections
    from "@/components/HeadingSections/HeadingSections.jsx";


  const MonoHotelSection = () => {
    const patternRef = useRef(null);

    useScrollPattern(patternRef, ".mono-hotel-section");

    return (
      <section className="mono-hotel-section">
        <div ref={patternRef} className="mono-hotel-section__pattern-bg">
          <img src={patternHotel} alt="Mono Hotel pattern" />
        </div>

        <div className="mono-hotel-section__content">
          <div className="container">
            <div className="mono-hotel-section__roomcard">
            <RoomCard
              title="Standard Room"
              size="25м²"
              sizeDescription="номер з двоспальним ліжком"
              mainImage={sr1}
              secondaryImage={sr2}
              hoverColor="var(--color-darkbeige)"
              services={["До послуг гостей"]}
              included={["У ціну включено"]}
              onBookClick={() => console.log("Бронювання")}
            />
              <RoomCard
                title="Deluxe Room"
                size="32м²"
                sizeDescription="покращений номер з двоспальним ліжком"
                mainImage={sr3}
                secondaryImage={sr4}
                hoverColor="var(--color-darkbeige)"
                services={["До послуг гостей"]}
                included={["У ціну включено"]}
                onBookClick={() => console.log("Бронювання")}
                reverse
              />
              <RoomCard
                title="Suite"
                size="47м²"
                sizeDescription="покращений номер з двоспальним ліжком"
                mainImage={sr5}
                secondaryImage={sr6}
                hoverColor="var(--color-darkbeige)"
                services={["До послуг гостей"]}
                included={["У ціну включено"]}
                onBookClick={() => console.log("Бронювання")}
              />
            </div>
            </div>
          <div className="mono-hotel-section--titles">
            <HeadingSections
              title="Hotels"
              subtitle="Затишний відпочинок у самому центрі Рівного"
              variant="variant1"
              showPattern={true}
              dotsType="alt"
              bgColor="#554A40"
              textColor="var(--color-beige)"
            />
          </div>
        </div>
      </section>
    );
  };

  export default MonoHotelSection;
