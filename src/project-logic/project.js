import uniqid from 'uniqid';

const projectFactory = (name) => {
    let tasks = [];
    let id = uniqid();
    
    const addTask = (task) => {
        tasks.push(task);
        return task;
    }
    const removeTaskByIndex = (index) => {
        const removedTask = tasks[index];
        tasks.splice(index, 1);
        return removedTask;
    }
    const removeTaskByID = (id) => {
        return tasks.find(task => task.getID() === id);
    }
    const sortByPriority = ()=>{
        tasks.sort((taskA, taskB)=>taskA.priority-taskB.priority);
    }
    const clearTasks = () => {
        tasks = [];
    }
    const getTasks = () => {
        return tasks;
    }
    const getID = () => {
        return id;
    }

    return {
        name,
        addTask,
        removeTaskByIndex,
        removeTaskByID,
        sortByPriority,
        clearTasks,
        getTasks,
        getID
    }
}
export default projectFactory;