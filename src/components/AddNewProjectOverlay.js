import React, { useState } from "react";
import projectFactory from "../project-logic/project";

function AddNewProjectOverlay(props) {
    const {handleAddNewProject, handleExit} = props;
    const [isActive, setIsActive] = useState(false);

    const [value, setValue] = useState(null);

    const handleTextChange = (text) => {
        setValue(text);
        if (text !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    return (
        <div class="overlay">
            <div class='add-project-window'>
                <h2>Add Project Task</h2>
                <div className="add-project-field">
                    <input type="text" id="project-name"
                    onChange={(e) => handleTextChange(e.target.value)} />
                    <label htmlFor="project-name" className={ isActive ? "Active" : ""}>Project Name</label>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <button className='add-project-option-button'
                    onClick={()=>{
                        let project = projectFactory(value)
                        handleAddNewProject(project);
                        handleExit();
                    }}>Add</button>
                    <button className='add-project-option-button'
                    onClick={handleExit}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default AddNewProjectOverlay;