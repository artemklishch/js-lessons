const listElem = document.querySelector('.list');
export const renderListItems = listItems => {
    const listItemsElems = listItems
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
        .filter(elem => elem.classList.contains('list__item_done'))
        .sort((a, b) => a.completedDate - b.completedDate);
    //listElem.append(...listItemsElems);
    listElem.append(...tempNoDoneList);
    listElem.append(...tempDoneList);
};