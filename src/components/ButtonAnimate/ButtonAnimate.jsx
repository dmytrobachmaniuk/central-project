import './ButtonAnimate.scss';

export default function ButtonAnimate({ text, className }) {
  return (
    <button className={`button ${className || ''}`}>
      <span className="button__text">{text}</span>
      <span className="button__border"></span>
    </button>
  );
}
