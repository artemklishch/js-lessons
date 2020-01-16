//import { addImage } from './addImage.js';

// export const addImageV2 = imgSrc => {
//     return addImage(imgSrc);
// };
export const addImageV2 = (imgSrc) => {
    return new Promise((resolve,reject) => {
        const imgElem = document.createElement("img");
        imgElem.setAttribute('alt', 'My Photo');
        imgElem.src = imgSrc;

        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);

        const onImageLoaded = () => resolve({ width: 200, height: 100 });
        imgElem.addEventListener('load', onImageLoaded);
        
        imgElem.addEventListener('error', () => reject('Image load failed'));
    });
};

const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';

const resultPromise = addImageV2(imgSrc);
resultPromise.then(data => console.log(data));
resultPromise.catch(error => console.log(error));