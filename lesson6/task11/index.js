function checker(arr){
    let sum = 0;
    let max = 0, min;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max) max = arr[i];
    }
    min = max;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min) min = arr[i];
    }
    sum = max + min;
    return sum > 1000;
}