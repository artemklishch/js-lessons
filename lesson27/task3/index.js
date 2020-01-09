const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
const getItem = key => JSON.parse(localStorage.getItem(key));




const listElem = document.querySelector('.list');
const renderListItems = () => {
    listElem.innerHTML = '';
    const arrayOfTasks = getItem('arrayOfTasks') || [];
    const listItemsElems = arrayOfTasks
        .sort((a, b) => a.done - b.done)   
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.setAttribute('id', id);
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);
            return listItemElem;
        });
    const tempNoDoneList = listItemsElems
        .filter(elem => !elem.classList.contains('list__item_done'))
        .sort((a, b) => b.createdDate > a.createdDate ? 1 : -1);
    const tempDoneList = listItemsElems
        .filter(elem => elem.classList.contains('list__item_done'));
    listElem.append(...tempNoDoneList);
    listElem.append(...tempDoneList);
};




const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');
const addItem = newItem => {
    const arrayOfTasks = getItem('arrayOfTasks') || [];
    const tempObj = {};
    tempObj.text = newItem;
    tempObj.done = false;
    tempObj.id = Math.random().toFixed(10);
    tempObj.createDate = new Date();
    tempObj.completedDate = undefined;
    taskInput.value = '';
    setItem('object', tempObj);
    arrayOfTasks.push(getItem('object'));
    setItem('arrayOfTasks', arrayOfTasks);
    renderListItems();
};
createTaskBtn.addEventListener('click', function () {
    if (taskInput.value !== "") return addItem(taskInput.value);
});



const onChangeFunc = event => {
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




document.addEventListener('DOMContentLoaded', () => {
    renderListItems();
});

const onStorageChange = e => {
    if(e.key === 'arrayOfTasks') renderListItems();
};
window.addEventListener('storage', onStorageChange);










