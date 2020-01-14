export const addImage = (imgSrc, callback) => {
	const imgElem = document.createElement("img");
	imgElem.setAttribute('alt', 'My Photo');
	imgElem.src = imgSrc;

	const containerElem = document.querySelector('.page');
	containerElem.append(imgElem);

	const onImageLoaded = () => {
		const { width, height } = imgElem;
		callback(null, { width, height });
	};
	imgElem.addEventListener('load', onImageLoaded);

	imgElem.addEventListener('error', () => callback('Image load failed'));

};

const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';

const onImageLoaded = (error, data) => {
	if(error){
		console.log(error);
		return;
	}
	const { width, height } = data;
	const sizeElem = document.querySelector('.image-size');
	sizeElem.textContent = `${width} x ${height}`;
};
addImage(imgSrc, onImageLoaded);