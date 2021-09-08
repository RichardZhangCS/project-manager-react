import uniqid from 'uniqid';

const taskFactory = (title, description, dueDate, priority) => {
    /* Priority key:
        1 = High
        2 = Medium
        3 = Low
    */
    let completed = false;
    let id = uniqid();

    const complete = ()=>{
        completed = true;
    }
    const uncomplete = ()=>{
        completed = false;
    }

    const getID = ()=>{
        return id;
    }

    return {title, 
        description, 
        dueDate, 
        priority,
        complete,
        uncomplete,
        getID,
        id};
};

export default taskFactory;