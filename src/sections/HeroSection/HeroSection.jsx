import { useEffect } from "react";
import './HeroSection.scss';
import heroBg from '@/assets/images/bg-hero.webp';

const HeroSection = () => {
  useEffect(() => {
    const existing = document.head.querySelector(`link[href="${heroBg}"]`);
    if (!existing) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = heroBg;
      document.head.appendChild(link);
    }
    return () => {
      const link = document.head.querySelector(`link[href="${heroBg}"]`);
      if (link) link.remove();
    };
  }, []); //прелоадер для бг

  return (
    <section className="hero-section">
      <div className="hero-section__text">
        <div className="hero-section__title--wrapper">
          <h2 className="hero-section__title--pt1">Hotels & Restaurants</h2>
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
