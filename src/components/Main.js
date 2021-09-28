import React, { useState, useEffect, useReducer } from 'react';
import NavigationMenu from './NavigationMenu';
import './main.css'
import ProjectOverview from './ProjectOverview';
import projectManager from '../project-logic/projectmanager';

function Main() {
    let pM = projectManager;
    const [selectedProject, setSelectedProject] = 
            useState(projectManager.getProjects()[0]);
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);
    
    const addTaskToCurrentProject = (task) => {
        let newSelectedProject = Object.assign({}, selectedProject);
        newSelectedProject.addTask(task);
        setSelectedProject(newSelectedProject);
    }

    const deleteTaskFromCurrentProject = (id) => {
        let newSelectedProject = Object.assign({}, selectedProject);
        newSelectedProject.removeTaskByID(id);
        setSelectedProject(newSelectedProject);
    }

    const toggleCompleteTaskFromCurrentProject = (id, complete) => {
        let newSelectedProject = Object.assign({}, selectedProject);
        newSelectedProject.toggleCompleteTaskByID(id, complete);
        setSelectedProject(newSelectedProject);
    }

    const clearCompletedFromCurrentProject = () => {
        let newSelectedProject = Object.assign({}, selectedProject);
        newSelectedProject.clearCompletedTasks();
        setSelectedProject(newSelectedProject);
    }
    useEffect(()=>{
        let id = selectedProject.getID();
        let project = projectManager.findProjectByID(id);
        if (project)
            project.setTasks(selectedProject.getTasks());
    });
    const changeSelectedProject = (newProject) => {
        setSelectedProject(newProject);
    }
    const changeSelectedProjectAfterDelete = (index, id) => {
        if (id !== selectedProject.getID()) return;
        const numOfRemainingProjects = projectManager.getProjects().length;
        console.log(projectManager.getProjects());
        if (index == numOfRemainingProjects) {
            // Last index was removed
            setSelectedProject(projectManager.getProjects()[index-1]);
            forceUpdate();
        } else {
            setSelectedProject(projectManager.getProjects()[index]);
            forceUpdate();
        }
    }

    const editTaskInCurrentProject = (id, newTask) => {
        let newSelectedProject = Object.assign({}, selectedProject);
        newSelectedProject.editTaskWithNewTaskInfo(id, newTask);
        setSelectedProject(newSelectedProject);
    }


    return (
        <main>
            <NavigationMenu
            handleChangeProject={changeSelectedProject.bind(this)}
            handleChangeProjectAfterDelete={changeSelectedProjectAfterDelete.bind(this)}
            ></NavigationMenu>
            <ProjectOverview project={selectedProject} 
            handleAddTask={addTaskToCurrentProject.bind(this)}
            handleDeleteTask={deleteTaskFromCurrentProject.bind(this)}
            handleCompleteTask={toggleCompleteTaskFromCurrentProject.bind(this)}
            handleEditTask={editTaskInCurrentProject.bind(this)}
            handleClearCompleted={clearCompletedFromCurrentProject.bind(this)
            }></ProjectOverview>
        </main>
    );
}

export default Main;