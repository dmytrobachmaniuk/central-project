import './HeroCustomLayout.scss';

const HeroCustomLayout = ({ bg, h1, h2, h3 }) => {
  return (
    <section
      className="hero__custom-layout"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero__custom-layout__content">
        <div className="hero__custom-layout__h1-wrapper">
          {typeof h1 === 'string' ? <h1>{h1}</h1> : h1}
          <h2 className="hero__custom-layout__text--default">BY PAPA&MAMA</h2>
        </div>

        {h2 && (
          <div className="hero__custom-layout__h2-wrapper">
            <h2>{h2}</h2>
          </div>
        )}

        <div className="hero__custom-layout__h3-wrapper">
          <h3>{h3}</h3>
        </div>
      </div>
    </section>
  );
};

export default HeroCustomLayout;
