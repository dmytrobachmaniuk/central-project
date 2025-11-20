import './ButtonAnimate.scss';

export default function ButtonAnimate({
                                        text,
                                        className,
                                        onClick,
                                        textColor = 'var(--color-black-custom)',
                                        borderColor = 'rgba(218, 202, 182, 0.35)',
                                        hoverTextColor = 'var(--color-black-custom)',
                                        hoverBorderColor = 'rgba(173, 160, 144, 0)',
                                        bgColor = 'transparent'
                                      }) {
  return (
    <button
      className={`button ${className || ''}`}
      onClick={onClick}
      style={{
        '--btn-text-color': textColor,
        '--btn-border-color': borderColor,
        '--btn-hover-text-color': hoverTextColor,
        '--btn-hover-border-color': hoverBorderColor,
        '--btn-bg-color': bgColor
      }}
    >
      <span className="button__text">{text}</span>
      <span className="button__border"></span>
    </button>
  );
}
