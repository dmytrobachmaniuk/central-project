import HeroCustomLayout from "@/layouts/HeroCustomLayout/HeroCustomLayout.jsx";
import heroBg from "@/assets/images/Mono-Hotels/Hero-book.webp";
import BookMonoSection from "@/sections/BookMonoSection/BookMonoSection.jsx";

const BookMonoSectionPage = () => {
  return (
    <section className="book-mono-section-page">
      <HeroCustomLayout
        bg={heroBg}
        h1="Mono Hotel"
        h2={
          <>
            35 сучасних номерів
            різних<br /> категорій у стильному
            та<br /> комфортному дизайні
          </>
        }
        h3="Бронювання"
      />
      <div id="rooms">
        <BookMonoSection />
      </div>
    </section>
  );
};

export default BookMonoSectionPage;
