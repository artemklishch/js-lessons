import { tasks } from './storage.js';
import { renderListItems } from './tasksList.js';


document.addEventListener('DOMContentLoaded', () => {
    renderListItems(tasks);
});





const listElem = document.querySelector('.list');

const onChangeFunc = event => {
    const isCheckbox = event.target.classList.contains('list__item-checkbox');
    if (!isCheckbox) {
        return;
    }
const taskData = tasks.find(task => task.id === event.target.id);
    Object.assign(taskData, { done: event.target.checked });
    if(taskData.done === true){
        taskData.completedDate = new Date();
    }
    if(taskData.done === false){
        taskData.createdDate = new Date();
        taskData.completedDate = undefined;
    }
    toSortElems();
};
const toSortElems = () => {
    listElem.innerHTML = '';
    renderListItems(tasks);
};

listElem.addEventListener('change', onChangeFunc);



const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');
const addItem = newItem => {
    listElem.innerHTML = '';
    const tempObj = {};
    tempObj.text = newItem;
    tempObj.done = false;
    tempObj.id = Math.random().toFixed(10);
    tempObj.createDate = new Date();
    tempObj.completedDate = undefined;
    tasks.push(tempObj);
    taskInput.value = '';
    renderListItems(tasks);
};
createTaskBtn.addEventListener('click', function () {
    if (taskInput.value !== "") return addItem(taskInput.value);
});



















