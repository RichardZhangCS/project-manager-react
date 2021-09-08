import React, { useEffect, useState } from 'react';
import '../master.css';

function TaskItem(props) {
    const { task, handleDeleteTask } = props;

    return (
        <div className='task-item'>
            <input type='checkbox' className='checkbox' />
            <p className='task-item-label'>{task.title}</p>
            <div className='task-item-right-box'>
                <p className='task-date'>{task.dueDate}</p>
                <i className='fas fa-trash-alt'
                    onClick={handleDeleteTask.bind(this, task.getID())}></i>
            </div>
        </div>
    );
}

export default TaskItem;