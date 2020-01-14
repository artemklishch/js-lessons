import { renderListItems } from './renderer.js';
import { setItem, getItem } from './storage.js';

const listElem = document.querySelector('.list');
export const onChangeFunc = event => {
    const isCheckbox = event.target.classList.contains('list__item-checkbox');
    if (!isCheckbox) {
        return;
    }
    const arrayOfTasks = getItem('arrayOfTasks') || [];
    const taskData = arrayOfTasks.find(task => task.id === event.target.id);

    Object.assign(taskData, { done: event.target.checked });
    if(taskData.done === true){
        taskData.completedDate = new Date();
    }
    if(taskData.done === false){
        taskData.createdDate = new Date();
        taskData.completedDate = null;
    }
    setItem('arrayOfTasks', arrayOfTasks);
    renderListItems();
};
listElem.addEventListener('change', onChangeFunc);