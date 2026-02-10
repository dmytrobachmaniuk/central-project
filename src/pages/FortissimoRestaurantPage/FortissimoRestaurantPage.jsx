import RestaurantCustomLayout from "@/layouts/RestaurantCustomLayout/RestaurantCustomLayout.jsx";
import bigLogo from "@/assets/images/Fortissimo-Restaurant/bigLogo.svg"
import smallLogo from "@/assets/images/Fortissimo-Restaurant/smallLogo.svg"
import FortissimoRestaurantSection from "@/sections/FortissimoRestaurantSection/FortissimoRestaurantSection.jsx";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "@/utils/LanguageSwitcher/LanguageSwitcher.jsx";

const FortissimoRestaurantPage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

    return (
      <section>
        <LanguageSwitcher
          topTextColor="#ffffff"
          topBgColor="var(--color-fortissimo-red)"
          topBorderColor="var(--color-black-custom)"
          bottomTextColor="#ffffff"
          bottomBgColor="var(--color-fortissimo-black-bg)"
          bottomBorderColor="var(--color-fortissimo-black-bg)"
        />

        <RestaurantCustomLayout
            bgColor="var(--color-fortissimo-black-bg)"
            bgImage1={smallLogo}
            bgImage2={bigLogo}
        />
        <div>
          <FortissimoRestaurantSection />
        </div>
      </section>
    )
}

export default FortissimoRestaurantPage