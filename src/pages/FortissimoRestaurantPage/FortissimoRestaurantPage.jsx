import RestaurantCustomLayout from "@/layouts/RestaurantCustomLayout/RestaurantCustomLayout.jsx";
import bigLogo from "@/assets/images/Fortissimo-Restaurant/bigLogo.svg"
import smallLogo from "@/assets/images/Fortissimo-Restaurant/smallLogo.svg"
import FortissimoRestaurantSection from "@/sections/FortissimoRestaurantSection/FortissimoRestaurantSection.jsx";

const FortissimoRestaurantPage = () => {

    return (
      <section>
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