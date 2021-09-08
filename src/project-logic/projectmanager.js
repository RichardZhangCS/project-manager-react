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
    const deleteProjectbyProject = (project) => {
        let index = projects.indexOf(project);
        if (index === -1) return null; // Task not found in array
        projects.splice(index, 1);

        return project;
    }
    const getProjects = () => {
        return projects;
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
        deleteProjectbyProject,
        findProjectByID,
        getProjects,
        findProjectByName
    }
})();
export default projectManager;