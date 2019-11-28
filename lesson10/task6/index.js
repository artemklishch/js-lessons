const getRandomNumbers = (length, start, end) => {
    let arr = [];
    for(let i = 0; i < length; i++){
        arr[i] = Math.floor(Math.random() * (end - start + 1)) + start;
    }
    return arr;
};


// console.log(getRandomNumbers(4, 5, 10));