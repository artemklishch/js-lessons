function getSum(numbers){
    let sum = 0;
    if(!Array.isArray(numbers)){
        return null;
    }
    for(let num of numbers){
        sum += num;
    }
    return sum;
}