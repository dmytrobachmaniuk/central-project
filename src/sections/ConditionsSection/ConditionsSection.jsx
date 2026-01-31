import './ConditionsSection.scss'
import {useHeaderStop} from "@/utils/useHeaderStop/useHeaderStop.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import terms from "@/assets/images/Conditions/terms-svg.svg"
import payout from "@/assets/images/Conditions/payout.svg"
import payout2 from "@/assets/images/Conditions/payout2.svg"
import compensation from "@/assets/images/Conditions/compensation.svg"
import park from "@/assets/images/Conditions/park.svg"
import forgotten from "@/assets/images/Conditions/forgotten.svg"

const ConditionsSection = () => {
    const headerStyle = useHeaderStop();

  return (
    <section className="conditions">
      <Header page="conditions" style={headerStyle} />

      <div className="conditions-content container">
        <div id="conditions" className="conditions-block">
          <div className="conditions-wrapper adaptive">
            <img src={terms} alt="terms icon"/>
            <h2>Умови проживання у готелях “Централь” та “Моно”</h2>
          </div>
          <div className="conditions-item">
            <ul>
              <li>Готель працює цілодобово.</li>
              <li>Заселення відбувається після 14:00 год.</li>
              <li>Виселення відбувається до 12:00 год.</li>
              <li>
                Номер в Готелі надається споживачу при пред’явленні паспорта або іншого документу,
                який засвідчує особу ( паспорт громадянина України, закордонний паспорт, національний паспорт іноземця або документ,
                що його замінює, свідоцтво про народження неповнолітніх, які не досягли 14 - ти років, посвідчення водія, військовий квиток ),
                і заповненні реєстраційної карти.
              </li>
              <li>У вартість проживання входить комплексний сніданок, який можна обрати при заїзді та паркінг.</li>
              <li>Туристичний збір не входить до вартості номеру.</li>
            </ul>
          </div>

          <div className="conditions-item">
            <div className="conditions-wrapper">
              <img src={payout} alt="payout icon"/>
              <h2>Додаткова плата</h2>
            </div>
            <ul>
              <li>У разі раннього заїзду до 10:00 проживання оплачується в розмірі 100% вартості номера в добу.</li>
              <li>У разі пізнього виїзду після 16:00 стягується додаткова оплата - 100% вартості номера в добу.</li>
              <li>Зверніть увагу, що ранній заїзд та пізній виїзд можливі за умови наявності вільних номерів.</li>
              <li>У готелі є можливість орендувати дитяче ліжечко та євро-розкладушку.</li>
            </ul>
          </div>

          <div className="conditions-item">
            <div className="conditions-wrapper">
              <img src={payout2} alt="payout2 icon"/>
              <h2>Оплата</h2>
            </div>
            <ul>
              <li>Оплата під час заїзду або до заїзду.</li>
              <li>Всі ціни вказані в гривнях. Оплата відбувається в гривнях. Ми приймаємо оплату готівкою, банківським переказом або банківськими картами.</li>
              <li>У випадку не заїзду у попередньо заброньований та оплачений номер, кошти не повертаються. Кошти повертаються за 3 доби до заїзду гостя.</li>
            </ul>
          </div>

          <div className="conditions-item">
            <div className="conditions-wrapper adaptive">
              <img src={compensation} alt="compensation icon"/>
              <h2> Компенсація майна готелю</h2>
            </div>
            <ul>
              <li>
                Згідно правил готелю в номерах, коридорах, холі, сніданковій залі, ліфті заборонено курити цигарки, електронні цигарки, кальяни та інші пристрої для паління.
                За куріння у вище вказаних місцях з гостя стягується штраф згідно прейскуранту.
                Для цього, при вході в готель, є спеціально облаштоване місце для паління.
              </li>
              <li>У випадку втрати, пошкодження ключа, гість повинен сплатити вартість згідно прейскуранту.</li>
              <li>Гість зобов'язаний відшкодувати збитки готелю у випадку пошкодження майна готелю, а також відповідає за порушення, заподіяні запрошеними ним особами (відвідувачами).
                Розмір збитку визначається адміністрацією готелю.
              </li>
            </ul>
          </div>

          <div className="conditions-item">
            <div className="conditions-wrapper">
              <img src={park} alt="park icon"/>
              <h2>Паркування</h2>
            </div>
            <p>На території розміщений безкоштовний паркінг для гостей які проживають у готелі у закладах нашої мережі, оснащені камерами відеонагляду.
              За залишені авто готель відповідальності не несе!</p>
          </div>

          <div className="conditions-item">
            <div className="conditions-wrapper">
              <img src={forgotten} alt="forgotten icon"/>
              <h2>Забуті речі</h2>
            </div>
            <p>
              У випадку, якщо після перевірки номеру покоївкою було знайдено особисті речі проживаючих, ми відразу повідомляємо гостей про це, та ведемо облік забутих речей, які ви зможете забрати протягом 6 місяців або ми відправимо НП.
              Готель не несе відповідальності за Ваші особисті речі!
            </p>
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