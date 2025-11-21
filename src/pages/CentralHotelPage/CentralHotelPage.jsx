import Header from "@/components/Header/Header.jsx";
import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import logo from "@/assets/images/Central-Hotels/logo.webp"
import heroBg from "@/assets/images/Central-Hotels/Hero.webp"

const CentralHotelPage = () => {
  return (
    <div className="centralhotel-page">
      <Header page="centralHotel" />

      <HeroCustomLayout
        bg={heroBg}
        h1={<img src={logo} alt="Central Hotel" className="hero-logo" />}
        h2={
          <>
            27 зручних номерів сучасного<br />
            інтер’єру, частина з яких<br />
            виходить на центральну площу міста
          </>
        }
        h3="Номери"
      />
    </div>
  );
}

export default CentralHotelPage;
