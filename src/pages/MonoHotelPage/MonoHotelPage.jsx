import { useTranslation } from "react-i18next";
import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import MonoHotelSection from "@/sections/MonoHotelSection/MonoHotelSection.jsx";
import heroBg from "@/assets/images/Mono-Hotels/Hero.webp"
import LanguageSwitcher from "@/utils/LanguageSwitcher/LanguageSwitcher";

const MonoHotelPage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="monohotel-page">
      <LanguageSwitcher />

      <HeroCustomLayout
        bg={heroBg}
        bgColor="var(--color-mono-brown)"
        h1="Mono Hotel"
        h2={t("monoHotelPage.h2")}
        h3={t("monoHotelPage.h3")}
      />
      <div id="rooms">
        <MonoHotelSection />
      </div>
    </div>
  );
}

export default MonoHotelPage;
