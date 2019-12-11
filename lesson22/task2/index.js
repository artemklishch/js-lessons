//start code
const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport'},
    { text: 'Visit party', done: false},
    { text: 'Visit doctor', done: true},
    { text: 'Buy meat', done: true},
];
const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            listItemElem.setAttribute('id', Math.random(0) + Math.random());
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.onchange = func;
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
    const allListItems = document.getElementsByTagName('li');
    [...allListItems].forEach(elem => elem.remove());
    const tempObj = {};
    tempObj.text = additionalListItem;
    tempObj.done = false;
    tasks.push(tempObj);
    taskInput.value = '';
    renderListItems(tasks);
};
createTaskBtn.addEventListener('click', function () {
    if (taskInput.value !== "") return renderAdditionalListItems(taskInput.value);
});


function func() {
    const closest = this.closest('li');
    //closest.classList.toggle('list__item_done');
    if(closest.done === false){
        closest.done = true;
    }else closest.done = false;   
    let tempProp = closest.id;
    const allListItems = document.getElementsByTagName('li');
    for(let i = 0; i < [...allListItems].length; i++){
        if(allListItems[i].id === tempProp){
            tasks[i].done = true;
            allListItems[i].classList.toggle('list__item_done');
        }
    }
    [...allListItems].forEach(elem => elem.remove());
    
    renderListItems(tasks);
}
















// //next code
// const taskInput = document.querySelector('.task-input');
// const createTaskBtn = document.querySelector('.create-task-btn');
// const renderAdditionalListItems = addotionalListItem => {
//     const listItemElem = document.querySelector('.list');
//     const newItem = document.createElement('li');
//     newItem.classList.add('list__item');
//     newItem.done = false;
//     const checkboxElem = document.createElement('input');
//     checkboxElem.setAttribute('type', 'checkbox');
//     checkboxElem.classList.add('list__item-checkbox');
//     checkboxElem.onchange = func;
//     newItem.append(checkboxElem, addotionalListItem);
//     listItemElem.append(newItem);
//     taskInput.value = '';
// };
// createTaskBtn.addEventListener('click', function () {
//     if (taskInput.value !== "") return renderAdditionalListItems(taskInput.value);
// });



// function func(){
//     const allListItems = document.querySelectorAll('.list__item');
//     const listItemElem = document.querySelector('.list');
//     const closest = this.closest('.list__item');
//     closest.classList.toggle('list__item_done');
//     if(closest.done === false){
//         closest.done = true;
//     }else closest.done = false;   
//     setTimeout(()=> {
//         let newList = [...allListItems].sort((a, b) => b.done > a.done ? 1 : -1);
//         newList.forEach(elem => listItemElem.append(elem));
//     },500);
// }












