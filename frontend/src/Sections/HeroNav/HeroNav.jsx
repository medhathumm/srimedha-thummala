import './HeroNav.css';
import { useState } from 'react';
import down_arrow from "../Media/down-arrow.png";
import { Link } from "react-router-dom";

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
                            <li><Link to='/projects' onClick={handleLinkClick}>Projects</Link></li>
                            <li><Link to='/experiences' onClick={handleLinkClick}>Experience</Link></li>
                            <li><Link to='/extracurriculars' onClick={handleLinkClick}>Extracurriculars</Link></li>
                            <li><Link to='/photogallery' onClick={handleLinkClick}>Photo Gallery</Link></li>
                        </ul>
                    ) : <></>}
                </div>
                <a href="#testimonials" style={{textDecoration: 'none'}}><p>Testimonials</p></a>
                <a href="#contact" style={{textDecoration: 'none'}}><p>Contact</p></a>
            </div>

            <div className="heronav-hero">
                <h1>Hello!</h1>
                <h3>Welcome to my website portfolio!</h3>
                <p>Excited that you are here!</p>
                <p>Explore</p>
                <img src={down_arrow} alt=""/>
            </div>
        </section>
    )
}

export default HeroNav;