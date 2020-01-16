const onImageL = (error, data) => {
    if(error) return;
    const { width, height } = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
};

export const addImage = (imgSrc) => {
	const imgElem = document.createElement("img");
	imgElem.setAttribute('alt', 'My Photo');
	imgElem.src = imgSrc;

	const containerElem = document.querySelector('.page');
	containerElem.append(imgElem);

    const onImageLoaded = () => onImageL(null, { width: 200, height: 100 });
    imgElem.addEventListener('load', onImageLoaded);
    
    imgElem.addEventListener('error', () => onImageL('Image load failed'));

    return imgElem;

};