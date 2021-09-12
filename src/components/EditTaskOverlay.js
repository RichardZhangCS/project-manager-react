import React, { useState } from "react";
import taskFactory from "../project-logic/task";
import PropTypes from 'prop-types';

function EditTaskOverlay(props) {
    const { task, handleEditTask, handleExit } = props;

    const [isActiveList, setIsActiveList] = useState([task.title, task.description, 
        task.dueDate, task.priority]);

    const [values, setValues] = useState([task.title, task.description, 
        task.dueDate, task.priority]);

    function handleTextChange(index, text) {
        let newValues = [...values];
        newValues[index] = text;
        setValues(newValues);

        let newIsActiveList = [...isActiveList];
        if (text !== '') {
            newIsActiveList[index] = true;
        } else {
            newIsActiveList[index] = false;
        }
        setIsActiveList(newIsActiveList);
    }
    
    return (
        <div className="overlay">
            <div className="add-task-window">
                <h2>Edit Task</h2>
                <div className="add-task-field">
                    <input type="text" id="task-name" value={values[0]}
                    onChange={(e) => handleTextChange(0, e.target.value)} />
                    <label htmlFor="task-name" className={ isActiveList[0] ? "Active" : ""}>Task Name</label>
                </div>
                <div className="add-task-field">
                    <input type="text" id="task-description" value={values[1]}
                    onChange={(e) => handleTextChange(1, e.target.value)} />
                    <label htmlFor="task-description" className={ isActiveList[1] ? "Active" : ""}>Description</label>
                </div>
                <div style={{display: 'flex'}}>
                    <div className="add-task-field date-field">
                        <input type="date" id="task-due-date" value={values[2]}
                        onChange={(e) => handleTextChange(2, e.target.value)} />
                        <label className='static' htmlFor="task-due-date">Due Date</label>
                    </div>
                    <div className="add-task-field half-field">
                        <input type="number" id="task-priority" value={values[3]}
                        onChange={(e) => handleTextChange(3, e.target.value)}/>
                        <label htmlFor='task-priority' className={ isActiveList[3] ? "Active" : ""}>Priority</label>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <button className='add-task-option-button'
                    onClick={()=>{
                        let newTask = taskFactory(values[0], values[1], values[2], values[3])
                        handleEditTask(task.id, newTask);
                        handleExit();
                    }}>Submit Changes</button>
                    <button className='add-task-option-button'
                    onClick={props.handleExit}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

EditTaskOverlay.propTypes = {
    task: PropTypes.object.isRequired,
    handleEditTask: PropTypes.func,
    handleExit: PropTypes.func
}
export default EditTaskOverlay;