import React from "react";
import projectManager from "../project-logic/projectmanager";

function ProjectItem(props) {
    const {project, handleChangeProject, handleDeleteProject, isInbox} = props;

    return (
        <div className="project-option-container" onClick={handleChangeProject.bind(this, project)}>
            <p className="project-button">{project.name}</p>
            {isInbox || <i onClick={handleDeleteProject.bind(this, project.getID())} className='fas fa-trash-alt'></i>}
        </div>
    );
}

export default ProjectItem;