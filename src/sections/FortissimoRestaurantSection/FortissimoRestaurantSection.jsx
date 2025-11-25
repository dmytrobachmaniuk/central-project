import Header from "@/components/Header/Header.jsx";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";

const FortissimoRestaurantSection = () => {
    const headerStyle = useHeaderStop();

    return (
      <section className="fortissimo-restaurant-section">
          <Header page="restaurantFortissimo" style={headerStyle} />
      </section>
    );
};

export default FortissimoRestaurantSection;
