import './ButtonAnimate.scss';

export default function ButtonAnimate({ text, className, onClick }) {
  return (
    <button className={`button ${className || ''}`} onClick={onClick}>
      <span className="button__text">{text}</span>
      <span className="button__border"></span>
    </button>
  );
}
