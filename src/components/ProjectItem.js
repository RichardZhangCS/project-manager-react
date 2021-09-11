import React from "react";

function ProjectItem(props) {
    const {project, handleChangeProject} = props;

    return (
        <button className="project-button"
        onClick={handleChangeProject.bind(this, project)}>{project.name}</button>
    );
}

export default ProjectItem;