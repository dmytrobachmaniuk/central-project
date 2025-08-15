import './HeadingSections.scss'
import dotsSvg from '@/assets/images/Hotels-icons/dotsSvg.svg'

const HeadingSections = ({ title, subtitle }) => {
    return (
      <div className="section-header">
          <h1 className="section-header__title">{title}</h1>
          <img src={dotsSvg} alt="dots" className="section-header__dots" />
          <p className="section-header__subtitle">{subtitle}</p>
      </div>
    )
}

export default HeadingSections