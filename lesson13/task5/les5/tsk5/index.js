export default (firstNum, endNum) => {
    let sum = 0;
    if(!Number.isInteger(firstNum) || !Number.isInteger(endNum)) return null;
    if(firstNum === undefined || endNum === undefined) return null;
    for(let i = firstNum; i <= endNum; i++){
        if(i % 2 === 0) sum += i;
    }
    return sum;
};