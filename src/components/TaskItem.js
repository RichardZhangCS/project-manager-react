import React, { useEffect, useState } from 'react';
import '../master.css';

function TaskItem(props) {
    const { task } = props;

    return (
        <div className='task-item'>
            <input type='checkbox' className='checkbox' />
            <p className='task-item-label'>{task.title}</p>
            <div className='task-item-right-box'>
                <p className='task-date'>{task.dueDate}</p>
                <i className='fas fa-trash-alt'></i>
            </div>
        </div>
    );
}

export default TaskItem;