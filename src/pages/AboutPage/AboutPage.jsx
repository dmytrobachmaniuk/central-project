import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import heroBg from "@/assets/images/About/Hero.webp";
import AboutSection from "@/sections/AboutSection/AboutSection.jsx";

const AboutPage = () => {

  return (
    <section className="about-page">
      <HeroCustomLayout
        bg={heroBg}
        h1={"Central\nHotels & Restaurants"}
        h2={
          <>
            Сучасний комплекс<br />
            в самому серці Рівного
          </>
        }
        h3={<>Про нас</>}
        textColor="var(--color-olivia)"
        animate={false}
      />

      <div id="rooms">
        <AboutSection/>
      </div>
    </section>
  )
}

export default AboutPage