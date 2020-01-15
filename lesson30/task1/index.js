export const addImage = imgSrc => {
	const p = new Promise((resolve, reject) => {
			const imgElem = document.createElement("img");
			imgElem.setAttribute('alt', 'My Photo');
            imgElem.src = imgSrc;
            
			const containerElem = document.querySelector('.page');
			containerElem.append(imgElem);

			const onImageLoaded = () => {
                const { width, height } = imgElem;
                if(width === 200 && height === 100) resolve({ width: 200, height: 100 });
			};
			imgElem.addEventListener('load', onImageLoaded);

			imgElem.addEventListener('error', () => reject(new Error('Image load failed')));
		});
	return p;
};

//const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';
const imgSrc = 'https://server.com/image.png';
const resultPromise = addImage(imgSrc);
resultPromise.then(data => console.log(data));
resultPromise.catch(error => console.log(error));