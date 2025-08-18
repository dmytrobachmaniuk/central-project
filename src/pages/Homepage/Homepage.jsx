import HeroSection from "@/sections/HeroSection/HeroSection.jsx";
import LiquidGlassFilter from "@/layouts/LiquidGlassFilter/LiquidGlassFilter.jsx";
import HotelSection from "@/sections/HotelSection/HotelSection.jsx";

const Homepage = () => {

  return (
    <div className="homepage">
      <LiquidGlassFilter /> {/*Загальний виклик*/}
      <HeroSection />  {/*Містить хедер*/}
      <HotelSection />
    </div>
  )
}

export default Homepage