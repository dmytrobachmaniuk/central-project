import { useTranslation } from "react-i18next";
import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import heroBg from "@/assets/images/Conditions/Hero.webp";
import ConditionsSection from "@/sections/ConditionsSection/ConditionsSection.jsx";
import LanguageSwitcher from "@/utils/LanguageSwitcher/LanguageSwitcher";

const ConditionsPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <section className="conditions-page">
      <LanguageSwitcher />

      <HeroCustomLayout
        bg={heroBg}
        bgColor="var(--color-mono-brown)"
        h1={t("conditionsPage.h1")}
        h2={
          <>
            {t("conditionsPage.h2").split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </>
        }
        h3={
          <>
            {t("conditionsPage.h3").split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </>
        }
      />

      <div id="rooms">
        <ConditionsSection />
      </div>
    </section>
  );
};

export default ConditionsPage;
