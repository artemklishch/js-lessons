import { addImage } from './addImage.js';
const onImageL = (error, data) => {
    if(error) return;
    const { width, height } = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
};
export const addImageV2 = imgSrc => {
    return new Promise((resolve, reject) => {
        const result = addImage(imgSrc);

        const onImageLoaded = () => onImageL(null, { width: 200, height: 100 });
        result.addEventListener('load', onImageLoaded);
        const res = onImageLoaded();
        if(res){
            resolve({ width: 200, height: 100 });
        }
        
        result.addEventListener('error', () => reject('Image load failed'));
    });
};


const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';

const resultPromise = addImageV2(imgSrc);
resultPromise.then(data => console.log(data));
resultPromise.catch(error => console.log(error));