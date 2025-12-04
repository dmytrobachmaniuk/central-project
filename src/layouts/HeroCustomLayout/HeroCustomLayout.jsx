import './HeroCustomLayout.scss';

const HeroCustomLayout = ({
                            bg,
                            bgColor = "#000",
                            h1,
                            h2,
                            h3,
                            textColor = "var(--color-white)",
                            animate = true
                          }) => {
  return (
    <section
      className={`hero__custom-layout ${!animate ? "hero__custom-layout--no-bg-anim" : ""}`}
      style={{
        backgroundColor: bgColor,
        backgroundImage: bg ? `url(${bg})` : "none"
      }}
    >
      <div
        className="hero__custom-layout__content"
        style={{ color: textColor }}
      >
        <div className="hero__custom-layout__h1-wrapper">
          {typeof h1 === "string" ? <h1>{h1}</h1> : h1}
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
