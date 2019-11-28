const getRandomNumbers = (length, start, end) => {
    if(end < start) return null;
    if(end - start < 1) return null;
    end = Math.floor(end);
    start = Math.floor(start);
    let arr = [];
    for(let i = 0; i < length; i++){
        arr[i] = Math.round(Math.random() * (end - start)) + start;
    }
    
    return arr;
};


// console.log(getRandomNumbers(10, 5, 10));