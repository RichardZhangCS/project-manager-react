import React, { useEffect, useState } from 'react';
import '../master.css';
import ProjectItem from './ProjectItem';
import projectManager from '../project-logic/projectmanager';
import projectFactory from '../project-logic/project';
import { CSSTransition } from "react-transition-group";
import AddNewProjectOverlay from './AddNewProjectOverlay';

function NavigationMenu(props) {
    const { handleChangeProject } = props;
    const [ projects, setProjects ] = useState(projectManager.getProjects());
    const [ addProjectWindowVisible, setAddProjectWindowVisible ] = useState(false);

    const makeAddProjectWindowVisible = () => {
        setAddProjectWindowVisible(true);
    }

    const addNewProject = (project) => {
        let newProjects = projects.map(project => Object.assign({}, project));
        newProjects.push(project);
        setProjects(newProjects);
    }

    const toggleAddProjectWindowVisible = () => {
        setAddProjectWindowVisible(!addProjectWindowVisible);
    }
    useEffect(()=>{
        projectManager.setProjects(projects);
    });

    return (
        <nav>
            <div className="main-buttons-container">
                <ProjectItem handleChangeProject={handleChangeProject} 
                project={projectManager.getProjects()[0]}></ProjectItem>
                <button className="main-button">Today</button>
            </div>
            <h2>Projects</h2>
            <div className="project-menu">
                {
                    projects.map(project=>
                        project.getID() !== '~' &&
                        <ProjectItem 
                        handleChangeProject={handleChangeProject}
                        project={project}></ProjectItem>
                    )
                }
                <button onClick={makeAddProjectWindowVisible} className="add-project-button">Add New Project</button>
                <CSSTransition in={addProjectWindowVisible} timeout={300} classNames="fadeIn" unmountOnExit>
                    <AddNewProjectOverlay
                    handleAddNewProject = {addNewProject.bind(this)}
                    handleExit = {toggleAddProjectWindowVisible.bind(this)}>
                    </AddNewProjectOverlay>
                </CSSTransition>
            </div>
        </nav>
    );
}

export default NavigationMenu;