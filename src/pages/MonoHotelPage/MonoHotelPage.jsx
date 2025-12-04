import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import MonoHotelSection from "@/sections/MonoHotelSection/MonoHotelSection.jsx";
import heroBg from "@/assets/images/Mono-Hotels/Hero.webp"

const MonoHotelPage = () => {
  return (
    <div className="monohotel-page">
      <HeroCustomLayout
        bg={heroBg}
        bgColor="var(--color-mono-brown)"
        h1="Mono Hotel"
        h2={
          <>
            27 зручних сучасного<br />
            інтер'єру, частина яких<br />
            виходить на центральну площу міста
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
