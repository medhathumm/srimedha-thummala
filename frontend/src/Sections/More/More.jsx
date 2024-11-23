import "./More.css";
import { useState, useEffect } from "react";
import ExpEntries from "../../Pages/Experiences/ExpEntries.js";
import ExtEntries from "../../Pages/Extracurriculars/ExtEntries.js";
import ProjectEntries from "../../Pages/Projects/ProjectEntries.js";
import { Link } from "react-router-dom";

const More = () => {

    const [experience, setExperience] = useState([]);

    const [extracurr, setExtracurr] = useState([]);

    const [project, setProject] = useState([]);

    useEffect(() => {
        const recentExperience = ExpEntries.slice(0,4);
        setExperience(recentExperience);

        const recentExtracurr = ExtEntries.slice(0,4);
        setExtracurr(recentExtracurr);

        const recentProject = ProjectEntries.slice(0,4);
        setProject(recentProject);
    }, [])

    return (
        <section id="more" className="more">
            <h1>More</h1>
            <div className="more-sections">
                <div className="more-section">
                    <h3>Projects</h3>
                    {project.map((item) => ( 
                        <div className="more-entry">
                            <hr/>
                            <h4>{item.name}</h4>
                            <div className="more-entry-checkmore">
                                <h5>{item.timeframe}</h5>
                                <Link to={`/project/${item.id}`} style={{ textDecoration: 'none' }} onClick={window.scrollTo(0,0)}><h2>&gt;</h2></Link>
                            </div>
                            <p>{item.description}</p>
                        </div>
                    ))}
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
                    {extracurr.map((item) => ( 
                        <div className="more-entry">
                            <hr/>
                            <h4>{item.name}</h4>
                            <div className="more-entry-checkmore">
                                <h5>{item.timeframe}</h5>
                                <Link to={`/extracurricular/${item.id}`} style={{ textDecoration: 'none' }} onClick={window.scrollTo(0,0)}><h2>&gt;</h2></Link>
                            </div>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default More;