import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import logo from "@/assets/images/Central-Hotels/logo.webp"
import heroBg from "@/assets/images/Central-Hotels/Hero.webp"
import CentralHotelSection from "@/sections/CentralHotelSection/CentralHotelSection.jsx";

const CentralHotelPage = () => {
  return (
    <div className="centralhotel-page">
      <HeroCustomLayout
        bg={heroBg}
        bgColor="var(--color-mono-brown)"
        h1={<img src={logo} alt="Central Hotel" className="hero-logo" />}
        h2={
          <>
            27 зручних номерів сучасного
            інтер’єру, частина з яких
            виходить на центральну площу міста
          </>
        }
        h3="Номери"
      />
      <div id="rooms">
        <CentralHotelSection />
      </div>
    </div>
  );
}

export default CentralHotelPage;
