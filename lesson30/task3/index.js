import { addImage } from './addImage.js';

export const addImageV2 = imgSrc => {
    return addImage(imgSrc);
};


// const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';

// const resultPromise = addImageV2(imgSrc);
// resultPromise.then(data => console.log(data));
// resultPromise.catch(error => console.log(error));