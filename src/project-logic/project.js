import uniqid from 'uniqid';
import { updateTasksInProjectInFirestore } from '../backend/firestore';

const projectFactory = (name, uid) => {
    let tasks = [];
    let id = (uid) ? uid : uniqid();
    
    const addTask = (task) => {
        tasks.push(task);
        updateTasksInProjectInFirestore(uid,tasks);
        return task;
    }
    const removeTaskByIndex = (index) => {
        const removedTask = tasks[index];
        tasks.splice(index, 1);
        updateTasksInProjectInFirestore(uid,tasks);
        return removedTask;
    }
    const removeTaskByID = (id) => {
        tasks = tasks.filter(task => task.getID() !== id);
        updateTasksInProjectInFirestore(uid,tasks);
    }
    const sortByPriority = ()=>{
        tasks.sort((taskA, taskB)=>taskA.priority-taskB.priority);
        updateTasksInProjectInFirestore(uid,tasks);
    }
    const clearTasks = () => {
        tasks = [];
        updateTasksInProjectInFirestore(uid,tasks);
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
    const toggleCompleteTaskByID = (id, complete) => {
        let task = findTaskByID(id);
        if (complete)
            task.complete();
        else
            task.uncomplete();
        updateTasksInProjectInFirestore(uid, tasks);
    }
    const getID = () => {
        return id;
    }
    const clearCompletedTasks = () => {
        tasks = tasks.filter(task => !task.isComplete());
        updateTasksInProjectInFirestore(uid,tasks);
    }
    const editTaskWithNewTaskInfo = (id, newTask) => {
        let editedTask = findTaskByID(id);
        editedTask.title = newTask.title;
        editedTask.description = newTask.description;
        editedTask.dueDate = newTask.dueDate;
        editedTask.priority = newTask.priority;
        updateTasksInProjectInFirestore(uid,tasks);
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
        toggleCompleteTaskByID,
        getID,
        clearCompletedTasks,
        editTaskWithNewTaskInfo
    }
}
export default projectFactory;