import { renderListItems } from './renderer.js';
import { setItem, getItem } from './storage.js';

const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');
export const addItem = newItem => {
    const arrayOfTasks = getItem('arrayOfTasks') || [];
    const tempObj = {};
    tempObj.text = newItem;
    tempObj.done = false;
    tempObj.id = Math.random().toFixed(10);
    tempObj.createDate = new Date();
    tempObj.completedDate = undefined;
    taskInput.value = '';
    arrayOfTasks.push(tempObj);
    setItem('arrayOfTasks', arrayOfTasks);
    renderListItems();
};
createTaskBtn.addEventListener('click', function () {
    if (taskInput.value !== "") return addItem(taskInput.value);
});