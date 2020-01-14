import { renderListItems } from './renderer.js';
import { addItem } from './additem.js';
import { onChangeFunc } from './onchangefunc.js';






document.addEventListener('DOMContentLoaded', () => {
    renderListItems();
});

const onStorageChange = e => {
    if(e.key === 'arrayOfTasks') renderListItems();
};
window.addEventListener('storage', onStorageChange);










