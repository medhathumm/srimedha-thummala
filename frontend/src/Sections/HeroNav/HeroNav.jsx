import './HeroNav.css';
import { useState, useEffect } from 'react';
import github_logo from "../Media/github_logo.png";
import linkedin_logo from "../Media/linkedin_logo.png";
import email_logo from "../Media/email_logo.png";
import { Link } from "react-router-dom";
import profile_pic from "../Media/profilepic3.png";

const HeroNav = () => {

    const [dropdownVisible, setDropdownVisible] = useState(true);

    const handleLinkClick = () => {
        setDropdownVisible(false); 
    };

    const handleMouseEnter = () => {
        setDropdownVisible(true); 
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false); 
    };

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
    useEffect(() => {
        setDropdownVisible(false);
    }, [])

    return (
        <section id="/" className="heronav-container">
            <div className="heronav-nav">
                <a href="/" style={{textDecoration: 'none', fontWeight: 500, fontSize: '25px'}}>Home</a>
                <a href="#aboutme" style={{textDecoration: 'none', fontWeight: 500, fontSize: '25px'}}>About Me</a>
                <div className="heronav-more" onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}>
                     <a href="#more" style={{textDecoration: 'none', fontWeight: 500, fontSize: '25px'}}>More</a>
                     { dropdownVisible ? (
                        <ul className="heronav-more-dropdown">
                            <li><a href="#skills" style={{textDecoration: 'none'}}>Skills</a></li>
                            <li><Link to='/projects' onClick={handleLinkClick}>Projects</Link></li>
                            <li><Link to='/experiences' onClick={handleLinkClick}>Experiences</Link></li>
                            <li><Link to='/extracurriculars' onClick={handleLinkClick}>Extracurriculars</Link></li>
                            <li><Link to='/photogallery' onClick={handleLinkClick}>Photo Gallery</Link></li>
                            <li><a href="#testimonials" style={{textDecoration: 'none'}}>Testimonials</a></li>
                        </ul>
                    ) : <></>}
                </div>
                <a href="#contact" style={{textDecoration: 'none', fontWeight: 500, fontSize: '25px'}}>Contact Me</a>
            </div>

            <div className="heronav-hero">
                <div className="heronav-hero-left">
                    <img src={profile_pic} alt=""/>
                </div>
                <div className="heronav-hero-right">
                    <h4>Hi! I am</h4>
                    <h1>Srimedha Thummala</h1>
                    <h2>Aspiring Software Engineer & Program Manager</h2>
                    <h6>Detail-oriented and passionate Computer Science student with skills in software engineering, generative AI, and design. 
                        Seeking an entry-level software engineering role to apply my technical abilities on innovative and impactful projects.
                    </h6>
                    <div className="heronav-logos">
                        <a href="https://github.com/medhathumm" target="_blank" rel="noreferrer"><img src={github_logo} alt=""/></a>
                        <a href="https://www.linkedin.com/in/srimedha-thummala/" target="_blank" rel="noreferrer"><img src={linkedin_logo} alt=""/></a>
                        <a href="#contact"><img src={email_logo} alt=""/></a>
                    </div>
                    <h6>Excited that you are here!</h6>
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