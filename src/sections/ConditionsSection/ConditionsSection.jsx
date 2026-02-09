import './ConditionsSection.scss'
import { useHeaderStop } from "@/utils/useHeaderStop/useHeaderStop.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import { useTranslation } from "react-i18next";

import terms from "@/assets/images/Conditions/terms-svg.svg"
import payout from "@/assets/images/Conditions/payout.svg"
import payout2 from "@/assets/images/Conditions/payout2.svg"
import compensation from "@/assets/images/Conditions/compensation.svg"
import park from "@/assets/images/Conditions/park.svg"
import forgotten from "@/assets/images/Conditions/forgotten.svg"

const ConditionsSection = () => {
  const { t } = useTranslation();
  const headerStyle = useHeaderStop();

  return (
    <section className="conditions">
      <Header page="conditions" style={headerStyle} />

      <div className="conditions-content container">
        <div id="conditions" className="conditions-block">
          <div className="conditions-wrapper adaptive">
            <img src={terms} alt="terms icon"/>
            <h2>{t("conditionsPage.title")}</h2>
          </div>

          <div className="conditions-item">
            <ul>
              {t("conditionsPage.hotelRules", { returnObjects: true }).map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>

          <div className="conditions-item">
            <div className="conditions-wrapper">
              <img src={payout} alt="payout icon"/>
              <h2>{t("conditionsPage.extraFee.title")}</h2>
            </div>
            <ul>
              {t("conditionsPage.extraFee.list", { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="conditions-item">
            <div className="conditions-wrapper">
              <img src={payout2} alt="payout2 icon"/>
              <h2>{t("conditionsPage.payment.title")}</h2>
            </div>
            <ul>
              {t("conditionsPage.payment.list", { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="conditions-item">
            <div className="conditions-wrapper adaptive">
              <img src={compensation} alt="compensation icon"/>
              <h2>{t("conditionsPage.compensation.title")}</h2>
            </div>
            <ul>
              {t("conditionsPage.compensation.list", { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="conditions-item">
            <div className="conditions-wrapper">
              <img src={park} alt="park icon"/>
              <h2>{t("conditionsPage.parking.title")}</h2>
            </div>
            <p>{t("conditionsPage.parking.text")}</p>
          </div>

          <div className="conditions-item">
            <div className="conditions-wrapper">
              <img src={forgotten} alt="forgotten icon"/>
              <h2>{t("conditionsPage.forgottenItems.title")}</h2>
            </div>
            <p>{t("conditionsPage.forgottenItems.text")}</p>
          </div>
        </div>
        <div id="header-stop" className="conditions__header-stop"></div>
      </div>

      <Footer
        bgColor="var(--color-mono-brown)"
        textColor="var(--color-beige)"
        isHomePage={false}
        popupTheme="light"
        popupButtonProps={{
          textColor: "var(--color-white)",
          hoverTextColor: "var(--color-olivia)",
          borderColor: "rgba(218, 202, 182, 0.5)",
          hoverBorderColor: "rgba(173, 160, 144, 0)",
          bgColor: "var(--color-olivia)",
        }}
      />
    </section>
  )
}

export default ConditionsSection
