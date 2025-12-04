import heroBg from "@/assets/images/Central-Hotels/Hero.webp";
import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import BookCentralSection from "@/sections/BookCentralSection/BookCentralSection.jsx";

const BookCentralPage = () => {
  return (
    <section className="book-mono-section-page">
      <HeroCustomLayout
        bg={heroBg}
        bgColor="var(--color-mono-brown)"
        h1="Mono Hotel"
        h2={
          <>
            27 зручних сучасного<br />
            інтер'єру, частина яких<br />
            виходить на центральну площу міста
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