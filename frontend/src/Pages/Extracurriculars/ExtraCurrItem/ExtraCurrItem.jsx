import "./ExtraCurrItem.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ExtEntries from "../ExtEntries.js";
import impact_symbol from "../../../Sections/Media/impact.png";
import role_symbol from "../../../Sections/Media/role.png";
import skills_symbol from "../../../Sections/Media/skills.png";
import link_symbol from "../../../Sections/Media/link.png";
import context_symbol from "../../../Sections/Media/context2.png";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const ExtraCurrItem = () => {

    const {extracurricularId} = useParams();

    console.log(useParams());

    const [extraCurr, setExtraCurr] = useState(null);

    const fetchExtraCurrData = async () => {
        setExtraCurr(ExtEntries.find((e) => e.id === Number(extracurricularId)));
    }
    
    useEffect (() => {
        fetchExtraCurrData();
    }, [extracurricularId, ExtEntries]);

    return (
        <div>
            {extraCurr ? (
                    <div className="extraCurr-item">
                        <div className="exp-main">
                            <div className="exp-main-left">
                                <h2>{extraCurr.name}</h2>
                                <h3>{extraCurr.more}</h3>
                                <p>{extraCurr.timeframe}</p>
                                <p>{extraCurr.city}</p>
                            </div>
                            <div className="exp-main-right">
                                <ResponsiveMasonry columnsCountBreakPoints={{250: 1, 500: 2}}>
                                    <Masonry>
                                        {extraCurr.images.map((image, index) => (
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
                                <p>{extraCurr.context}</p>
                            </div>
                            <div className="exp-info-section">
                                <img src={role_symbol} alt=""/>
                                <h2>Role</h2>
                                <p>{extraCurr.responsibilities}</p>
                            </div>
                            <div className="exp-info-section">
                                <img src={impact_symbol} alt=""/>
                                <h2>Impact</h2>
                                <p>{extraCurr.impact}</p>
                            </div>
                            <div className="exp-info-section">
                                <img src={skills_symbol} alt=""/>
                                <h2>Acquired</h2>
                                <p>{extraCurr.skills}</p>
                            </div>
                        </div>
                        <div className="exp-links">
                            {extraCurr.links ? 
                                extraCurr.links.map((link, index) => {
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
                    <div>No such extracurricular found.</div>
                )
            }
        </div>
    )
}

export default ExtraCurrItem;