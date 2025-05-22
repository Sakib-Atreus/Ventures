import AboutCompany from "../components/AboutCompany";
import Banner from "../components/Banner";
import ImageBG from "../components/Image";
import LogoSlider from "../components/LogoSlider";
import LogoSlider2 from "../components/LogoSlider2";
import ProcessSteps from "../components/ProcessSteps";
import SmartSolutions from "../components/SmartSolutions";
import Technology from "../components/technology";
import Work from "../components/Work";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const AlhenaPortfolio = () => {
    return (
        <div className="bg-white">
            <Navbar/>
            <Banner/>
            <LogoSlider/>
            <AboutCompany/>
            <SmartSolutions/>
            <ImageBG/>
            <ProcessSteps/>
            <Work/>
            <LogoSlider2/>
            <Technology/>
            <Footer/>
        </div>
    );
};

export default AlhenaPortfolio;