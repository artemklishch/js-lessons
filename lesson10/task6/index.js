const getRandomNumbers = (length, min, max) => {
    if(max < min || max - min < 0) return null;
    min = Math.ceil(min);
    max = Math.floor(max);
    let arr=[];
    for(let i = 0; i < length; i++){
        let temp = Math.floor(Math.random()*(max-min))+min;
        arr.push(temp);
    }
    
    return arr;
};


// console.log(getRandomNumbers(10, -0.1, 0.1));