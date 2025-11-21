import Header from "@/components/Header/Header.jsx";
import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import MonoHotelSection from "@/sections/MonoHotelSection/MonoHotelSection.jsx";
import heroBg from "@/assets/images/Mono-Hotels/Hero.webp"

const MonoHotelPage = () => {
  return (
    <div className="monohotel-page">
      {/* Передаємо пропс page, щоб Header підтягував monoHotel */}
      <Header page="monoHotel" />

      <HeroCustomLayout
        bg={heroBg}
        h1="Mono Hotel"
        h2={
          <>
            35 сучасних номерів
            різних<br /> категорій у стильному
            та<br /> комфортному дизайні
          </>
        }
        h3="Номери"
      />

      <div id="rooms">
        <MonoHotelSection />
      </div>
    </div>
  );
}

export default MonoHotelPage;
