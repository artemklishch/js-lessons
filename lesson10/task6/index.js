const getRandomNumbers = (length, min, max) => {
    if(max < min) return null;
    min = Math.ceil(min);
    max = Math.floor(max);
    if(max - min < 0) return null;
    let arr=[];
    for(let i = min; i < length-1; i++){
        let temp = (Math.floor(Math.random() * (max - min)) + min);
        arr.push(temp);
    }
    return arr;
};


// console.log(getRandomNumbers(10, 0.1, 0.4));