import projectFactory from "./project";
import taskFactory from "./task";

const projectManager = (()=>{
    let test = projectFactory("test1");
    test.addTask(taskFactory("MyProject", "wow", "9-30", 1));
    let projects = [test];

    const addProject = (project) => {
        projects.push(project);
        return project;
    }

    const deleteProjectByIndex = (index) => {
        const removedProject = projects[index];
        projects.splice(index, 1);
        return removedProject;
    }
    const deleteProjectbyID = (id) => {
        return projects.filter(project => id !== project.id);
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
        deleteProjectByIndex,
        deleteProjectbyID,
        findProjectByID,
        getProjects,
        findProjectByName,
        setProjects
    }
})();
export default projectManager;