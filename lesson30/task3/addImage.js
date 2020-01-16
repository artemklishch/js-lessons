export function addImage(imgSrc){
    const imgElem = document.createElement("img");
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);
    
    return imgElem;
};