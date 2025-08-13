import Footer from "@/components/Footer/Footer.jsx";
import HeroSection from "@/sections/HeroSection/HeroSection.jsx";
import LiquidGlassFilter from "@/layouts/LiquidGlassFilter/LiquidGlassFilter.jsx";
import HotelSection from "@/sections/HotelSection/HotelSection.jsx";

const Homepage = () => {

  return (
    <div className="homepage">
      <LiquidGlassFilter /> {/*Загальний виклик*/}
      <HeroSection />  {/*Містить хедер*/}
      <HotelSection />
      <Footer />
    </div>
  )
}

export default Homepage