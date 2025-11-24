import './AboutSection.scss'
import Header from "@/components/Header/Header.jsx";
import {useHeaderStop} from "@/utils/useHeaderStop/useHeaderStop.jsx";
import Footer from "@/components/Footer/Footer.jsx";

const AboutSection = () => {
    const headerStyle = useHeaderStop();
      return (
        <section className="about-section">
            <Header page="about" style={headerStyle} />

            <div className="about-section__content container">
                <div id="about" className="conditions-block">

                </div>
                <div id="header-stop" className="conditions__header-stop"></div>
            </div>
            <Footer bgColor="#E5D9C1" textColor="var(--color-olivia)" isHomePage={true} />
        </section>
      )
    }

export default AboutSection