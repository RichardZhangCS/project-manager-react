import React, { useEffect, useState } from 'react';
import '../master.css';
import ProjectItem from './ProjectItem';
import projectManager from '../project-logic/projectmanager';
import projectFactory from '../project-logic/project';

function NavigationMenu() {
    const [ projects, setProjects ] = useState(projectManager.getProjects());
    
    const addNewProject = () => {
        setProjects(projects.concat(projectFactory('Test2')));
    }

    return (
        <nav>
            <div className="main-buttons-container">
                <button className="main-button">Indox</button>
                <button className="main-button">Today</button>
            </div>
            <h2>Projects</h2>
            <div className="project-menu">
                {
                    projects.map(project=>
                        <ProjectItem name={project.name}></ProjectItem>
                    )
                }
                <button onClick={addNewProject} className="add-project-button">Add New Project</button>
            </div>
        </nav>
    );
}

export default NavigationMenu;