const getRandomNumbers = (length, start, end) => {
    if(end < start) return null;
    let arr = [];
    for(let i = 0; i < length; i++){
        arr[i] = Math.random() * (end - start) + start;
    }
    // for(let num of arr){
    //     if(!Number.isInteger(num)) return null;
    // }
    
    return arr;
};


console.log(getRandomNumbers(100, -0.1, 0.1));