import "./AboutMe.css";
import profile_pic from "../Media/profilepic2.jpg";
import resume_pdf from "../Media/Srimedha_Thummala copy.pdf";

const AboutMe = () => {

    return (
        <section id="aboutme" className="about-me">
            <div className="aboutme-left">
                <h1>About Me</h1>
                <p><strong>Education: </strong>BS @ University of Washington - Seattle</p>
                <p><strong>Major: </strong>Computer Science</p>
                <p><strong>Minor: </strong>Business</p>
                <p><strong>Expected Graduation Date: </strong>2026</p>
                <p><strong>Future Role Goals: </strong>Product Manager and/or Software Engineer</p>
                <p><strong>Relevant Coursework: </strong>Data Structures & Parallelism (CSE 332) And Algorithms (CSE421)</p>
                <p><strong>Hobbies: </strong>cafe hopping, martial arts, web app creation, and photography</p>
                <p><strong>Favorite Books: </strong><i>Unfair Advantage: The Power of Financial Education</i> by Robert Kiyosaki and <i>Think and Grow Rich</i> by Napolean Hill</p>
                <br/>
                <a href={resume_pdf} target="_blank" rel="noreferrer" className="aboutme-resume-btn">
                    <button><h3>Resume</h3></button>
                </a>
            </div>

            <div className="aboutme-right">
                <img src={profile_pic} alt=""/>
            </div>
        </section>
    )
}

export default AboutMe;