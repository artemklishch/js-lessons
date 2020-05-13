function reverseArray(numbers){
    let reversArr = [];
    if(!Array.isArray(numbers)){
        return null;
    }
    for(let i = numbers.length-1; i >= 0; i--){
        reversArr.push(numbers[i]);
    }
    return reversArr;
}