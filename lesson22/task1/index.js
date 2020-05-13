const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');  
    eventsListElem.innerHTML += `<span style="color:${color}; margin-left:8px">${text}</span>`;
};
// const logGreenDiv = () => logTarget('DIV', 'green');
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSPAN = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySPAN = logTarget.bind(null, 'SPAN', 'grey');

logGreyDiv();
logGreyP();
logGreySPAN();
logGreenDiv();
logGreenP();
logGreenSPAN();

const clearBtnFunc = () => {
    const eventsListElem = document.querySelector('.events-list'); 
    eventsListElem.innerHTML = '';
};
clearBtn.addEventListener('click', clearBtnFunc);

const removeHandlersBtnFunc = () => {
    divElem.removeEventListener('click', logGreyDiv, {capture:true});
    pElem.removeEventListener('click', logGreyP, true);
    spanElem.removeEventListener('click', logGreySPAN, true);

    divElem.removeEventListener('click', logGreenDiv);
    pElem.removeEventListener('click', logGreenP);
    spanElem.removeEventListener('click', logGreenSPAN);
};
const attachHandlersBtnFunk = () => {
    divElem.addEventListener('click', logGreyDiv, {capture:true});
    pElem.addEventListener('click', logGreyP, true);
    spanElem.addEventListener('click', logGreySPAN, true);

    divElem.addEventListener('click', logGreenDiv);
    pElem.addEventListener('click', logGreenP);
    spanElem.addEventListener('click', logGreenSPAN);
};
attachHandlersBtn.addEventListener('click', attachHandlersBtnFunk);
removeHandlersBtn.addEventListener('click', removeHandlersBtnFunc);

