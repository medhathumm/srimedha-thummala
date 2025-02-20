import './HeroNav.css';
import github_logo from "../Media/github_logo.png";
import linkedin_logo from "../Media/linkedin_logo.png";
import email_logo from "../Media/email_logo.png";
import profile_pic from "../Media/profilepic3.png";
import element from "../Media/element.png";

const HeroNav = () => {

    // const BurstText = ({ text, className = "", fontSize = "2rem" }) => {
    //     return (
    //         <div className={`burst-text ${className}`} style={{ fontSize }}>
    //             {text.split("").map((char, index) => (
    //                 <span
    //                     key={index}
    //                     style={{
    //                         animationDelay: `${index * 0.1}s`,
    //                     }}
    //                 >
    //                     {char === " " ? "\u00A0" : char}
    //                 </span>
    //             ))}
    //         </div>
    //     );
    // };

    return (
        <section id="/" className="heronav-container">
            <div className="heronav-hero">
                <div className="heronav-hero-left">
                    <img src={element} style={{position: 'absolute', marginTop: '-100px', bottom: 'auto', top: '0', left: '0', width: '200px', height: '200px'}} alt=""/>
                    <img src={profile_pic} alt=""/>
                </div>
                <div className="heronav-hero-right">
                    <h4>Hi! I am</h4>
                    <h1>Srimedha Thummala</h1>
                    <h2>Aspiring Software Engineer</h2>
                    {/* <h6>Detail-oriented and passionate Computer Science student with skills in software engineering, generative AI, and design. 
                        Seeking an entry-level software engineering role to apply my technical abilities on innovative and impactful projects.
                    </h6> */}
                    <div className="heronav-logos">
                        <a href="https://github.com/medhathumm" target="_blank" rel="noreferrer"><img src={github_logo} alt=""/></a>
                        <a href="https://www.linkedin.com/in/srimedha-thummala/" target="_blank" rel="noreferrer"><img src={linkedin_logo} alt=""/></a>
                        <a href="/#contact"><img src={email_logo} alt=""/></a>
                    </div>
                    <h6>Excited that you are here!</h6>
                    <img src={element} style={{position: 'absolute', bottom: '0', right: '0', width: '100px', height: '100px', transform: 'rotate(180deg)'}} alt=""/>
                    {/* <h6>Learn more about me and what skills I have to offer</h6> */}
                    {/* <BurstText className="heronav-hero-h1" text="Hello!" fontSize="4.5rem" />
                    <BurstText className="heronav-hero-h3" text="Welcome to my website portfolio!" fontSize="3rem" />
                    <BurstText className="heronav-hero-p" text="Excited that you are here!" fontSize="2rem" />
                    <BurstText className="heronav-hero-p2" text="Explore" fontSize="1.5rem" /> */}
                    {/* <a href="#aboutme" style={{textDecoration: 'none'}}><img src={down_arrow} alt=""/></a> */}
                </div>
                
            </div>
        </section>
    )
}

export default HeroNav;