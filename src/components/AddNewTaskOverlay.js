import React, { useState } from "react";
import taskFactory from "../project-logic/task";

function AddNewTaskOverlay(props) {
    const [isActiveList, setIsActiveList] = useState([false, false, false, false]);

    const [values, setValues] = useState([null, null, null, null]);

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
                <h2>Add New Task</h2>
                <div className="add-task-field">
                    <input type="text" id="task-name"
                    onChange={(e) => handleTextChange(0, e.target.value)} />
                    <label htmlFor="task-name" className={ isActiveList[0] ? "Active" : ""}>Task Name</label>
                </div>
                <div className="add-task-field">
                    <input type="text" id="task-description"
                    onChange={(e) => handleTextChange(1, e.target.value)} />
                    <label htmlFor="task-description" className={ isActiveList[1] ? "Active" : ""}>Description</label>
                </div>
                <div style={{display: 'flex'}}>
                    <div className="add-task-field date-field">
                        <input type="date" id="task-due-date"
                        onChange={(e) => handleTextChange(2, e.target.value)} />
                        <label className='static' htmlFor="task-due-date">Due Date</label>
                    </div>
                    <div className="add-task-field half-field">
                        <input type="number" id="task-priority" 
                        onChange={(e) => handleTextChange(3, e.target.value)}/>
                        <label htmlFor='task-priority' className={ isActiveList[3] ? "Active" : ""}>Priority</label>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button className='add-task-option-button'
                    onClick={()=>{
                        let newTask = taskFactory(values[0], values[1], values[2], values[3])
                        props.handleAddTask(newTask);
                        props.handleExit();
                    }}>Add</button>
                    <button className='add-task-option-button'
                    onClick={props.handleExit}>Cancel</button>
                </div>
            </div>
            
        </div>
    );
}
export default AddNewTaskOverlay;