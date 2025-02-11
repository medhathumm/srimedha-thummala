import "./ExpItem.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ExpEntries from "../ExpEntries.js";
import impact_symbol from "../../../Sections/Media/impact.png";
import role_symbol from "../../../Sections/Media/role.png";
import skills_symbol from "../../../Sections/Media/skills.png";
import link_symbol from "../../../Sections/Media/link.png";
import context_symbol from "../../../Sections/Media/context2.png";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const ExpItem = () => {

    const {experienceId}= useParams();

    const [experience, setExperience] = useState(null);

    const fetchExperienceData = async () => {
        setExperience(ExpEntries.find((e) => e.id === Number(experienceId)));
    }
    
    useEffect (() => {
        fetchExperienceData();
    }, [experienceId, ExpEntries]);

    return (
        <div>
            {experience ? (
                <div className="exp-item">
                    <div className="exp-main">
                        <div className="exp-main-left">
                            <h2>{experience.name}</h2>
                            <h3>{experience.more}</h3>
                            <p>{experience.timeframe}</p>
                            <p>{experience.city}</p>
                            { console.log(experience.images)}
                        </div>
                        <div className="exp-main-right">
                            <ResponsiveMasonry columnsCountBreakPoints={{250: 1, 500: 2}}>
                                <Masonry>
                                    {experience.images.map((image, index) => (
                                        <div className="exp-masonry-item" key={index}>
                                            <img className="exp-masonry-image"
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
                            <p>{experience.context}</p>
                        </div>
                        <div className="exp-info-section">
                            <img src={role_symbol} alt=""/>
                            <h2>Role</h2>
                            <p>{experience.responsibilities}</p>
                        </div>
                        <div className="exp-info-section">
                            <img src={impact_symbol} alt=""/>
                            <h2>Impact</h2>
                            <p>{experience.impact}</p>
                        </div>
                        <div className="exp-info-section">
                            <img src={skills_symbol} alt=""/>
                            <h2>Acquired</h2>
                            <p>{experience.skills}</p>
                        </div>
                    </div>
                    <div className="exp-links">
                        {experience.links ? 
                            experience.links.map((link, index) => {
                                return (
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '18px', fontWeight: '500' }} className="exp-links-link">
                                        <img src={link_symbol} alt=""/>
                                        {link.name}
                                    </a>
                                )
                            })
                        : <></>}
                    </div>
                </div>
            ) : (
                <>Error: No such experience</>
            )}
        </div>
    )
}

export default ExpItem;