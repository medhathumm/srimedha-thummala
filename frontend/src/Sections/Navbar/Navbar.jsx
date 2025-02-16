import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    const [dropdownVisible, setDropdownVisible] = useState(true);
    const navigate = useNavigate();

    const handleLinkClick = () => {
        setDropdownVisible(false); 
    };

    const handleMouseEnter = () => {
        setDropdownVisible(true); 
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false); 
    };

    useEffect(() => {
        setDropdownVisible(false);
    }, [])

    const navigateToSection = (sectionId) => {
        navigate("/");  
        setTimeout(() => {
            const contactSection = document.getElementById(sectionId);  
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });  
            }
        }, 500);  
    };

    return (
        <div className="heronav-nav">
            <a href="/" style={{textDecoration: 'none', fontWeight: 500, fontSize: '25px'}}>Home</a>
            <a href="/#aboutme" onClick={() => navigateToSection("aboutme")} style={{textDecoration: 'none', fontWeight: 500, fontSize: '25px'}}>About Me</a>
            <div className="heronav-more" onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}>
                <a href="/#more" onClick={() => navigateToSection("more")} style={{textDecoration: 'none', fontWeight: 500, fontSize: '25px'}}>More</a>
                { dropdownVisible ? (
                    <ul className="heronav-more-dropdown">
                        <li><a href="#skills" onClick={() => navigateToSection("skills")} style={{textDecoration: 'none'}}>Skills</a></li>
                        <li><Link to='/projects' onClick={handleLinkClick}>Projects</Link></li>
                        <li><Link to='/experiences' onClick={handleLinkClick}>Experiences</Link></li>
                        <li><Link to='/extracurriculars' onClick={handleLinkClick}>Extracurriculars</Link></li>
                        <li><Link to='/photogallery' onClick={handleLinkClick}>Photo Gallery</Link></li>
                        <li><a href="/#testimonials" onClick={() => navigateToSection("testimonials")} style={{textDecoration: 'none'}}>Testimonials</a></li>
                    </ul>
                ) : <></>}
            </div>
            <a href="/#contact" onClick={() => navigateToSection("contact")} style={{textDecoration: 'none', fontWeight: 500, fontSize: '25px'}}>Contact Me</a>
        </div>
    )
}

export default Navbar;