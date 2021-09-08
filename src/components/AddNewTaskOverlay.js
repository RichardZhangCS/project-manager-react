import React, { useState } from "react";

function AddNewTaskOverlay() {
    
    return (
        <div className="overlay">
            <div className="add-task-window">
                <h2>Add New Task</h2>
                <div class="add-task-field">
                    <input type="text" pid="task-name" />
                    <label htmlFor="task-name">Task Name</label>
                </div>
                
                <input type="text" placeholder="Task Name"></input>

            </div>
        </div>
    );
}
export default AddNewTaskOverlay;