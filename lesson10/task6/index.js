const getRandomNumbers = (length, min, max) => {
    if(max < min) return null;
    min = Math.ceil(min);
    max = Math.floor(max);
    let arr=[];
    for(let i = min; i < length; i++){
        let temp = (Math.floor(Math.random() * (max - min)) + min);
        if(!Number.isInteger(temp)) return null;
        arr.push(temp);
    }
    return arr;
};


// console.log(getRandomNumbers(10, 0.1, 0.4));