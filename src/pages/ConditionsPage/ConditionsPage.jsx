import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import heroBg from "@/assets/images/Conditions/Hero.webp";
import ConditionsSection
  from "@/sections/ConditionsSection/ConditionsSection.jsx";

const ConditionsPage = () => {

  return (
    <section className="conditions-page">
      <HeroCustomLayout
        bg={heroBg}
        h1={"Central\n" +
          "Hotels & Restaurants"}
        h2={
          <>
            Правила та умови проживання у<br/>
            готелях нашої мережі
          </>
        }
        h3={
          <>
            Умови<br/>
            проживання
          </>
        }
      />
      <div id="rooms">
        <ConditionsSection/>
      </div>
    </section>
  )
}

export default ConditionsPage