import React, { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import './main.css'
import ProjectOverview from './ProjectOverview';
import projectManager from '../project-logic/projectmanager';

function Main() {
    const [selectedProject, setSelectedProject] = 
            useState(projectManager.getProjects()[0]);
    console.log(selectedProject);
    return (
        <main>
            <NavigationMenu></NavigationMenu>
            <ProjectOverview project={selectedProject}></ProjectOverview>
        </main>
    );
}

export default Main;