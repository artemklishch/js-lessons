
const tasks = [
    { 
        text: 'Buy milk',
        done: false, 
        id: Math.random().toFixed(10),
        createdDate: new Date(2019, 0, 0), 
        completedDate: undefined, 
    },
    { 
        text: 'Pick up Tom from airport', 
        done: false, 
        id: Math.random().toFixed(10), 
        createdDate: new Date(2019,0,1), 
        completedDate: undefined, 
    },
    { 
        text: 'Visit party', 
        done: false, 
        id: Math.random().toFixed(10), 
        createdDate: new Date(2019,0,2), 
        completedDate: undefined, 
    },
    { 
        text: 'Visit doctor', 
        done: true, 
        id: Math.random().toFixed(10), 
        createdDate: new Date(2019,0,0), 
        completedDate: new Date(2011, 4, 5), 
    },
    { 
        text: 'Buy meat', 
        done: true, 
        id: Math.random().toFixed(10), 
        createdDate: new Date(2019,0,0), 
        completedDate: new Date(2011, 4, 2),
    },
];
const listElem = document.querySelector('.list');
const renderListItems = listItems => {
    const listItemsElems = listItems
        //.sort((a, b) => b.createdDate > a.createdDate ? 1 : -1)   
        .sort((a, b) => a.done - b.done)
        //.sort((a, b) => a.completedDate < b.completedDate ? 1 : -1)    
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
    //listElem.append(...listItemsElems);
    listElem.append(...tempNoDoneList);
    listElem.append(...tempDoneList);
};
renderListItems(tasks);




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
















