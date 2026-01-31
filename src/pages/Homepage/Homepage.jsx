import HeroSection from "@/sections/HeroSection/HeroSection.jsx";
import HotelSection from "@/sections/HotelSection/HotelSection.jsx";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "@/utils/LanguageSwitcher/LanguageSwitcher";

const Homepage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="homepage">
      <LanguageSwitcher />
      <HeroSection />  {/*Містить хедер*/}
      <HotelSection /> {/*Містить футер*/}
    </div>
  )
}

export default Homepage