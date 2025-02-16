import "./Experiences.css";
import ExpEntries from "./ExpEntries.js";
import right_arrow from "../../Sections/Media/right-arrow.png";
import element from "../../Sections/Media/element.png";
import { Link } from "react-router-dom";

const Experiences = () => {
    return (
        <div className="experiences">
            <div className="experiences-header">
                <img src={element} style={{position: 'absolute', marginTop: '-100px', bottom: 'auto', top: '0', left: '0', width: '225px', height: '225px'}} alt=""/>
                <h1>Experiences</h1>
                <img src={element} style={{position: 'absolute', top: '0', marginTop: '158px', right: '0', width: '100px', height: '100px', transform: 'rotate(180deg)'}} alt=""/>
            </div>
            {ExpEntries.map((item, index) => ( 
                <div className="experience-entry" key={index}>
                    <h4>{item.name}</h4>
                    <div className="experience-entry-checkmore">
                        <h5>{item.timeframe}</h5>
                        <Link to={`/experience/${item.id}`} style={{ textDecoration: 'none', color: 'black' }} onClick={window.scrollTo(0,0)}><img src={right_arrow} alt="" /></Link>
                    </div>
                    <p>{item.description}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default Experiences;