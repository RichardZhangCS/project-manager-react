import React, { useEffect, useState } from 'react';
import '../master.css';
import ProjectItem from './ProjectItem';
import projectManager from '../project-logic/projectmanager';
import projectFactory from '../project-logic/project';
import { CSSTransition } from "react-transition-group";
import AddNewProjectOverlay from './AddNewProjectOverlay';

function NavigationMenu(props) {
    
    const { handleChangeProject, handleChangeProjectAfterDelete } = props;
    const [ projects, setProjects ] = useState(projectManager.getProjects());
    const [ addProjectWindowVisible, setAddProjectWindowVisible ] = useState(false);

    const makeAddProjectWindowVisible = () => {
        setAddProjectWindowVisible(true);
    }

    const addNewProject = (project) => {
        let newProjects = projects.map(project => Object.assign({}, project));
        newProjects.push(project);
        projectManager.addProject(project);
        setProjects(newProjects);
    }

    const toggleAddProjectWindowVisible = () => {
        setAddProjectWindowVisible(!addProjectWindowVisible);
    }

    const deleteProject = (id) => {
        let removedIndex = projectManager.deleteProjectbyID(id);
        setProjects(projectManager.getProjects());
        handleChangeProjectAfterDelete(removedIndex, id);
    }
    useEffect(()=>{
        projectManager.setProjects(projects);
    });


    return (
        <nav>
            <div className="main-buttons-container">
                {
                projectManager.getProjects()[0] && <ProjectItem handleChangeProject={handleChangeProject.bind(this)} 
                project={projectManager.getProjects()[0]} handleDeleteProject={deleteProject.bind(this)} isInbox={true}></ProjectItem>
                }
                
            </div>
            <h2>Projects</h2>
            <div className="project-menu">
                {
                    projects.map(project=>
                        project.getID() !== '~' &&
                        <ProjectItem 
                        handleChangeProject={handleChangeProject}
                        project={project}
                        handleDeleteProject={deleteProject.bind(this)}></ProjectItem>
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