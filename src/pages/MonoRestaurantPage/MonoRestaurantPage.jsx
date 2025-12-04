import RestaurantCustomLayout from "@/layouts/RestaurantCustomLayout/RestaurantCustomLayout.jsx";
import bigLogo from "@/assets/images/Mono-Restaurant/bigLogo.svg"
import smallLogo from "@/assets/images/Mono-Restaurant/smallLogo.svg"
import MonoRestaurantSection from "@/sections/MonoRestaurantSection/MonoRestaurantSection.jsx";

const MonoRestaurantPage = () => {

  return (
    <section>
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