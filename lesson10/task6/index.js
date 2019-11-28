const getRandomNumbers = (length, start, end) => {
    let arr = [];
    for(let i = 0; i < length; i++){
        arr[i] = Math.random() * (end - start) + start;
    }
    return arr;
};


// console.log(getRandomNumbers(100, -0.1, 0.1));