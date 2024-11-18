import "./More.css";
import { useState, useEffect } from "react";
import ExpEntries from "../../Pages/Experiences/ExpEntries.js";
import { Link } from "react-router-dom";

const More = () => {

    const [experience, setExperience] = useState([]);

    useEffect(() => {
        const recentExperience = ExpEntries.slice(0,4);
        setExperience(recentExperience);
    }, [ExpEntries])

    return (
        <section id="more" className="more">
            <h1>More</h1>
            <div className="more-sections">
                <div className="more-section">
                    <h3>Projects</h3>
                    <div className="more-entry">
                        <hr/>
                        <h4>Personal Website</h4>
                        <div className="more-entry-checkmore">
                            <h5>August 2024 - Present</h5>
                            <h2>&gt;</h2>
                        </div>
                        <p>Creating E-commerce website using MERN stack languages.</p>
                    </div>
                    <div className="more-entry">
                        <hr/>
                        <h4>YouExplore</h4>
                        <div className="more-entry-checkmore">
                            <h5>March 2024</h5>
                            <h2>&gt;</h2>
                        </div>
                        <p>Co-developed Figma designs for a mobile app aimed at providing
                            accessible leisure resources during University of Washington's
                            CREATE Program Hackathon.</p>
                    </div>
                    <div className="more-entry">
                        <hr/>
                        <h4>EP-histARy</h4>
                        <div className="more-entry-checkmore">
                            <h5>February 2024</h5>
                            <h2>&gt;</h2>
                        </div>
                        <p>Secured first place in Revere XR Hackathon with team Quantum SparkX
                            for an AR prototype that preserves a historic event using innovative
                            AR storytelling.</p>
                    </div>
                </div>

                <div className="more-section">
                    <h3>Experience</h3>
                    {experience.map((item) => ( 
                        <div className="more-entry">
                            <hr/>
                            <h4>{item.name}</h4>
                            <div className="more-entry-checkmore">
                                <h5>{item.timeframe}</h5>
                                <Link to={`/experience/${item.id}`} style={{ textDecoration: 'none' }} onClick={window.scrollTo(0,0)}><h2>&gt;</h2></Link>
                            </div>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="more-section">
                    <h3>Extracurriculars</h3>
                    <div className="more-entry">
                        <hr/>
                        <h4>Speaker Selection Team Member</h4>
                        <div className="more-entry-checkmore">
                            <h5>October 2024 - Present</h5>
                            <h2>&gt;</h2>
                        </div>
                        <p>Interview and select speakers from 100+ applicants for yearly TEDxUofW conference.</p>
                    </div>
                    <div className="more-entry">
                        <hr/>
                        <h4>Online Networks Team Member</h4>
                        <div className="more-entry-checkmore">
                            <h5>October 2024 - Present</h5>
                            <h2>&gt;</h2>
                        </div>
                        <p>Maintaining club website and manage social media with AWS and Git for Applied Analytics Club at UW (AACUW).</p>
                    </div>
                    <div className="more-entry">
                        <hr/>
                        <h4>Executive Board Programming Chair</h4>
                        <div className="more-entry-checkmore">
                            <h5>November 2024 - Present</h5>
                            <h2>&gt;</h2>
                        </div>
                        <p>Organizing 3+ impactful fundraisers to raise $1,000+ to support CRY America’s initiatives as part of Child Rights & YOu at UW (CRYUW).</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default More;