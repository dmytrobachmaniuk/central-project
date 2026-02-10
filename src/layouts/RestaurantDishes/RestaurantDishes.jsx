import './RestaurantDishes.scss'
import ButtonAnimate from '@/components/ButtonAnimate/ButtonAnimate.jsx'

const RestaurantDishes = ({
                            title,
                            buttonText,
                            image,
                            imageOffset,
                            onButtonClick,
                            textColor,
                            buttonProps = {},
                          }) => {
  return (
    <section
      className="restaurant-dishes"
      style={{
        // '--pizza-offset': imageOffset,
        '--title-color': textColor,
      }}
    >
      <div className="restaurant-dishes__content">
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            className="restaurant-dishes__img"
          />
        )}

        <div className="restaurant-dishes__wrapper container">
          <h2 className="restaurant-dishes__title">{title}</h2>

          <ButtonAnimate
            text={buttonText}
            onClick={onButtonClick}
            className="restaurant-dishes__button"
            {...buttonProps}
          />
        </div>
      </div>
    </section>
  )
}

export default RestaurantDishes
