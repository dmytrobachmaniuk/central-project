import './HeroSection.scss';
import Header from "@/components/Header/Header.jsx";

const HeroSection = () => {

  return (
      <section
        className="hero-section"
      >
        <Header />
          <div className="hero-section__text">
            <div className="hero-section__title--wrapper">
              <h2 className="hero-section__title--pt1">Hotels & Restaurants </h2>
              <h3 className="hero-section__title--pt2">BY PAPA&amp;MAMA</h3>
            </div>
            <div className="hero-section__subtitle-wrapper">
              <h1 className="hero-section__subtitle">Central</h1>
            </div>
          </div>
      </section>
    );
};

export default HeroSection;
