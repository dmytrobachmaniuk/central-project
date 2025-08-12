import Footer from "@/components/Footer/Footer.jsx";
import HeroSection from "@/sections/HeroSection/HeroSection.jsx";
import LiquidGlassFilter from "@/layouts/LiquidGlassFilter/LiquidGlassFilter.jsx";

const Homepage = () => {

  return (
    <div className="homepage">
      <LiquidGlassFilter />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default Homepage