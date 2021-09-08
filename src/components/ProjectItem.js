import React from "react";

function ProjectItem(props) {
    const {name} = props;

    return (
        <button className="project-button">{name}</button>
    );
}

export default ProjectItem;