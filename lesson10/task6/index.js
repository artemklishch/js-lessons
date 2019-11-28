const getRandomNumbers = (length, start, end) => {
    if(end < start) return null;
    end = Math.round(end);
    start = Math.round(start);
    let arr = [];
    for(let i = 0; i < length; i++){
        arr[i] = Math.round(Math.random() * (end - start)) + start;
    }
    if(end - start < 1) return null;
    return arr;
};


// console.log(getRandomNumbers(10, 5, 10));