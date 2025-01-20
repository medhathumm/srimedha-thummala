import "./ProjectItem.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProjectEntries from "../ProjectEntries.js";
import impact_symbol from "../../../Sections/Media/target.png";
import role_symbol from "../../../Sections/Media/list.png";
import skills_symbol from "../../../Sections/Media/pencil.png";
import link_symbol from "../../../Sections/Media/external-link.png";
import context_symbol from "../../../Sections/Media/context.png";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const ProjectItem = () => {

    const {projectId} = useParams();

    const [project, setProject] = useState(null);

    const fetchProjectData = async () => {
        setProject(ProjectEntries.find((e) => e.id === Number(projectId)));
    }
    
    useEffect (() => {
        fetchProjectData();
    }, [projectId, ProjectEntries]);

    return (
        <div>
            {project ? 
                (
                    <div className="project-item">
                        <div className="exp-main">
                            <div className="exp-main-left">
                                <h2>{project.name}</h2>
                                <h3>{project.more}</h3>
                                <p>{project.timeframe}</p>
                                <p>{project.city}</p>
                            </div>
                            <div className="exp-main-right">
                                <ResponsiveMasonry columnsCountBreakPoints={{250: 1, 500: 2}}>
                                    <Masonry>
                                        {project.images.map((image, index) => (
                                            <div className="masonry-item" key={index}>
                                                <img className="masonry-image"
                                                    alt=""
                                                    src={image.src}
                                                    style={{display: "block", padding: "1px", height: "auto"}}
                                                />
                                            </div>
                                        ))}
                                    </Masonry>
                                </ResponsiveMasonry>
                            </div>
                        </div>
                        <div className="exp-info">
                            <div className="exp-info-section">
                                <img src={context_symbol} alt=""/>
                                <h2>Context</h2>
                                <p>{project.context}</p>
                            </div>
                            <div className="exp-info-section">
                                <img src={role_symbol} alt=""/>
                                <h2>Role</h2>
                                <p>{project.responsibilities}</p>
                            </div>
                            <div className="exp-info-section">
                                <img src={impact_symbol} alt=""/>
                                <h2>Impact</h2>
                                <p>{project.impact}</p>
                            </div>
                            <div className="exp-info-section">
                                <img src={skills_symbol} alt=""/>
                                <h2>Acquired</h2>
                                <p>{project.skills}</p>
                            </div>
                        </div>
                        <div className="exp-links">
                            {project.links ? 
                                project.links.map((link, index) => {
                                    return (
                                        <div key={index} className="exp-links-link">
                                            <a href={link.url} style={{ textDecoration: 'none', color: 'black', fontSize: '18px', fontWeight: '500' }}><img src={link_symbol} alt=""/></a>
                                            <a href={link.url} style={{ textDecoration: 'none', color: 'black', fontSize: '18px', fontWeight: '500' }}>{link.name}</a>
                                        </div>
                                    )
                                })
                            : <></>}
                        </div>
                    </div>
                ) : (
                    <div>No such project found.</div>
                )
            }
        </div>
    )
}

export default ProjectItem;