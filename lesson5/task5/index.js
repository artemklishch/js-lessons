function getSum(firstNum, endNum){
    let sum = 0;
    for(let i = firstNum; i < endNum; i++){
        if(i % 2 === 0) sum += i;
    }
    return sum;
}