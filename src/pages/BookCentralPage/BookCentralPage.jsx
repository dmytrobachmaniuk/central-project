import heroBg from "@/assets/images/Central-Hotels/Hero.webp";
import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import BookCentralSection from "@/sections/BookCentralSection/BookCentralSection.jsx";
import logo from "@/assets/images/Central-Hotels/logo.webp";
import LanguageSwitcher from "@/utils/LanguageSwitcher/LanguageSwitcher.jsx";
import {useTranslation} from "react-i18next";

const BookCentralPage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <section className="book-mono-section-page">
      <LanguageSwitcher />

      <HeroCustomLayout
        bg={heroBg}
        bgColor="var(--color-mono-brown)"
        h1={<img src={logo} alt="Central Hotel" className="hero-logo" />}
        h2={t("centralHotelPage.h2")}
        h3={t("centralHotelPage.h3")}
      />
      <div id="rooms">
        <BookCentralSection />
      </div>
    </section>
  )
}

export default BookCentralPage