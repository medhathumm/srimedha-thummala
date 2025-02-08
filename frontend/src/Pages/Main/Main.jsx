import "./Main.css";
import HeroNav from "../../Sections/HeroNav/HeroNav";
import AboutMe from "../../Sections/AboutMe/AboutMe";
import Skills from "../../Sections/Skills/Skills";
import More from "../../Sections/More/More";
import Testimonials from "../../Sections/Testimonials/Testimonials";
import Contact from "../../Sections/Contact/Contact";

const Main = () => {

    return (
        <div>
            <HeroNav/>
            <AboutMe/>
            <Skills/>
            <More/>
            <Testimonials/>
            <Contact/>
        </div>
    )
}

export default Main;