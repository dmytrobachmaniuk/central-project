import HeroSection from "@/sections/HeroSection/HeroSection.jsx";
import HotelSection from "@/sections/HotelSection/HotelSection.jsx";

const Homepage = () => {

  return (
    <div className="homepage">
      <HeroSection />  {/*Містить хедер*/}
      <HotelSection /> {/*Містить футер*/}
    </div>
  )
}

export default Homepage