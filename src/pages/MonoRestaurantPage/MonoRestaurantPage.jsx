import RestaurantCustomLayout from "@/layouts/RestaurantCustomLayout/RestaurantCustomLayout.jsx";
import bigLogo from "@/assets/images/Mono-Restaurant/bigLogo.svg"
import smallLogo from "@/assets/images/Mono-Restaurant/smallLogo.svg"
import MonoRestaurantSection from "@/sections/MonoRestaurantSection/MonoRestaurantSection.jsx";
import LanguageSwitcher from "@/utils/LanguageSwitcher/LanguageSwitcher.jsx";
import {useTranslation} from "react-i18next";

const MonoRestaurantPage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <section>
      <LanguageSwitcher />

      <RestaurantCustomLayout
        bgColor="var(--color-beige)"
        bgImage1={smallLogo}
        bgImage2={bigLogo}
      />
      <div>
        <MonoRestaurantSection />
      </div>
    </section>
  )
}

export default MonoRestaurantPage