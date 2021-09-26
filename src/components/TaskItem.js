import React, { useEffect, useState } from 'react';
import { CSSTransition } from "react-transition-group";
import '../master.css';
import EditTaskOverlay from './EditTaskOverlay';

function TaskItem(props) {
    const { task, handleDeleteTask, handleCompleteTask, handleEditTask } = props;

    const [ showEditTaskWindow, setShowEditTaskWindow ] = useState(false);

    const stopBubbling = (e) => {
        setShowEditTaskWindow(false);
    }

    const checkBoxToTaskCompletion = (e) => {
        let checked = e.target.checked;
        handleCompleteTask(task.getID(), checked);
    }

    const toggleShowEditTaskWindow = (e) => {
        if (e && e.target.type === 'checkbox') return;
        setShowEditTaskWindow(!showEditTaskWindow);
    }

    return (
        <div>
            <div className='task-item' onClick={toggleShowEditTaskWindow}>
                <input onClick={stopBubbling} type='checkbox' checked={task.isComplete()} className='checkbox' onChange={checkBoxToTaskCompletion}/>
                <p className='task-item-label'>{task.title}</p>
                <div className='task-item-right-box'>
                    <p className='task-date'>{task.dueDate}</p>
                    <i className='fas fa-trash-alt'
                        onClick={handleDeleteTask.bind(this, task.getID())}></i>
                </div>
            </div>
            <CSSTransition in={showEditTaskWindow} timeout={300} classNames="fadeIn" unmountOnExit>
                <EditTaskOverlay task={task}
                    handleEditTask={handleEditTask.bind(this)}
                    handleExit={toggleShowEditTaskWindow.bind(this)}></EditTaskOverlay>
            </CSSTransition>
        </div>
    );
}

export default TaskItem;