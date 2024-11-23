import "./Extracurriculars.css";
import ExtEntries from "./ExtEntries.js";
import { Link } from "react-router-dom";

const Extracurriculars = () => {
    return (
        <div className="extracurr">
            <div className="extracurr-header">
                <h1>Extracurriculars</h1>
            </div>
            {ExtEntries.map((item) => ( 
                <div className="extracurr-entry">
                    <h4>{item.name}</h4>
                    <div className="extracurr-entry-checkmore">
                        <h5>{item.timeframe}</h5>
                        <Link to={`/extracurricular/${item.id}`} style={{ textDecoration: 'none' }} onClick={window.scrollTo(0,0)}><h2>&gt;</h2></Link>
                    </div>
                    <p>{item.description}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default Extracurriculars;