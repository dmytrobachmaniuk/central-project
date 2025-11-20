import Header from "@/components/Header/Header.jsx";
import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import MonoHotelSection from "@/sections/MonoHotelSection/MonoHotelSection.jsx";

const MonoHotelPage = () => {
  return (
    <div className="monohotel-page">
      {/* Передаємо пропс page, щоб Header підтягував monoHotel */}
      <Header page="monoHotel" />

      <HeroCustomLayout
        bg="src/assets/images/Mono-Hotels/Hero.webp"
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
      <MonoHotelSection />
    </div>

  );
}

export default MonoHotelPage;
