export const addImageV2 = imgSrc => {
	const p = new Promise((resolve, reject) => {
			const imgElem = document.createElement("img");
			imgElem.setAttribute('alt', 'My Photo');
            imgElem.src = imgSrc;
            imgElem.width = 200;
            imgElem.height = 100;
			const containerElem = document.querySelector('.page');
			containerElem.append(imgElem);

			const onImageLoaded = () => {
                const { width, height } = imgElem;
                resolve({ width: 200, height: 100 });
			};
			imgElem.addEventListener('load', onImageLoaded);

			imgElem.addEventListener('error', () => reject(new Error('Image load failed')));
		});
	return p;
};

//const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';
const imgSrc = 'https://server.com/image.png';
const resultPromise = addImageV2(imgSrc);
resultPromise.then(data => console.log(data));
resultPromise.catch(error => console.log(error));