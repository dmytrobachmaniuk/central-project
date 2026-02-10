import { useTranslation } from "react-i18next";
import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import logo from "@/assets/images/Central-Hotels/logo.webp"
import heroBg from "@/assets/images/Central-Hotels/Hero.webp"
import CentralHotelSection from "@/sections/CentralHotelSection/CentralHotelSection.jsx";
import LanguageSwitcher from "@/utils/LanguageSwitcher/LanguageSwitcher";

const CentralHotelPage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="centralhotel-page">
      <LanguageSwitcher />

      <HeroCustomLayout
        bg={heroBg}
        bgColor="var(--color-mono-brown)"
        h1={<img src={logo} alt="Central Hotel" className="hero-logo" />}
        h2={t("centralHotelPage.h2")}
        h3={t("centralHotelPage.h3")}
      />
      <div id="rooms">
        <CentralHotelSection />
      </div>
    </div>
  );
}

export default CentralHotelPage;
