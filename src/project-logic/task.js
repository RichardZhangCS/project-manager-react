import uniqid from 'uniqid';

const taskFactory = (title, description, dueDate, priority, uid) => {
    /* Priority key:
        1 = High
        2 = Medium
        3 = Low
    */
    let completed = false;
    let id = (uid) ? uid : uniqid();

    const complete = ()=>{
        completed = true;
    }
    const uncomplete = ()=>{
        completed = false;
    }
    const isComplete = ()=>{
        return completed;
    }

    const getID = ()=>{
        return id;
    }

    return {title, 
        isComplete,
        description, 
        dueDate, 
        priority,
        complete,
        uncomplete,
        getID,
        id};
};

export default taskFactory;