import { useTranslation } from "react-i18next";
import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import heroBg from "@/assets/images/About/Hero.webp";
import AboutSection from "@/sections/AboutSection/AboutSection.jsx";

const AboutPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section className="about-page">
      <HeroCustomLayout
        bg={heroBg}
        bgColor="var(--color-beige)"
        h1={t("about.h1")}
        h2={
          <>
            {t("about.h2").split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </>
        }
        h3={t("about.h3")}
        textColor="var(--color-olivia)"
        animate={false}
      />

      {/*ТИМЧАСОВИЙ БЛОК ЯКИЙ БУДЕ ПЕРНЕСЕНО ЗГІДНО ДИЗАЙНУ*/}
      {/*<div style={{ margin: "20px 0" }}>*/}
      {/*  <button onClick={() => changeLanguage("ua")}>UA</button>*/}
      {/*  <button onClick={() => changeLanguage("en")}>EN</button>*/}
      {/*</div>*/}

      <div id="rooms">
        <AboutSection />
      </div>
    </section>
  );
};

export default AboutPage;
