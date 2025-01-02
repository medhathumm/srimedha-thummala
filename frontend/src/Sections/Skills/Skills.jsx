import "./Skills.css";
import java_logo from "../Media/java-logo.png";
import react_logo from "../Media/react-logo.png";
import figma_logo from "../Media/figma-logo.png";
import github_logo from "../Media/github-logo.png";
import linkedin_logo from "../Media/linkedin-logo.png";
import google_logo from "../Media/google-logo.png";

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h1>Skills</h1>
            <div className="skills-categories">
                <div className="skills-category">
                    <h3>Languages</h3>
                    <div className="skills-item">
                        <img src={java_logo} alt=""/>
                        <p>Java</p>
                    </div>
                    <div className="skills-item">
                        <img src={react_logo} alt=""/>
                        <p>React</p>
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Tools</h3>
                    <div className="skills-item">
                        <img src={figma_logo} alt=""/>
                        <p>Figma</p>
                    </div>
                    <div className="skills-item">
                        <img src={github_logo} alt=""/>
                        <p>Github</p>
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Certifications</h3>
                    <div className="skills-item">
                        <img src={google_logo} alt=""/>
                        <p>Google Generative AI Series</p>
                    </div>
                    <div className="skills-item">
                        <img src={linkedin_logo} alt=""/>
                        <p>Web Programming Foundations</p>
                    </div>
                    <div className="skills-item">
                        <img src={linkedin_logo} alt=""/>
                        <p>React.js Essential Training</p>
                    </div>
                    <div className="skills-item">
                        <img src={linkedin_logo} alt=""/>
                        <p>Microsoft Office: First Steps</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;