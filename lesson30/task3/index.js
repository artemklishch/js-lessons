import { addImage } from './addImage.js';

export const addImageV2 = imgSrc => {
    return addImage(imgSrc);
};


const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';

addImageV2(imgSrc)
    .then(data => console.log(data))
    .catch(error => console.log(error));