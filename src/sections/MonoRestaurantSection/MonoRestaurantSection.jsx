import Header from "@/components/Header/Header.jsx";
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";

const MonoRestaurantSection = () => {
  const headerStyle = useHeaderStop();

  return (
    <section className="mono-restaurant-section">
      <Header page="restaurantMono" style={headerStyle} />
    </section>
  );
};

export default MonoRestaurantSection;
