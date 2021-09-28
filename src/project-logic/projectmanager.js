import { addNewProjectToFirestore, deleteProjectFromFirestore, getInboxProject } from "../backend/firestore";
import projectFactory from "./project";
import taskFactory from "./task";

const projectManager = (()=>{
    let projects = [];
    //projects.push(getInboxProject(inbox));

    const addProject = (project) => {
        projects.push(project);
        addNewProjectToFirestore(project);
        return project;
    }

    const addProjectAtIndex = (index, project) => {
        projects.splice(index, 0, project);
    }

    const deleteProjectByIndex = (index) => {
        const removedProject = projects[index];
        projects.splice(index, 1);
        return removedProject;
    }
    const deleteProjectbyID = (id) => {
        let deletedProject = projects.find(project => id === project.getID())
        let removedIndex = projects.indexOf(deletedProject);
        projects = projects.filter(project => id !== project.getID());
        deleteProjectFromFirestore(deletedProject);
        return removedIndex;
    }
    const getProjects = () => {
        return projects;
    }
    const setProjects = (newProjects) => {
        projects = newProjects;
    }

    const findProjectByID = (id) => {
        return projects.find(task => id === task.id);
    }
    const findProjectByName = (name) => {
        return projects.find(project => name === project.name);
    }

    return {
        addProject,
        addProjectAtIndex,
        deleteProjectByIndex,
        deleteProjectbyID,
        findProjectByID,
        getProjects,
        findProjectByName,
        setProjects
    }
})();
export default projectManager;