import "./Experiences.css";
import ExpEntries from "./ExpEntries.js";
import right_arrow from "../../Sections/Media/right-arrow.png";
import { Link } from "react-router-dom";

const Experiences = () => {
    return (
        <div className="experiences">
            <div className="experiences-header">
                <h1>Experiences</h1>
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