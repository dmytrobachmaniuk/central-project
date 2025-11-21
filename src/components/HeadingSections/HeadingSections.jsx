import './HeadingSections.scss';
import dotsSvg from '@/assets/images/Hotels-icons/dotsSvg.svg';
import dotsAltSvg from '@/assets/images/Hotels-icons/dotsAltSvg.svg';
import patternRestaurant from '@/assets/images/pattern-restaurant-section.svg';

const HeadingSections = ({
                           title,
                           subtitle,
                           variant = 'default', // default, variant1, variant2
                           showPattern = false,
                           bgColor = null,
                           textColor = null,
                           dotsType = 'default' // 'default' або 'alt'
                         }) => {
  const classes = `section-header section-header--${variant}`;
  const dotsImg = dotsType === 'alt' ? dotsAltSvg : dotsSvg;

  return (
    <div
      className={classes}
      style={{
        background: showPattern
          ? `${bgColor || 'var(--color-olivia)'} url(${patternRestaurant}) no-repeat fixed`
          : bgColor || 'transparent',
        color: textColor || 'inherit'
      }}
    >
      <div className="container">
        <div className="section-header__inner">
           <h1 className="section-header__title">{title}</h1>
              {subtitle && (
                <div className="section-header__flex--wrapper">
                <img src={dotsImg} alt="dots" className="section-header__dots" />
                <p className="section-header__subtitle">{subtitle}</p>
                </div>
              )}
        </div>
      </div>
    </div>
  );
};

export default HeadingSections;
