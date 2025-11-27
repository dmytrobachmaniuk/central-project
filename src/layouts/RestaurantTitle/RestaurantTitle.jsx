import './RestaurantTitle.scss'
import ButtonAnimate from '@/components/ButtonAnimate/ButtonAnimate.jsx'

export default function RestaurantTitle({
                                          title,
                                          description,
                                          buttonText,
                                          onButtonClick,
                                          smallImageTop,
                                          smallImageBottom,
                                          mainImageRight,
                                          textColor = '#2A2A2A',
                                          descriptionColor = 'rgba(0,0,0,0.6)',
                                          buttonProps = {},
                                        }) {
  return (
    <section
      className="restaurant-title"
      style={{
        '--rt-text-color': textColor,
        '--rt-desc-color': descriptionColor,
      }}
    >
      <div className="restaurant-title__content">
        {smallImageTop && (
          <img
            src={smallImageTop.src}
            alt={smallImageTop.alt || ''}
            className="restaurant-title__img-small"
          />
        )}

        <h2 className="restaurant-title__title">{title}</h2>
        <p className="restaurant-title__description">{description}</p>

        {buttonText && (
          <ButtonAnimate
            text={buttonText}
            onClick={onButtonClick}
            className="restaurant-title__button"
            {...buttonProps}
          />
        )}

        {smallImageBottom && (
          <img
            src={smallImageBottom.src}
            alt={smallImageBottom.alt || ''}
            className="restaurant-title__img-small"
          />
        )}
      </div>

      {mainImageRight && (
        <div className="restaurant-title__image">
          <img src={mainImageRight.src} alt={mainImageRight.alt || ''} />
        </div>
      )}
    </section>
  )
}
