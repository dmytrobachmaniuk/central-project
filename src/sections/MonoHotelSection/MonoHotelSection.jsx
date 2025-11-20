  import { useRef } from "react";
  import { useScrollPattern } from "@/utils/useScrollPattern/useScrollPattern.jsx";
  import patternHotel from "@/assets/images/Mono-Hotels/pattern.svg";
  import RoomCard from "@/components/RoomCard/RoomCard.jsx";
  import "./MonoHotelSection.scss";
  import sr1 from "@/assets/images/Mono-Hotels/sr1.jpg"
  import sr2 from "@/assets/images/Mono-Hotels/sr2.jpg"


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
                mainImage={sr1}
                secondaryImage={sr2}
                hoverColor="var(--color-darkbeige)"
                services={["До послуг гостей"]}
                included={["У ціну включено"]}
                onBookClick={() => console.log("Бронювання")}
                reverse
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default MonoHotelSection;
