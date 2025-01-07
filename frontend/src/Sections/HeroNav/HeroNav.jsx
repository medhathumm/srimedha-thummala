import './HeroNav.css';
import { useState, useEffect } from 'react';
import down_arrow from "../Media/down-arrow.png";
import { Link } from "react-router-dom";
import profile_pic from "../Media/profilepic1.png";

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

    const BurstText = ({ text, className = "", fontSize = "2rem" }) => {
        return (
            <div className={`burst-text ${className}`} style={{ fontSize }}>
                {text.split("").map((char, index) => (
                    <span
                        key={index}
                        style={{
                            animationDelay: `${index * 0.1}s`,
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <section id="/" className="heronav-container">
            <div className="heronav-nav">
                <a href="/" style={{textDecoration: 'none'}}><p>Home</p></a>
                <a href="#aboutme" style={{textDecoration: 'none'}}><p>About Me</p></a>
                <div className="heronav-more" onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}>
                     <a href="#more" style={{textDecoration: 'none'}}><p>More</p></a>
                     { dropdownVisible ? (
                        <ul className="heronav-more-dropdown">
                            <li><a href="#skills" style={{textDecoration: 'none'}}><p>Skills</p></a></li>
                            <li><Link to='/projects' onClick={handleLinkClick}>Projects</Link></li>
                            <li><Link to='/experiences' onClick={handleLinkClick}>Experience</Link></li>
                            <li><Link to='/extracurriculars' onClick={handleLinkClick}>Extracurriculars</Link></li>
                            <li><Link to='/photogallery' onClick={handleLinkClick}>Photo Gallery</Link></li>
                            <li><a href="#testimonials" style={{textDecoration: 'none'}}><p>Testimonials</p></a></li>
                        </ul>
                    ) : <></>}
                </div>
                <a href="#contact" style={{textDecoration: 'none'}}><p>Contact Me</p></a>
            </div>

            <div className="heronav-hero">
                <img className="heronav-hero-left" src={profile_pic} alt=""/>
                <div className="heronav-hero-right">
                    <h1>Hello!</h1>
                    <h3>Welcome to my website portfolio!</h3>
                    <p>Excited that you are here!</p>
                    <p>Explore</p>
                    {/* <BurstText className="heronav-hero-h1" text="Hello!" fontSize="4.5rem" />
                    <BurstText className="heronav-hero-h3" text="Welcome to my website portfolio!" fontSize="3rem" />
                    <BurstText className="heronav-hero-p" text="Excited that you are here!" fontSize="2rem" />
                    <BurstText className="heronav-hero-p2" text="Explore" fontSize="1.5rem" /> */}
                    <a href="#aboutme" style={{textDecoration: 'none'}}><img src={down_arrow} alt=""/></a>
                </div>
                
            </div>
        </section>
    )
}

export default HeroNav;