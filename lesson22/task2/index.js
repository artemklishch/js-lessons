//first option of code
// const tasks = [
//     { text: 'Buy milk', done: false },
//     { text: 'Pick up Tom from airport'},
//     { text: 'Visit party', done: false},
//     { text: 'Visit doctor', done: true},
//     { text: 'Buy meat', done: true},
// ];
// const renderListItems = listItems => {
//     const listElem = document.querySelector('.list');

//     const listItemsElems = listItems
//         .sort((a, b) => a.done - b.done)
//         .map(({ text, done }) => {
//             const listItemElem = document.createElement('li');
//             listItemElem.classList.add('list__item');
//             listItemElem.setAttribute('id', Math.random(0) + Math.random());
//             if (done) {
//                 listItemElem.classList.add('list__item_done');
//             }
//             const checkboxElem = document.createElement('input');
//             checkboxElem.setAttribute('type', 'checkbox');
//             checkboxElem.checked = done;
//             checkboxElem.onchange = func;
//             checkboxElem.classList.add('list__item-checkbox');
//             listItemElem.append(checkboxElem, text);
//             return listItemElem;
//         });
//     listElem.append(...listItemsElems);
// };
// renderListItems(tasks);


// const taskInput = document.querySelector('.task-input');
// const createTaskBtn = document.querySelector('.create-task-btn');
// const renderAdditionalListItems = additionalListItem => {
//     const allListItems = document.getElementsByTagName('li');
//     [...allListItems].forEach(elem => elem.remove());
//     const tempObj = {};
//     tempObj.text = additionalListItem;
//     tempObj.done = false;
//     tasks.push(tempObj);
//     taskInput.value = '';
//     renderListItems(tasks);
// };
// createTaskBtn.addEventListener('click', function () {
//     if (taskInput.value !== "") return renderAdditionalListItems(taskInput.value);
// });


// function func() {
//     const closest = this.closest('li');
//     closest.classList.toggle('list__item_done');
//     const allListItems = document.getElementsByTagName('li');
//     for(let i = 0; i < [...allListItems].length; i++){
//         if(allListItems[i].matches('.list__item_done')){
//                 tasks[i].done = true;
//             }else  tasks[i].done = false;   
//         }
//     [...allListItems].forEach(elem => elem.remove());
//     renderListItems(tasks);
// }




//second option of code
const tasks = [
    { text: 'Buy milk', done: false, id: Math.random().toFixed(10)},
    { text: 'Pick up Tom from airport', done: false, id: Math.random().toFixed(10)},
    { text: 'Visit party', done: false, id: Math.random().toFixed(10)},
    { text: 'Visit doctor', done: true, id: Math.random().toFixed(10)},
    { text: 'Buy meat', done: true, id: Math.random().toFixed(10)},
];
const listElem = document.querySelector('.list');
const renderListItems = listItems => {
    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id}) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            listItemElem.setAttribute('id', id);
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);
            return listItemElem;
        });
        listElem.append(...listItemsElems);
};
renderListItems(tasks);



const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');
const renderAdditionalListItems = additionalListItem => {
    listElem.innerHTML = '';
    const tempObj = {};
    tempObj.text = additionalListItem;
    tempObj.done = false;
    tempObj.id = Math.random().toFixed(10);
    tasks.push(tempObj);
    taskInput.value = '';
    renderListItems(tasks);
};
createTaskBtn.addEventListener('click', function () {
    if (taskInput.value !== "") return renderAdditionalListItems(taskInput.value);
});


const onChangeFunk = event => {
    const activeLi = event.target.closest('li');
    activeLi.classList.toggle('list__item_done');
    const activeLiId = activeLi.id;
    tasks.forEach(elem => {
        if(elem.id === activeLiId && elem.done === false){
            elem.done = true; 
        } else if(elem.id === activeLiId && elem.done === true){
            elem.done = false; 
        }
    })
    listElem.innerHTML = '';
    renderListItems(tasks);
};

listElem.addEventListener('change', onChangeFunk);
















