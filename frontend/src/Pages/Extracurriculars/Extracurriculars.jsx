import "./Extracurriculars.css";
import ExtEntries from "./ExtEntries.js";
import right_arrow from "../../Sections/Media/right-arrow.png";
import element from "../../Sections/Media/element.png";
import { Link } from "react-router-dom";

const Extracurriculars = () => {
    return (
        <div className="extracurr">
            <div className="extracurr-header">
            <img src={element} style={{position: 'absolute', marginTop: '-100px', bottom: 'auto', top: '0', left: '0', width: '225px', height: '225px'}} alt=""/>
                <h1>Extracurriculars</h1>
                <img src={element} style={{position: 'absolute', top: '0', marginTop: '158px', right: '0', width: '100px', height: '100px', transform: 'rotate(180deg)'}} alt=""/>
            </div>
            {ExtEntries.map((item) => ( 
                <div className="extracurr-entry">
                    <h4>{item.name}</h4>
                    <div className="extracurr-entry-checkmore">
                        <h5>{item.timeframe}</h5>
                        <Link to={`/extracurricular/${item.id}`} style={{ textDecoration: 'none', color: 'black' }} onClick={window.scrollTo(0,0)}><img src={right_arrow} alt="" /></Link>
                    </div>
                    <p>{item.description}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default Extracurriculars;