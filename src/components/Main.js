import React, { useState, useEffect } from 'react';
import NavigationMenu from './NavigationMenu';
import './main.css'
import ProjectOverview from './ProjectOverview';
import projectManager from '../project-logic/projectmanager';

function Main() {
    const [selectedProject, setSelectedProject] = 
            useState(projectManager.getProjects()[0]);
    
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
        let task = newSelectedProject.findTaskByID(id);
        if (complete)
            task.complete();
        else
            task.uncomplete();
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

    return (
        <main>
            <NavigationMenu></NavigationMenu>
            <ProjectOverview project={selectedProject} 
            handleAddTask={addTaskToCurrentProject.bind(this)}
            handleDeleteTask={deleteTaskFromCurrentProject.bind(this)}
            handleCompleteTask={toggleCompleteTaskFromCurrentProject.bind(this)}
            handleClearCompleted={clearCompletedFromCurrentProject.bind(this)}></ProjectOverview>
        </main>
    );
}

export default Main;