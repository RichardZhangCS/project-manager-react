import { getByDisplayValue, getDefaultNormalizer } from '@testing-library/react';
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    getDocs,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
  } from 'firebase/firestore';
import projectFactory from '../project-logic/project';
import projectManager from '../project-logic/projectmanager';
import taskFactory from '../project-logic/task';

async function addNewProjectToFirestore(project) {
    let db = getFirestore();
    try {
        await setDoc(doc(db, "projects", project.getID()), {
            projectName: project.name,
            tasks: project.getTasks(),
            timestamp: serverTimestamp()
        }, { merge: true });
    }
    catch(error) {
        console.error('Unable to add new project to Firestore', error)
    }
}

async function updateTasksInProjectInFirestore(projectID, tasks) {
    let db = getFirestore();
    let projectDocRef = doc(db, 'projects', projectID);
    await updateDoc(projectDocRef, {
        tasks: tasks.map(taskToDocObject)
    });
    
    //await projectDoc
}

function taskToDocObject(task) {
    return {
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        priority: task.priority,
        id: task.getID(),
        complete: task.isComplete()
    }
}

function docObjectToTask(docObject) {
    let title = docObject.title;
    let description = docObject.description;
    let dueDate = docObject.dueDate;
    let priority = docObject.priority;
    let id = docObject.id;
    let complete = docObject.complete;
    
    let newTask = taskFactory(title, description, dueDate, priority, id);
    complete && newTask.complete();

    return newTask;
}

function docToProject(doc) {
    let data = doc.data();
    let projectID = doc.id;
    let projectName = data.projectName;
    let tasks = data.tasks;
    tasks = tasks.map((task) => {
        return docObjectToTask(task);
    });
    let generatedProject = projectFactory(projectName, projectID);
    generatedProject.setTasks(tasks);
    return generatedProject;
}

async function matchProjectManagerToFirestore() {
    let db = getFirestore();

    const querySnapshot = await getDocs(collection(db, "projects"));
    querySnapshot.forEach((doc) => {
        let generatedProject = docToProject(doc);
        if (generatedProject.getID() === '~') {
            projectManager.addProjectAtIndex(0, generatedProject);
        } else {
            projectManager.addProject(generatedProject);
        }
    });
}

export {addNewProjectToFirestore, updateTasksInProjectInFirestore, matchProjectManagerToFirestore};