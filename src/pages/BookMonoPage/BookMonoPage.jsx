import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import heroBg from "@/assets/images/Mono-Hotels/Hero-book.webp";
import BookMonoSection from "@/sections/BookMonoSection/BookMonoSection.jsx";
import LanguageSwitcher from "@/utils/LanguageSwitcher/LanguageSwitcher";
import {useTranslation} from "react-i18next";

const BookMonoSectionPage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <section className="book-mono-section-page">
      <LanguageSwitcher />

      <HeroCustomLayout
        bg={heroBg}
        bgColor="var(--color-mono-brown)"
        h1="Mono Hotel"
        h2={t("monoHotelPage.h2")}
        h3={t("monoHotelPage.h3")}
      />
      <div id="rooms">
        <BookMonoSection />
      </div>
    </section>
  );
};

export default BookMonoSectionPage;
