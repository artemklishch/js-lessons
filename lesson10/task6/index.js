const getRandomNumbers = (length, start, end) => {
    if(end < start) return null;
    let arr = [];
    for(let i = 0; i < length; i++){
        arr[i] = Math.floor(Math.random() * (end - start)) + start;
    }
    for(let num of arr){
        if(!Number.isInteger(num)) return null;
    }
    
    return arr;
};


// console.log(getRandomNumbers(2, 2, 10));