import "./ExtraCurrItem.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ExtEntries from "../ExtEntries.js";

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
            {extraCurr ? 
                (
                    <div>
                        {extraCurr.name}
                        {extraCurr.timefram}
                        {extraCurr.description}
                    </div>
                ) : (
                    <div>No such extracurricular found.</div>
                )
            }
        </div>
    )
}

export default ExtraCurrItem;