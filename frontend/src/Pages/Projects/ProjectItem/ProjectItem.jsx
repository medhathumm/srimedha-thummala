import "./ProjectItem.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProjectEntries from "../ProjectEntries.js";

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
                    <div>
                        {project.name}
                        {project.timefram}
                        {project.description}
                    </div>
                ) : (
                    <div>No such project found.</div>
                )
            }
        </div>
    )
}

export default ProjectItem;