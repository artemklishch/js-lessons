
const tasks = [
    { text: 'Buy milk', done: false, id: Math.random().toFixed(10), createDate:new Date()},
    { text: 'Pick up Tom from airport', done: false, id: Math.random().toFixed(10), createDate:new Date()},
    { text: 'Visit party', done: false, id: Math.random().toFixed(10), createDate:new Date()},
    { text: 'Visit doctor', done: true, id: Math.random().toFixed(10), createDate:new Date()},
    { text: 'Buy meat', done: true, id: Math.random().toFixed(10), createDate:new Date()},
];
const listElem = document.querySelector('.list');
const renderListItems = listItems => {
    const listItemsElems = listItems
    .reverse()
        //.sort((a,b) => a.createDate < b.createDate ? 1 : -1)
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id}) => {
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
    listElem.append(...listItemsElems);
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
    toSortElems();
};
const toSortElems = () => {
    listElem.innerHTML = '';
    renderListItems(tasks);
};

listElem.addEventListener('change', onChangeFunc);
















