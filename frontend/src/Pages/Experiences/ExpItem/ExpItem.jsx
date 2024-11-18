import "./ExpItem.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ExpEntries from "../ExpEntries.js";

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
                <div>
                    {experience.id}
                    {experience.name}
                    {experience.description}
                </div>
            ) : (
                <>No such experience</>
            )}
        </div>
    )
}

export default ExpItem;