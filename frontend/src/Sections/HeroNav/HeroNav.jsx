import './HeroNav.css';
import down_arrow from "../Media/down-arrow.png";

const HeroNav = () => {
    return (
        <section id="/" className="heronav-container">
            <div className="heronav-nav">
                <a href="/" style={{textDecoration: 'none'}}><p>Home</p></a>
                <a href="#aboutme" style={{textDecoration: 'none'}}><p>About Me</p></a>
                <a href="#more" style={{textDecoration: 'none'}}><p>More</p></a>
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