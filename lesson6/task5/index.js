function squareArray(numbers){
    let squareArr = [];
    if(!Array.isArray(numbers)){
        return null;
    }
    for(let i = 0; i < numbers.length; i++){
        let squareNum = numbers[i] * numbers[i];
        squareArr.push(squareNum);
    }
    return squareArr;
}