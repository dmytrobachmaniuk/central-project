import heroBg from "@/assets/images/Central-Hotels/Hero.webp";
import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import BookCentralSection from "@/sections/BookCentralSection/BookCentralSection.jsx";
import logo from "@/assets/images/Central-Hotels/logo.webp";

const BookCentralPage = () => {
  return (
    <section className="book-mono-section-page">
      <HeroCustomLayout
        bg={heroBg}
        bgColor="var(--color-mono-brown)"
        h1={<img src={logo} alt="Central Hotel" className="hero-logo" />}
        h2={
          <>
            27 зручних номерів у центрі міста
          </>
        }
        h3="Бронювання"
      />
      <div id="rooms">
        <BookCentralSection />
      </div>
    </section>
  )
}

export default BookCentralPage