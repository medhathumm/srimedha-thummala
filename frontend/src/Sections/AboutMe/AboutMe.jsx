import "./AboutMe.css";
import profile_pic from "../Media/profile-pic.jpeg";

const AboutMe = () => {
    return (
        <section id="aboutme" className="about-me">
            <div className="aboutme-left">
                <h1>About Me</h1>
                <p><strong>Education: </strong>BS @ University of Washington - Seattle</p>
                <p><strong>Major: </strong>Computer Science</p>
                <p><strong>Minor: </strong>Business</p>

            </div>

            <div className="aboutme-right">
                <img src={profile_pic} alt=""/>
            </div>
        </section>
    )
}

export default AboutMe;