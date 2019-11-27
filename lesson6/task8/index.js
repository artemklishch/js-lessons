function uniqueCount(arr){
    let calc = 0;
    arr.sort((a,b) => a - b);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1]) calc++;
    }
    return calc;
}