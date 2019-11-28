const getRandomNumbers = (length, start, end) => {
    if(end < start) return null;
    if(end - start < 1) return null;
    if(Number.isInteger(end)){
        end -= 0.1;
        end = Math.floor(end);
    }else end = Math.floor(end);
    if(Number.isInteger(start)){
        start += 0.1;
        start = Math.ceil(start);
    }else start = Math.ceil(start);
    let arr = [];
    for(let i = 0; i < length; i++){
        arr[i] = Math.round(Math.random() * (end - start)) + start;
    }
    
    return arr;
};


//console.log(getRandomNumbers(10, 5.1, 10.5));