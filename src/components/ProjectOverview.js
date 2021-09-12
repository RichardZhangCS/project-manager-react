import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import AddNewTaskOverlay from "./AddNewTaskOverlay";
import TaskItem from "./TaskItem";

function ProjectOverview(props) {
    const { project, handleAddTask, handleDeleteTask, 
        handleCompleteTask, handleClearCompleted, handleEditTask } = props;
    const [ addNewVisible, setAddNewVisible ] = useState(false);

    const toggleAddNewVisible = () => {
        setAddNewVisible(!addNewVisible);
    }

    return (
        <div className="task-preview">
            <h2 className="project-title">
                {project.name}
            </h2>
            <div className="task-list">
                {
                    project.getTasks().map(task=>
                        <TaskItem task={task} 
                        handleDeleteTask={handleDeleteTask.bind(this)}
                        handleCompleteTask={handleCompleteTask.bind(this)}
                        handleEditTask={handleEditTask.bind(this)}></TaskItem>
                    )
                }
            </div>
            <div className="preview-button-options">
                <button onClick={toggleAddNewVisible} 
                className="task-button add-task-button">Add New Task</button>
                <button onClick={handleClearCompleted} className="task-button clear-selected">Clear Selected</button>
            </div>
            <CSSTransition in={addNewVisible} timeout={300} classNames="fadeIn" unmountOnExit>
                <AddNewTaskOverlay handleAddTask={handleAddTask.bind(this)} 
                handleExit={toggleAddNewVisible.bind(this)}></AddNewTaskOverlay>
            </CSSTransition>
        </div>
    );
}
export default ProjectOverview;