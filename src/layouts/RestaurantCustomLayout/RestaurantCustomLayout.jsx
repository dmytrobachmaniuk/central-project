import './RestaurantCustomLayout.scss';

const RestaurantCustomLayout = ({
                                  bgColor = "transparent",
                                  bgImage1,
                                  bgImage2
                                }) => {
  return (
    <section
      className="restaurant__custom-layout"
      style={{ backgroundColor: bgColor }}
    >
      {bgImage1 && (
        <img
          src={bgImage1}
          className="restaurant__custom-layout__bg-image1"
          alt="small decoration"
          draggable={false}
        />
      )}

      <div className="restaurant__custom-layout__center-flex">
        {bgImage2 && (
          <img
            src={bgImage2}
            className="restaurant__custom-layout__bg-image2"
            alt="main visual"
            draggable={false}
          />
        )}
      </div>
    </section>

  );
};

export default RestaurantCustomLayout;
