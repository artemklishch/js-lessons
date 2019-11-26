function compareSums(a, b, c, d){
    return sum(a, b) > sum(c, d);
}
function sum(from, to){
    let allSum = 0;
    for(let i = from; i <= to; i++){
        allSum += i;
    }
    return allSum;
}