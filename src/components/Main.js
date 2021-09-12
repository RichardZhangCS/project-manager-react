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
    const changeSelectedProject = (newProject) => {
        setSelectedProject(newProject);
    }

    const editTaskInCurrentProject = (id, newTask) => {
        let newSelectedProject = Object.assign({}, selectedProject);
        let editedTask = newSelectedProject.findTaskByID(id);
        editedTask.title = newTask.title;
        editedTask.description = newTask.description;
        editedTask.dueDate = newTask.dueDate;
        editedTask.priority = newTask.priority;
        setSelectedProject(newSelectedProject);
    }


    return (
        <main>
            <NavigationMenu
            handleChangeProject={changeSelectedProject.bind(this)}></NavigationMenu>
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