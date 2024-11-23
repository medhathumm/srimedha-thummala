import "./Projects.css";
import ProjectEntries from "./ProjectEntries.js";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className="project">
            <div className="project-header">
                <h1>Projects</h1>
            </div>
            {ProjectEntries.map((item) => ( 
                <div className="project-entry">
                    <h4>{item.name}</h4>
                    <div className="project-entry-checkmore">
                        <h5>{item.timeframe}</h5>
                        <Link to={`/project/${item.id}`} style={{ textDecoration: 'none' }} onClick={window.scrollTo(0,0)}><h2>&gt;</h2></Link>
                    </div>
                    <p>{item.description}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default Projects;