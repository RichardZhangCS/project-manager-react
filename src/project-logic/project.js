import uniqid from 'uniqid';

const projectFactory = (name, uid) => {
    let tasks = [];
    let id = (uid) ? uid : uniqid();
    
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
        tasks = tasks.filter(task => task.getID() !== id);
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
    const setTasks = (newTasks) => {
        tasks = newTasks;
    }
    const findTaskByID = (id) => {
        return tasks.find(task => task.getID() === id);
    }
    const getID = () => {
        return id;
    }
    const clearCompletedTasks = () => {
        tasks = tasks.filter(task => !task.isComplete());
    }

    return {
        name,
        addTask,
        removeTaskByIndex,
        removeTaskByID,
        sortByPriority,
        findTaskByID,
        clearTasks,
        getTasks,
        setTasks,
        getID,
        clearCompletedTasks
    }
}
export default projectFactory;